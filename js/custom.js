// AOS Initialization
AOS.init({ duration: 1000, once: true });

// Toggle Navigation Menu
const toggleMenu = () => document.getElementById('nav').classList.toggle('active');

// Video Play Handler
const playBtn = document.getElementById("playBtn"),
      video = document.getElementById("workVideo"),
      thumbnail = document.getElementById("videoThumbnail");

playBtn?.addEventListener("click", () => {
  playBtn.style.display = thumbnail.style.display = "none";
  video.style.display = "block";
  video.play();
});

// Progress Bars & Counters Animation
document.querySelectorAll('.stat-number').forEach((counter, i) => {
  const target = +counter.dataset.target,
        bar = document.querySelectorAll('.progress-bar span')[i],
        duration = 2000,
        start = performance.now();

  const animate = now => {
    const progress = Math.min((now - start) / duration, 1),
          value = Math.floor(progress * target);

    counter.innerText = value;
    bar.style.width = `${progress * 100}%`;

    if (progress < 1) requestAnimationFrame(animate);
    else counter.innerText = `${target}+`;
  };
  requestAnimationFrame(animate);
});

// Scroll Events
window.onscroll = () => {
  const scrollY = window.scrollY,
        header = document.getElementById("mainHeader"),
        topBtn = document.getElementById("backToTop");

  header.classList.toggle("fixed", scrollY > 100);
  topBtn.style.display = scrollY > 300 ? "block" : "none";
};

// Back to Top Button
document.getElementById("backToTop")?.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

document.getElementById("contactForm")?.addEventListener("click", e => {
});

//slider

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}



