import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Animation.css';

const Animation = () => {
    // Global variables
    const fieldWidth = 770;
    const fieldHeight = 400;
    const ballSize = 90;

    const maxLeft = fieldWidth - ballSize - 2;
    const maxTop = fieldHeight - ballSize - 2;

    const vx = 5; // for 45 deg. (vx = vy)
    const vy = 5;

    // State variables
    const [running, setRunning] = useState(false);
    const [goRight, setGoRight] = useState(true);
    const [goDown, setGoDown] = useState(true);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotationAngle, setRotationAngle] = useState(0);
    const [ballImage, setBallImage] = useState('');
    const [ballColor, setBallColor] = useState('rgb(244, 98, 98)');
    const [activeButton, setActiveButton] = useState('none'); // Add activeButton state

    useEffect(() => {
        const initial = () => {
            const field = document.getElementById('field');
            field.style.width = fieldWidth + 'px';
            field.style.height = fieldHeight + 'px';
            const ball = document.getElementById('ball');
            ball.style.width = ballSize + 'px';
            ball.style.height = ballSize + 'px';
        };

        initial();

        const interval = setInterval(() => {
            if (running) {
                calculate();
                render();
            }
        }, 20);

        return () => clearInterval(interval);
    }, [running, x, y, rotationAngle]);

    const calculate = () => {
        if (goRight) {
            setX((prevX) => {
                if (prevX >= maxLeft) {
                    setGoRight(false);
                    return prevX;
                }
                return prevX + vx;
            });
        } else {
            setX((prevX) => {
                if (prevX <= 0) {
                    setGoRight(true);
                    return prevX;
                }
                return prevX - vx;
            });
        }

        if (goDown) {
            setY((prevY) => {
                if (prevY >= maxTop) {
                    setGoDown(false);
                    return prevY;
                }
                return prevY + vy;
            });
        } else {
            setY((prevY) => {
                if (prevY <= 0) {
                    setGoDown(true);
                    return prevY;
                }
                return prevY - vy;
            });
        }

        setRotationAngle((prevAngle) => {
            const newAngle = prevAngle + 5;
            return newAngle >= 360 ? 0 : newAngle;
        });
    };

    const render = () => {
        const ball = document.getElementById('ball');
        ball.style.transform = `translate(${x}px, ${y}px) rotate(${rotationAngle}deg)`;
    };

    const toggleRun = () => {
        setRunning(!running);
    };

    const changeBallImage = (imageUrl, buttonName) => {
        setBallImage(imageUrl);
        setBallColor('none');
        setActiveButton(buttonName); // Set active button
    };

    const changeBallColor = (color, buttonName) => {
        setBallColor(color);
        setBallImage('');
        setActiveButton(buttonName); // Set active button
    };

    return (
        <div id="container-animation">
            <div id="field" style={{ backgroundImage: `url(./img/wood.jpg)`, boxShadow: '0 0 0.5rem grey'  }}>
                <div 
                    id="ball"
                    style={{ boxShadow: '0 0 0.6rem black',
                        backgroundImage: `url(${ballImage})`,
                        backgroundColor: ballColor,
                        borderRadius: '50%',
                        position: 'relative',
                        border: '1px solid rgb(0, 0, 0)',
                    }}
                ></div>
            </div>
            <div id="control">
                <button style={{ boxShadow: '0 0 0.25rem grey' }}
                    id="run"
                    className={`btn btn-1 ${running ? 'btn-danger active' : 'btn-success active'}`}
                    onClick={toggleRun} 
                > 
                    <i className={`bi ${running ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
                    {running ? 'STOP' : 'RUN'}
                </button> &nbsp;
                <button
                    id="noneBtn" style={{ boxShadow: '0 0 0.25rem grey' }}
                    className={`btn btn-1 btn-secondary ${activeButton === 'none' ? 'active' : ''}`}
                    onClick={() => changeBallColor('rgb(244, 98, 98)', 'none')}
                >
                    None
                </button> &nbsp;
                <button
                    id="basketballBtn" style={{ boxShadow: '0 0 0.25rem grey' }}
                    className={`btn btn-1 btn-warning ${activeButton === 'basketball' ? 'active' : ''}`}
                    onClick={() => changeBallImage('img/basketball.png', 'basketball')}
                >
                    Basketball
                </button> &nbsp;
                <button style={{ boxShadow: '0 0 0.25rem grey' }}
                    id="footballBtn"
                    className={`btn btn-1 btn-warning ${activeButton === 'football' ? 'active' : ''}`}
                    onClick={() => changeBallImage('img/Football.png', 'football')}
                >
                    Football
                </button> &nbsp;
                <button style={{ boxShadow: '0 0 0.25rem grey' }}
                    id="volleyballBtn"
                    className={`btn btn-1 btn-warning ${activeButton === 'volleyball' ? 'active' : ''}`}
                    onClick={() => changeBallImage('img/volleyball.png', 'volleyball')}
                >
                    Volleyball
                </button> &nbsp;
                <button style={{ boxShadow: '0 0 0.25rem grey' }}
                    id="cartoonBtn"
                    className={`btn btn-1 btn-warning ${activeButton === 'cartoon' ? 'active' : ''}`}
                    onClick={() => changeBallImage('img/cartoon.png', 'cartoon')}
                >
                    Cartoon
                </button> &nbsp;
                <button
                    id="meBtn" style={{ boxShadow: '0 0 0.25rem grey' }}
                    className={`btn btn-1 btn-warning ${activeButton === 'me' ? 'active' : ''}`}
                    onClick={() => changeBallImage('img/me.png', 'me')}
                >
                    Me
                </button> &nbsp;
                <button style={{ boxShadow: '0 0 0.25rem grey' }}
                    id="logoBtn"
                    className={`btn btn-1 btn-warning ${activeButton === 'logo' ? 'active' : ''}`}
                    onClick={() => changeBallImage('img/logo.png', 'logo')}
                >
                    Logo
                </button>
            </div>
        </div>
    );
};

export default Animation;
