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
        } else if (sectionID === "mission") {
          missionAnimate();
        } else if (sectionID === "section_services") {
          servicesAnimate();
        }
      },
    });
  });

  function servicesAnimate() {
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
  }

  function missionAnimate() {
    const curveTwoPath = document.querySelectorAll("#curveTwo path");
    const svgCurveTwoLinesTL = gsap.timeline({
      scrollTrigger: {
        trigger: curveTwoPath,
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

    curveTwoPath.forEach((el) => {
      svgCurveTwoLinesTL.to(
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
    const curveTwoImage = document.querySelector("#curveTwo_image0_202_42");
    svgCurveTwoLinesTL.to(
      curveTwoImage,
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

    const curveThreePath = document.querySelectorAll("#curveThree path");
    curveThreePath.forEach((el) => {
      gsap.set(el, {
        strokeDashoffset: el.getTotalLength(),
        strokeDasharray: el.getTotalLength(),
      });
    });

    const curveThreeImage = document.querySelector("#image0_308_47CurveThree");
    gsap.set(curveThreeImage, {
      scale: 1.5,
      opacity: 0,
      transformOrigin: "50% 50%",
    });
  }

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
});
