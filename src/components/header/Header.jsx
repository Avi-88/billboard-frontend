import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faCity,
  faLocationDot,
  faRectangleAd
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [userName] = useState(localStorage.getItem("userName"))
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState("");
  const handlePriceChange = (e) => {
    const enteredPrice = e.target.value;
    //console.log('Entered Price:', enteredPrice);
    setPrice(enteredPrice);
  };
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //const [openOptions, setOpenOptions] = useState(false);
  const [openMediaType, setOpenMediaType] = useState(false);
  const [selectedMediaType, setSelectedMediaType] = useState(null);
//   const [medias, setMedias] = useState({
//     mediaType_one:'Traditional Billboards',
//     mediaType_second:'Digital Billboards',
//     mediaType_third:'Flyover Billboards',

// });
const mediaTypes = ['CityBillboards', 'HighwayBillboards', 'DigitalBillboards'];
// const handleOptionClick = (mediaType) => {
  
  
//   setSelectedMediaType(mediaType);
//   console.log(selectedMediaType);
//   setOpenMediaType(false); // Close the options dropdown after selection
// };
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
    console.log('Destination:', destination);
    console.log('Selected Media Type:', selectedMediaType);
    console.log('Price:', price);
    console.log('Date:', date);
    //console.log('Options:', options);
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faCity} />
            <span>BillBoards</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Need a Billboard? We Got You {userName} ! 
            </h1>
            <p className="headerDesc">
              Book your Billboards acording to your preferences
            </p>
           
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faLocationDot} className="headerIcon" />
                <input
                  type="text"
                  placeholder="location"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
      <FontAwesomeIcon icon={faRectangleAd} className="headerIcon" />
      <span
        onClick={() => setOpenMediaType(!openMediaType)} // Toggle openMediaType when span is clicked
        className="headerSearchText optionText"
      >
        {selectedMediaType ? selectedMediaType : 'MediaType'}
      </span>
      {openMediaType && (
        <div className="options">
          <select
            className="optionItem"
            value={selectedMediaType || ''}
            onChange={(e) => {
              const selectedValue = e.target.value;
              setSelectedMediaType(selectedValue);
              //console.log(selectedValue); // Log the currently selected media type
              setOpenMediaType(false); // Close the dropdown after selecting an option
            }}
          >
            <option value="">Select a media type</option>
            {mediaTypes.map((mediaType, index) => (
              <option className="optionText" key={index} value={mediaType}>
                {mediaType}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
             
    <div className="headerSearchItem">
      <FontAwesomeIcon icon={faCar} className="headerIcon" />
      <input
        type="text"
        placeholder="Price"
        className="headerSearchInput"
        value={price}
        onChange={handlePriceChange}
      />
    </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              
              

              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
