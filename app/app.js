$(document).ready(function() {
    var navbarLoad = $('#partialNavbar').load('/includes/navbar.html');
    var footerLoad = $('#partialFooter').load('/includes/footer.html');

    $.when(navbarLoad, footerLoad).done(function() {
        $("body").fadeIn(200);
    });
});
