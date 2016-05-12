define([
    "esri/Map",
    "esri/views/MapView",
    "esri/Basemap",
    "esri/layers/MapImageLayer",
    "esri/layers/TileLayer"
], function (esriMap, MapView, BaseMap, MapImageLayer, TileLayer) {
    var layerTypeMappings = new Map();
    [
        ["ArcGISMapServiceLayer", MapImageLayer],
        ["ArcGISTiledMapServiceLayer", TileLayer]
    ].forEach(function (kvArray) {
        layerTypeMappings.set(kvArray[0], kvArray[1]);
    });

    function reviver(k, v) {
        if (v && typeof v === "object") {
            if (v.layerType && layerTypeMappings.has(v.layerType)) {
                return new (layerTypeMappings.get(v.layerType))(v);
            } else if (k === "baseMap") {
                return BaseMap.fromJSON(v);
            }
        }
        return v;
    }

    var exports = {
        parseWebmap: function (json) {
            var webmap = JSON.parse(json, reviver);
            var map = new esriMap({
                basemap: webmap.baseMap,
                layers: webmap.operationalLayers

            });
            return map;
        }
    }

    return exports;
});