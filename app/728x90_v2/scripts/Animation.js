var app = app || {};


app.Animation = (function () {

    var curtain,
        tl1,
        tl2,
        buttonExit,
        cta_arrow,
        cta_txt,
        push,
        atlas,
        tiguan,
    atlas_fWheel,
        atlas_rWheel,
        tiguan_fWheel,
        tiguan_rWheel;

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
        tl1 = new TimelineMax();
        tl2 = new TimelineMax();

        curtain = document.getElementById('curtain');
        buttonExit = document.getElementById('button-exit');
        cta_arrow = document.getElementById('cta_arrow');
        cta_txt = document.getElementById('cta_txt');
        push = document.getElementById('push');
        atlas = document.getElementById('atlas');
        tiguan = document.getElementById('tiguan');
        atlas_fWheel = document.getElementById('atlas_fWheel');
        atlas_rWheel = document.getElementById('atlas_rWheel');
        tiguan_fWheel = document.getElementById('tiguan_fWheel');
        tiguan_rWheel = document.getElementById('tiguan_rWheel');

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(cta_arrow, .25, {x: 5, ease: Sine.easeOut});
            TweenMax.to(cta_arrow, .25, {x: 0, delay: .25, ease: Sine.easeIn});
        });
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
        tl1.to(curtain, .5, {opacity: 0})
            .to(cta_txt, .5, {opacity: 1})
            .to(cta_arrow, .5, {opacity: 1}, "-=.5");

        tl2.from(atlas, 1, {scale:.7, x:"-=150", y:"-=20", ease: Sine.easeOut})
            .from(atlas_fWheel, 1, {rotation: "-=540", ease: Sine.easeOut}, "-=1")
            .from(atlas_rWheel, 1, {rotation: "-=540", ease: Sine.easeOut}, "-=1")
            .to(atlas_fWheel, .5, {opacity: 0}, "-=.25")
            .to(atlas_rWheel, 1, {opacity: 0}, "-=1")


            .from(tiguan, 1, {scale:.7, x:"+=150", y:"-=20", ease: Sine.easeOut}, "-=.9")
            .from(tiguan_fWheel, 1, {rotation: "+=540", ease: Sine.easeOut}, "-=1")
            .from(tiguan_rWheel, 1, {rotation: "+=540", ease: Sine.easeOut}, "-=1")
            .to(tiguan_fWheel, .5, {opacity: 0}, "-=.25")
            .to(tiguan_rWheel, 1, {opacity: 0}, "-=1");

        TweenMax.set(container,{delay:2, opacity:1});
        TweenMax.to(push,6,{delay:2, y:-5073,ease:SteppedEase.config(89)});

	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
