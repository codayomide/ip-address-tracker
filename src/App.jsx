import LocationInfo from "./components/LocationInfo";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <main className="app">
      <section>
        <h1>IP Address Tracker</h1>

        <SearchBar />

        <LocationInfo />
      </section>

      
    </main>
  );
}

export default App;
