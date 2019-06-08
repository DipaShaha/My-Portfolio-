
// $(function(){
// 	var imgSrc="../img/image1.jpeg";
// var wheight = $(window).height(); //get the height of the window
// $('.fullheight').css('height', wheight); //set to window tallness  
// });

// $(this).parent().css({'background-image': 'url('+imgSrc+')'});


//  $(window).resize(function() {
//     wheight = $(window).height(); //get the height of the window
//     $('.fullheight').css('height', wheight); //set to window tallness   
//     $(this).parent().css({'background-image': 'url('+imgSrc+')'});
//   });


var animationend='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

 			//title animation

 			var titleAnimation='animated zoomIn';
		     $("h1").mouseover(function(){
		     
		         $("#intro h1").addClass(titleAnimation).one(animationend,function(){
		        	$(this).removeClass(titleAnimation);
		        });
		    });
		   
		    
		    //brand animation
		    var brandAnimation='animated flip';
		    $(".navbar-brand").hover(function(){
		     
		         $(".navbar-brand").addClass(brandAnimation).one(animationend,function(){
		        	$(this).removeClass(brandAnimation);
		        });
		    });


		    //hire animation
		    var hireAnimation='animated swing';
		    $("body").hover(function(){
		     
		         $(".hire").addClass(hireAnimation).one(animationend,function(){
		        	$(this).removeClass(hireAnimation);
		        	 
		        });
		    });
		    $("body").mouseout(function(){
		     
		         $(".hire").addClass(hireAnimation).one(animationend,function(){
		        	$(this).removeClass(hireAnimation);
		        	 
		        });
		    });