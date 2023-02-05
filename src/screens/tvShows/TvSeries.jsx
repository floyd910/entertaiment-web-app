import { useState, useEffect } from "react";
import LayoutStreams from "../../components/layoutStreams/LayoutStreams";
import Navbar from "../../components/navbar/Navbar";
import SearchBox from "../../components/searchBox/SearchBox";

export default function TvSeries({ streams, bookmarkStream }) {
  const [searched, setSearched] = useState(streams);
  const [searchTitle, setSearchTitle] = useState("");
  useEffect(() => {
    const searchStreams = () => {
      searchTitle.length !== 0
        ? setSearched(
            streams.filter((elem) =>
              elem.title.toLowerCase().includes(searchTitle.toLowerCase())
            )
          )
        : setSearched(streams);
    };
    searchStreams();
  }, [streams, searchTitle]);

  const saveSearchWord = (searchWord) => {
    setSearchTitle(searchWord);
  };
  return (
    <div>
      <Navbar parent="tvSeries" />
      <div className="content">
        <SearchBox
          saveSearchWord={saveSearchWord}
          placeholder="Search for TV series"
        />
        {searchTitle.length === 0 ? (
          <>
            <LayoutStreams
              bookmarkStream={bookmarkStream}
              streams={searched}
              parent="TV Series"
            />
          </>
        ) : (
          <>
            <LayoutStreams
              streams={searched}
              parent={
                searched.length === 1
                  ? "Found" +
                    "  " +
                    searched.length +
                    " result for" +
                    " " +
                    `"${searchTitle}"`
                  : "Found" +
                    "  " +
                    searched.length +
                    " results for" +
                    " " +
                    `"${searchTitle}"`
              }
              bookmarkStream={bookmarkStream}
            />
          </>
        )}
      </div>
    </div>
  );
}
