/* eslint-disable react/prop-types */

const LocationInfo = ({ loading, data, error }) => {
  return (
    <>
    {loading && <div>Loading...</div>}
    {error && <div>Error!!</div>}
      <div className="bg-neutralWhite text-center py-5 md:py-6 shadow-lg w-[80%] mo-lg:w-[65%] sm:w-[55%] md:w-[85%] xl:w-[75%] rounded-lg mt-4 md:mt-12 md:px-6 md:text-left md:flex md:justify-between">
        <div className="location-info">
          <h4>IP Address</h4>
          <h3>{data ? data.ip : "<IP ADDRESS>"}</h3>
        </div>

        <div className="location-info left-border">
          <h4>Location</h4>
          <h3>{`${data ? data.location.city : "<CITY>"}, ${data ? data.location.region : "<REGION>"}`}</h3>
        </div>

        <div className="location-info left-border">
          <h4>Timezone</h4>
          <h3>{`UTC ${data ? data.location.timezone : "<TIME ZONE>"}`}</h3>
        </div>

        <div className="location-info left-border">
          <h4>ISP</h4>
          <h3>{data ? data.isp : "SpaceX Starlink"}</h3>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
