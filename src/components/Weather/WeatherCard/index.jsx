import IconWeather from "./IconWeather";

function WeatherCard({weather, city}) {

    function rightHour() {
        const date = new Date();
        const hour = date.getHours();

        return hour;
    }

    return <div className="flex flex-col items-center p-4 rounded-md w-60 sm:px-12 bg-sky-900 m-4">
        <div className="text-center">
            <h2 className="text-left text-sm text-sky-200">{new Date().toLocaleDateString()}</h2>
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

export default WeatherCard;
