import Navbar from './Navbar'
import Hero from './Hero'
import WholeteamPage from './team2';
import Info from './info';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Info />
        <WholeteamPage />
        <Footer />
      </header>
    </div>
  );
}

export default App;
