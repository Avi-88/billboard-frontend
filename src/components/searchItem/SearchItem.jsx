import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://media.gettyimages.com/id/582779718/photo/city-billboard.jpg?s=612x612&w=0&k=20&c=H9Ju57IlTzmTm3a6_7fe_oOnehLRJC_rOvqNFwXm6-c="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Billboard</h1>
        <span className="siDistance">500m from Township</span>
        <span className="siTaxiOp">Busy area</span>
        <span className="siSubtitle">
          Traditional Billboard
        </span>
       
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹11221</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
