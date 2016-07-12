/**
  Calculate width of contents and adjust class accordingly.
**/

(function() {

  function isWidthGreater(portrait) {
    var widthOfChildren = 0;
    portrait.children().each(function(idx,obj) {
      widthOfChildren += obj.offsetWidth;
    });

    return portrait[0].offsetWidth > widthOfChildren;
  }

  function floatTableOfContents(direction) {
    $("#table-of-contents").removeClass("right left").addClass(direction);
  }

  var alignPortrait = function () {
    if (isWidthGreater($("#portrait #top"))) {
      floatTableOfContents('right');
    }
    else {
      floatTableOfContents('left');
    }
  };

  $(document).ready(alignPortrait);

  $(window).resize(alignPortrait);
})();
