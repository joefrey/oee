$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  resetElements();

  gsap.utils.toArray(".gsap-section").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 80%",
      end: "bottom 20%",
      markers: false,
      once: true,
      onEnter: function () {
        let sectionID = elem.id;

        if (sectionID === "hero") {
          // heroAnimate();
          heroCurveAnimate();
        }
        // else if (sectionID === "stats") {
        //   statsAnimate();
        //   bubblesAnimate();
        // }
      },
    });
  });
  function heroAnimate() {}
  function heroCurveAnimate() {
    const path = document.querySelectorAll("#curve-hero path");
    console.log("enter animte");
    const svgLinesTL = gsap.timeline();
    // const svgLinesTL = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: path,
    //     start: "top 90%",
    //     end: "+=270%",
    //     scrub: true,
    //     once: false,
    //     pin: false,
    //     markers: false,
    //   },
    // });

    path.forEach((el) => {
      svgLinesTL.to(
        el,
        3,
        {
          // strokeDashoffset: 0,
          strokeDashoffset: el.getTotalLength() * 2,
          strokeDasharray: el.getTotalLength(),
          // strokeDasharray: 0,
          ease: "expo.inOut",
        },
        "start"
      );
    });
    svgLinesTL.to("#curve-hero #pattern0Hero", 1, {
      scale: 1.0,
      ease: "expo.inOut",
    });
  }
  function resetElements() {
    // reset path
    const path = document.querySelectorAll("#curve-hero path");
    path.forEach((el) => {
      gsap.set(el, {
        strokeDashoffset: el.getTotalLength(),
        strokeDasharray: el.getTotalLength(),
      });
    });
    gsap.set("#curve-hero #pattern0", {
      scale: 1.5,
      transformOrigin: "50% 50%",
    });
  }
});
