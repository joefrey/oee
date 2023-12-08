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
      1.7,
      {
        scale: 1.0,
        opacity: 1,
        visibility: "visible",
        ease: "expo.inOut",
      },
      "-=1.7"
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
      delay: 2,
      ease: "expo.inOut",
      stagger: {
        amount: 0.03,
      },
    });

    ScrollTrigger.batch(".el-gsap", {
      onEnter: (batch) => {
        gsap.to(batch, 1.8, {
          y: 0,
          opacity: 1,
          visibility: "visible",
          ease: "expo.inOut",
        });
        // gsap.from(batch, {rotation: 360, duration: 2})
      },
      toggleActions: "play none none none",
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
    const image = document.querySelector("#image0_301_15");
    gsap.set(image, {
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
    const introContents = document.querySelectorAll(
      ".section_hero-intro .el-gsap"
    );
    introContents.forEach((el) => {
      gsap.set(el, {
        y: 50,
        opacity: 0,
      });
    });

    gsap.set(".el-gsap", {
      y: 50,
      opacity: 0,
    });
  }
});
