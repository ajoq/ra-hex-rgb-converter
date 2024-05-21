import { useState } from 'react';
import hexRgb from '../../utils/hexRgb';
import ConverterInput from '../ConverterInput';
import './index.css';

function Converter() {
    const [conv, setConv] = useState({
        hex: '',
        rgb: 'rgb(red, green, blue)',
        bodyColor: '',
    });

    const handleInput = (evt) => {
        const hexValue = evt.target.value;

        setConv((prev) => ({
            ...prev,
            hex: hexValue,
            rgb: 'rgb(red, green, blue)',
            bodyColor: '',
        }));

        if (hexValue.length < 6) return;
        let color = hexValue;
        let hexRes = hexRgb(hexValue);
        if (!hexRes) {
            color = 'e74c3c';
            hexRes = 'Ошибка!';
        }

        setConv((prev) => ({
            ...prev,
            rgb: hexRes,
            bodyColor: '#' + color,
        }));
    };

    return (
        <>
            <div
                className="converter"
                style={{ backgroundColor: conv.bodyColor }}
            >
                <div className="fields">
                    <ConverterInput hex={conv.hex} handleInput={handleInput} />
                    <p className="result">{conv.rgb}</p>
                </div>
            </div>
        </>
    );
}

export default Converter;
