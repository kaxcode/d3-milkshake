async function drawScatter() {
  let dataset = await d3.json("./../../my_weather_data.json");

  const xAccessor = d => d.dewPoint;
  const yAccessor = d => d.humidity;

}
drawScatter()