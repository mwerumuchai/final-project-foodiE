var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("myFood");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 4 seconds
}

(function (jQuery) {
  $.expr[':'].Contains = function(a,i,m){    //:contains() this first converts the text value to uppercase and then does the comparison
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };

//input field to the header
  function listFilter(header, list) {                   //create the filter form and append it to the header element
    var form = $("<form>").attr({"class":"filterform","action":"#"}),
        input = $("<input>").attr({"class":"filterinput","type":"text"});
    $(form).append(input).appendTo(header);     //use append to insert the input field into the form           appendTo() function add the form and input field to the header tag

    $(input)
      .change( function () {   //chenage event is used to check for text entered into the inut field
        var filter = $(this).val();
        if(filter) {
          $(list).find(".recipe:not(:Contains(" + filter + "))").parent().slideUp(); // filter through the images/recipe to select the inputted ingredients
          $(list).find(".recipe:Contains(" + filter + ")").parent().slideDown();
        } else {
          $(list).find(".entry").slideDown(); //displays the recipes/images only with the specific inputted ingredients
        }
        return false;
      })
    .keyup( function () {    //keyup event is used because it's triggered after the key and so the value of the field includes the just-typed letter ////ps: keydown event is triggeredbefore the letter is added-as your pressing the key-and therfore Js can't ascertain the value
        $(this).change();
    });
  }

  $(function () {
    listFilter($("#header"), $("#list"));
  });
}(jQuery));
