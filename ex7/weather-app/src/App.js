import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState(""); // User input for city
  const [weather, setWeather] = useState(null); // Weather data
  const [error, setError] = useState(""); // Error handling

  const apiKey = "bd5e378503939ddaee76f12ad7a97608"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data); // Store the fetched weather data
      setError(""); // Reset error
    } catch (err) {
      setWeather(null);
      setError("City not found or invalid request.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Weather Forecast</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          style={styles.input}
        />
        <button onClick={fetchWeather} style={styles.button}>
          Get Weather
        </button>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      {weather && (
        <div style={styles.weatherContainer}>
          <h2 style={styles.cityName}>{weather.name}</h2>
          <p style={styles.weatherItem}>Temperature: {weather.main.temp} °C</p>
          <p style={styles.weatherItem}>Weather: {weather.weather[0].description}</p>
          <p style={styles.weatherItem}>Humidity: {weather.main.humidity}%</p>
          <p style={styles.weatherItem}>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: "linear-gradient(to right, #6dd5ed, #2193b0)", // Gradient background
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif", // Stylish font
  },
  heading: {
    fontSize: "3rem",
    color: "#fff",
    marginBottom: "20px",
    fontWeight: "700",
    textShadow: "2px 2px 5px rgba(0,0,0,0.3)", // Text shadow for depth
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "15px",
    fontSize: "1.2rem",
    width: "250px",
    borderRadius: "30px",
    border: "none",
    outline: "none",
    marginRight: "10px",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
  },
  button: {
    padding: "15px 25px",
    fontSize: "1.2rem",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#f3a683", // Stylish button color
    color: "#fff",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#ff793f", // Darken button on hover
  },
  weatherContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white
    borderRadius: "20px",
    padding: "20px 40px",
    boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    color: "#333",
  },
  cityName: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  weatherItem: {
    fontSize: "1.5rem",
    margin: "5px 0",
  },
  error: {
    color: "red",
    marginTop: "20px",
  },
};

export default App;
