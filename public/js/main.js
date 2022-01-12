const scrollMenu = x => {
	let tag = $("a[name='"+x+"']");
	$('html,body').animate({scrollTop: tag.offset().top},'slow');
}

let about = $("a[href='#nosotros']");
let services = $("a[href='#servicios']");
let contact = $("a[href='#contacto']");
let start = $("a[href='#inicio']");
let responsiveMenu = $(".icon-menu");
let navbarMenu = $(".header__navbar");

start.click(() => {
	scrollMenu("inicio");
	/*menu.toggleClass("active");*/
	navbarMenu.removeClass("active");
});
about.click(() => {
	scrollMenu("nosotros");
	/*menu.toggleClass("active");*/
	navbarMenu.removeClass("active");
});
services.click(() => {
	scrollMenu("servicios");
	navbarMenu.removeClass("active");
});
contact.click(() => {
	scrollMenu("contacto");
	navbarMenu.removeClass("active");
});

$("#goup").fadeOut();
$(window).scroll(function(){
    if ($(this).scrollTop() < 205) {
        $("#godown").fadeIn();
    }else{
        $("#godown").fadeOut();
    }
    if ($(this).scrollTop() > 250) {
        $("#goup").fadeIn();
    }else{
        $("#goup").fadeOut();
    }
});

responsiveMenu.click(() => {
	navbarMenu.toggleClass("active");
});

$('.c2a_action').click(function() {copyTxt($(this))});

function copyTxt(i) {
	var temp = $("<input>");
	$("body").append(temp);
	temp.val($(i).text()).select();
	document.execCommand("copy");
	temp.remove();
}

$(document).ready(function () {
 
    setInterval(() => moveRight(), 5000);

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
  
    $('#slider').css({ width: slideWidth, height: slideHeight }); 
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 1000, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 1000, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(() => moveLeft() );
    $('a.control_next').click(() => moveRight() );
    
});    
