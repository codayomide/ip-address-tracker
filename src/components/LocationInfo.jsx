const LocationInfo = () => {
  return (
    <div className="bg-neutralWhite text-center py-5 sm:py-8 shadow-lg w-[80%] sm:w-[70%] rounded-lg mt-4 sm:mt-12 sm:px-6 sm:text-left sm:flex sm:justify-between">
      <div className="location-info">
        <h4>IP Address</h4>
        <h3>192.212.174.101</h3>
      </div>

      <div className="location-info">
        <h4>Location</h4>
        <h3>Brooklyn, NY 10001</h3>
      </div>

      <div className="location-info">
        <h4>Timezone</h4>
        <h3>UTC -05:00</h3>
      </div>

      <div className="location-info">
        <h4>ISP</h4>
        <h3>SpaceX Starlink</h3>
      </div>
    </div>
  );
}
 
export default LocationInfo;