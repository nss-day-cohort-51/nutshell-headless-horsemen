

// import React from "react";




// export const weatherForecastItem = (weatherObj) => {

//     const dateFormat = (dateObj) => {
//         const newDate = new Date(dateObj * 1000);
//         const dateToString = newDate.toString();
//         const dateFormat = dateToString.substring(0, 3);
//         return dateFormat;
//     }


//     return (

//         <section class="weather-info__item">
//             <h5 class="day-name">${dateFormat(weatherObj.list[0].dt)}</h5>
//             <p class="feels-like-temperature">Temp: ${Math.round(weatherObj.list[0].main.temp)}</p>
//             <p class="weatherDescription">${weatherObj.list[0].weather[0].description}</p>
//         </section>
//     )
// }