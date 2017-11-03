/*$.widget.bridge('uibutton', $.ui.button);

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

/*$(function () {
  $('#TableReport').DataTable({
    'paging'      : true,
    'lengthChange': false,
    'searching'   : false,
    'ordering'    : true,
    'info'        : true,
    'autoWidth'   : false
  })
})*/
