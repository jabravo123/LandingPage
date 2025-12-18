  let slideIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  showSlide(slideIndex);
  setInterval(nextSlide, 7000); 
  