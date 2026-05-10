import clearDay  from '@meteocons/svg/line/clear-day.svg';
import partlyCloudyDay  from '@meteocons/svg/line/partly-cloudy-day.svg';
import cloudy from '@meteocons/svg/line/cloudy.svg';
import fog from '@meteocons/svg/line/fog.svg';
import drizzle from '@meteocons/svg/line/drizzle.svg';
import rain from '@meteocons/svg/line/rain.svg';
import snow from '@meteocons/svg/line/snow.svg';
import extremeRain from '@meteocons/svg/line/extreme-rain.svg';
import extremeSnow from '@meteocons/svg/line/extreme-snow.svg';
import extremehail from '@meteocons/svg/line/extreme-hail.svg';
import thunderstormsdrizzle from '@meteocons/svg/line/thunderstorms-drizzle.svg';
import extremethunderstormshail from '@meteocons/svg/line/extreme-thunderstorms-hail.svg';

function IconWeather({code}) {
    if (code === 0 || code === 1) return <img src={clearDay} width={64} height={64} />;
    else if (code === 2) return <img src={partlyCloudyDay} width={64} height={64} />;
    else if (code === 3) return <img src={cloudy} width={64} height={64} />;
    else if (code >= 45 && code <= 48) return <img src={fog} width={64} height={64} />;
    else if (code >= 51 && code <= 55) return <img src={drizzle} width={64} height={64} />;
    else if (code >= 61 && code <= 65) return <img src={rain} width={64} height={64} />;
    else if (code >= 71 && code <= 77) return <img src={snow} width={64} height={64} />;
    else if (code >= 80 && code <= 82) return <img src={extremeRain} width={64} height={64} />;
    else if (code === 85) return <img src={extremeSnow} width={64} height={64} />;
    else if (code === 86) return <img src={extremehail} width={64} height={64} />;
    else if (code === 95) return <img src={thunderstormsdrizzle} width={64} height={64} />;
    else if (code >= 96 && code <= 99) return <img src={extremethunderstormshail} width={64} height={64} />;
    else return <img src={clearDay} width={64} height={64} />;
}

export default IconWeather;