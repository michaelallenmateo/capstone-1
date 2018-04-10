
// $(document).on('focusout', '.navbar', function() {
// 	console.log('hello');
// });

$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});
// to make navbar dropdown menus close upon clicking on other part of the page