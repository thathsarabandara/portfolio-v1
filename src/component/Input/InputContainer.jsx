import React, { useState } from 'react';

function InputContainer({
    label,
    type = 'text',
    placeholder = '',
    error = 'This is error message',
    onChange,
    value,
}) {
    const [inputValue, setInputValue] = useState(value || '');

    const handleChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className="flex justify-start items-end w-full px-4">
            <div className="flex flex-col justify-start items-start w-[250px] sm:w-[500px] md:w-[1000px] max-w-3xl h-24 border-2 border-r-0 px-4 py-5 group hover:glow-effect">
                <label htmlFor={label} className="cyberpunk-label">{label}</label>
                <div className="flex flex-col justify-center items-start">
                    <input
                        type={type}
                        id={label}
                        value={inputValue}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full max-w-[700px] h-8 bg-transparent focus:outline-none"
                    />
                    <p className="text-red-500 text-xs mb-1">{error}</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
                <div className="w-8 h-16 border-r-2 border-t-2 border-white"></div>
                <div className="w-0 h-0 border-l-[0px] border-l-transparent border-r-[32px] border-r-transparent border-t-[32px] border-t-white"></div>
            </div>
        </div>
    );
}

export default InputContainer;
