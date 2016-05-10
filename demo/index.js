require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Basemap",
    "esri/layers/MapImageLayer",
    "esri/layers/TileLayer",
    "dojo/text!./lods.json",
    "dojo/text!./webmap.json"
], function (esriMap, MapView, BaseMap, MapImageLayer, TileLayer, lods, webmap) {

    lods = JSON.parse(lods);

    var typeMappings = new Map();

    [
        ["ArcGISMapServiceLayer", MapImageLayer],
        ["ArcGISTiledMapServiceLayer", TileLayer]
    ].forEach(function (kvArray) {
        typeMappings.set(kvArray[0], kvArray[1]);
    });

    var reviver = function (k, v) {
        if (v && typeof v === "object") {
            if (v.layerType && typeMappings.has(v.layerType)) {
                return new (typeMappings.get(v.layerType))(v);
            } else if (k === "baseMap") {
                return BaseMap.fromJSON(v);
            }
        }
        return v;
    };

    webmap = JSON.parse(webmap, reviver);

    var map = new esriMap({
        basemap: webmap.baseMap,
        layers: webmap.operationalLayers

    });

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

    /**
     * Creates a layer list from a view.
     * @param {external:esri/views/View} view - A view of a map.
     */
    function createLayerList(view) {
        var list = document.createElement("ul");
        var docFrag = document.createDocumentFragment();
        view.map.layers.forEach(function (layer) {
            var li = document.createElement("li");

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = layer.id;
            checkbox.checked = layer.visible;
            checkbox.addEventListener("click", toggleLayer);

            var label = document.createElement("label");
            label.textContent = layer.title || layer.id;

            checkbox.id = layer.id + "checkbox";
            label.for = checkbox.id;

            li.appendChild(checkbox);
            li.appendChild(label);
            docFrag.appendChild(li);
        });

        list.classList.add("layer-list");
        list.appendChild(docFrag);
        return list;
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
        var list = createLayerList(view);
        view.ui.add(list, "top-right");
    });
})