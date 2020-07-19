async function drawBars() {
  // Access Data
  const dataset = await d3.json("./../../my_weather_data.json");
  const metricAccessor = d => d.humidity;

}
drawBars()