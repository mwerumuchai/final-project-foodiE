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
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

(function ($) {
  jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };

//input field to the header
  function listFilter(header, list) {                   //create the filter form and append it to the header element
    var form = $("<form>").attr({"class":"filterform","action":"#"}),
        input = $("<input>").attr({"class":"filterinput","type":"text"});
    $(form).append(input).appendTo(header);     //appendTo() function add the form and input field to the header tag

    $(input)
      .change( function () {
        var filter = $(this).val();
        if(filter) {
          $(list).find(".recipe:not(:Contains(" + filter + "))").parent().slideUp();
          $(list).find(".recipe:Contains(" + filter + ")").parent().slideDown();
        } else {
          $(list).find(".entry").slideDown();
        }
        return false;
      })
    .keyup( function () {
        $(this).change();
    });
  }

  $(function () {
    listFilter($("#header"), $("#list"));
  });
}(jQuery));
