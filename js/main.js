





$(window).on('load',function(){
    console.log('loaded js')


   

    function toggleMenu(e){
        console.log(e)
        if(!$main[0].style.filter){
            $main[0].style.filter='blur(5px)'
            $nav[0].style=`
            background-color: #698EA6; 
            z-index: 1; 
            justify-content: 
            space-around;
            align-items: center; 
            align-content: auto;
            align-self: auto;
            display: flex;
            flex-basis: auto;
            flex-direction: column;
            flex-flow: auto;
            flex-grow: auto;
            flex-shrink: auto;
            flex-wrap: auto;
            order: auto;
            font-size: 2em;
            width: 100%;
            margin: 1em; 
            background-color: #698EA6;
            height: 200px;
            `
            // $nav[0].style='display: block; font-size: 3em; background-color: #698EA6;'
        }
        else{
            $main[0].style.filter=''
            $nav[0].style=''
        }
    }








    // from https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    







// from https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript
    function getScrollPercentage(){
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();
        
        var scrollPercent = (s / (d - c)) * 100;
        
        console.clear();
        console.log(scrollPercent);
        return scrollPercent
    }






    function handleElementView(element){
        if(isScrolledIntoView(element)){
            console.log('in view')
        }
    }




    let timer = 1;
    let $auv = $('.auv_corner')
    function cycleAUVImages(){
        if(!$auv) return;
        let interval = setInterval(function(){
            console.log(`IMG_037${timer}`)
            $auv[0].src = `../images/IMG_037${timer}.jpg`
            if(timer >= 9){
                timer = 1;
            }
            timer++;
        }, 4990)
    }






    // =========================================
    
    // What gets executed on load
    let $menu = $('.menu i')
    let $main = $("main");
    let $nav = $('nav')
    let $main_project = $('.main_project')
    
    $menu.click(function(e){
        toggleMenu(e)
    });

    // decide how to handle in view loading
    // $(window).on('scroll', function(){
    //     handleElementView($main_project)
    // });
    cycleAUVImages();
    
    
})

   


