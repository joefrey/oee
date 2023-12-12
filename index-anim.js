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
          heroCurveAnimate();
        } else if (sectionID === "section_services") {
          serviceCurveAnimate();
        } else if (sectionID === "who_we_are") {
          whoWeAreAnimate();
        } else if (sectionID === "getintouch") {
          getInTouchAnimate();
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
          strokeDashoffset: -dashedCurve.getTotalLength() * 2,
          // strokeDashoffset: 0,
          strokeDasharray: dashedCurve.getTotalLength(),

          ease: "expo.inOut",
        });
      },
    });
  });

  // curves with image

  function getInTouchAnimate() {
    const dashedOverlay = document.querySelector(
      ".dashed_curve__whoweare_getintouch .dash__overlay"
    );

    const dashedLineThreeTL = gsap.timeline({
      scrollTrigger: {
        trigger: dashedOverlay,
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
    dashedLineThreeTL.to(dashedOverlay, 1.8, {
      bottom: 0,
      height: "0%",
      ease: "expo.inOut",
    });

    const getInTouchWrap = document.querySelector(".get_in_touch_wrap");

    const els = document.querySelectorAll(".get_in_touch_wrap .el-gsap");

    const sectionTL = gsap.timeline({
      scrollTrigger: {
        trigger: getInTouchWrap,
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

    sectionTL.to(els, 1.8, {
      y: 0,
      opacity: 1,
      visibility: "visible",
      delay: 0.5,
      ease: "expo.out",
      stagger: {
        amount: 0.3,
      },
    });
  }
  function whoWeAreAnimate() {
    // dashed_curve__services_whoweare;

    const dashedOverlay = document.querySelector(
      ".dashed_curve__services_whoweare .dash__overlay"
    );

    const dashedLineTwoTL = gsap.timeline({
      scrollTrigger: {
        trigger: dashedOverlay,
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
    dashedLineTwoTL.to(dashedOverlay, 1.8, {
      bottom: 0,
      height: "0%",
      ease: "expo.inOut",
    });

    /* path and curve*/
    const path = document.querySelectorAll("#curveThree path");
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
          strokeDashoffset: el.getTotalLength() * 2,
          strokeDasharray: el.getTotalLength(),
          ease: "expo.inOut",
        },
        "start"
      );
    });
    const image = document.querySelector("#image0_308_47CurveThree");
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

    const els = document.querySelectorAll(
      ".whoweare_content__homepage .el-gsap"
    );
    const sectionWrap = document.querySelector(".whoweare_content__homepage");

    const sectionTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionWrap,
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

    sectionTL.to(els, 1.8, {
      y: 0,
      opacity: 1,
      visibility: "visible",
      delay: 0.5,
      ease: "expo.out",
      stagger: {
        amount: 0.3,
      },
    });
  }
  function serviceCurveAnimate() {
    const path = document.querySelectorAll("#curveTwo path");
    const dashedOverlay = document.querySelector(
      ".dashed_curve__hero_services .dash__overlay"
    );

    const dashedLineOneTL = gsap.timeline({
      scrollTrigger: {
        trigger: dashedOverlay,
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
    dashedLineOneTL.to(dashedOverlay, 1.8, {
      bottom: 0,
      height: "0%",
      ease: "expo.inOut",
    });

    // const svgLinesTL = gsap.timeline();

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

    const servicesEls = document.querySelectorAll(
      ".services_content_wrap .el-gsap"
    );
    const serviceWrap = document.querySelector(".services_content_wrap");

    const servicesTL = gsap.timeline({
      scrollTrigger: {
        trigger: serviceWrap,
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

    servicesTL.to(servicesEls, 1.8, {
      y: 0,
      opacity: 1,
      visibility: "visible",
      delay: 0.5,
      ease: "expo.out",
      stagger: {
        amount: 0.3,
      },
    });
  }
  function heroCurveAnimate() {
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
        "start=-3"
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
    const circleGradient = document.querySelector(".circle__gradient_homepage");
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

    const curveTwoPath = document.querySelectorAll("#curveTwo path");
    curveTwoPath.forEach((el) => {
      gsap.set(el, {
        strokeDashoffset: el.getTotalLength(),
        strokeDasharray: el.getTotalLength(),
      });
    });

    const curveThreePath = document.querySelectorAll("#curveThree path");
    curveThreePath.forEach((el) => {
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

    const curveTwoImage = document.querySelector("#curveTwo_image0_202_42");
    gsap.set(curveTwoImage, {
      scale: 1.5,
      opacity: 0,
      transformOrigin: "50% 50%",
    });

    const curveThreeImage = document.querySelector("#image0_308_47CurveThree");
    gsap.set(curveThreeImage, {
      scale: 1.5,
      opacity: 0,
      transformOrigin: "50% 50%",
    });

    const circleGradient = document.querySelector(".circle__gradient_homepage");
    gsap.set(circleGradient, {
      y: -20,
      opacity: 0,
      rotation: 10,
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
        // strokeDashoffset: el.getTotalLength(),
        strokeDasharray: el.getTotalLength(),
      });
    });
  }
});
