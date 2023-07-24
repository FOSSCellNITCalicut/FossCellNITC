import Navbar from './Navbar'
import Hero from './Hero'
import WholeteamPage from './team2';
import Info from './info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Info />
        <WholeteamPage />
      </header>
    </div>
  );
}

export default App;
