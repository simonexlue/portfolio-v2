// Scroll animation utility
export const initScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  // Fade in animation observer
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  // Check for sections that are already visible on page load
  const checkInitialVisibility = () => {
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        section.classList.add('is-visible');
      }
    });
  };

  // Fade out animation observer
  const fadeOutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-hidden');
      } else {
        entry.target.classList.add('is-hidden');
      }
    });
  }, observerOptions);

  // Observe all fade-in sections
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  fadeInSections.forEach(section => {
    fadeInObserver.observe(section);
  });

  // Observe all fade-out sections
  const fadeOutSections = document.querySelectorAll('.fade-out-section');
  fadeOutSections.forEach(section => {
    fadeOutObserver.observe(section);
  });

  // Check initial visibility after a short delay to ensure DOM is ready
  setTimeout(checkInitialVisibility, 100);

  // Cleanup function
  return () => {
    fadeInObserver.disconnect();
    fadeOutObserver.disconnect();
  };
};
