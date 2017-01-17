$(document).ready(function(){
    
      $("#past").on('show.bs.modal', function (event){
        var button = $(event.relatedTarget);
        var modal =$(this);
        modal.find("#event-head").html(button.data('title'));
        modal.find('#event-rule').html(button.data('rule'));
        modal.find('#event-date').html(button.data('date'));
        modal.find('#event-time-report').html(button.data('retime'));
        modal.find('#event-time').html(button.data('time'));
        modal.find('#event-prize').html(button.data('prize'));
        modal.find('#event-contact').html(button.data('contact'));
        modal.find('#event-venue').html(button.data('venue'));
        modal.find('#registration-fee').html(button.data('fee'));
      });
});