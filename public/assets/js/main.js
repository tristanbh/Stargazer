var userLocation = {
    'lat': 0,
    'lng': 0,
    'place_id': 0,
    'address': ''
};

$(document).ready(function () {
    let defaultLat = '37.5381861';
    let defaultLng = '-77.5224841';
    var timezone = (new Date().getTimezoneOffset())/60*-1;

    getLocationData('', defaultLat, defaultLng, timezone);


    $('#address-submit').on('click', function () {
        event.preventDefault();
        let address = $('#address-input').val().trim();
        getLocationData(address, 0, 0, timezone);
    });

    $('#geolocate').on('click', function () {
        event.preventDefault();
        geolocate()
            .then(function (result) {
                let address = '';
                let lat = result.lat;
                let lng = result.lng;
                getLocationData('', lat, lng, timezone);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    mapboxgl.accessToken = 
    'pk.eyJ1IjoidHJpc3RhbmJoIiwiYSI6ImNqYmM5N20zbTFneWQzMm1yOTMzdnhwbjkifQ.LsCkehEVMnMWOEui5tZDCw';
    var map = null;

    $("#mapButtonCollapse").click(function () {
        $('#atlasCollapse').collapse('hide');
        $('#loginCollapse').collapse('hide');
        if (!$("#map").children().length) {
            setTimeout(function () {
                map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/tristanbh/cje66mox751w52rmluqoga58i'
                });
            }, 0);
        }
    });

    $("#atlasButtonCollapse").click(function () {
        $('#mapCollapse').collapse('hide');
        $('#loginCollapse').collapse('hide');
        if (!$("starmap1").children().length) {
            setTimeout(function () {
                var planetarium = $.virtualsky({
                    id: 'starmap1',
                    projection: 'stereo',
                    showstarlabels: true,
                    constellations: true,
                    latitude: 25.2744,
                    longitude: -133.7751,
                    lang: 'en',
                    // gridlines_gal: true,

                });
            }, 250);
        }
    });

    $("#loginButtonCollapse").click(function () {
        $('#atlasCollapse').collapse('hide');
        $('#mapCollapse').collapse('hide');
    });
});

function geolocate() {
    return new Promise(function (resolve, reject) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
        else {
            reject('Geolocate unsuccessful');
        }
    });
};

function getLocationData(address, lat, lng, timezone) {
    console.log("getting data");
    let queryURL = '/userLocation?address=' + address + '&lat=' + lat + '&lng=' + lng + '&tz=' + timezone;
    queryURL = encodeURI(queryURL);
    $.ajax({
        url: queryURL,
        type: 'GET'
    }).done(function (data) {
        console.log(data);
        userLocation = data.userLocation;
        goodTimes = data.goodTimes;
        RSSEvents = data.RSSEvents;
        riseSetTimes = data.riseSetTimes;
        APIEvents = data.APIEvents;
        APILocations = data.APILocations;
        getViewingConditions(goodTimes);
        viewRSS(RSSEvents);
        viewAPIEvents(APIEvents);
        viewAPILocations(APILocations);
        viewRiseSetTimes(riseSetTimes);
    });
}

function addEvent() {
    // queryURL = "/events/"
    // $.ajax({
    //     url: queryURL,
    //     type: 'GET'
    // }).done(function(res) {
    //     console.log(res);
    //     if (res === 'isLoggedIn') {
            $('#addEvent').modal();
    //     } else {
    //         alert('You must be logged in to add new events');
    //     }
    // }); 
}

function addLocation() {
    // queryURL = "/locations/"
    // $.ajax({
    //     url: queryURL,
    //     type: 'GET'
    // }).done(function(res) {
    //     console.log(res);
    //     if (res === 'isLoggedIn') {
            $('#addLocation').modal();
        // } else {
        //     alert('You must be logged in to add new spots');
        // }
    // }); 
}