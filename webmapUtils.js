define([
    "esri/Map",
    "esri/views/MapView",
    "esri/Basemap",
    "esri/layers/MapImageLayer",
    "esri/layers/TileLayer"
], function (esriMap, MapView, BaseMap, MapImageLayer, TileLayer) {
    /**
     * Module used for parsing {@link http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Web_map_data/02r30000003p000000/|ArcGIS REST API webmap JSON}
     * into {@link https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html|ArcGIS API for JavaScript map} objects.
     * @module webmapUtils
     */

    /**
     * @external esri/Map
     * @see {@link https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html esri/Map}
     */

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

    /**
     *
     * @alias module:webmapUtils
     */
    var exports = {
        /**
         * Parses ArcGIS webmap JSON into a Map.
         * @param {string} json - ArcGIS webmap JSON.
         * @returns {external:esri/Map} - Returns an ArcGIS API map.
         */
        parseWebmap: function (json) {
            var webmap = JSON.parse(json, reviver);
            var map = new esriMap({
                basemap: webmap.baseMap,
                layers: webmap.operationalLayers

            });
            return map;
        }
    };

    return exports;
});