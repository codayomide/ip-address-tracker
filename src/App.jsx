import { useState } from "react";
import LocationInfo from "./components/LocationInfo";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(data)

  return (
    <main className="app h-screen w-full">
      <section className="bg-image-desktop-bg bg-cover h-[40%] sm:h-[30%] flex flex-col items-center pt-8">
        <h1 className="text-neutralWhite font-medium text-2xl">IP Address Tracker</h1>

        <SearchBar setData={setData} setLoading={setLoading} setError={setError} />

        <LocationInfo loading={loading} data={data} error={error} />
      </section>

      <Map />
    </main>
  );
}

export default App;
