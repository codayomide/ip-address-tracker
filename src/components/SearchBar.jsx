import { useRef, useState } from "react";

const SearchBar = ({ setData, setLoading, setError }) => {
  const [ipAddress, setIpAddress] = useState("");
  const inputRef = useRef(null);
  const [isTextSelected, setIsTextSelected] = useState(false);

  const apiKey = import.meta.env.VITE_REACT_APP_IP_API_KEY;

  const fetchData = () => {
    setLoading(true);

    const checkIpAddress =
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    const checkDomain =
      /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

    const apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${
      checkIpAddress.test(ipAddress)
        ? `ipAddress=${ipAddress}`
        : checkDomain.test(ipAddress)
        ? `domain=${ipAddress}`
        : ""
    }`;

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
    e.preventDefault();
    fetchData();
  };

  const handleInputClick = () => {
    if (!isTextSelected) {
      inputRef.current.select();
    } else {
      inputRef.current.setSelectionRange(0, 0);
    }
    setIsTextSelected(!isTextSelected);
  };

  return (
    <form className="flex text-sm sm:text-lg mt-4 mo-md:mt-8 w-[95%] mo-sm:w-[90%] mo-md:w-[80%] sm:w-[60%] md:w-[50%] lg:w-[45%]">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="px-5 py-3 rounded-l-xl w-full placeholder:invisible mo-sm:placeholder:visible focus:outline-none outline-none"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
        ref={inputRef}
        onClick={handleInputClick}
      />
      <button
        className="bg-veryDarkGray hover:bg-darkGray transition-colors ease-linear duration-75 rounded-r-xl px-5 py-3"
        onClick={handleSearch}
      >
        <img src="./assets/images/icon-arrow.svg" alt="" />
      </button>
    </form>
  );
};

export default SearchBar;
