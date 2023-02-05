import { useState, useEffect } from "react";
import LayoutStreams from "../../components/layoutStreams/LayoutStreams";
import Navbar from "../../components/navbar/Navbar";
import SearchBox from "../../components/searchBox/SearchBox";

export default function Movies({ streams, bookmarkStream }) {
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
      <Navbar parent="movies" />
      <div className="content">
        <SearchBox
          placeholder="Search for movies"
          saveSearchWord={saveSearchWord}
        />
        {searchTitle.length === 0 ? (
          <>
            <LayoutStreams
              streams={searched}
              parent="Movies"
              bookmarkStream={bookmarkStream}
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
