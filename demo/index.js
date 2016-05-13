require([
    "webmapUtils",
    "webmapUtils/LayerList",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/widgets/Legend",
    "esri/widgets/Search",
    "dojo/text!./lods.json",
    "dojo/text!./webmap.json"
], function (
    webmapUtils,
    LayerList,
    MapView,
    Home,
    Legend,
    Search,
    lods,
    webmap
) {

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

    var view = new MapView({
        map: map,
        container: "viewDiv",
        zoom: 8,
        center: [-120.85, 47.295],
        ui: {
            components: [
                "zoom",
                "compass",
                "attribution"
            ]
        },
        constraints: {
            lods: lods,
            minZoom: 7
        }
    });

    var home = new Home({ view: view });
    home.startup();
    view.ui.add(home, "top-left");

    var search = new Search({ view: view });
    search.startup();
    view.ui.add(search, "top-right");

    var legend = new Legend({
        view: view
    });
    legend.startup();
    view.ui.add(legend, "bottom-left");

    var layerList = new LayerList(map);
    view.ui.add(layerList.domNode, "top-right");

});