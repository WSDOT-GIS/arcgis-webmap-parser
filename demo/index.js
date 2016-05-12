require([
    "webmapUtils",
    "webmapUtils/LayerList",
    "esri/views/MapView",
    "dojo/text!./lods.json",
    "dojo/text!./webmap.json"
], function (webmapUtils, LayerList, MapView, lods, webmap) {

    lods = JSON.parse(lods);

    var map = webmapUtils.parseWebmap(webmap);

    /**
     * Toggles the visibility of a layer associated with a checkbox.
     * @param {Event} e - Checkbox click event.
     */
    function toggleLayer(e) {
        var checkbox = e.target;
        var id = checkbox.value;
        var layer = map.findLayerById(id);
        if (layer) {
            layer.visible = checkbox.checked;
        }
    }



    var mapView = new MapView({
        map: map,
        container: "viewDiv",
        zoom: 8,
        center: [-120.85, 47.295],
        constraints: {
            lods: lods,
            minZoom: 7
        }
    }).then(function (view) {
        var layerList = new LayerList(view);
        view.ui.add(layerList.list, "top-right");
    });
})