$ (window).scroll (function()
{ var nik=$(document).scrollTop(); 
    console.log(nik);

if((nik>1150)&&(nik<1300)){

$('.card-1').addClass('animate__animated animate__bounceInLeft');

$('.card-2').addClass(' animate__animated animate__flipInX');
$('.card-3').addClass(' animate__animated animate__flipInX');

$('.card-4').addClass(' animate__animated animate__bounceInRight');


}
})

$(window).scroll (function()
{ var clas=$(document).scrollTop(); 
    console.log(clas);

if((clas>979)&&(clas<1000)){

$('.backup').addClass('animate__animated animate__bounceInUp');
}
if((clas>1540)&&(clas<1600)){

$('.vdo1').addClass('animate__animated animate__fadeInLeft');

;
}
if((clas>1800)&&(clas<1900)){
  $('.vdo2').addClass('animate__animated animate__fadeInRight')
}


})