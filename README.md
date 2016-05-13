ArcGIS API v4.0 webmap parser and simple layer list.
====================================================

Provides a simple layer list and a utility for parsing ArcGIS REST API webmap JSON.

API
---

## Modules

<dl>
<dt><a href="#module_webmapUtils">webmapUtils</a></dt>
<dd><p>Module used for parsing <a href="http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Web_map_data/02r30000003p000000/">ArcGIS REST API webmap JSON</a>
into <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html">ArcGIS API for JavaScript map</a> objects.
TODO: Check to see if this is already supported in API via WebMap. Docs don&#39;t mention constructing a map from JSON files, only from ArcGIS Online IDs.</p>
</dd>
<dt><a href="#module_LayerList">LayerList</a></dt>
<dd><p>A simple layer list control for ArcGIS API for JavaScript v4.0.
At version 4.1, Esri is supposed to be adding their own layer list
widget to the API. When that happens, this module should no longer
be necessary.</p>
<p>Note that this module isn&#39;t actually an ArcGIS API widget, so it
works slightly differently that standard widgets do.</p>
</dd>
</dl>

<a name="module_webmapUtils"></a>

## webmapUtils
Module used for parsing [ArcGIS REST API webmap JSON](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Web_map_data/02r30000003p000000/)into [ArcGIS API for JavaScript map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) objects.TODO: Check to see if this is already supported in API via WebMap. Docs don't mention constructing a map from JSON files, only from ArcGIS Online IDs.

<a name="module_webmapUtils.parseWebmap"></a>

### webmapUtils.parseWebmap(json) ⇒ <code>[esri/Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)</code>
Parses ArcGIS webmap JSON into a Map.

**Kind**: static method of <code>[webmapUtils](#module_webmapUtils)</code>  
**Returns**: <code>[esri/Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)</code> - - Returns an ArcGIS API map.  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>string</code> | ArcGIS webmap JSON. |

<a name="module_LayerList"></a>

## LayerList
A simple layer list control for ArcGIS API for JavaScript v4.0.At version 4.1, Esri is supposed to be adding their own layer listwidget to the API. When that happens, this module should no longerbe necessary.Note that this module isn't actually an ArcGIS API widget, so itworks slightly differently that standard widgets do.

**Example**  
```js
// map (esri/Map) and view (esri/views/View) have already been created.var layerList = new LayerList(map);view.ui.add(layerList.domNode, "top-right");
```

* [LayerList](#module_LayerList)
    * [LayerList](#exp_module_LayerList--LayerList) ⏏
        * [new LayerList(map)](#new_module_LayerList--LayerList_new)
        * [~list](#module_LayerList--LayerList..list) : <code>HTMLUListElement</code>
        * [~map](#module_LayerList--LayerList..map) : <code>[esri/Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)</code>

<a name="exp_module_LayerList--LayerList"></a>

### LayerList ⏏
**Kind**: Exported class  
<a name="new_module_LayerList--LayerList_new"></a>

#### new LayerList(map)

| Param | Type | Description |
| --- | --- | --- |
| map | <code>[esri/Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)</code> | ArcGIS API map. |

<a name="module_LayerList--LayerList..list"></a>

#### LayerList~list : <code>HTMLUListElement</code>
HTML list element.

**Kind**: inner property of <code>[LayerList](#exp_module_LayerList--LayerList)</code>  
<a name="module_LayerList--LayerList..map"></a>

#### LayerList~map : <code>[esri/Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)</code>
The map containing the layers.

**Kind**: inner property of <code>[LayerList](#exp_module_LayerList--LayerList)</code>  
