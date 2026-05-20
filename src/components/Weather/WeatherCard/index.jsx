import IconWeather from "./IconWeather";

function rightDay(index) {
    const date = new Date();
    date.setDate (date.getDate() + index);

    return date;
}
function rightHour() {
        const date = new Date();
        const hour = date.getHours();

        return hour;
    }

function WeatherCard({weather, weatherDaily, city, index, selectedDay, onClick}) {

    if (index == selectedDay) {
        const temp = index == 0
            ? weather?.hourly?.temperature_2m[rightHour()]
            : weatherDaily?.daily?.temperature_2m_max[index];
        const code = index == 0
            ? weather?.hourly?.weather_code[rightHour()]
            : weatherDaily?.daily?.weather_code[index];
            return <div onClick={onClick} className="flex flex-col items-center p-4 rounded-md w-40 sm:px-12 bg-sky-900 m-2">
                <div className="text-center">
                    <h2 className="text-left text-sm text-sky-200">{rightDay(index).toLocaleDateString("en-GB")}</h2>
                </div>    
                <div className="text-center">
                    <h2 className="text-xl text-sky-200">{city}</h2>
                </div>
                {index == 0 && 
                    <div className="text-center">
                        <h3 className="text-sm text-sky-200">{rightHour()}:{new Date().getMinutes()}</h3>
                    </div>
                }
                <div className="text-center ">
                    <IconWeather code={code} />
                </div>
                <div className="mb-2 text-3xl font-semibold text-cyan-400">{temp}°C
                </div>
            </div>   
        }
    else {
        return <div onClick={onClick} className="flex flex-col items-center p-4 rounded-md w-20 h-30 hover:scale-105 transition-all duration-200 bg-sky-900 m-2">
        <div className="text-center">
            <h2 className="text-left text-sm text-sky-200">{rightDay(index).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit" })}</h2>
        </div>
        <div className="text-center">
            <IconWeather code={weatherDaily?.daily?.weather_code[index]} />
        </div>
        <div className="mb-2 text-xl font-semibold text-cyan-400">{weatherDaily?.daily?.temperature_2m_max[index]}°C
        </div>
    </div>  
    }
        
}

export default WeatherCard;
