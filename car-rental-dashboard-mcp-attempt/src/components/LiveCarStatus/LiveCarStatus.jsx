import React from 'react';

// Figma image assets
const imgEllipse7 = "http://localhost:3845/assets/e6a88585cb6139ff9216c2c7d670ca761b6a3560.png";
const imgEllipse8 = "http://localhost:3845/assets/141161a8f374ad5db87942a8003eb28424d06dbd.png";
const imgEllipse9 = "http://localhost:3845/assets/53b332b78d00056bc716f45fdf8aca9e874b70d1.png";
const imgVector = "http://localhost:3845/assets/e1d1fdbe83ce9540cc0923b437fe489b42af08d2.svg";
const imgVector1 = "http://localhost:3845/assets/6492f9afeb15a8dbe83c1f4229b013662bb04703.svg";
const imgVector2 = "http://localhost:3845/assets/aaecdea5a9934b1f00629cf05d4b635bd6c0d693.svg";
const imgVector3 = "http://localhost:3845/assets/f36a0c1e0193515b643f06303abf302a2f4bda8f.svg";
const imgGroup1 = "http://localhost:3845/assets/33308e4503f70bbb80d99a0a43616766f20a1113.svg";
const imgGroup2 = "http://localhost:3845/assets/498de46dc5feaf0e6ce9faa0bf8bf98b783db26a.svg";
const imgGroup3 = "http://localhost:3845/assets/2b590e29c7ed827040e8c9f9a392de8fe768615c.svg";

// Filter component from Figma
function Filter() {
  return (
    <div style={{ position: 'relative', width: '16px', height: '16px' }}>
      <div style={{ position: 'absolute', inset: '16.67% 12.5% 83.33% 58.33%' }}>
        <div style={{ position: 'absolute', inset: '-1px -17.14%' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
        </div>
      </div>
      <div style={{ position: 'absolute', inset: '16.67% 58.33% 83.33% 12.5%' }}>
        <div style={{ position: 'absolute', inset: '-1px -17.14%' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '50%', left: '50%', right: '12.5%', top: '50%' }}>
        <div style={{ position: 'absolute', inset: '-1px -13.33%' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector1} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '50%', left: '12.5%', right: '66.67%', top: '50%' }}>
        <div style={{ position: 'absolute', inset: '-1px -24%' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector2} />
        </div>
      </div>
      <div style={{ position: 'absolute', inset: '83.33% 12.5% 16.67% 66.67%' }}>
        <div style={{ position: 'absolute', inset: '-1px -24%' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector2} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '16.67%', left: '12.5%', right: '50%', top: '83.33%' }}>
        <div style={{ position: 'absolute', inset: '-1px -13.33%' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector1} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '75%', left: '58.33%', right: '41.67%', top: '8.33%' }}>
        <div style={{ position: 'absolute', inset: '-30% -1px' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector3} />
        </div>
      </div>
      <div style={{ position: 'absolute', inset: '41.67% 66.67% 41.67% 33.33%' }}>
        <div style={{ position: 'absolute', inset: '-30% -1px' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector3} />
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '8.33%', left: '66.67%', right: '33.33%', top: '75%' }}>
        <div style={{ position: 'absolute', inset: '-30% -1px' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector3} />
        </div>
      </div>
    </div>
  );
}

// Status indicator components
function Completed() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center', justifyContent: 'flex-start', padding: 0, position: 'relative', width: '16px', height: '16px' }}>
      <div style={{ position: 'relative', flexShrink: 0, width: '16px', height: '16px' }}>
        <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgGroup1} />
      </div>
    </div>
  );
}

function Pending() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center', justifyContent: 'flex-start', padding: 0, position: 'relative', width: '16px', height: '16px' }}>
      <div style={{ position: 'relative', flexShrink: 0, width: '16px', height: '16px' }}>
        <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgGroup2} />
      </div>
    </div>
  );
}

function InRoute() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center', justifyContent: 'flex-start', padding: 0, position: 'relative', width: '16px', height: '16px' }}>
      <div style={{ position: 'relative', flexShrink: 0, width: '16px', height: '16px' }}>
        <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgGroup3} />
      </div>
    </div>
  );
}

