$("#main-title").on("click", function () {
    $.ajax({
        url: snippetUrl,
        type: "get",
        success: function (response) {
            console.log(response);
            $("#main-content").append(response);
        }
    });
});