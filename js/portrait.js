(function() {

  function isWidthGreater(portrait) {
    var widthOfChildren = 0;
    portrait.children().each(function(idx,obj) {
      widthOfChildren += obj.offsetWidth;
    });

    return portrait[0].offsetWidth > widthOfChildren;
  }

  function floatTableOfContents(direction) {
    $("#table-of-contents").css('float',direction);
    $("#table-of-contents ul li").css('text-align',direction);
  }

  function floatTableOfContentsRight() {
    floatTableOfContents('right');
    $("#table-of-contents").css('margin-top','0px');
    $("#table-of-contents ul").css('left','0px');
  }

  function floatTableOfContentsLeft() {
    floatTableOfContents('left');
    $("#table-of-contents").css('margin-top','10px');
    $("#table-of-contents ul").css('left','-40px');
  }

  var alignPortrait = function () {
    if (isWidthGreater($("#portrait"))) {
      floatTableOfContentsRight();
    }
    else {
      floatTableOfContentsLeft();
    }
  };

  $(document).ready(alignPortrait);

  $(window).resize(alignPortrait);
})();