const LiveCarStatus = () => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingBottom: '16px',
        paddingTop: '20px',
        paddingLeft: '28px',
        paddingRight: '28px',
        position: 'relative',
        borderRadius: '8px',
        boxShadow: '0px 8px 24px 0px rgba(101,101,117,0.05)',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        overflow: 'auto'
      }}
    >
      {/* Header */}
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
            justifyContent: 'space-between',
            padding: 0,
            position: 'relative',
            flexShrink: 0,
            width: '744px'
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
            <p style={{ display: 'block', lineHeight: '24px', whiteSpace: 'pre', margin: 0 }}>Live Car Status</p>
          </div>
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              gap: '8px',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: 0,
              paddingBottom: 0,
              position: 'relative',
              borderRadius: '4px',
              flexShrink: 0
            }}
          >
            <div style={{ overflow: 'hidden', position: 'relative', flexShrink: 0, width: '16px', height: '16px' }}>
              <Filter />
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                gap: '8px',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: 0,
                position: 'relative',
                flexShrink: 0
              }}
            >
              <div
                style={{
                  textTransform: 'capitalize',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '500',
                  lineHeight: 0,
                  fontStyle: 'normal',
                  position: 'relative',
                  flexShrink: 0,
                  color: '#525256',
                  fontSize: '16px',
                  textAlign: 'left',
                  whiteSpace: 'pre'
                }}
              >
                <p style={{ display: 'block', lineHeight: '24px', whiteSpace: 'pre', margin: 0 }}>Filter</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table Header */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            gap: '56px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingBottom: '12px',
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0,
            position: 'relative',
            flexShrink: 0,
            width: '744px',
            borderBottom: '1px solid rgba(163,163,163,0.25)'
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '300',
              gap: '64px',
              alignItems: 'center',
              justifyContent: 'flex-start',
              lineHeight: 0,
              fontStyle: 'normal',
              padding: 0,
              position: 'relative',
              flexShrink: 0,
              color: '#656575',
              fontSize: '14px'
            }}
          >
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
              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '36px',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  padding: 0,
                  position: 'relative',
                  flexShrink: 0
                }}
              >
                <div style={{ position: 'relative', flexShrink: 0, textAlign: 'center', width: '24px' }}>
                  <p style={{ display: 'block', lineHeight: '16px', margin: 0 }}>No.</p>
                </div>
                <div style={{ position: 'relative', flexShrink: 0, textAlign: 'left', width: '66px' }}>
                  <p style={{ display: 'block', lineHeight: '18px', margin: 0 }}>Car no.</p>
                </div>
              </div>
              <div style={{ position: 'relative', flexShrink: 0, textAlign: 'left', width: '144px' }}>
                <p style={{ display: 'block', lineHeight: '18px', margin: 0 }}>Driver</p>
              </div>
            </div>
            <div style={{ position: 'relative', flexShrink: 0, textAlign: 'left', width: '118px' }}>
              <p style={{ display: 'block', lineHeight: '18px', margin: 0 }}>Status</p>
            </div>
          </div>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '300',
              lineHeight: 0,
              fontStyle: 'normal',
              position: 'relative',
              flexShrink: 0,
              color: '#656575',
              fontSize: '14px',
              textAlign: 'left',
              width: '72px'
            }}
          >
            <p style={{ display: 'block', lineHeight: '18px', margin: 0 }}>Earning</p>
          </div>
        </div>
      </div>

      {/* Car List */}
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: 0,
          position: 'relative',
          flexShrink: 0
        }}
      >
        {/* Row 1 - Alex Noman */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            gap: '48px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: '12px',
            paddingBottom: '12px',
            position: 'relative',
            flexShrink: 0,
            borderBottom: '1px solid rgba(163,163,163,0.25)'
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              gap: '56px',
              alignItems: 'center',
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
                gap: '64px',
                alignItems: 'center',
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
                  gap: '32px',
                  alignItems: 'center',
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
                    gap: '36px',
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
                      fontWeight: '400',
                      lineHeight: 0,
                      fontStyle: 'normal',
                      position: 'relative',
                      flexShrink: 0,
                      color: '#1a1919',
                      fontSize: '12px',
                      textAlign: 'center',
                      width: '24px'
                    }}
                  >
                    <p style={{ display: 'block', lineHeight: '16px', margin: 0 }}>01</p>
                  </div>
                  <div
                    style={{
                      backgroundColor: 'rgba(153,153,153,0.1)',
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '24px',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      paddingTop: '4px',
                      paddingBottom: '4px',
                      position: 'relative',
                      borderRadius: '4px',
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
                        color: '#1a1919',
                        fontSize: '14px',
                        textAlign: 'center',
                        width: '42px'
                      }}
                    >
                      <p style={{ display: 'block', lineHeight: '16px', margin: 0 }}>6465</p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '12px',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: 0,
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <div style={{ position: 'relative', flexShrink: 0, width: '24px', height: '24px' }}>
                    <div style={{ position: 'absolute', inset: '-4.167%' }}>
                      <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} height="26" src={imgEllipse7} width="26" />
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '400',
                      lineHeight: 0,
                      fontStyle: 'normal',
                      position: 'relative',
                      flexShrink: 0,
                      color: '#1a1919',
                      fontSize: '16px',
                      textAlign: 'left',
                      width: '108px'
                    }}
                  >
                    <p style={{ display: 'block', lineHeight: 'normal', margin: 0 }}>Alex Noman</p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '16px',
                  alignItems: 'center',
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
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: 0,
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <Completed />
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '300',
                    lineHeight: 0,
                    fontStyle: 'normal',
                    position: 'relative',
                    flexShrink: 0,
                    color: '#656575',
                    fontSize: '16px',
                    textAlign: 'left',
                    width: '86px'
                  }}
                >
                  <p style={{ display: 'block', lineHeight: 'normal', margin: 0 }}>Completed</p>
                </div>
              </div>
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: '300',
                lineHeight: 0,
                fontStyle: 'normal',
                position: 'relative',
                flexShrink: 0,
                color: '#656575',
                fontSize: '16px',
                textAlign: 'left',
                width: '72px'
              }}
            >
              <p style={{ display: 'block', lineHeight: 'normal', margin: 0 }}>$ 35.44</p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#006aff',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              gap: '8px',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '4px',
              paddingBottom: '4px',
              position: 'relative',
              borderRadius: '4px',
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
                color: '#ffffff',
                fontSize: '16px',
                textAlign: 'center',
                whiteSpace: 'pre'
              }}
            >
              <p style={{ display: 'block', lineHeight: '24px', whiteSpace: 'pre', margin: 0 }}>Details</p>
            </div>
          </div>
        </div>

        {/* Row 2 - Razib Rahman */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            gap: '48px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: '12px',
            paddingBottom: '12px',
            position: 'relative',
            flexShrink: 0,
            borderBottom: '1px solid rgba(163,163,163,0.25)'
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              gap: '56px',
              alignItems: 'center',
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
                gap: '64px',
                alignItems: 'center',
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
                  gap: '32px',
                  alignItems: 'center',
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
                    gap: '36px',
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
                      fontWeight: '400',
                      lineHeight: 0,
                      fontStyle: 'normal',
                      position: 'relative',
                      flexShrink: 0,
                      color: '#1a1919',
                      fontSize: '12px',
                      textAlign: 'center',
                      width: '24px'
                    }}
                  >
                    <p style={{ display: 'block', lineHeight: '16px', margin: 0 }}>02</p>
                  </div>
                  <div
                    style={{
                      backgroundColor: 'rgba(153,153,153,0.1)',
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '24px',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      paddingTop: '4px',
                      paddingBottom: '4px',
                      position: 'relative',
                      borderRadius: '4px',
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
                        color: '#1a1919',
                        fontSize: '14px',
                        textAlign: 'center',
                        width: '42px'
                      }}
                    >
                      <p style={{ display: 'block', lineHeight: '16px', margin: 0 }}>5665</p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '12px',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: 0,
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <div style={{ position: 'relative', flexShrink: 0, width: '24px', height: '24px' }}>
                    <div style={{ position: 'absolute', inset: '-4.167%' }}>
                      <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} height="26" src={imgEllipse8} width="26" />
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '400',
                      lineHeight: 0,
                      fontStyle: 'normal',
                      position: 'relative',
                      flexShrink: 0,
                      color: '#1a1919',
                      fontSize: '16px',
                      textAlign: 'left',
                      width: '108px'
                    }}
                  >
                    <p style={{ display: 'block', lineHeight: 'normal', margin: 0 }}>Razib Rahman</p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '16px',
                  alignItems: 'center',
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
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: 0,
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <Pending />
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '300',
                    lineHeight: 0,
                    fontStyle: 'normal',
                    position: 'relative',
                    flexShrink: 0,
                    color: '#656575',
                    fontSize: '16px',
                    textAlign: 'left',
                    width: '86px'
                  }}
                >
                  <p style={{ display: 'block', lineHeight: 'normal', margin: 0 }}>Pending</p>
                </div>
              </div>
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: '300',
                lineHeight: 0,
                fontStyle: 'normal',
                position: 'relative',
                flexShrink: 0,
                color: '#656575',
                fontSize: '16px',
                textAlign: 'left',
                width: '72px'
              }}
            >
              <p style={{ display: 'block', lineHeight: 'normal', margin: 0 }}>$ 0.00</p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#006aff',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              gap: '8px',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '4px',
              paddingBottom: '4px',
              position: 'relative',
              borderRadius: '4px',
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
                color: '#ffffff',
                fontSize: '16px',
                textAlign: 'center',
                whiteSpace: 'pre'
              }}
            >
              <p style={{ display: 'block', lineHeight: '24px', whiteSpace: 'pre', margin: 0 }}>Details</p>
            </div>
          </div>
        </div>

        {/* Row 3 - Luke Norton */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            gap: '48px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingBottom: '4px',
            paddingTop: '16px',
            paddingLeft: 0,
            paddingRight: 0,
            position: 'relative',
            flexShrink: 0
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              gap: '56px',
              alignItems: 'center',
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
                gap: '64px',
                alignItems: 'center',
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
                  gap: '32px',
                  alignItems: 'center',
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
                    gap: '36px',
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
                      fontWeight: '400',
                      lineHeight: 0,
                      fontStyle: 'normal',
                      position: 'relative',
                      flexShrink: 0,
                      color: '#1a1919',
                      fontSize: '12px',
                      textAlign: 'center',
                      width: '24px'
                    }}
                  >
                    <p style={{ display: 'block', lineHeight: '16px', margin: 0 }}>03</p>
                  </div>
                  <div
                    style={{
                      backgroundColor: 'rgba(153,153,153,0.1)',
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '24px',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      paddingTop: '4px',
                      paddingBottom: '4px',
                      position: 'relative',
                      borderRadius: '4px',
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
                        color: '#1a1919',
                        fontSize: '14px',
                        textAlign: 'center',
                        width: '42px'
                      }}
                    >
                      <p style={{ display: 'block', lineHeight: '16px', margin: 0 }}>1755</p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '12px',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: 0,
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <div style={{ position: 'relative', flexShrink: 0, width: '24px', height: '24px' }}>
                    <div style={{ position: 'absolute', inset: '-4.167%' }}>
                      <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} height="26" src={imgEllipse9} width="26" />
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '400',
                      lineHeight: 0,
                      fontStyle: 'normal',
                      position: 'relative',
                      flexShrink: 0,
                      color: '#1a1919',
                      fontSize: '16px',
                      textAlign: 'left',
                      width: '108px'
                    }}
                  >
                    <p style={{ display: 'block', lineHeight: 'normal', margin: 0 }}>Luke Norton</p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '16px',
                  alignItems: 'center',
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
                    alignItems: 'center',
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
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      padding: 0,
                      position: 'relative',
                      flexShrink: 0
                    }}
                  >
                    <InRoute />
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '300',
                    lineHeight: 0,
                    fontStyle: 'normal',
                    position: 'relative',
                    flexShrink: 0,
                    color: '#656575',
                    fontSize: '16px',
                    textAlign: 'left',
                    width: '86px'
                  }}
                >
                  <p style={{ display: 'block', lineHeight: 'normal', margin: 0 }}>In route</p>
                </div>
              </div>
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: '300',
                lineHeight: 0,
                fontStyle: 'normal',
                position: 'relative',
                flexShrink: 0,
                color: '#656575',
                fontSize: '16px',
                textAlign: 'left',
                width: '72px'
              }}
            >
              <p style={{ display: 'block', lineHeight: 'normal', margin: 0 }}>$ 23.50</p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#006aff',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              gap: '8px',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '4px',
              paddingBottom: '4px',
              position: 'relative',
              borderRadius: '4px',
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
                color: '#ffffff',
                fontSize: '16px',
                textAlign: 'center',
                whiteSpace: 'pre'
              }}
            >
              <p style={{ display: 'block', lineHeight: '24px', whiteSpace: 'pre', margin: 0 }}>Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCarStatus;