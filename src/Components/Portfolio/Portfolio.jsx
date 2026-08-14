import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'
import Img7 from '../../assets/portfolio7.jpg'

const projects = [
  { name: 'MeetMate', type: 'AI / Networking', description: 'An AI-powered networking platform for discovering people, scheduling conversations, and building meaningful professional relationships.', image: Img7, repo: 'https://github.com/Zakariasisu5/MeetMate', live: 'https://meetmate-zeta.vercel.app/' },
  { name: 'CredLayer', type: 'AI / Web3', description: 'Decentralized reputation and credit scoring infrastructure for a more trusted digital economy.', image: Img1, repo: 'https://github.com/Zakariasisu5/credlayer-trust-hub' },
  { name: 'MoonCreditFi', type: 'DeFi / Sui Move', description: 'Credit-aware infrastructure designed to make decentralized finance more accessible and intelligent.', image: Img2, repo: 'https://github.com/Zakariasisu5/Mooncreditfi-sui-move' },
  { name: 'Confnect', type: 'AI / Community', description: 'An intelligent event and networking experience that turns introductions into lasting connections.', image: Img3, repo: 'https://github.com/Zakariasisu5/Confnect' },
  { name: 'Farm Focus Connect', type: 'Agritech / Platform', description: 'A digital platform connecting farmers with practical services, resources, and opportunities.', image: Img4, repo: 'https://github.com/Zakariasisu5/farmer-focus-connect' },
  { name: 'Billify Generator', type: 'Product / SaaS', description: 'A focused billing tool for creating polished, professional invoices with less friction.', image: Img5, repo: 'https://github.com/Zakariasisu5/billify-generator-8701' },
  { name: 'PlusePay', type: 'Fintech / Product', description: 'A simple digital payment experience built around clarity, speed, and accessible transactions.', image: Img6, repo: 'https://github.com/Zakariasisu5/PlusePay' },
  { name: 'Zerava', type: 'Web3 / Exploration', description: 'A Web3 project exploring useful applications of blockchain technology.', image: Img7, repo: 'https://github.com/Zakariasisu5/Zerava' },
  { name: 'BizLaunch360', type: 'SaaS / Operations', description: 'A business launch and operations platform for organizing the work behind growing companies.', image: Img1, repo: 'https://github.com/Zakariasisu5/BizLaunch360' },
  { name: 'Farmers Connect', type: 'Agritech / Community', description: 'A platform helping farmers discover resources, support, and new opportunities.', image: Img2, repo: 'https://github.com/Zakariasisu5/Farmers-Connect' },
  { name: 'FlockSmart', type: 'AI / Agritech', description: 'AI-driven poultry management and data-led decision-making tools.', image: Img2, repo: 'https://github.com/Zakariasisu5/FlockSmart', live: 'https://flocksmart.vercel.app/' },
  { name: 'Eco Companion', type: 'Sustainability / Product', description: 'Practical guidance for making more sustainable choices at home and at work.', image: Img3, repo: 'https://github.com/Zakariasisu5/eco-companion', live: 'https://green-living-companion.vercel.app/' },
  { name: 'UDS GPA Calculator', type: 'Education / Utility', description: 'A clear and efficient tool for students to calculate and track academic performance.', image: Img4, repo: 'https://github.com/Zakariasisu5/uds-gpa-calculator', live: 'https://uds-gpa-calculator.vercel.app/' },
  { name: 'Web3Thrive', type: 'Web3 / Freelance', description: 'An Africa-focused freelance platform combining Web3 and AI to empower professionals.', image: Img5, repo: 'https://github.com/Zakariasisu5/web3thriveai', live: 'https://web3thriveai.vercel.app/' },
  { name: 'MicroFarmly', type: 'AI / Food Systems', description: 'An AI-powered hyperlocal farming and food subscription platform for local communities.', image: Img6, repo: 'https://github.com/Zakariasisu5/microfarmly-grow-together', live: 'https://microfarmly-grow-together.vercel.app/' },
]

const ProjectCard = ({ project, featured = false }) => (
  <article className={`portfolio__item ${featured ? 'portfolio__item--featured' : ''}`}>
    <div className="portfolio__item-image"><img src={project.image} alt={`${project.name} project preview`} /></div>
    <div className="portfolio__item-content">
      <div className="portfolio__item-meta"><span>{project.type}</span><span className="portfolio__item-index">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span></div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="portfolio__item-cta">
        <a href={project.repo} className="btn" target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>
        {project.live && <a href={project.live} className="btn btn-primary" target="_blank" rel="noreferrer">Live product <span aria-hidden="true">↗</span></a>}
      </div>
    </div>
  </article>
)

const Portfolio = () => (
  <section id="portfolio" className="portfolio-section">
    <div className="portfolio__intro container">
      <div>
        <p className="portfolio__eyebrow">Selected work / 2021—2026</p>
        <h2>Products built with <em>purpose.</em></h2>
      </div>
      <p className="portfolio__summary">A selection of digital products, platforms, and experiments across AI, fintech, Web3, and agritech.</p>
    </div>
    <div className="container portfolio__container">
      {projects.map((project, index) => <ProjectCard key={project.name} project={project} featured={index === 0} />)}
    </div>
  </section>
)

export default Portfolio
