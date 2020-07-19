async function drawBars() {
  // Access Data
  const dataset = await d3.json("./../../my_weather_data.json");
  const metricAccessor = d => d.humidity;

  // Create Dimensions
  const width = 600;
  let dimensions = {
    width: width,
    height: width * 0.6,
    margin: {
      top: 30,
      right: 10,
      bottom: 50,
      left: 50,
    },
  }

  dimensions.boundedWidth = dimensions.width
    - dimensions.margin.left
    - dimensions.margin.right;
  dimensions.boundedHeight = dimensions.height
    - dimensions.margin.top
    - dimensions.margin.bottom;
}
drawBars()