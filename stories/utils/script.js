export const script = () => {
    $(function () {
        //tooltips
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
        //dropdown
        $('.dropdown-toggle').dropdown();
        //drag and scroll horizontally
        $(document).ready(function () {
            if ($('.scroll-h') != null) {
                $('.scroll-h').mousedown(function (event) {
                    $(this)
                        .data('down', true)
                        .data('x', event.clientX)
                        .data('scrollLeft', this.scrollLeft)
                        .addClass("dragging");

                    return false;
                })
                $('.scroll-h').mouseup(function (event) {
                    $(this)
                        .data('down', false)
                        .removeClass("dragging");
                })
                $('.scroll-h').mousemove(function (event) {
                    if ($(this).data('down') == true) {
                        this.scrollLeft = $(this).data('scrollLeft') + $(this).data('x') - event.clientX;
                    }
                })
                $(window).mouseout(function (event) {
                    if ($('.team-form-data').data('down')) {
                        try {
                            if (event.originalTarget.nodeName == 'BODY' || event.originalTarget.nodeName == 'HTML') {
                                $('.team-form-data').data('down', false);
                            }
                        } catch (e) { }
                    }
                });
            }
        });
        //tables 
        var table = new DataTable('.table', {
            fixedColumns: {
                left: 1,
                left: 2,
            },
            responsive: {
                fixedColumns: false
            },
            paging: false,
            info: false,
            searching: false,
            scrollCollapse: true,
            scrollX: true,
            scrollY: "50vh",
            ordering: false
        }); 
        jQuery(window).on('resize', function () {
            var win = jQuery(this); //this = window
            if (win.width() >= 1200) {
                table.fixedColumns().left('1');
                table.fixedColumns().left('2');
            }
            else {               
                table.fixedColumns().left('0');
                table.scrollY = '100vh';
               
            }
        });
    

        $('.table').on('show.bs.dropdown', (event) => {           
            let thisTable = event.target.closest('table');         
            thisTable.classList.add('dropdowns-opened');          
            // add class to all <tr>
            $(thisTable).find('tr').addClass('non-dropdown');            
            // remove class of this <tr>
            event.target.closest('tr').classList.remove('non-dropdown');
        });
        
        $('.table').on('hidden.bs.dropdown', (event) => {
            let thisTable = event.target.closest('table');
            thisTable.classList.remove('dropdowns-opened');
            $(thisTable).find('tr').removeClass('non-dropdown');
        });
    })
};




