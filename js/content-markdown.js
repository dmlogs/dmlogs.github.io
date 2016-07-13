var dmlogs = dmlogs || {};

dmlogs.loadMarkdown = function(src) {
  $.get(src, function(data) {
    var markdown =  data;
    var converter = new showdown.Converter();
    var content = converter.makeHtml(markdown);
    $("#content").html(content);
  });

}
