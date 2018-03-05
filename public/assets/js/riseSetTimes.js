function viewRiseSetTimes(res) {
    $('#moonPhaseText').empty();
    $('#moonPhaseDate').empty();
    $('#moonPhaseTextRise').empty();
    $('#moonPhaseTextSet').empty();

    
    var closestPhase = res[0].closestphase.phase;
    var closestDate = res[0].closestphase.date;
    var rise = res[0].moondata[2].time;
    var set = res[0].moondata[1].time;

    var viewDiv = $("<div>");
    var phaseDiv = $("<h3>");
    var dateDiv = $("<h3>");
    var riseDiv = $("<h3>");
    var setDiv = $("<h3>")

    viewDiv.addClass("row col-12");
    phaseDiv.text("Closest moon phase: " + closestPhase);
    dateDiv.text("Occurrence: " + closestDate);
    riseDiv.text("Moonrise Today: " + rise);
    setDiv.text("Moonset Today: " + set);

    viewDiv.append(phaseDiv);
    viewDiv.append(dateDiv);
    // viewDiv.append(riseDiv);
    // viewDiv.append(setDiv);

    $('#moonPhaseTextRise').prepend('<img id="moonPhaseImage" src="/assets/img/moon_rise.svg">')
    $('#moonPhaseTextSet').prepend('<img id="moonPhaseImage" src="/assets/img/moon_set.svg">')

    $('#moonPhaseText').append(phaseDiv);
    $('#moonPhaseDate').append(dateDiv);
    $('#moonPhaseTextRise').append(riseDiv);
    $('#moonPhaseTextSet').append(setDiv);



};