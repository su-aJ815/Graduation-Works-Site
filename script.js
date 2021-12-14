$('.pop').hide();


$('#comment_btn').click(function() {
    $('.pop').show(500);

})
    

$('.fa-times').click(function() {
    $('.pop').hide(500);

})


let a = 0




$('.t-eight').click(function() {

    if (a == 0) {
        $('#hiddenContent').hide(400);
        a = 1
    }else if (a == 1) {
        $('#hiddenContent').show(400);
        a = 0
    }


   
})