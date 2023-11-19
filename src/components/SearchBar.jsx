const SearchBar = () => {
  return (  
    <form className="flex text-sm sm:text-lg mt-4 mo-md:mt-8 w-[95%] mo-sm:w-[90%] mo-md:w-[80%] sm:w-[60%] md:w-[50%] lg:w-[45%]">
      <input type="text" placeholder="Search for any IP address or domain" className="px-5 py-3 rounded-l-xl w-full placeholder:invisible mo-sm:placeholder:visible focus:outline-none outline-none"/>
      <button className="bg-veryDarkGray hover:bg-darkGray transition-colors ease-linear duration-75 rounded-r-xl px-5 py-3">
        <img src="src/assets/images/icon-arrow.svg" alt="" />
      </button>
    </form>
  )
}
 
export default SearchBar;