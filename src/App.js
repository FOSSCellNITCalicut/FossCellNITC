import Navbar from './Navbar';
import Hero from './Hero';
import Info from './info';
import News from './news';
import WholeteamPage from './team2';
import Getstarted from './Getstarted';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Info />
        <News />
        <WholeteamPage />
        <Getstarted />
        <Footer />
      </header>
    </div>
  );
}

export default App;
