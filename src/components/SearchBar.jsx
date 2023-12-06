/* eslint-disable react/prop-types */

import { useState } from "react";

const SearchBar = ({ setData, setLoading, setError }) => {
  const [ipAddress, setIpAddress] = useState("");

  const apiKey = import.meta.env.VITE_REACT_APP_IP_API_KEY;
  // const apiUrl = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`;

  const fetchData = () => {
    const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
    setLoading(true);

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault()
    fetchData();
  };

  return (
    <form className="flex text-sm sm:text-lg mt-4 mo-md:mt-8 w-[95%] mo-sm:w-[90%] mo-md:w-[80%] sm:w-[60%] md:w-[50%] lg:w-[45%]">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="px-5 py-3 rounded-l-xl w-full placeholder:invisible mo-sm:placeholder:visible focus:outline-none outline-none"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      />
      <button
        className="bg-veryDarkGray hover:bg-darkGray transition-colors ease-linear duration-75 rounded-r-xl px-5 py-3"
        onClick={handleSearch}
      >
        <img src="src/assets/images/icon-arrow.svg" alt="" />
      </button>
    </form>
  );
};

export default SearchBar;
