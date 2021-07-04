
  function newfunc() {
   location.href("index2.html");
 }


$(document).ready (function()
{
   $('#play').click(function () {
     
      localStorage.setItem("text", $('#name').val())
   })
  

   })

var right= new Audio('happykids.mp3');
var wrong =new Audio('sad.mp3');

 $('#num1').click (function()
{
   if ($('#img').hasClass("pic1"))
   {
 
    right.play();
    $('.star').show();
    $('.star').hide('slow');
    $("#img").addClass("pic2");
    $('#img').removeClass("pic1");
   }
  else 
   {console.log('loser');
wrong.play();
$('.dislike').show();
$('.dislike').hide('slow');

    }

 }
 )
 

$('#num2').click (function()
{
   if ($('#img').hasClass("pic2"))
   { 
        right.play();
      $('.star').show('slow');
      $('.star').hide('slow');
    $("#img").addClass("pic3");
    $('#img').removeClass("pic2");
   }
  else 
   {
   wrong.play();
  $('.dislike').show();
  $('.dislike').hide('slow');
    }

 }
 )

 $('#num3').click (function()
 {
    if ($('#img').hasClass("pic3"))
    {
      right.play();
      $('.star').show("slow");
    $('.star').hide('slow');
     $("#img").addClass("pic4");
     $('#img').removeClass("pic3");
    }
   else 
    {
    wrong.play();
 $('.dislike').show();
 $('.dislike').hide('slow');
     }
 
  }
  )

  $('#num4').click (function()
  {
     if ($('#img').hasClass("pic4"))
     {
      right.play();
      $('.star').show("slow");
      $('.star').hide('slow');
      $("#img").addClass("pic5");
      $('#img').removeClass("pic4");
  
     }
    else 
     {console.log('loser');
     wrong.play();
     $('.dislike').show();
     $('.dislike').hide('slow');
  
      }
  
   }
   )

   $('#num5').click (function()
   {
      if ($('#img').hasClass("pic5"))
      {
         right.play();
         $('.star').show("slow");
         $('.star').hide('slow');
       $("#img").addClass("pic6");
       $('#img').removeClass("pic5");
      }
     else 
      {console.log('loser');
      wrong.play();
      $('.dislike').show();
      $('.dislike').hide('slow');
       }
   
    }
    )

    $('#num6').click (function()
    {
       if ($('#img').hasClass("pic6"))
       {
         right.play();
         $('.star').show("slow");
         $('.star').hide('slow');
        $("#img").addClass("pic7");
        $('#img').removeClass("pic6");
    
       }
      else 
       {console.log('loser');
       wrong.play();
       $('.dislike').show();
       $('.dislike').hide('slow');
        }
    
     }
     )

     $('#num7').click (function()
     {
        if ($('#img').hasClass("pic7"))
        {
         right.play();
         $('.star').show("slow");
         $('.star').hide('slow');
         $("#img").addClass("pic8");
         $('#img').removeClass("pic7");
        }
       else 
        {
        wrong.play();
        $('.dislike').show();
        $('.dislike').hide('slow');
         }
     
      }
      )
 
      $('#num8').click (function()
      {
         if ($('#img').hasClass("pic8"))
         {
            right.play();
            $('.star').show("slow");
            $('.star').hide('slow');
          $("#img").addClass("pic9");
          $('#img').removeClass("pic8");
         }
        else 
        
       {
         wrong.play();
         $('.dislike').show();
         $('.dislike').hide('slow');
          }
      
         }
       )

       $('#num9').click (function()
       {
          if ($('#img').hasClass("pic9"))
          {right.play();
            $('.star').show("slow");
            $('.star').hide('slow');
            var name = localStorage.getItem("text")
            $('#user').text(name);
            $('#done').show();

           
           
         
          }
         else 
          {
          wrong.play();
          $('.dislike').show();
          $('.dislike').hide('slow');
         
           }
       
        }
        )



// .....................................

// document.getElementById(
    // $("#img").toggleClass('pic2');
// var color = 'rgb(100,155,155)';
//  $('#img').css("background-image",'URL(${number2.jpg})');