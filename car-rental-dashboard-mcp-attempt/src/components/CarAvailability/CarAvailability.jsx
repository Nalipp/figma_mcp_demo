import React from 'react';

// Figma image assets
const imgBxCar = "http://localhost:3845/assets/28bdd9ab84bb7a4b90afd8bcf3f40ad739b57889.svg";
const img = "http://localhost:3845/assets/081dcabc16d8ccd2cbf2eae41ad4f2d29744ab28.svg";
const img1 = "http://localhost:3845/assets/e444f7adb15f45b2af8a29fc4d00b3587fe455fe.svg";
const img2 = "http://localhost:3845/assets/d1ae33a441aee182e2d04a37dae754e9b7dce5d2.svg";
const img3 = "http://localhost:3845/assets/ad21d56c9c03e94af7665da54f9d566cbd23142a.svg";
const img4 = "http://localhost:3845/assets/2230a233b6d7ffefdfc2ef892b4bdd03bd892d19.svg";
const img5 = "http://localhost:3845/assets/57a3347c0cc0f4a3b48cc88a5a79dececb754a30.svg";
const img6 = "http://localhost:3845/assets/a534f193ed12da9446c624f7e2c0d92cabace59e.svg";

const CarAvailability = () => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: '20px',
        paddingTop: '20px',
        paddingLeft: '28px',
        paddingRight: '28px',
        position: 'relative',
        borderRadius: '8px',
        boxShadow: '0px 8px 24px 0px rgba(69,69,80,0.1)',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          gap: '120px',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 0,
          position: 'relative',
          flexShrink: 0
        }}
      >
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: '600',
            lineHeight: 0,
            fontStyle: 'normal',
            position: 'relative',
            flexShrink: 0,
            color: '#1a1919',
            fontSize: '16px',
            textAlign: 'left',
            whiteSpace: 'pre'
          }}
        >
          <p style={{ display: 'block', lineHeight: '24px', whiteSpace: 'pre', margin: 0 }}>Car Availability</p>
        </div>
      </div>

      {/* Input Section */}
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          gap: '32px',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 0,
          position: 'relative',
          flexShrink: 0
        }}
      >
        {/* Car Number Dropdown */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            gap: '24px',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: 0,
            position: 'relative',
            flexShrink: 0
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              gap: '12px',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '12px',
              paddingBottom: '12px',
              position: 'relative',
              borderRadius: '8px',
              flexShrink: 0,
              border: '1px solid #dedede'
            }}
          >
            <div style={{ position: 'relative', flexShrink: 0, width: '24px', height: '24px' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgBxCar} />
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                paddingLeft: 0,
                paddingRight: '16px',
                paddingTop: 0,
                paddingBottom: 0,
                position: 'relative',
                flexShrink: 0
              }}
            >
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '400',
                  lineHeight: 0,
                  fontStyle: 'normal',
                  position: 'relative',
                  flexShrink: 0,
                  color: '#656575',
                  fontSize: '16px',
                  textAlign: 'left',
                  width: '93px'
                }}
              >
                <p style={{ display: 'block', lineHeight: '24px', margin: 0 }}>Car number</p>
              </div>
            </div>
            <div style={{ overflow: 'hidden', position: 'relative', flexShrink: 0, width: '24px', height: '24px' }}>
              <div
                style={{
                  position: 'absolute',
                  bottom: '37.5%',
                  left: '25%',
                  right: '25%',
                  top: '37.5%'
                }}
              >
                <div style={{ position: 'absolute', inset: '-16.67% -8.33%' }}>
                  <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img} />
                </div>
              </div>
            </div>
          </div>

          {/* Date & Time Section */}
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              padding: 0,
              position: 'relative',
              flexShrink: 0
            }}
          >
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                paddingLeft: 0,
                paddingRight: '1px',
                paddingTop: 0,
                paddingBottom: 0,
                position: 'relative',
                flexShrink: 0
              }}
            >
              {/* Date Input */}
              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '12px',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginRight: '-1px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  position: 'relative',
                  borderBottomLeftRadius: '8px',
                  borderTopLeftRadius: '8px',
                  flexShrink: 0,
                  border: '1px solid #dedede'
                }}
              >
                <div
                  style={{
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                    width: '24px',
                    height: '24px'
                  }}
                >
                  {/* Calendar Icon Components */}
                  <div style={{ position: 'absolute', inset: '16.67% 12.5% 8.33% 12.5%' }}>
                    <div style={{ position: 'absolute', inset: '-5.556%' }}>
                      <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img1} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: '75%', left: '66.67%', right: '33.33%', top: '8.33%' }}>
                    <div style={{ position: 'absolute', inset: '-25% -1px' }}>
                      <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img2} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: '75%', left: '33.33%', right: '66.67%', top: '8.33%' }}>
                    <div style={{ position: 'absolute', inset: '-25% -1px' }}>
                      <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img2} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', inset: '41.67% 12.5% 58.33% 12.5%' }}>
                    <div style={{ position: 'absolute', inset: '-1px -5.56%' }}>
                      <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img3} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: '25%', left: '37.5%', right: '37.5%', top: '58.33%' }}>
                    <div style={{ position: 'absolute', inset: '-25% -16.67%' }}>
                      <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img4} />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    paddingLeft: 0,
                    paddingRight: '16px',
                    paddingTop: 0,
                    paddingBottom: 0,
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '400',
                      lineHeight: 0,
                      fontStyle: 'normal',
                      position: 'relative',
                      flexShrink: 0,
                      color: '#656575',
                      fontSize: '16px',
                      textAlign: 'left',
                      width: '104px'
                    }}
                  >
                    <p style={{ display: 'block', lineHeight: '24px', margin: 0 }}>Nov 20, 2022</p>
                  </div>
                </div>
              </div>

              {/* Time Input */}
              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '12px',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginRight: '-1px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  position: 'relative',
                  borderBottomRightRadius: '8px',
                  borderTopRightRadius: '8px',
                  flexShrink: 0,
                  border: '1px solid #dedede'
                }}
              >
                <div style={{ position: 'relative', flexShrink: 0, width: '24px', height: '24px' }}>
                  {/* Clock Icon Components */}
                  <div style={{ position: 'absolute', inset: '12.5%' }}>
                    <div style={{ position: 'absolute', inset: '-5.556%' }}>
                      <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img5} />
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: '50%', left: '50%', right: '28.13%', top: '28.13%' }}>
                    <div style={{ position: 'absolute', inset: '-19.048%' }}>
                      <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img6} />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    paddingLeft: 0,
                    paddingRight: '16px',
                    paddingTop: 0,
                    paddingBottom: 0,
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '400',
                      lineHeight: 0,
                      fontStyle: 'normal',
                      position: 'relative',
                      flexShrink: 0,
                      color: '#656575',
                      fontSize: '16px',
                      textAlign: 'left',
                      width: '47px'
                    }}
                  >
                    <p style={{ display: 'block', lineHeight: '24px', margin: 0 }}>10 AM</p>
                  </div>
                </div>
                <div
                  style={{
                    overflow: 'hidden',
                    position: 'relative',
                    flexShrink: 0,
                    width: '24px',
                    height: '24px'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '37.5%',
                      left: '25%',
                      right: '25%',
                      top: '37.5%'
                    }}
                  >
                    <div style={{ position: 'absolute', inset: '-16.67% -8.33%' }}>
                      <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Check Button */}
        <div
          style={{
            backgroundColor: '#006aff',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            gap: '64px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '36px',
            paddingRight: '36px',
            paddingTop: '12px',
            paddingBottom: '12px',
            position: 'relative',
            borderRadius: '4px',
            flexShrink: 0,
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '400',
              lineHeight: 0,
              fontStyle: 'normal',
              position: 'relative',
              flexShrink: 0,
              color: '#ffffff',
              fontSize: '16px',
              textAlign: 'left',
              whiteSpace: 'pre'
            }}
          >
            <p style={{ display: 'block', lineHeight: '24px', whiteSpace: 'pre', margin: 0 }}>Check</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAvailability;