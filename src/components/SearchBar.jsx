const SearchBar = () => {
  return (  
    <form className="flex text-lg mt-4 w-[45%]">
      <input type="text" placeholder="Search for any IP address or domain" className="px-5 py-3 rounded-l-xl w-full"/>
      <button className="bg-veryDarkGray rounded-r-xl px-5 py-3">
        <img src="src/assets/images/icon-arrow.svg" alt="" />
      </button>
    </form>
  )
}
 
export default SearchBar;