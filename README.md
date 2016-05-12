API
===

## Modules

<dl>
<dt><a href="#module_webmapUtils">webmapUtils</a></dt>
<dd><p>Module used for parsing <a href="http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Web_map_data/02r30000003p000000/">ArcGIS REST API webmap JSON</a>
into <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html">ArcGIS API for JavaScript map</a> objects.</p>
</dd>
<dt><a href="#module_LayerList">LayerList</a></dt>
<dd></dd>
</dl>

<a name="module_webmapUtils"></a>

## webmapUtils
Module used for parsing [ArcGIS REST API webmap JSON](http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Web_map_data/02r30000003p000000/)into [ArcGIS API for JavaScript map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) objects.


* [webmapUtils](#module_webmapUtils)
    * [exports](#exp_module_webmapUtils--exports) ⏏
        * [.parseWebmap(json)](#module_webmapUtils--exports.parseWebmap) ⇒ <code>[esri/Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)</code>

<a name="exp_module_webmapUtils--exports"></a>

### exports ⏏
**Kind**: Exported member  
<a name="module_webmapUtils--exports.parseWebmap"></a>

#### exports.parseWebmap(json) ⇒ <code>[esri/Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)</code>
Parses ArcGIS webmap JSON into a Map.

**Kind**: static method of <code>[exports](#exp_module_webmapUtils--exports)</code>  
**Returns**: <code>[esri/Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)</code> - - Returns an ArcGIS API map.  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>string</code> | ArcGIS webmap JSON. |

<a name="module_LayerList"></a>

## LayerList

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
