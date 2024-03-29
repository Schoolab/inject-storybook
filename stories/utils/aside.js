export const aside = () => {
    $(function () { 
        var modelAside = {
            aside : $( ".application-aside" ),
            asideContent: $( ".aside-content-container" ),
            btnClose :  $( ".close-aside" ),
            btnContent : $( ".aside-buttons .btn" ),
            btnBottom : $( ".aside-buttons-bottom .btn" )
        }

        var presenterAside = {
            removeAsideOnMobile: function(){
                if (window.matchMedia( "(max-width: 991.98px)" ).matches) {
                    modelAside.aside.addClass( "d-none"  );
                    modelAside.btnContent.removeClass( "active" );
                    modelAside.btnBottom.removeClass( "active" );
                }   
            },
            displayAsideOnDesktop: function(){
                if (window.matchMedia( "(min-width: 991.99px)" ).matches) {                  
                    modelAside.aside.removeClass( "d-none");               
                }   
            },
            onResize: function(){
                $(window).resize(function () {
                    presenterAside.removeAsideOnMobile();
                    presenterAside.displayAsideOnDesktop();
                });   
            },          
            closeAside: function(){
                modelAside.btnClose.on( "click", function() {
                    modelAside.aside.toggleClass( "d-none" );
                    modelAside.btnContent.removeClass( "active" );
                    modelAside.btnBottom.removeClass( "active" );
                } );
            },
            activeStatus: function(){
                modelAside.btnContent.on( "click", function() {
                    modelAside.aside.removeClass( "d-none" );
                    $(this).addClass( "active" ).siblings().removeClass( "active" );                    
                    modelAside.btnBottom.eq($(this).index()).addClass( "active" ).siblings().removeClass( "active" ); 
                           
                } ); 
        
                modelAside.btnBottom.on( "click", function() {
                    modelAside.aside.removeClass( "d-none" );
                    $(this).addClass( "active" ).siblings().removeClass( "active" );
                    modelAside.btnContent.eq($(this).index()).addClass( "active" ).siblings().removeClass( "active" );
                } ); 
            },
            init: function(){
                presenterAside.removeAsideOnMobile(); 
                presenterAside.onResize();
                presenterAside.closeAside();
                presenterAside.activeStatus();
                viewAsideContent.init();
            }
        }

        var viewAsideContent = {
            init: function(){
                modelAside.btnContent.each(function( index ) {
                    $( this ).on( "click", function() {
                        var currentTarget = modelAside.asideContent.eq( index );                
                        currentTarget.siblings().addClass( "d-none");
                        currentTarget.removeClass( "d-none");
                      
                    } ); 
                });
                modelAside.btnBottom.each(function( index ) {
                    $( this ).on( "click", function() {
                        var currentTarget = modelAside.asideContent.eq( index );                
                        currentTarget.siblings().addClass( "d-none");
                        currentTarget.removeClass( "d-none");
                      
                    } ); 
                });
            }
        }   

        presenterAside.init();
    })
};




