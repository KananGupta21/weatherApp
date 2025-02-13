async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name!');
        return;
    }

    const apiKey = '74c3662507824a16b69134814251302';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById('cityName').innerText = `Weather in ${data.location.name}`;
        document.getElementById('temperature').innerText = `🌡️ Temperature: ${data.current.temp_c}°C`;
        document.getElementById('condition').innerText = `🌥️ Condition: ${data.current.condition.text}`;
        document.getElementById('airQuality').innerText = `🌬️ Air Quality Index: ${data.current.air_quality.pm2_5.toFixed(2)}`;

        document.getElementById('weatherResult').classList.remove('hidden');
    } catch (error) {
        alert('City not found! Please try again.');
    }
}
