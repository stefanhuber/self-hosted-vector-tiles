# Self-hosted vector tiles

## Generate tiles

Inside the `timemaker` directory, the following docker command generates vector tiles from the OSM dump of the city of Kufstein:

```
docker run -it --rm -v $(pwd):/data ghcr.io/systemed/tilemaker:master --bbox 12.156623,47.559905,12.188230,47.602054 --input /data/kufstein.pbf --output /data/tiles/
```

## Setup project

 - Install dependencies: `npm i`
 - Start vite webserver: `npm start`
