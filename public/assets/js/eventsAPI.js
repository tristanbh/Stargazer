$(document).ready(function () {
    $('.add').on('submit', function (event) {
        event.preventDefault();
        var newData = {
            name: $('#input').val().trim()
        };

        $.ajax({
            url: '/events',
            type: 'POST',
            data: JSON.stringify(newData),
            contentType: 'application/json'
        }).then(
            function () {
                console.log('Added data item');
                location.reload();
            }
        );
    });

    $('.update').on('click', function (event) {
        event.preventDefault();
        id = $(this).data("id");
        value = $(this).data("value");
        action = $(this).data("action");

        if (action === "++") {
            value++;
        } else if (action === "--") {
            value--;
        }

        $.ajax({
            url: '/events/' + id,
            type: 'PUT',
            data: JSON.stringify({ value }),
            contentType: 'application/json'
        }).then(
            function () {
                console.log('Updated id: ' + id);
                location.reload();
            }
        );
    });
});

function viewAPIEvents(arr) {
    $('#upcomingEvents').empty();
    
    arr.forEach(res => {
        var viewDiv = $("<div>");
        var titleDiv = $("<h5>");
        var dateDiv = $("<h6>");
        var descDiv = $("<p>");
        var addressDiv = $("<h6>");
        var deleteSpan = $("<span>");

        deleteSpan.addClass("delete");
        viewDiv.addClass("col-12 mb-3");
        dateDiv.addClass("text-muted");
        addressDiv.addClass("text-muted");
        descDiv.addClass("mb-3");

        titleDiv.text(res.title);
        dateDiv.text(res.date);
        descDiv.text(res.description);
        addressDiv.text(res.address);
        deleteSpan.attr("data-id", res.id);
        deleteSpan.html("&times");

        viewDiv.append(deleteSpan);
        viewDiv.append(titleDiv);
        viewDiv.append(dateDiv);
        viewDiv.append(addressDiv);
        viewDiv.append(descDiv);

        deleteSpan.on('click', function (event) {
            event.preventDefault();
    
            $.ajax({
                url: '/events/' + res.id,
                type: 'DELETE'
            }).then(
                function (res) {
                    console.log(res.body);
                    getLocationData('', userLocation.lat, userLocation.lng, userLocation.tz);
                }
            );
        });
        
        $('#upcomingEvents').append(viewDiv);
    });
}