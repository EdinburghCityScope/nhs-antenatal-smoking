// Script which converts a FeatureCollection to an array of Features
const fs = require('fs');
const path = require('path');
const datadir = path.join(__dirname, '..', 'data');
const edinburghcityscopeUtils = require('edinburghcityscope-utils');

const dataZones2001 = 'data-zones-2001.geojson';
const dataZones2011 = 'data-zones-2011.geojson';
const model = 'AntenatalSmoking';
const filename = 'antenatal-smoking';
const outputFile = path.join(datadir, filename + '-loopback.json');

// Data zones
var featureCollection = fs.readFileSync(path.join(datadir, dataZones2001), 'utf8');
var features = edinburghcityscopeUtils.featureCollectionToFeatureArray(featureCollection);
var loopbackJson = edinburghcityscopeUtils.featureArrayToLoopbackJson(features);

featureCollection = fs.readFileSync(path.join(datadir, dataZones2011), 'utf8');
features = edinburghcityscopeUtils.featureCollectionToFeatureArray(featureCollection);
loopbackJson = edinburghcityscopeUtils.featureArrayToLoopbackJson(features, "GeoJSONFeature", loopbackJson);


// Stats
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
converter.fromFile(path.join(datadir, filename + '.csv'), function(err, result){
    if (err) throw err;
    loopbackJson = edinburghcityscopeUtils.featureArrayToLoopbackJson(result, model, loopbackJson);
    fs.writeFileSync(outputFile, JSON.stringify(loopbackJson));
    console.log(filename + '-loopback.json created');
});
