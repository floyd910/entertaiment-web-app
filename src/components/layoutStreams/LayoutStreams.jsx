import StreamItem from "../streamItem/StreamItem";
import "./LayoutStreams.css";

export default function LayoutStreams({ streams, parent, bookmarkStream }) {
  return (
    <div className="layout">
      <h1>{parent}</h1>
      <div className="streams">
        {streams &&
          streams.map((stream, index) => {
            return (
              <StreamItem
                key={stream.title}
                stream={stream}
                bookmarkStream={bookmarkStream}
                index={index}
              />
            );
          })}
      </div>
    </div>
  );
}
