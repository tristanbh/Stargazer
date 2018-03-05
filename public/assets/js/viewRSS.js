function viewRSS(arr) {

    $("#celestialEvents").empty()

    arr.forEach(res => {
        if (!res.title.includes("days ago")) {


            $(res.description).attr("id", "celEventDesc");
            var title = res.title;
            var desc = res.description;
            var link = res.link;
    
            var viewDiv = $("<div>");
            var titleDiv = $("<h4>");
            $(titleDiv).attr("id", "celEventTitle");

            var linkDiv = $("<a href=" + link + " target='_blank'>Link to Article</a>");
    
            viewDiv.addClass("row col-12");
            viewDiv.attr("class", "celEvent");
            titleDiv.text(title);

            viewDiv.append(titleDiv);
            viewDiv.append(desc);
            viewDiv.append(linkDiv);
        }

        $('#celestialEvents').prepend(viewDiv);
    });
}