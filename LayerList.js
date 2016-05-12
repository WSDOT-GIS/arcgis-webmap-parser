define(["esri/Map"], function (esriMap) {
    /**
     * @module LayerList
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

            if (!(map && map.instanceOf && map.instanceOf(esriMap))) {
                throw new TypeError("Invalid map");
            }

            var list = document.createElement("ul");
            var docFrag = document.createDocumentFragment();
            map.layers.forEach(function (layer) {
                var li = createListItem(layer);
                docFrag.appendChild(li);
            });

            list.classList.add("layer-list");
            list.appendChild(docFrag);
            return list;
        }

        Object.defineProperties(this, {
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