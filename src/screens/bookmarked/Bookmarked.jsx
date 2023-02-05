import { useState, useEffect } from "react";
import LayoutStreams from "../../components/layoutStreams/LayoutStreams";
import Navbar from "../../components/navbar/Navbar";
import SearchBox from "../../components/searchBox/SearchBox";

export default function Bookmarked({
  bookmarkStream,
  bookmarkedMovies,
  bookmarkedSeries,
  bookmarkedAll
}) {
  const [searched, setSearched] = useState(bookmarkedAll);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const searchStreams = () => {
      searchTitle.length !== 0
        ? setSearched(
            bookmarkedAll.filter((elem) =>
              elem.title.toLowerCase().includes(searchTitle.toLowerCase())
            )
          )
        : setSearched(bookmarkedAll);
    };
    searchStreams();
  }, [bookmarkedAll, searchTitle]);

  const saveSearchWord = (searchWord) => {
    setSearchTitle(searchWord);
  };

  return (
    <div>
      <Navbar parent="bookmark" />
      <div className="content">
        <SearchBox
          saveSearchWord={saveSearchWord}
          placeholder="Search for bookmarked shows"
        />
        {searchTitle.length === 0 ? (
          <>
            {bookmarkedMovies.length > 0 && (
              <LayoutStreams
                streams={bookmarkedMovies}
                parent="Bookmarked Movies"
                bookmarkStream={bookmarkStream}
              />
            )}
            {bookmarkedSeries.length > 0 && (
              <LayoutStreams
                streams={bookmarkedSeries}
                parent="Bookmarked TV Series"
                bookmarkStream={bookmarkStream}
              />
            )}
          </>
        ) : (
          <>
            <LayoutStreams
              streams={searched}
              bookmarkStream={bookmarkStream}
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
            />
          </>
        )}
      </div>
    </div>
  );
}
