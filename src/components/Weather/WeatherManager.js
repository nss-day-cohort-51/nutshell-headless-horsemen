// import React from "react";
// import { settings } from "../Settings";


// // getting weather data from weather api by city

// export const getWeather = (city) => {
//     return fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?zip=${city}&appid=${settings.weatherKey}&units=imperial`
//     )
//         .then((response) => response.json())
//         .then((parsedResponse) => {
//             return parsedResponse;
//         });
// };