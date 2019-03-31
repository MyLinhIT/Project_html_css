$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        items: 1,
    })
    $(window).scroll(function () {
        $('.navbar-collapse').removeClass('show');
    })
    $('.navbar-nav li').on('click',function () {
        $('.navbar-collapse').removeClass('show');
    })
    $('.DangNhap-DangKy').on('click',function () {
        $('.navbar-collapse').removeClass('show');
    })
    $(window).click(function () {
            $('.navbar-collapse').removeClass('show');
    })

    });