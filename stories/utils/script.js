export const script = () => {
    $(function () {
        //tooltips
        var tooltips = $('[data-toggle="tooltip"]');
        tooltips.tooltip();
        function disableTooltipInMobile(){
            tooltips.tooltip('enable');
            if (window.matchMedia("(max-width: 991.98px)").matches) {
                tooltips.tooltip('disable');
            }          
        }
        disableTooltipInMobile();
        $(window).resize(function() {
            disableTooltipInMobile();           
        });
        //dropdown
        $('.dropdown-toggle').dropdown();
    })    
};
