$(function() {
  $('.blown').each(function(index, element) {
    
    setTimeout(function(){
      element.remove();
    }, 5000);
  });

    // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  var cancel = document.getElementsByClassName("cancel")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on cancel, close the modal
  cancel.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  var wrap = $(".home");
  var idea = $(".idea");
  var discussion = $(".discussion");
  var mockup = $(".mockup");
  var website = $(".website");
  var methodContainer = $(".method-list");

  wrap.on("scroll", function(e) {
    this.scrollTop > 300 ? firstItem(this) : idea.removeClass("visible");

    function firstItem(object) {
      idea.addClass("visible");
      object.scrollTop > 443 ? fixList(object) : methodContainer.removeClass("fixed");
    }

    function fixList(object) {
      methodContainer.addClass("fixed");
      object.scrollTop > 650 ? secondItem(object) : discussion.removeClass("visible");
    }

    function secondItem(object) {
      discussion.addClass("visible");
      object.scrollTop > 1000 ? thirdItem(object) : mockup.removeClass("visible");
    }

    function thirdItem(object) {
      mockup.addClass("visible");
      object.scrollTop > 1300 ? fourthItem(object) : website.removeClass("visible");
    }

    function fourthItem(object) {
      website.addClass("visible");
    }

  });    

});






