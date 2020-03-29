const map = new mapboxgl.Map({
  container: "map",
  style: "./style.json",
  attributionControl: true,
  hash: true,
  localIdeographFontFamily: ["sans-serif"]
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());
