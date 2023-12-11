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
          heroAnimate();
        } else if (sectionID === "section_services") {
          // serviceAnimate();
        } else if (sectionID === "getintouch") {
          // getInTouchAnimate();
        }
      },
    });
  });

  function heroAnimate() {
    const path = document.querySelectorAll("#curve-hero path");
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
          strokeDashoffset: el.getTotalLength() * 2,
          strokeDasharray: el.getTotalLength(),
          ease: "expo.inOut",
        },
        "start"
      );
    });

    const dashedCurve = document.querySelector('#dashed-curve #thePath');
    svgLinesTL.to(dashedCurve, 1.8, {
      strokeDashoffset: 0,
      strokeDasharray: dashedCurve.getTotalLength(),
      ease: "expo.inOut",
    })
    const image = document.querySelector("#image0_301_15");
    svgLinesTL.to(
      image,
      1.7,
      {
        scale: 1.0,
        opacity: 1,
        visibility: "visible",
        ease: "expo.inOut",
      },
      "-=1.9"
    );
    const circleGradient = document.querySelector(
      ".circle__gradient__page_inner"
    );
    svgLinesTL.to(
      circleGradient,
      1.7,
      {
        y: 0,
        opacity: 1,
        visibility: "visible",
        rotation: 0,
        ease: "expo.inOut",
      },
      "-=1"
    );

    const heroEls = document.querySelectorAll(".section_hero-intro .el-gsap");

    gsap.to(heroEls, 1.8, {
      y: 0,
      opacity: 1,
      visibility: "visible",
      delay: 0.5,
      ease: "expo.out",
      stagger: {
        amount: 0.3,
      },
    });
    
    

    // const heroDashed = document.querySelector('.hero-dashed');
    // gsap.to(heroDashed, {drawSVG: '100%'})
  }

  function resetElements() {
    const path = document.querySelectorAll("#curve-hero path");
    path.forEach((el) => {
      gsap.set(el, {
        strokeDashoffset: el.getTotalLength(),
        strokeDasharray: el.getTotalLength(),
      });
    });

    const heroCurveImage = document.querySelector("#image0_301_15");
    gsap.set(heroCurveImage, {
      scale: 1.5,
      opacity: 0,
      transformOrigin: "50% 50%",
    });

    // intro texts
    const gsapEls = document.querySelectorAll(".el-gsap");
    gsap.set(gsapEls, {
      y: 100,
      opacity: 0,
    });

    const dashedCurve = document.querySelector('#dashed-curve #thePath');
    gsap.set(dashedCurve, {
      strokeDashoffset: dashedCurve.getTotalLength(),
      // strokeDasharray: dashedCurve.getTotalLength(),
      strokeDasharray: '11, 11',
    })


  }
});
