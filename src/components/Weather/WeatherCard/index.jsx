import IconWeather from "./IconWeather";

function WeatherCard({weather, city, index, selectedDay, onClick}) {

    function rightHour() {
        const date = new Date();
        const hour = date.getHours();

        return hour;
    }

    function rightDay() {
        const date = new Date();
        date.setDate (date.getDate() + index);

        return date;
    }

    if (index == selectedDay) {
    return <div onClick={onClick} className="flex flex-col items-center p-4 rounded-md w-40 sm:px-12 bg-sky-900 m-2">
        <div className="text-center">
            <h2 className="text-left text-sm text-sky-200">{rightDay().toLocaleDateString("en-GB")}</h2>
        </div>    
        <div className="text-center">
            <h2 className="text-xl text-sky-200">{city}</h2>
        </div>
        <div className="text-center ">
            <IconWeather code={weather?.hourly?.weather_code[rightHour()]} />
        </div>
        <div className="mb-2 text-3xl font-semibold text-cyan-400">{weather?.hourly?.temperature_2m[rightHour()]}°C
        </div>
    </div>  
    }

    else {
        return <div onClick={onClick} className="flex flex-col items-center p-4 rounded-md w-25 sm:px-12 bg-sky-900 m-2">
        <div className="text-center">
            <h2 className="text-left text-sm font-size- text-sky-200">{rightDay().toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit" })}</h2>
        </div>
    </div>  
    }
        
}

export default WeatherCard;
