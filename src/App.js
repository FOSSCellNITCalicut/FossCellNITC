import Navbar from './Navbar'
import Hero from './Hero'
import WholeteamPage from './team2';
import Info from './info';
import CardList from './news';
import Footer from './footer';
import Getstarted from './Getstarted';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Info />
        <WholeteamPage />
        <CardList />
        <Getstarted/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
