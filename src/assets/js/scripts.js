$.widget.bridge('uibutton', $.ui.button);

//receive calls from typescript code to update the layouts
var SpartaGui = (function() {
  return {
    init: function() {
      $(function(){
        $.SpartaGui.layout.activate();
        $.SpartaGui.layout.fix();
        $.SpartaGui.layout.fixSidebar();
      });
    }
  }
})(SpartaGui||{});


/*$(document).ready(function () {
  $('#TableReport').DataTable({
    "scrollY"     : 500,
    "scrollX"     : true
  })
});*/
var myElement = document.getElementById(myElement);
var hammertime = new Hammer(myElement);
hammertime.on('pan', function(ev) {
	console.log(ev);
});