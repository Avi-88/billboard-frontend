import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://imgs.search.brave.com/Zb2gP5-YmKGRoXTXg3eEO5TPNFzzYuqo5mEdsXRZdys/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL3B1bmUt/bWFoYXJhc2h0cmEt/aW5kaWEtYXNpYS1q/YW51YXJ5LTYwMHct/MTEzNDI5NjM2MC5q/cGc"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pune</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://ichef.bbci.co.uk/news/624/mcs/media/images/79124000/jpg/_79124390_bandra.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitlesBlack">
          <h1>Mumbai</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.gettyimages.com/id/1242724336/photo/this-picture-taken-on-august-24-2022-from-the-landmark-cairo-tower-shows-a-long-exposure.jpg?s=612x612&w=0&k=20&c=V0hjs4Z4X3ksBC4Udo-FLea3tNgz134ctAoM3aKSf5U="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bangalore</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
