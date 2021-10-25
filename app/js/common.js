$('.btn-toggle').on('click', function (e) {
    e.preventDefault();
    // $(this).parents('.panel-collapse').toggleClass('in');

    var
        $this = $(this),
        collapseBody = $(this).parents('.panel-collapse');


    if(!collapseBody.hasClass('trigger')){
        collapseBody.addClass('trigger');
        $this.html('СВЕРНУТЬ');

        // content.slideDown();
    } else {
        collapseBody.removeClass('trigger');
        $this.html('РАЗВЕРНУТЬ');

        // content.slideUp();
    }
});