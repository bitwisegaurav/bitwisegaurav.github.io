gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});

// this will add the refresh() method to the ScrollTrigger class.
ScrollTrigger.prototype.refresh = function(hard) {
    gsap.utils.refresher.refresh(this, hard);
}

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();