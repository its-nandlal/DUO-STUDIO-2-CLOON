function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

var cursr = document.querySelector("#cursr")

window.addEventListener("mousemove", function(val){
    cursr.style.left = val.x + 2 + "px"
    cursr.style.top = val.y + 2 + "px"
})




var navgola = document.querySelector(".navgola")
var navgola2 = document.querySelector(".navgola2")

navgola.addEventListener("mouseenter",function(){
    navgola2.style.opacity = "1"
})
navgola.addEventListener("mouseleave",function(){
    navgola2.style.opacity = "0"
})


var el1 = document.querySelector(".el1")
var el2 = document.querySelector(".el2")
var el3 = document.querySelector(".el3")
var btn1 = document.querySelector(".btn1")
var btn2 = document.querySelector(".btn2")
var btn3 = document.querySelector(".btn3")

el1.addEventListener("mouseenter",function(){
    btn1.style.display = "block"
    btn2.style.display = "none"
    btn3.style.display = "none"
})
el1.addEventListener("mouseleave",function(){
    btn1.style.display = "none"
    btn2.style.display = "none"
    btn3.style.display = "none"
})
el2.addEventListener("mouseenter",function(){
    btn1.style.display = "none"
    btn2.style.display = "block"
    btn3.style.display = "none"
})
el3.addEventListener("mouseleave",function(){
    btn1.style.display = "none"
    btn2.style.display = "none"
    btn3.style.display = "none"
})
el3.addEventListener("mouseenter",function(){
    btn1.style.display = "none"
    btn2.style.display = "none"
    btn3.style.display = "block"
})
el1.addEventListener("mouseleave",function(){
    btn1.style.display = "none"
    btn2.style.display = "none"
    btn3.style.display = "none"
})




// Time Line Start 


var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page1 h1",
        scroller: ".main",
        start: "top 27%",
        end: "top 0%",
        // markers: true,
        scrub: 3,
    }
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page1 video",
        scroller: ".main",
        start: "top 70%",
        end: "top 0%",
        // markers: true,
        scrub: 3,
    }
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page1 h1",
        scroller: ".main",
        start: "top -55%",
        end: "top -60%",
        // markers: true,
        scrub: 3,
    }
})
var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page3",
        scroller: ".main",
        start: "top -240%",
        end: "top -235%",
        // markers: true,
        scrub: 3,
    }
})

var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page5",
        scroller: ".main",
        start: "top -15%",
        end: "top -20%",
        // markers: true,
        pin: true,
        scrub: 3,
    }
})

var tl6 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page6",
        scroller: ".main",
        start: "top -45%",
        end: "top -20%",
        // markers: true,
        pin: true,
        scrub: 3,
    }
})

// Time Line End 


// Time line 1

tl1.to(".main",{
    mixBlendMode: "difference"
})

tl1.to("#page1 h1",{
    x: -70,
    filter: "blur(8px)"

},"ani")
tl1.to("#page1 h2",{
    x: 40,
    filter: "blur(8px)"
},"ani")

tl1.to("#page1 p",{
    filter: "blur(4px)"
},"ani")

tl1.to("#page1 video",{
    width: "75%",
    marginTop: "-1vw"
},"ani")




// Time line 2

tl2.to("#page1 video",{
    width: "90%",
    marginTop: "-20vw"
},)


// Time line 3

tl3.to(".main",{
    backgroundColor: "#fff",
    mixBlendMode: "unset"
})

// Time line 4

tl4.to(".main",{
    backgroundColor: "#000",
})
// Time line 5

tl5.to("#page5",{

})
tl6.to("#page5",{

})















var pg5elem = document.querySelectorAll(".pg5elem")

pg5elem.forEach(function(elem){

    elem.addEventListener("mouseenter",function(val){
        var imgee = elem.getAttribute("data-img")
        cursr.style.width = "400px"
        cursr.style.height = "400px"
        cursr.style.borderRadius = "0"
        cursr.style.backgroundImage = `url(${imgee})`
        cursr.style.mixBlendMode = "unset"
        // cursr.style.transform = "translate(-50%,-50%)"

    })

    elem.addEventListener("mouseleave",function(val){
        cursr.style.width = "15px"
        cursr.style.height = "15px"
        cursr.style.borderRadius = "50%"
        cursr.style.mixBlendMode = "difference"
        cursr.style.backgroundImage = `url(unset)`
        cursr.style.transform = "translate(0,0)"

    })
})