export const script = () => {
    $(function () { 
        //tooltips
        $('[data-toggle="tooltip"]').tooltip({ trigger: "hover focus" }); 
        var tooltips = $('[data-toggle="tooltip"]');
        tooltips.tooltip();
        function disableTooltipInMobile() {
            tooltips.tooltip('enable');
            if (window.matchMedia("(max-width: 991.98px)").matches) {
                tooltips.tooltip('disable');
            }
            $('.application-shortcutbar.shortcutbar-expanded a').tooltip('disable')
            $('.application-shortcutbar.shortcutbar-expanded div').tooltip('disable')
            
        }
        disableTooltipInMobile();
        $(window).resize(function () {
            disableTooltipInMobile();
        });

        // Bootstrap Select
        // document.addEventListener('DOMContentLoaded', function() {
        //     $('select').selectpicker();
        // });
        
        // Prevent dropdown to close if not saved
        $('[data-save-to-close="true"]').on('hide.bs.dropdown', function(e) {
            if (e.clickEvent) {
                e.preventDefault(); 
                
                var dropdownMenu = $(this).find('.dropdown-menu form');
                
                dropdownMenu.addClass('shaking'); 
                
                setTimeout(function() {
                    dropdownMenu.removeClass('shaking'); 
                }, 1000);
                
                $('#modalHidePrevented').toast('show');
            }
        });
    })
};




