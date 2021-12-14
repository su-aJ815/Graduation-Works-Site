$('.pop').hide();


$('#comment_btn').click(function() {
    $('.pop').show(500);

})
    

$('.fa-times').click(function() {
    $('.pop').hide(500);

})


let a = 0


// $('.t-eight').click(function() {

//     if (a == 0) {
//         $('#hiddenContent').fadeOut(500);
//         a = 1
//     }else if (a == 1) {
//         $('#hiddenContent').fadeIn(500);
//         a = 0
//     }


   
// })

$('.t-eight').click(function() {

    if (a == 0) {
        // $('#hiddenContent').css('opacity','0');
        $("#hiddenContent").animate({opacity: "0"},300);
        // $('.designMajor').css('margin-top','-676px');
        $(".designMajor").animate({marginTop: "-676px"},500);
        a = 1
    }else if (a == 1) {
        // $('#hiddenContent').css('opacity','1');
        $("#hiddenContent").animate({opacity: "1"},1000);
        // $('.designMajor').css('margin-top','166px');
        $(".designMajor").animate({marginTop: "166px"},500);
        a = 0
    }


   
})