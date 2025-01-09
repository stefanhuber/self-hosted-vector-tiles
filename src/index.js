import maplibregl, { AttributionControl, NavigationControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
    container: 'map', 
    style: 'style.json',
    maxBounds: [12.1566, 47.5599, 12.1882, 47.6021],
    zoom: 12,
    maxZoom: 18,
    minZoom: 10,
    attributionControl: false
});

map.addControl(new AttributionControl({
    compact: true,
    customAttribution: ['&copy; MapTiler', '&copy; OpenStreetMap contributors']
}));

map.addControl(new NavigationControl());
