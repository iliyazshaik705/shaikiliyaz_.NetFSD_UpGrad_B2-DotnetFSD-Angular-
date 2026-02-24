const url =
  "https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true";

/* =========================
   ✅ PROMISE VERSION
========================= */

const getWeatherPromise = () => {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    })
    .then(data => {
      const w = data.current_weather;

      document.getElementById("output").innerHTML =
        `<h3>Promise Weather Report</h3>
         Temperature: ${w.temperature}°C <br>
         Wind Speed: ${w.windspeed} km/h <br>
         Time: ${w.time}`;
    })
    .catch(error => {
      document.getElementById("output").innerHTML =
        `Error: ${error.message}`;
    });
};


/* =========================
   ✅ ASYNC / AWAIT VERSION
========================= */

const getWeatherAsync = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch weather");
    }

    const data = await response.json();
    const w = data.current_weather;

    document.getElementById("output").innerHTML =
      `<h3>Async/Await Weather Report</h3>
       Temperature: ${w.temperature}°C <br>
       Wind Speed: ${w.windspeed} km/h <br>
       Time: ${w.time}`;

  } catch (error) {
    document.getElementById("output").innerHTML =
      `Error: ${error.message}`;
  }
};