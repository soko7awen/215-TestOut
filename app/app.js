var scriptPath = document.currentScript.src;
var scriptDir = scriptPath.substring(0, scriptPath.lastIndexOf('/'));

$(document).ready(function() {
    var navbarLoad = $('#partialNavbar').load(scriptDir + '/../includes/navbar.html');
    var footerLoad = $('#partialFooter').load(scriptDir + '/../includes/footer.html');

    $.when(navbarLoad, footerLoad).done(function() {
        $("body").fadeIn(200);
    });
});
