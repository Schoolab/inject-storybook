export const aside = () => {
    $(function () { 
        var modelAside = {
            index: 0,
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
                    // modelAside.aside.removeClass( "d-none");
                    if( $( ".aside-content" ).length === 1 ){
                        modelAside.index= 0;
                    }
                    view.update();             
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
                    modelAside.index = null;
                    view.update();
                    // modelAside.aside.toggleClass( "d-none" );
                    // modelAside.btnContent.removeClass( "active" );
                    // modelAside.btnBottom.removeClass( "active" );
                } );
            },

            onClick: function(){
                modelAside.btnContent.on( "click", function() {
                    modelAside.index = $(this).index();
                    view.update();                 
                }); 
                modelAside.btnBottom.on( "click", function() {
                    modelAside.index = $(this).index();
                    view.update();
                }); 
            },

            // activeStatus: function(){
            //     modelAside.btnContent.on( "click", function() {
            //         modelAside.aside.removeClass( "d-none" );
            //         $(this).addClass( "active" ).siblings().removeClass( "active" );                    
            //         modelAside.btnBottom.eq($(this).index()).addClass( "active" ).siblings().removeClass( "active" ); 
                           
            //     } ); 
        
            //     modelAside.btnBottom.on( "click", function() {
            //         modelAside.aside.removeClass( "d-none" );
            //         $(this).addClass( "active" ).siblings().removeClass( "active" );
            //         modelAside.btnContent.eq($(this).index()).addClass( "active" ).siblings().removeClass( "active" );
            //     } ); 
            //},
            

            init: function(){
                view.update();
                this.removeAsideOnMobile(); 
                this.onResize();
                this.closeAside();
                //this.activeStatus();
                this.onClick();
                //view.init();
                
            }
        }

        var view = {
            // init: function(){
            //     modelAside.btnContent.each(function( index ) {
            //         $( this ).on( "click", function() {
            //             var currentTarget = modelAside.asideContent.eq( index );                
            //             currentTarget.siblings().addClass( "d-none");
            //             currentTarget.removeClass( "d-none");
                      
            //         } ); 
            //     });
            //     modelAside.btnBottom.each(function( index ) {
            //         $( this ).on( "click", function() {
            //             var currentTarget = modelAside.asideContent.eq( index );                
            //             currentTarget.siblings().addClass( "d-none");
            //             currentTarget.removeClass( "d-none");
                      
            //         } ); 
            //     });
            // },
            update: function(){
              
                if( modelAside.index !== null ) {                  
                    modelAside.aside.removeClass( "d-none" );                              
                    modelAside.btnContent.eq( modelAside.index ).addClass( "active" ).siblings().removeClass( "active" ); 
                    modelAside.btnBottom.eq( modelAside.index ).addClass( "active" ).siblings().removeClass( "active" ); 
                    modelAside.asideContent.eq( modelAside.index ).removeClass( "d-none").siblings().addClass( "d-none"); 
                }
                else {                  
                    modelAside.aside.addClass( "d-none" );
                    modelAside.btnContent.removeClass( "active" );
                    modelAside.btnBottom.removeClass( "active" );
                    modelAside.asideContent.addClass( "d-none"); 
                }                
               
            },
        }   

        presenterAside.init();
    })
};




