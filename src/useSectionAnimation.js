import { useEffect } from "react";

const useSectionAnimation = () => {
  useEffect(() => {
    // Select all sections except the nav section
    const sections = document.querySelectorAll("section:not(.nav-section)");

    const revealSection = () => {
      sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          // Only add delay for non-nav sections
          setTimeout(() => {
            section.classList.add("visible");
          }, idx * 200);
        }
      });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();
    return () => window.removeEventListener("scroll", revealSection);
  }, []);
};

export default useSectionAnimation;