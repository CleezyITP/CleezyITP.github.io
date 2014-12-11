


$(document).ready(function(){


  $('#runner').css({
   opacity:0,

  
  
  });

  dance();
  


  });


function dance(){

    console.log("hi");

  setTimeout(function() {
   $('#runner').animate({
      opacity:1,


      // bottom:"+=10px"
    }, 15000, 'easeInOutBounce');
    }, 600);

}


