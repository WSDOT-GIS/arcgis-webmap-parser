define(["esri/widgets/Widget"], function (Widget) {
    /**
     * A simple layer list control for ArcGIS API for JavaScript v4.0.
     * At version 4.1, Esri is supposed to be adding their own layer list
     * widget to the API. When that happens, this module should no longer
     * be necessary.
     *
     * Note that this module isn't actually an ArcGIS API widget, so it
     * works slightly differently that standard widgets do.
     * @module LayerList
     * @example
     * // map (esri/Map) and view (esri/views/View) have already been created.
     * var layerList = new LayerList(map);
     * view.ui.add(layerList.domNode, "top-right");
     */

    /**
     * @alias module:LayerList
     * @class
     * @param {external:esri/Map} map - ArcGIS API map.
     */
    function LayerList(map) {
        var list = createLayerList(map);

        /**
         * Toggles the visibility of a layer associated with a checkbox.
         * @private
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

        function createListItem(layer) {
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

            return li;
        }

        /**
         * Creates a layer list from a map.
         * @private
         * @param {external:esri/Map} map - An ArcGIS map.
         * @returns {HTMLUListElement} - Returns an HTML list.
         */
        function createLayerList(map) {

            if (!(map && map.layers)) {
                throw new TypeError("Invalid map");
            }

            var list = document.createElement("ul");
            var docFrag = document.createDocumentFragment();

            map.layers.forEach(function (layer) {
                var li = createListItem(layer);
                docFrag.insertBefore(li, docFrag.firstChild);
            });


            list.appendChild(docFrag);
            return list;
        }

        var rootNode = document.createElement("div");
        rootNode.classList.add("layer-list");
        rootNode.classList.add("esri-widget");

        rootNode.appendChild(list);

        Object.defineProperties(this, {
            domNode: {
                value: rootNode
            },
            /**
             * @member {HTMLUListElement} list - HTML list element.
             */
            list: {
                value: list
            },
            /**
             * @member {external:esri/Map} map - The map containing the layers.
             */
            map: {
                value: map
            }
        });
    }

    return LayerList;
});