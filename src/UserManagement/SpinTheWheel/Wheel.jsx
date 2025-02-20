import React, { useState } from 'react';
import SpinWheel from './WheelComponent';
import Toast from './Toast';
import { useNavigate } from 'react-router-dom';

function Wheel() {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [hasWon, setHasWon] = useState(false)
    const navigate = useNavigate()

    const colors = ['#e96f23', '#0B776F', '#e9ba1d', '#D41E47'];
    const segments = [
        { segmentText: 'Повеќе среќа друг пат', segColor: colors[0] }, // 0
        { segmentText: 'Повеќе среќа друг пат', segColor: colors[1] }, // 1
        { segmentText: '10% во Среќа Бар', segColor: colors[2] }, // 2
        { segmentText: 'Повеќе среќа друг пат', segColor: colors[3] }, // 3
        { segmentText: '7% на Среќни Производи', segColor: colors[1] }, // 4
    ];
   
    const handleSpinFinish = (result) => {
        // TUKA menjaj po potreba (indeksi na povolni ishodi)
        const wonIndices = [2,4]

        setHasWon(false)
        let p = false;
        wonIndices.forEach((i) => {
            if (segments[i]["segmentText"] === result) {
                setHasWon(true)
                p = true
            }
        })

        if (!p) {
            setToastMessage("Повеќе среќа друг пат. Обидете се повторно за 24 часа.")
        }
        else {
            setToastMessage(`Освоивте ${result}!`)
        }
        setShowToast(true);
    };

    const handleCloseToast = () => {
        setShowToast(false);
        navigate('/')
    };

    const spinWheelProps = {
        segments,
        onFinished: handleSpinFinish,
        primaryColor: 'black',
        contrastColor: 'white',
        isOnlyOnce: true,
        size: 250,
        upDuration: 100,
        downDuration: 900,
        // za testiranje
        // upDuration: 1,
        // downDuration: 9,
        fontFamily: 'Arial',
        arrowLocation: 'top',
        showTextOnSpin: false,
        isSpinSound: true,
    };

    return (
        <>  
            <h3></h3>
            <SpinWheel {...spinWheelProps} />
            <Toast message={toastMessage} hasWon={hasWon} show={showToast} onClose={handleCloseToast} />
        </>
    );
}


export default Wheel;
