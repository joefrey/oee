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
    // const svgLinesTL = gsap.timeline();
    const svgLinesTL = gsap.timeline({
      scrollTrigger: {
        trigger: path,
        start: "top 90%",
        end: "+=270%",
        scrub: false,
        once: false,
        pin: false,
        markers: false,
      },
    });

    path.forEach((el) => {
      svgLinesTL.to(
        el,
        3,
        {
          // strokeDashoffset: 0,
          // strokeDasharray: 0,
          strokeDashoffset: el.getTotalLength() * 2,
          strokeDasharray: el.getTotalLength(),
          ease: "expo.inOut",
        },
        "start"
      );
    });
    const image = document.querySelector("#image0_301_15");
    svgLinesTL.to(
      image,
      1,
      {
        scale: 1.0,
        opacity: 1,
        ease: "expo.inOut",
      },
      "-=3"
    );
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
    const image = document.querySelector("#image0_301_15");
    gsap.set(image, {
      scale: 1.5,
      opacity: 0,
      transformOrigin: "50% 50%",
    });
  }
});
