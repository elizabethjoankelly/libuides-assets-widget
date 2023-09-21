$(document).ready(function() {
    var apiUrl = "YOUR URL";
    var documentList = $('#widget');
    $.getJSON(apiUrl, function(data) {
        // Sort the data in descending order based on the document id
        data.sort(function(a, b) {
            return b.id - a.id;
        });

        // For each JSON record, create a list item with a hyperlink
        $.each(data, function(index, document) {
            var listItem = $('<li class="list-group-item">');
            var link = $('<a>').attr('href', 'YOUR ASSETS URL PREFIX' + document.id).text(document.name);
            listItem.append(link);
            documentList.append(listItem);
        });
    });
});