import React from 'react'
import Cookies from 'universal-cookie'

class VerCookies extends React.Component {

    getWeather(value){
        switch(value){
            case "Clear": 
                return "https://ssl.gstatic.com/onebox/weather/64/sunny.png"; 
                break;
            case "Cloudy":
                return "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"; 
                break;
            case "Thunderstorm":
                return "https://ssl.gstatic.com/onebox/weather/64/thunderstorms.png"; 
                break;
            case "Rain":
                return "https://ssl.gstatic.com/onebox/weather/64/rain.png"; 
                break;
            case "Partly cloudy":
                return "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"; 
                break;
            default: 
                return "https://ssl.gstatic.com/onebox/weather/64/cloudy_t_sunny.png"
                break;
        }
    }

    render(){

        const cookies = new Cookies()
        var temp = parseFloat(cookies.get("Temp"))-273.15
        var weather = cookies.get("Weather")
        var city = cookies.get("City")
        var country = cookies.get("Country")

        return (
            <div className="text-center">
                <h1>{temp.toFixed(0)} C°</h1>
                <img src={this.getWeather(weather)} />
                <h4>{weather}</h4>
                <h1>{city}</h1>
                <h1>{country}</h1>
            </div>
        )

    }

}

export default VerCookies;