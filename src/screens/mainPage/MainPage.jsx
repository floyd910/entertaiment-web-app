import { useState, useEffect } from "react";
import LayoutStreams from "../../components/layoutStreams/LayoutStreams";
import Navbar from "../../components/navbar/Navbar";
import SearchBox from "../../components/searchBox/SearchBox";
import Trending from "../../components/trending/Trending";

export default function MainPage({ streams, bookmarkStream }) {
  const trending = streams.filter((item) => item.isTrending);
  const recomended = streams.filter((elem) => !elem.isTrending);
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
      <Navbar parent="mainPage" />
      <div className="content">
        <SearchBox
          saveSearchWord={saveSearchWord}
          placeholder="Search for movies or TV series"
        />

        {searchTitle.length === 0 ? (
          <>
            <Trending trending={trending} bookmarkStream={bookmarkStream} />
            <LayoutStreams
              streams={recomended}
              parent="Recommended for you"
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
