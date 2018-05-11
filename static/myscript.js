$(document).ready(function () {


    $("#main-title").on("click", function (event) {
        $.ajax({
            url: snippetUrl,
            type: "get",
            success: function (response) {
                console.log(response);
                $("#main-content").append(response);
            }
        });
        event.preventDefault();
    });

    $("#clicky-link").on("click", function (event) {
        $.get(snippetUrl).done(function (response) {
            console.log(response);
            $("#main-content").append(response);

        });
        event.preventDefault();
    });
});