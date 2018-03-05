function getViewingConditions(arr) {

    $('#viewingTimes').empty()

    if (arr.length >= 1) {
        arr.forEach(res => {

            var resCloudCoverage = res.forecast.clouds.all;
            var resDesc = res.forecast.weather[0].description;
            var resMain = res.forecast.weather[0].main
            var resFrom = new Date(res.from);

            var convertedDate = "Date: " + resFrom.toDateString();
            var cloudCoverage = "Cloud coverage: " + res.forecast.clouds.all + "% ";
            var desc = "Conditions: " + res.forecast.weather[0].description;

            var viewDiv = $("<div>");
            var picDiv = $("<h3>");
            var descDiv = $("<h3>");
            var fromDiv = $("<h3>");


            viewDiv.addClass("row col-12");
            viewDiv.addClass("viewCardClass");
            picDiv.addClass("picClass")
            descDiv.addClass("descClass")
            fromDiv.addClass("fromClass")
            descDiv.text(desc);
            fromDiv.text(convertedDate)


            if (resMain == "Clear") {
                picDiv.html('<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>');
            } else if (resMain == "Clouds") {
                picDiv.html('<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>');
            } else if (resMain == "Rain") {
                picDiv.html('<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>');
            } else if (resMain == "Thunderstorm") {
                picDiv.html('<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div>');
            } else if (resMain == "Snow") {
                picDiv.html('<div class="icon flurries"><div class="cloud"></div><div class="snow"><div class="flake"></div><div class="flake"></div></div></div>');
            } else {
                picDiv.html('Picture Unavailabe');
            }

            viewDiv.append(fromDiv);
            viewDiv.append(picDiv);
            viewDiv.append(descDiv);

            $('#viewingTimes').append(viewDiv);

        })
    } else {

            var failDiv = $("<div>");
            var failText = $("<h3>");

            failText.text("Sorry, no good viewing conditions currently.");
            failDiv.append(failText);

            $('#viewingTimes').append(failDiv);

        }


    };