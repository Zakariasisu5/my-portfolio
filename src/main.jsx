import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function useSectionAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const revealSection = () => {
      sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setTimeout(() => {
            section.classList.add("visible");
          }, idx * 300); // stagger animation
        }
      });
    };
    window.addEventListener("scroll", revealSection);
    revealSection();
    return () => window.removeEventListener("scroll", revealSection);
  }, []);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
