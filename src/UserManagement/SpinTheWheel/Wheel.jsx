import React from 'react'
import SpinWheel from './WheelComponent';

function Wheel() {
    const colors = ['#e96f23', '#0B776F', '#e9ba1d', '#D41E47']
    const segments = [
        { segmentText: 'Повеќе среќа друг пат', segColor: colors[0] },
        { segmentText: 'Повеќе среќа друг пат', segColor: colors[1] },
        { segmentText: '10% во Среќа Бар', segColor: colors[2] },
        { segmentText: 'Повеќе среќа друг пат', segColor: colors[3] },
        { segmentText: '7% на Среќни Производи', segColor: colors[1] },
        // Add more segments as needed
    ];

    const handleSpinFinish = (result) => {
        console.log(`Spun to: ${result}`);
        // Handle the result as needed
    };

    const spinWheelProps = {
        segments,
        onFinished: handleSpinFinish,
        primaryColor: 'black',
        contrastColor: 'white',
        // buttonText: 'Среќа',
        isOnlyOnce: false,
        size: 300,
        upDuration: 100,
        downDuration: 900,
        fontFamily: 'Arial',
        arrowLocation: 'top',
        showTextOnSpin: false,
        isSpinSound: true,
    };

    return <SpinWheel {...spinWheelProps} />;
}

export default Wheel
