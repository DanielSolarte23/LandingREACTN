import { useState } from "react";
import WeatherForm from "./WeatherForm";

export default function WeatherApp(){
    const [weather, SetWeather] = useState(null);

    function loadInfo(city = 'london')

    function handlreChangeCity(city){
        SetWeather(null);
        loadInfo(city);
    }

    return(
        <div>
            <WeatherForm onChangeCity={handlreChangeCity}/>
            <form action=""></form>
            <div>Info</div>
        </div>
    )
};