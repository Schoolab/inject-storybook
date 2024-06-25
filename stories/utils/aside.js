export const aside = () => {
    $(function () { 
        var modelAside = {
            index: 0,
            // currentPathname : new URL(window.location.href).pathname,
            currentPathname : new URL(window.location.href).searchParams.get('id'),
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
                    if( $( ".aside-body" ).length === 1 ){
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
            onClick: function(){
                modelAside.btnContent.on( "click", function() {
                    modelAside.index = $(this).index();
                    view.update(); 
                    presenterAside.localStorageSetItem();                
                }); 
                modelAside.btnBottom.on( "click", function() {
                    modelAside.index = $(this).index();
                    view.update();
                    presenterAside.localStorageSetItem();
                }); 
                modelAside.btnClose.on( "click", function() {
                    modelAside.index = "undefined";
                    view.update();
                    presenterAside.localStorageSetItem(); 
                });
            },              
            localStorageSetItem : function(){ 
                if( $( ".aside-body" ).length > 1 ){               
                    window.localStorage.setItem(modelAside.currentPathname, modelAside.index);  
                }
            },
            
            localStorageGetItem : function(){
               if(window.localStorage.getItem(modelAside.currentPathname) !== null) {
                    modelAside.index = window.localStorage.getItem(modelAside.currentPathname);
               }
            },

            init: function(){
                if( $( ".aside-body" ).length > 0 ){                     
                    this.localStorageGetItem(); 
                    this.localStorageSetItem();               
                    view.update();
                    this.removeAsideOnMobile(); 
                    this.onResize();         
                    this.onClick();  
                }
            }
        }

        var view = {
            update: function(){             

                if( modelAside.index !== "undefined" ) {                  
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




