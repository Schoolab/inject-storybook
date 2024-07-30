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
        document.addEventListener('DOMContentLoaded', function() {
            // $('select.custom-select:not(.filterSelect)').selectpicker({
            //     noneSelectedText: 'Nothing selected',
            //     styleBase: 'btn btn-lg',
            //     style: 'btn-default',
            //     iconBase: 'dropdown-item--icon icon',
            //     showTick: true,
            //     tickIcon: 'icon-check',
            //     noneResultsText: 'No results for “{0}”…',
            //     liveSearch: true,
            //     liveSearchPlaceholder: "Search…",
            //     liveSearchNormalize: true,
            //     virtualScroll: "400"
            // });

            $('.form-group select:not(.custom-select-tags)').selectpicker({
                width: false,
                noneSelectedText: 'Nothing selected',
                styleBase: 'btn btn-lg',
                style: 'btn-default',
                iconBase: 'icon',
                showTick: true,
                tickIcon: 'icon-check',
            });

            $('select:not(.table-filter):not(.card-filter):not(.dropdown-card):not(.select-with-search):not(.filterSelect):not(.custom-select-tags)').selectpicker({
                width: '100%',
                noneSelectedText: 'Nothing selected',
                styleBase: 'btn btn-lg',
                style: 'btn-default',
                iconBase: 'icon',
                showTick: true,
                tickIcon: 'icon-check',
            });
    
            $('select.table-filter').selectpicker({
                width: 'fit',
                noneSelectedText: 'Nothing selected',
                styleBase: 'btn',
                style: 'btn-transparent',
                iconBase: 'icon',
                showTick: true,
                tickIcon: 'icon-check',
            });
    
            $('select.card-filter').selectpicker({
                width: 'fit',
                noneSelectedText: 'Nothing selected',
                styleBase: 'btn',
                style: 'btn-link card-filter',
                iconBase: 'icon',
                showTick: true,
                tickIcon: 'icon-check',
            });
    
            $('select.dropdown-card').selectpicker({
                width: false,
                noneSelectedText: 'Nothing selected',
                styleBase: 'btn',
                style: 'btn-card',
                iconBase: 'icon',
                showTick: false
            });
    
            $('select.select-with-search').selectpicker({
                width: false,
                noneSelectedText: 'Nothing selected',
                styleBase: 'btn btn-lg',
                style: 'btn-default',
                iconBase: 'icon',
                showTick: true,
                tickIcon: 'icon-check',
                noneResultsText: 'No results for “{0}”…',
                liveSearch: true,
                liveSearchPlaceholder: "Search…",
                liveSearchNormalize: true,
                virtualScroll: "400"
            });
        });
        
        // Selectize
        document.addEventListener('DOMContentLoaded', () => {
            $('select.custom-select-tags').selectize({
                delimiter: ",",
                persist: false,
                maxItems: null,
                valueField: 'id',
                labelField: 'name',
                searchField: 'name',
                options: [
                    {id: 1, name: 'SaaS', url: ''},
                    {id: 2, name: 'Projects', url: ''},
                    {id: 3, name: 'Management', url: ''}
                ],
                create: true,
                plugins: ['remove_button', 'clear_button'],
                render: {
                    item: function(item, escape) {
                        return '<div class="badge badge-pill badge-tag is-small"><span>' + escape(item. name) + '</span></div>';
                    },
                    remove_button: function(item, escape) {
                        return '<a href="javascript:void(0)" class="remove icon icon-close-circle" tabindex="-1" title="Remove"></a>';
                    },
                },
                create: function (input) {
                    return {
                        value: input,
                        text: input,
                    };
                },
                });
            });
            
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
    
    
    
    
    