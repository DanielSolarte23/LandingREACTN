import { useState } from "react";

export default function WeatherForm({onChangeCity}){
    const [city, SetCity] = useState('')

    function onChange(e){
        const value = e.target.value;

        if(value === ''){
            SetCity(value)
        }
    }

    function handleSubmit(e){
        e.preventDefault();

        onChangeCity(city)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={onChange}/>
        </form>
    )
}