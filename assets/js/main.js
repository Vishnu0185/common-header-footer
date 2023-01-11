
new WOW().init();

//-- Nav Sticky-->

 const selectHeader = document.querySelector('#header');
 if (selectHeader) {
 document.addEventListener('scroll', () => {
   window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
 });
 }
 
 
//----------TOGGLE CLOSE--------->

// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')
// const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false })
// navLinks.forEach((l) => {
//  l.addEventListener('click', () => { bsCollapse.toggle() })
// })




//----------Read More--------->


$('ul.term-list').each(function(){
 if( $(this).find('li').length > 4){    
   $('li', this).eq(3).nextAll().hide().addClass('toggleable');
   $(this).append('<li  class="more">Read More</li>');    
 }
 $(this).on('click','.more', toggleShow);
});


function toggleShow(){
 var opened = $(this).hasClass('less');  
 $(this).text(opened ? 'Read More' : 'Less').toggleClass('less', !opened);    
 $(this).siblings('li.toggleable').slideToggle();
}



/* Preloader
   */
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}




// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// ------------------ Nav bar dropdown menu open on hover -------------------

// $(document).ready(function () {
//   $('.dropdown-toggle').mouseover(function() {
//       $('.dropdown-menu').show();
//   })

//   $('.dropdown-toggle').mouseout(function() {
//       t = setTimeout(function() {
//           $('.dropdown-menu').hide();
//       }, 100);

//       $('.dropdown-menu').on('mouseenter', function() {
//           $('.dropdown-menu').show();
//           clearTimeout(t);
//       }).on('mouseleave', function() {
//           $('.dropdown-menu').hide();
//       })
//   })
// })