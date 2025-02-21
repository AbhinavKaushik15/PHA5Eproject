const bgtext = document.getElementById("bgText");

// First Rectangle
const rectangle1 = document.getElementById("rectangle1");
const image1 = document.getElementById("movingImage1");
const banner1 = document.getElementById("banner1");
const blankRect1 = document.getElementById("blankRect1");

// Second Rectangle
const rectangle2 = document.getElementById("rectangle2");
const image2 = document.getElementById("movingImage2");
const banner2 = document.getElementById("banner2");
const blankRect2 = document.getElementById("blankRect2");

// Third Rectangle
const rectangle3 = document.getElementById("rectangle3");
const image3 = document.getElementById("movingImage3");
const banner3 = document.getElementById("banner3");
const blankRect3 = document.getElementById("blankRect3");

// Fourth Rectangle
const rectangle4 = document.getElementById("rectangle4");
const image4 = document.getElementById("movingImage4");
const banner4 = document.getElementById("banner4");
const blankRect4 = document.getElementById("blankRect4");

let tl = gsap.timeline();

tl.from("#line h1", {
  y: 150,
  stagger: 0.1,
});
tl.to("#movingImage1", {
  duration: 0.1,
  scale: 1,
});
tl.to("#movingImage4", {
  duration: 0.3,
  scale: 1,
});
tl.to("#movingImage2", {
  duration: 0.4,
  scale: 1,
});
tl.to("#movingImage3", {
  duration: 0.45,
  scale: 1,
});

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function rect1() {
  rectangle1.addEventListener("mousemove", (e) => {
    const rect = rectangle1.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - image1.offsetWidth / 4;
    const offsetY = e.clientY - rect.top - image1.offsetHeight / 4;

    gsap.to(rectangle1, {
      x: offsetX,
      y: offsetY,
      duration: 0.2,
      ease: "cubic-bezier(0.61, 1, 0.88, 1)",
      zIndex: 10,
    });
    gsap.to(bgtext, {
      zIndex: -1,
      color: "transparent",
      webkitTextStroke: "1.5px rgb(61, 56, 56)",
    });
    gsap.to(banner1, {
      opacity: 1,
    });
    gsap.to([blankRect2, blankRect3, blankRect4], {
      opacity: 1,
    });
    gsap.to([image2, image3, image4], {
      opacity: 0,
    });
  });

  rectangle1.addEventListener("mouseleave", () => {
    gsap.to(rectangle1, {
      x: 0,
      y: 0,
      duration: 1.5,
      ease: "cubic-bezier(0.61, 1, 0.88, 1)",
      zIndex: 1,
    });
    gsap.to(bgtext, {
      zIndex: 10,
      color: "white",
      webkitTextStroke: "0px #fff",
    });
    gsap.to(banner1, {
      opacity: 0,
    });
    gsap.to([blankRect2, blankRect3, blankRect4], {
      opacity: 0,
    });
    gsap.to([image2, image3, image4], {
      opacity: 1,
    });
  });
}

function rect2() {
  rectangle2.addEventListener("mousemove", (e) => {
    const rect = rectangle2.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - image2.offsetWidth / 4;
    const offsetY = e.clientY - rect.top - image2.offsetHeight / 4;

    gsap.to(rectangle2, {
      x: offsetX,
      y: offsetY,
      duration: 0.2,
      ease: "cubic-bezier(0.61, 1, 0.88, 1)",
      zIndex: 10,
    });
    gsap.to(bgtext, {
      zIndex: -1,
      color: "transparent",
      webkitTextStroke: "1.5px rgb(61, 56, 56)",
    });
    gsap.to(banner2, {
      opacity: 1,
    });
    gsap.to([blankRect1, blankRect3, blankRect4], {
      opacity: 1,
    });
    gsap.to([image1, image3, image4], {
      opacity: 0,
    });
  });

  rectangle2.addEventListener("mouseleave", () => {
    gsap.to(rectangle2, {
      x: 0,
      y: 0,
      duration: 1.5,
      ease: "cubic-bezier(0.61, 1, 0.88, 1)",
      zIndex: 1,
    });
    gsap.to(bgtext, {
      zIndex: 10,
      color: "white",
      webkitTextStroke: "0px #fff",
    });
    gsap.to(banner2, {
      opacity: 0,
    });
    gsap.to([blankRect1, blankRect3, blankRect4], {
      opacity: 0,
    });
    gsap.to([image1, image3, image4], {
      opacity: 1,
    });
  });
}

function rect3() {
  rectangle3.addEventListener("mousemove", (e) => {
    const rect = rectangle3.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - image3.offsetWidth / 4;
    const offsetY = e.clientY - rect.top - image3.offsetHeight / 4;

    gsap.to(rectangle3, {
      x: offsetX,
      y: offsetY,
      duration: 0.2,
      ease: "cubic-bezier(0.61, 1, 0.88, 1)",
      zIndex: 10,
    });
    gsap.to(bgtext, {
      zIndex: -1,
      color: "transparent",
      webkitTextStroke: "1.5px rgb(61, 56, 56)",
    });
    gsap.to(banner3, {
      opacity: 1,
    });
    gsap.to([blankRect1, blankRect2, blankRect4], {
      opacity: 1,
    });
    gsap.to([image1, image2, image4], {
      opacity: 0,
    });
  });

  rectangle3.addEventListener("mouseleave", () => {
    gsap.to(rectangle3, {
      x: 0,
      y: 0,
      duration: 1.5,
      ease: "cubic-bezier(0.61, 1, 0.88, 1)",
      zIndex: 1,
    });
    gsap.to(bgtext, {
      zIndex: 10,
      color: "white",
      webkitTextStroke: "0px #fff",
    });
    gsap.to(banner3, {
      opacity: 0,
    });
    gsap.to([blankRect1, blankRect2, blankRect4], {
      opacity: 0,
    });
    gsap.to([image1, image2, image4], {
      opacity: 1,
    });
  });
}

function rect4() {
  rectangle4.addEventListener("mousemove", (e) => {
    const rect = rectangle4.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - image4.offsetWidth / 4;
    const offsetY = e.clientY - rect.top - image4.offsetHeight / 4;

    gsap.to(rectangle4, {
      x: offsetX,
      y: offsetY,
      duration: 0.2,
      ease: "cubic-bezier(0.61, 1, 0.88, 1)",
      zIndex: 10,
    });
    gsap.to(bgtext, {
      zIndex: -1,
      color: "transparent",
      webkitTextStroke: "1.5px rgb(61, 56, 56)",
    });
    gsap.to(banner4, {
      opacity: 1,
    });
    gsap.to([blankRect1, blankRect2, blankRect3], {
      opacity: 1,
    });
    gsap.to([image1, image2, image3], {
      opacity: 0,
    });
  });

  rectangle4.addEventListener("mouseleave", () => {
    gsap.to(rectangle4, {
      x: 0,
      y: 0,
      duration: 1.5,
      ease: "cubic-bezier(0.61, 1, 0.88, 1)",
      zIndex: 1,
    });
    gsap.to(bgtext, {
      zIndex: 10,
      color: "white",
      webkitTextStroke: "0px #fff",
    });
    gsap.to(banner4, {
      opacity: 0,
    });
    gsap.to([blankRect1, blankRect2, blankRect3], {
      opacity: 0,
    });
    gsap.to([image1, image2, image3], {
      opacity: 1,
    });
  });
}

locomotive();
rect1();
rect2();
rect3();
rect4();
