var map;
            
            var markers = [];
            var polygon = null;

            function initMap() {
                var styles = [{
                    stylers: [{
                        hue: '#2c3e50'
                    }, {
                        saturation: 250
                    }]
                }, {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{
                        lightness: 50
                    }, {
                        visibility: 'simplified'
                    }]
                }, {
                    featureType: 'road',
                    elementType: 'labels',
                    stylers: [{
                        visibility: 'off'
                    }]
                }]

                map = new google.maps.Map(document.getElementById('map'), {
                    center: {
                        lat: 43.803646,
                        lng: -79.418942
                    },
                    zoom: 13,
                    styles: styles,
                    mapTypeControl: false
                });
                var locations = [{
                        title: 'Kavkaz Restaurant',
                        location: {
                            lat: 43.78825,
                            lng: -79.467264
                        }
                    },
                    {
                        title: 'A Yiddishe Mame Restaurant',
                        location: {
                            lat: 43.808537,
                            lng: -79.470641
                        }
                    },
                    {
                        title: 'Babushka Club',
                        location: {
                            lat: 43.836554,
                            lng: -79.50581
                        }
                    },
                    {
                        title: 'Mint Lounge',
                        location: {
                            lat: 43.796283,
                            lng: -79.417449
                        }
                    },
                    {
                        title: 'Mezza Notte',
                        location: {
                            lat: 43.811911,
                            lng: -79.452171
                        }
                    },
                    {
                        title: 'Bagel World',
                        location: {
                            lat: 43.812108,
                            lng: -79.452992
                        }
                    }
                ];
                var largeInfowindow = new google.maps.InfoWindow();
                var drawingManager = new google.maps.drawing.DrawingManager({
                    drawingMode: google.maps.drawing.OverlayType.POLYGON,
                    drawingControl: true,
                    drawingControlOptions: {
                        position: google.maps.ControlPosition.TOP_LEFT,
                        drawingModes: [
                            google.maps.drawing.OverlayType.POLYGON
                        ]
                    }
                });
                var defaultIcon = makeMarkerIcon('0091ff');
                var highlightedIcon = makeMarkerIcon('FFFF24');
                for (var i = 0; i < locations.length; i++) {
                    var position = locations[i].location;
                    var title = locations[i].title;
                    var marker = new google.maps.Marker({
                        position: position,
                        title: title,
                        animation: google.maps.Animation.DROP,
                        icon: defaultIcon,
                        id: i
                    });
                    markers.push(marker);
                    marker.addListener('click', function() {
                        populateInfoWindow(this, largeInfowindow);
                    });
                    marker.addListener('mouseover', function() {
                        this.setIcon(highlightedIcon);
                    });
                    marker.addListener('mouseout', function() {
                        this.setIcon(defaultIcon);
                    });
                }
                document.getElementById('show-listings').addEventListener(
                    'click', showListings);
                document.getElementById('hide-listings').addEventListener(
                    'click', hideListings);
            }
            function showListings() {
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                    bounds.extend(markers[i].position);
                }
                map.fitBounds(bounds);
            }
            function hideListings() {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                }
            }
            function makeMarkerIcon(markerColor) {
                var markerImage = new google.maps.MarkerImage(
                    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' +
                    markerColor +
                    '|40|_|%E2%80%A2',
                    new google.maps.Size(21, 34),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(10, 34),
                    new google.maps.Size(21, 34));
                return markerImage;
            }
            
            
            