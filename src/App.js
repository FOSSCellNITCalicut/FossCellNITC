import Navbar from './Components/Navbar/Navbar.js';
import Hero from './Components/Hero/Hero';
import Info from './Components/Info/info';
import News from './Components/News/news';
import Team from './Components/Team/team';
import Getstarted from './Components/Cards/Getstarted';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Info />
        <News />
        <Team />
        <Getstarted />
        <Footer />
      </header>
    </div>
  );
}

export default App;
