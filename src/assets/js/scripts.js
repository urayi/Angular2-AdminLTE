$.widget.bridge('uibutton', $.ui.button);

//receive calls from typescript code to update the layouts
var AdminLTE = (function() {
  return {
    init: function() {
      $(function(){
        $.AdminLTE.layout.activate();
        $.AdminLTE.layout.fix();
        $.AdminLTE.layout.fixSidebar();
      });
    }
  }
})(AdminLTE||{});

$(function () {
  $('#example').DataTable({
    'paging'      : true,
    'lengthChange': false,
    'searching'   : false,
    'ordering'    : true,
    'info'        : true,
    'autoWidth'   : false
  })
})

