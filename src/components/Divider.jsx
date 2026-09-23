import React from 'react';

const Divider = ({ type = 'slant-right', color = '#0B0F19', accentColor = '#3B82F6', position = 'bottom', height = '80px' }) => {
    let path1 = '';
    let path2 = '';
    
    // Asymmetric shapes with 2 layers for a colorful "cut" effect
    if (type === 'slant-right') {
        path1 = "M0,100 L100,0 L100,100 Z";
        path2 = "M0,100 L100,5 L100,100 Z";
    } else if (type === 'slant-left') {
        path1 = "M0,0 L100,100 L0,100 Z";
        path2 = "M0,5 L100,100 L0,100 Z";
    } else if (type === 'wave-asym') {
        path1 = "M0,40 C30,100 70,0 100,60 L100,100 L0,100 Z";
        path2 = "M0,45 C30,105 70,5 100,65 L100,100 L0,100 Z";
    } else if (type === 'step') {
        path1 = "M0,100 L50,100 L50,0 L100,0 L100,100 Z";
        path2 = "M0,100 L50,100 L50,5 L100,5 L100,100 Z";
    } else {
        path1 = "M0,100 L100,0 L100,100 Z";
        path2 = "M0,100 L100,5 L100,100 Z";
    }

    const transform = position === 'top' ? 'rotate(180deg)' : 'none';
    const topPos = position === 'top' ? '0' : 'auto';
    const bottomPos = position === 'bottom' ? '0' : 'auto';

    return (
        <div style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: topPos,
            bottom: bottomPos,
            height: height,
            width: '100%',
            overflow: 'hidden',
            lineHeight: 0,
            transform: transform,
            zIndex: 1
        }}>
            <svg 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                style={{ display: 'block', width: '100%', height: '100%' }}
            >
                <path fill={accentColor} d={path1}></path>
                <path fill={color} d={path2}></path>
            </svg>
        </div>
    );
};

export default Divider;
