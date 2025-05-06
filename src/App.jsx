
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import CardComponent from './components/CardComponent';
import NavbarComponent from './components/NavbarComponent';
import { cardData } from "./data";
import HeroSection from './sections/HeroSection';
import Footer from './components/Footer';
function App() {
  

  return (
    <>
    <NavbarComponent />
    <HeroSection />
    <container>
    <div className="row gx-lg-5">
  {cardData.map((card) => (
    <CardComponent
      key={card.id}
      title={card.title}
      content={card.content}
      icon={<FontAwesomeIcon icon={card.icon} />}
    />
  ))}
</div>

    </container>
    <Footer />
    </>
  )
}

export default App
