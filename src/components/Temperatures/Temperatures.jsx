import { useState, useEffect } from 'react';
import Variable from '../Variable/Variable';

import './Temperatures.css';

function Temperatures( { initCelsius} ) {

    // function to convert between celsius, fahrenheit, and kelvin
    const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
    const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

    const celsiusToKelvin = (celsius) => celsius + 273.15;
    const kelvinToCelsius = (kelvin) => kelvin - 273.15;



    const [celsius, setCelsius] = useState(initCelsius || 0);
    const [fahrenheit, setFahrenheit] = useState(celsiusToFahrenheit(initCelsius || 0));
    const [kelvin, setKelvin] = useState(celsiusToKelvin(initCelsius || 0));

    // useEffect

    useEffect(() => {
        setFahrenheit(celsiusToFahrenheit(celsius));
        setKelvin(celsiusToKelvin(celsius));
    }, [celsius]);




    // Update Celsius when Fahrenheit changes
    const handleFahrenheitChange = (newFahrenheit) => {
        const newCelsius = parseFloat(fahrenheitToCelsius(newFahrenheit).toFixed(2));
        setCelsius(newCelsius);
    };

    // Update Celsius when Kelvin changes
    const handleKelvinChange = (newKelvin) => {
        const newCelsius = parseFloat(kelvinToCelsius(newKelvin).toFixed(2));
        setCelsius(newCelsius);
        setCelsius(newCelsius);
    };



    return (
        <div className="temperatures-container">
            <h3 className="temperatures-title">Temperatures</h3>
            <h3 className='temperatures-variable'>
                <span className="badge bg-primary">{celsius.toFixed(2)} &deg;C</span>
                <span className="badge bg-primary">{fahrenheit.toFixed(2)} &deg;F</span> 
                <span className="badge bg-primary">{kelvin.toFixed(2)} &deg;K</span>
            </h3>
            <div className="temperatures-variable">
                <Variable type={"int"} name={"Celsius"} value={celsius} setValue={setCelsius}/>
                <Variable type={"int"} name={"Fahrenheit"} value={fahrenheit} setValue={handleFahrenheitChange}/> 
                <Variable type={"int"} name={"Kelvin"} value={kelvin} setValue={handleKelvinChange}/>
            </div>
        </div>
    );
}

export default Temperatures;