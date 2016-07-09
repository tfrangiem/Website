/*    
Theme Name: tfrangiem
Author: Teresa Frangie
Description: a simple theme to show all my work.
Version: 1.0
 */

$(document).ready(function(){
	menuOnScroll();
});

//Function to mark an item from a section width a css class.
function menuOnScroll(mySection, myMenu, myClass) {
  $(window).scroll(function(){
    var elScroll = $(window).scrollTop();
    $(mySection).each(function(i){
      if ($(this).offset().top <= elScroll) {
        $(myMenu).removeClass(myClass);
        $(myMenu).eq(i).addClass(myClass);
      }
    });
  });
}
//Call function.
//First parameter will be the section that we want to go.
//Second will be the item that will change his css.
//Third will be the class css to add to the item( Our second parameter) Is IMPORTAT to note that we must to skip the dot of our class.
menuOnScroll('section','nav ul li a', 'current' );



//Function to animate the scroll when click on a menu item.
//IMPORTANT. This function is only use for animate the scroll, you could skip it if you want.
function scrollToAnyPoint (navItem) {
  var getAttr;
  $(navItem).click(function(e){
    e.preventDefault();
    getAttr = $(this).attr('href');
    var toSection = $(getAttr).offset().top;
    $("html, body").animate({scrollTop:toSection}, 1000)
  });
}
//Call Function
scrollToAnyPoint('nav ul li a');




//Tabs
$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
