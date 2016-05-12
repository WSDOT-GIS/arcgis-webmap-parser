## Modules

<dl>
<dt><a href="#module_webmapUtils">webmapUtils</a></dt>
<dd></dd>
<dt><a href="#module_LayerList">LayerList</a></dt>
<dd></dd>
</dl>

<a name="module_webmapUtils"></a>

## webmapUtils

* [webmapUtils](#module_webmapUtils)
    * [exports](#exp_module_webmapUtils--exports) ⏏
        * [.parseWebmap(json)](#module_webmapUtils--exports.parseWebmap) ⇒ <code>external:esri/Map</code>

<a name="exp_module_webmapUtils--exports"></a>

### exports ⏏
**Kind**: Exported member  
<a name="module_webmapUtils--exports.parseWebmap"></a>

#### exports.parseWebmap(json) ⇒ <code>external:esri/Map</code>
Parses ArcGIS webmap JSON into a Map.

**Kind**: static method of <code>[exports](#exp_module_webmapUtils--exports)</code>  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>string</code> | ArcGIS webmap JSON. |

<a name="module_LayerList"></a>

## LayerList

* [LayerList](#module_LayerList)
    * [LayerList](#exp_module_LayerList--LayerList) ⏏
        * [new LayerList(view)](#new_module_LayerList--LayerList_new)
        * [~toggleLayer(e)](#module_LayerList--LayerList..toggleLayer)
        * [~createLayerList(view)](#module_LayerList--LayerList..createLayerList)

<a name="exp_module_LayerList--LayerList"></a>

### LayerList ⏏
**Kind**: Exported class  
<a name="new_module_LayerList--LayerList_new"></a>

#### new LayerList(view)

| Param | Type |
| --- | --- |
| view | <code>external:esri/views/View</code> | 

<a name="module_LayerList--LayerList..toggleLayer"></a>

#### LayerList~toggleLayer(e)
Toggles the visibility of a layer associated with a checkbox.

**Kind**: inner method of <code>[LayerList](#exp_module_LayerList--LayerList)</code>  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | Checkbox click event. |

<a name="module_LayerList--LayerList..createLayerList"></a>

#### LayerList~createLayerList(view)
Creates a layer list from a view.

**Kind**: inner method of <code>[LayerList](#exp_module_LayerList--LayerList)</code>  

| Param | Type | Description |
| --- | --- | --- |
| view | <code>external:esri/views/View</code> | A view of a map. |

