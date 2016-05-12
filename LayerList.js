define(function () {
    /**
     * @module LayerList
     */

    /**
     * @alias module:LayerList
     * @class
     * @param {external:esri/views/View}
     */
    function LayerList(view) {
        var list = createLayerList(view);

        /**
         * Toggles the visibility of a layer associated with a checkbox.
         * @param {Event} e - Checkbox click event.
         */
        function toggleLayer(e) {
            var checkbox = e.target;
            var id = checkbox.value;
            var layer = view.map.findLayerById(id);
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
         * Creates a layer list from a view.
         * @param {external:esri/views/View} view - A view of a map.
         */
        function createLayerList(view) {
            var list = document.createElement("ul");
            var docFrag = document.createDocumentFragment();
            view.map.layers.forEach(function (layer) {
                var li = createListItem(layer);
                docFrag.appendChild(li);
            });

            list.classList.add("layer-list");
            list.appendChild(docFrag);
            return list;
        }

        Object.defineProperties(this, {
            list: {
                value: list
            },
            view: {
                value: view
            }
        });
    }

    return LayerList;
})