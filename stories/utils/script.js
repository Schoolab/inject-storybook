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
            $('.application-shortcutbar.shortcutbar-expanded a').tooltip('disable')
            $('.application-shortcutbar.shortcutbar-expanded div').tooltip('disable')
                  
        }
        disableTooltipInMobile();
        $(window).resize(function() {
            disableTooltipInMobile();           
        });
        //dropdown
        $('.dropdown-toggle').dropdown();
        //drag and scroll horizontally
        const dragScrollH = document.querySelector('.scroll-h');
        let isDown = false;
        let startX;
        let scrollLeft;
        if (dragScrollH !== null){
            dragScrollH.addEventListener('mousedown', (e) => {
                isDown = true;
                dragScrollH.classList.add('active');
                startX = e.pageX - dragScrollH.offsetLeft;
                scrollLeft = dragScrollH.scrollLeft;
            });
            dragScrollH.addEventListener('mouseleave', () => {
                isDown = false;
                dragScrollH.classList.remove('active');
            });
            dragScrollH.addEventListener('mouseup', () => {
                isDown = false;
                dragScrollH.classList.remove('active');
            });
            dragScrollH.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - dragScrollH.offsetLeft;
                const walk = (x - startX) * 3;
                dragScrollH.scrollLeft = scrollLeft - walk;
            });
        }     
    })  
};




