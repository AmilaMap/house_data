var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_GramaNiladhariBoundary_1 = new ol.format.GeoJSON();
var features_GramaNiladhariBoundary_1 = format_GramaNiladhariBoundary_1.readFeatures(json_GramaNiladhariBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GramaNiladhariBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GramaNiladhariBoundary_1.addFeatures(features_GramaNiladhariBoundary_1);
var lyr_GramaNiladhariBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GramaNiladhariBoundary_1, 
                style: style_GramaNiladhariBoundary_1,
                popuplayertitle: "Grama Niladhari Boundary",
                interactive: true,
                title: '<img src="styles/legend/GramaNiladhariBoundary_1.png" /> Grama Niladhari Boundary'
            });
var format_House_2 = new ol.format.GeoJSON();
var features_House_2 = format_House_2.readFeatures(json_House_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_House_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_House_2.addFeatures(features_House_2);
var lyr_House_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_House_2, 
                style: style_House_2,
                popuplayertitle: "House",
                interactive: true,
                title: '<img src="styles/legend/House_2.png" /> House'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GramaNiladhariBoundary_1.setVisible(true);lyr_House_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GramaNiladhariBoundary_1,lyr_House_2];
lyr_GramaNiladhariBoundary_1.set('fieldAliases', {'GND No.': 'GND No.', 'GND Name': 'GND Name', 'Province': 'Province', 'District': 'District', 'DSD': 'DSD', 'ADMIN_CODE': 'ADMIN_CODE', 'GND_NAME_G': 'GND_NAME_G', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_House_2.set('fieldAliases', {'Id': 'Id', });
lyr_GramaNiladhariBoundary_1.set('fieldImages', {'GND No.': '', 'GND Name': '', 'Province': '', 'District': '', 'DSD': '', 'ADMIN_CODE': 'TextEdit', 'GND_NAME_G': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_House_2.set('fieldImages', {'Id': 'Range', });
lyr_GramaNiladhariBoundary_1.set('fieldLabels', {'GND No.': 'inline label - always visible', 'GND Name': 'inline label - always visible', 'Province': 'inline label - always visible', 'District': 'inline label - always visible', 'DSD': 'inline label - always visible', 'ADMIN_CODE': 'no label', 'GND_NAME_G': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_House_2.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_House_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});