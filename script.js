$(document).ready(function () {

    doIt();


    function doIt() {
        var output = $.ajax({
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'json',
            success: function (data) {
                //
                //Change data.source to data.something , where something is whichever part of the object you want returned.
                //To see the whole object you can output it to your browser console using:
                //console.log(data);
                document.getElementById("quote").innerHTML = data.quote;
                document.getElementById("author").innerHTML = data.author;
                //document.getElementById("category").innerHTML = data.category;
                $("a").click(function () {
                    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + data.quote + ' ~ ' + data.author);
                    $(this).attr("target", "_blank");
                });
            },
            error: function (err) {
                document.getElementById("error").innerHTML = 'Error! Check console to see more details.';
                console.log(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "6PjK6tV4nTmshNTy9Njv7F3NbL0Ip1Fkek2jsntvnMazllDc4f"); // Enter here your Mashape key
            }
        });
    }

    $("#drwa").click(doIt);


});
