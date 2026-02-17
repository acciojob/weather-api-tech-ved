//your JS code here. If required.
const btn = document.querySelector("button");
const weatherDiv = document.getElementById("weatherData");

const API_KEY = "abcd1234xyz"; // 

fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)


btn.addEventListener("click", () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      const weather = data.weather[0].main;
      weatherDiv.textContent = `Current weather in London: ${weather}`;
    })
    .catch(() => {
      weatherDiv.textContent = "Failed to load weather data";
    });
});

