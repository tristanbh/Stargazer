function getRSSEvents() {
    console.log('getting RSS Events');
    var queryURL = '/getRSSEvents?lat=' + userLocation.lat + '&lng=' + userLocation.lng;
    console.log(queryURL);
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: queryURL,
            type: 'GET'
        }).done(function(RSSEvents) {
            resolve(RSSEvents);
        });
    });
}

