// Figma API Integration for Design-to-Code

class FigmaExtractor {
  constructor(accessToken) {
    this.token = accessToken;
    this.baseUrl = 'https://api.figma.com/v1';
  }

  // Get file details and nodes
  async getFile(fileKey, nodeIds = null) {
    const url = nodeIds 
      ? `${this.baseUrl}/files/${fileKey}?ids=${nodeIds.join(',')}`
      : `${this.baseUrl}/files/${fileKey}`;
    
    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': this.token
      }
    });
    
    return await response.json();
  }

  // Get specific node details (better for targeted extraction)
  async getNodes(fileKey, nodeIds) {
    const response = await fetch(
      `${this.baseUrl}/files/${fileKey}/nodes?ids=${nodeIds.join(',')}`,
      {
        headers: {
          'X-Figma-Token': this.token
        }
      }
    );
    
    return await response.json();
  }

  // Extract CSS properties from a node
  extractStyles(node) {
    const styles = {};
    
    // Dimensions
    if (node.absoluteBoundingBox) {
      styles.width = `${node.absoluteBoundingBox.width}px`;
      styles.height = `${node.absoluteBoundingBox.height}px`;
    }
    
    // Background/Fill
    if (node.fills && node.fills.length > 0) {
      const fill = node.fills[0];
      if (fill.type === 'SOLID') {
        const { r, g, b, a = 1 } = fill.color;
        styles.backgroundColor = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
      }
    }
    
    // Border radius
    if (node.cornerRadius) {
      styles.borderRadius = `${node.cornerRadius}px`;
    }
    
    // Typography (for text nodes)
    if (node.type === 'TEXT' && node.style) {
      styles.fontSize = `${node.style.fontSize}px`;
      styles.fontFamily = node.style.fontFamily;
      styles.fontWeight = node.style.fontWeight;
      styles.lineHeight = node.style.lineHeightPercentFontSize ? 
        `${node.style.lineHeightPercentFontSize}%` : 'normal';
      
      if (node.style.textAlignHorizontal) {
        styles.textAlign = node.style.textAlignHorizontal.toLowerCase();
      }
    }
    
    // Strokes/Borders
    if (node.strokes && node.strokes.length > 0) {
      const stroke = node.strokes[0];
      if (stroke.type === 'SOLID') {
        const { r, g, b, a = 1 } = stroke.color;
        styles.borderColor = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
        styles.borderWidth = `${node.strokeWeight || 1}px`;
        styles.borderStyle = 'solid';
      }
    }
    
    // Effects (shadows, etc.)
    if (node.effects && node.effects.length > 0) {
      const shadows = node.effects
        .filter(effect => effect.type === 'DROP_SHADOW')
        .map(shadow => {
          const { r, g, b, a = 1 } = shadow.color;
          return `${shadow.offset.x}px ${shadow.offset.y}px ${shadow.radius}px rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
        });
      
      if (shadows.length > 0) {
        styles.boxShadow = shadows.join(', ');
      }
    }
    
    return styles;
  }

  // Convert styles object to CSS string
  stylesToCSS(styles, selector = '.element') {
    const cssProps = Object.entries(styles)
      .map(([prop, value]) => {
        // Convert camelCase to kebab-case
        const kebabProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
        return `  ${kebabProp}: ${value};`;
      })
      .join('\n');
    
    return `${selector} {\n${cssProps}\n}`;
  }

  // Main extraction method
  async extractComponentStyles(fileKey, nodeId, componentName = 'component') {
    try {
      const response = await this.getNodes(fileKey, [nodeId]);
      const node = response.nodes[nodeId].document;
      
      const styles = this.extractStyles(node);
      const css = this.stylesToCSS(styles, `.${componentName}`);
      
      return {
        node: node,
        styles: styles,
        css: css,
        name: node.name || componentName
      };
    } catch (error) {
      console.error('Error extracting styles:', error);
      throw error;
    }
  }
}

// Usage example
async function main() {
  const figma = new FigmaExtractor('your-figma-token');
  
  // Your file key and node ID
  const fileKey = 'ABC123def456';
  const nodeId = '1:23'; // Get this from Figma URL or by exploring the file structure
  
  try {
    const result = await figma.extractComponentStyles(fileKey, nodeId, 'my-button');
    
    console.log('Extracted CSS:');
    console.log(result.css);
    
    console.log('\nStyle object for programmatic use:');
    console.log(JSON.stringify(result.styles, null, 2));
    
  } catch (error) {
    console.error('Failed to extract styles:', error);
  }
}

// Helper function to find node IDs by name
async function findNodeByName(figma, fileKey, targetName) {
  const file = await figma.getFile(fileKey);
  
  function searchNodes(nodes) {
    for (const node of nodes) {
      if (node.name === targetName) {
        return node.id;
      }
      if (node.children) {
        const found = searchNodes(node.children);
        if (found) return found;
      }
    }
    return null;
  }
  
  return searchNodes([file.document]);
}

// Export for use in your LLM code editor
export { FigmaExtractor, findNodeByName };
