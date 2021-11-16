# Plugins

## getPluginSettings

Get the configuration parameters of the plugin

```javascript
dtable.getPluginSettings(pluginName);
```

Arguments

* pluginName: Plugin name

Example

```javascript
const pluginName = 'gallery';
const pluginSetting = dtable.getPluginSettings(pluginName);
```

## updatePluginSettings

Update the configuration parameters of the plugin

```javascript
dtable.updatePluginSettings(pluginName, pluginSettings);
```

Arguments

* pluginName: Plugin name
* pluginSettings: Plugin configuration parameters

Example

```javascript
const pluginName = 'gallery';
const pluginSettings = {};
dtable.updatePluginSettings(pluginName, pluginSettings);
```

## deletePluginSettings

Delete the configuration parameters of the plugin

```javascript
dtable.deletePluginSettings(pluginName);
```

Arguments

* pluginName: Plugin name

Example

```javascript
const pluginName = 'gallery';
dtable.deletePluginSettings(pluginName);
```
