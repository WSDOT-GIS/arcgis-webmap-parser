define(["esri/widgets/Widget"], function (Widget) {
    "use strict";
    /**
     * A simple layer list control for ArcGIS API for JavaScript v4.0.
     * At version 4.1, Esri is supposed to be adding their own layer list
     * widget to the API. When that happens, this module should no longer
     * be necessary.
     *
     * Note that this module isn't actually an ArcGIS API widget, so it
     * works slightly differently that standard widgets do.
     * @module LayerList
     */

    /**
     * @alias module:LayerList
     * @class
     * @param {external:esri/views/View} view - ArcGIS API view.
     */
    function LayerList(view) {
        var list = document.createElement("ul");

        /**
         * Toggles the visibility of a layer associated with a checkbox.
         * @private
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
            li.dataset.layerId = layer.id;

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

        view.on("layerview-create", function (e) {
            var li = createListItem(e.layer);
            list.insertBefore(li, list.firstChild);
        });

        // Remove corresponding list item when a layer is removed.
        view.on("layerview-destroy", function (e) {
            var id = e.layer.id;
            var listItem = list.querySelector("[data-layer-id='" + id + "'");
            if (listItem) {
                listItem.parentElement.removeChild(listItem);
            }
        });

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
             * @member {external:esri/views/View} view - The view of the map containing the layers.
             */
            view: {
                value: view
            }
        });
    }

    return LayerList;
});