function WeatherCard({weather, city}) {

    function rightHour() {
        const date = new Date();
        const hour = date.getHours();

        return hour;
    }

    return <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 bg-gray-200 dark:text-gray-800">
        <div className="text-center">
            <h2 className="text-xl dark:text-black-600">{city}</h2>
        </div>
        <div className="text-center">
            <h2 className="text-xl dark:text-black-600">{new Date().toLocaleDateString()}</h2>
        </div>
        <div className="mb-2 text-3xl font-semibold">{weather?.hourly?.temperature_2m[rightHour()]}°C
        </div>
    </div>  
}

export default WeatherCard;