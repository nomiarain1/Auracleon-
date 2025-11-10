//const input = document.querySelector("#phone");
 // window.intlTelInput(input, {
  //  initialCountry: "auto",
  //  geoIpLookup: function(success, failure) {
    //  fetch("https://ipapi.co/json")
       // .then(res => res.json())
      //  .then(data => success(data.country_code))
     //   .catch(() => success("us"));
  //  },
  //  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",

//  });


const fadeEls = document.querySelectorAll('.fade-up-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate from scale(0.8) to scale(1)
      entry.target.animate([
        { opacity: 0, transform: 'scale(0.8) translateY(20px)' },
        { opacity: 1, transform: 'scale(1) translateY(0)' }
      ], {
        duration: 800,
        easing: 'ease-out',
        fill: 'forwards'
      });

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeEls.forEach(el => observer.observe(el));
