const searchInput = document.querySelector("#search");
const submitBtn = document.querySelector("#submit");
const resultDiv = document.querySelector("#result");

submitBtn.addEventListener("click", function() {
  const city = searchInput.value;
  const apiKey = "1339082a9348bd9f5135b7395e6ca8de"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;

      resultDiv.innerHTML = `
        <p>Temperature: ${temp} &#8451;</p>
        <p>Description: ${desc}</p>
        <p>Wind speed: ${windSpeed} m/s</p>
        <p>Humidity: ${humidity}%</p>
      `;
    })
    .catch(error => {
      console.error(error);
      resultDiv.innerHTML = `<p>Unable to fetch weather data for ${city}</p>`;
    });
});
