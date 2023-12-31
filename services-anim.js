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
          serviceAnimate();
        } else if (sectionID === "getintouch") {
          // getInTouchAnimate();
        }
      },
    });
  });

  // dashed curves
  gsap.utils.toArray(".dashed-curve").forEach(function (dashElem) {
    ScrollTrigger.create({
      trigger: dashElem,
      start: "top 80%",
      end: "bottom 20%",
      markers: false,
      once: true,
      onEnter: function () {
        const dashedCurve = dashElem.querySelector(".thePath");
        gsap.to(dashedCurve, 1.8, {
          strokeDashoffset: -dashedCurve.getTotalLength(),
          strokeDasharray: dashedCurve.getTotalLength(),

          ease: "expo.inOut",
        });
      },
    });
  });

  // show animate elements
  gsap.utils.toArray(".el-anim").forEach(function (el) {
    ScrollTrigger.create({
      trigger: el,
      start: "top 100%",
      end: "bottom 0%",
      markers: false,
      once: true,
      onEnter: function () {
        gsap.to(el, 1.8, {
          y: 0,
          opacity: 1,
          visibility: "visible",
          delay: 0.5,
          ease: "expo.out",
          stagger: {
            amount: 0.3,
          },
        });
      },
    });
  });

  function serviceAnimate() {
    const path = document.querySelectorAll("#curveTwo path");
    const svgLinesTL = gsap.timeline({
      scrollTrigger: {
        trigger: path,
        start: "top 90%",
        end: "+=270%",
        // start: "top 80%",
        // end: "bottom 20%",
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
          strokeDashoffset: 0,
          strokeDasharray: el.getTotalLength(),
          ease: "expo.inOut",
        },
        "start"
      );
    });
    const image = document.querySelector("#curveTwo_image0_202_42");
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
  }

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
    const navLink = document.querySelectorAll(".nav_link");
    svgLinesTL.to(
      navLink,
      {
        color: "#fff",
      },
      "-=1.4"
    );
    const circleGradient = document.querySelector(".circle__gradient");
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

    // const dashedCurve = document.querySelector('#dashed-curve #thePath');
    // svgLinesTL.to(dashedCurve, 1.8, {
    //   strokeDashoffset: -dashedCurve.getTotalLength(),
    //   strokeDasharray: dashedCurve.getTotalLength(),
    // strokeDasharray: '11, 11',
    //   ease: "expo.inOut",
    // })
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

    // dashed lines
    const dashedPaths = document.querySelectorAll(".dashed-curve .thePath");
    dashedPaths.forEach((el) => {
      gsap.set(el, {
        strokeDashoffset: 0,
        strokeDasharray: el.getTotalLength(),
      });
    });

    // show animate elements reset
    const elAnim = document.querySelectorAll(".el-anim");
    elAnim.forEach((el) => {
      gsap.set(elAnim, {
        y: 100,
        opacity: 0,
      });
    });

    const circleGradient = document.querySelector(".circle__gradient");
    gsap.set(circleGradient, {
      y: -20,
      opacity: 0,
      rotation: 10,
    });

    const curveTwoPath = document.querySelectorAll("#curveTwo path");
    curveTwoPath.forEach((el) => {
      gsap.set(el, {
        strokeDashoffset: el.getTotalLength(),
        strokeDasharray: el.getTotalLength(),
      });
    });

    const curveTwoImage = document.querySelector("#curveTwo_image0_202_42");
    gsap.set(curveTwoImage, {
      scale: 1.5,
      opacity: 0,
      transformOrigin: "50% 50%",
    });

    const navLink = document.querySelectorAll(".nav_link");
    gsap.set(navLink, {
      color: "#2C3838",
    });
  }
});
