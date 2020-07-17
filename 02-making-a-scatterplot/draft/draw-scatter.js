async function drawScatter() {
  // Access Data
  let dataset = await d3.json("./../../my_weather_data.json");

  const xAccessor = d => d.dewPoint;
  const yAccessor = d => d.humidity;

  // Create Chart Dimensions
  const width = d3.min([
    window.innerWidth * 0.9,
    window.innerHeight * 0.9,
  ])

  let dimensions = {
    width: width,
    height: width,
    margin: {
      top: 10,
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
drawScatter()