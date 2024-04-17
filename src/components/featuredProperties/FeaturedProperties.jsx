import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://c8.alamy.com/comp/F3JYWA/buildings-covered-by-colorful-hoardings-and-traffic-at-sambhaji-chowk-F3JYWA.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Deccan chowk</span>
        <span className="fpCity">Pune</span>
        <span className="fpPrice">Starting from ₹5000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://the-media-ant.mo.cloudinary.net/referenceArtworks/1565858685098/aa196570a323753a1da1b3e9af60fc25.png?tx=w_350,h_200,c_fit"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Bandra West</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from ₹15000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://imgs.search.brave.com/v5_Z2FAx2LC2jrQcr9mayjPX7a5Hvs2kwszr7ey5vpk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDY5/ODczNjg1L3Bob3Rv/L3RyYWZmaWMtb24t/YnJpZ2FkZS1yb2Fk/LWF0LWR1c2stYmFu/Z2Fsb3JlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz0ybTNL/Z2pWbGRwUXRFTVZo/RHpyYzZhbEVVZG5B/UUZBb2tEV0VnWUlz/RW9FPQ"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Brigade Road</span>
        <span className="fpCity">Bangalore</span>
        <span className="fpPrice">Starting from ₹9000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://imgs.search.brave.com/ssZP7Dndr4iESXZBxK-un5bghgikWwm0dUhreT_6dY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIx/OTEwNjI4L3Bob3Rv/L3RyYWZmaWMtb24t/bS1nLXJvYWQtYXQt/bWFuZ2Fsb3JlLWth/cm5hdGFrYS1pbmRp/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZUc3YlFoOWpr/cDZTNUFKYVBBckI1/WWxzemMzY2JRZnI5/b2lWajVSX2I0MD0"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Mg road</span>
        <span className="fpCity">Karnataka</span>
        <span className="fpPrice">Starting from ₹10500</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
