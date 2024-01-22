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
        // const scrollContainer = document.getElementById('testscroll');
        
        // scrollContainer.addEventListener('mousedown', (e) => {
        //     isDragging = true;
        //     startPosition = e.pageX - scrollContainer.offsetLeft;
        //     scrollLeft = scrollContainer.scrollLeft;
        // });
        
        // scrollContainer.addEventListener('mouseleave', () => {
        //     isDragging = false;
        // });
        
        // scrollContainer.addEventListener('mouseup', () => {
        //     isDragging = false;
        // });
        
        // scrollContainer.addEventListener('mousemove', (e) => {
        //     if (!isDragging) return;
        
        //     // Temporarily disable pointer events on the scroll container
        //     scrollContainer.style.pointerEvents = 'none';
        
        //     const newPosition = e.pageX - scrollContainer.offsetLeft;
        //     const distance = newPosition - startPosition;
        //     scrollContainer.scrollLeft = scrollLeft - distance;
        
        //     // Re-enable pointer events after handling the drag-and-drop
        //     setTimeout(() => {
        //         scrollContainer.style.pointerEvents = 'auto';
        //     });
        // });


        //tables 
        // if ($('.table') != null) {
        //     var table = new DataTable('.table', {
        //         fixedColumns: {
        //             left: 1,
        //             left: 2,
        //         },
        //         responsive: {
        //             fixedColumns: false
        //         },
        //         paging: false,
        //         info: false,
        //         searching: false,
        //         scrollCollapse: true,
        //         scrollX: true,
        //         scrollY: "75vh",
        //         ordering: false
        //     }); 
        //     jQuery(window).on('resize', function () {
        //         var win = jQuery(this); //this = window
        //         if (win.width() >= 1200) {
        //             table.fixedColumns().left('1');
        //             table.fixedColumns().left('2');
        //         }
        //         else {
        //             table.fixedColumns().left('0');                           
        //         }
        //     });
        //     table.on( 'draw', function () {
        //         console.log( 'Redraw occurred at: '+new Date().getTime() );
        //     } );
        

        //     $('.table').on('show.bs.dropdown', (event) => {           
        //         let thisTable = event.target.closest('table');         
        //         thisTable.classList.add('dropdowns-opened'); 
        //         $(thisTable).find('tr').addClass('non-dropdown');  
        //         event.target.closest('tr').classList.remove('non-dropdown');
        //     });
            
        //     $('.table').on('hidden.bs.dropdown', (event) => {
        //         let thisTable = event.target.closest('table');
        //         thisTable.classList.remove('dropdowns-opened');
        //         $(thisTable).find('tr').removeClass('non-dropdown');
        //     });
        // }
    })
};




