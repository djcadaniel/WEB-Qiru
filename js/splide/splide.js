document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide',{
        type: 'loop',
        perPage: 1,
        perMove:1,
    //     height     : '30rem',
	// cover      : true,
        // focus: 'center',
        // height   : '29rem',
	    // autoWidth: true,
        rewind : true,
        autoplay:true,
        interval:2000,
        // focus    : 'center',
        gap: 0,
        easing: 'ease',
        arrows: false,
        pauseOnHover: true,
        keyboard:true,
        // direction  : 'ttb',
        // heightRatio: 0.6,
        cover: false,
        width: '100%',
        breakpoints: {
            640: {
                perPage: 1,
            },
            480:{
                perPage:1
            }
        }
    } ).mount();
} );

