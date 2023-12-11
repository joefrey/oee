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


  // dashed curves
  gsap.utils.toArray('.dashed-curve').forEach(function (dashElem) {
    ScrollTrigger.create({
      trigger: dashElem,
      start: "top 80%",
      end: "bottom 20%",
      markers: false,
      once: true,
      onEnter: function () {
        const dashedCurve = dashElem.querySelector('.thePath');
        gsap.to(dashedCurve, 1.8, {
          strokeDashoffset: -dashedCurve.getTotalLength(),
          strokeDasharray: dashedCurve.getTotalLength(),
          
          ease: "expo.inOut",
        })
      }
    })
  });

  // show animate elements
  gsap.utils.toArray('.el-anim').forEach(function (el) {
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      end: "bottom 20%",
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
        
      }
    })
  });

});