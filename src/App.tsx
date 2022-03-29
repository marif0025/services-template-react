
import SectionAbout from './components/SectionAbout';
import SectionHero from './components/SectionHero';
import SectionPortfolio from './components/SectionPortfolio';
import SectionPricing from './components/SectionPricing';
import SectionServices from './components/SectionServices';
import SectionStats from './components/SectionStats';
import './styles/style.scss';

const App = () => {
  return (
    <>
      <SectionHero />
      <SectionServices />
      <SectionAbout />
      <SectionPortfolio />
      <SectionStats />
      <SectionPricing />
    </>
  )
}

export default App