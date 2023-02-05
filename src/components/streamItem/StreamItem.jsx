import categoryTv from "../../assets/icon-category-tv.svg";
import categoryMovie from "../../assets/icon-category-movie.svg";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkFull from "../../assets/icon-bookmark-full.svg";
import play from "../../assets/icon-play.svg";
import "./StreamItem.css";

export default function StreamItem({ stream, bookmarkStream }) {
  const tvStyle = {
    height: "7.2px"
  };
  
    var imagePath =
    stream.thumbnail.regular.large
   ;

  return (
    <div className="stream-item">
      <div className="thumbnail-place">
        <img className="thumbnail" src={imagePath} alt={stream.title} />
        <div className="play-container">
          <button className="play-btn">
            <img src={play} alt="Play icon" />
            <p>Play</p>
          </button>
        </div>
      </div>
      <div className="text">
        <div className="details">
          <p>{stream.year}</p>
          <div className="divider-dot"></div>
          <p>
            {stream.category === "Movie" ? (
              <img src={categoryMovie} alt={stream.category} />
            ) : (
              <img src={categoryTv} style={tvStyle} alt={stream.category} />
            )}
            <span>{stream.category}</span>
          </p>
          <div className="divider-dot"></div>
          <p className="rating">{stream.rating}</p>
        </div>
        <h2>{stream.title}</h2>
      </div>

      {/* below btn is pos absolute, 
      dont breakes flex */}
      <button
        className="bookmark-btn"
        onClick={() => {
          bookmarkStream(stream);
        }}
      >
        {stream.isBookmarked ? (
          <img alt="Bookmark icon" src={bookmarkFull} />
        ) : (
          <img alt="Bookmark icon" src={bookmarkEmpty} />
        )}{" "}
      </button>
      {/* below element is displayed only in trending section */}
      <p className="rating-trend">{stream.rating}</p>
    </div>
  );
}
