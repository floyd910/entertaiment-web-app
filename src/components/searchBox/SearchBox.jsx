import { useRef } from "react";
import "./SearchBox.css";
import search from "../../assets/icon-search.svg";

export default function SearchBox({ placeholder, saveSearchWord }) {
  const searchWord = useRef();
  return (
    <div className="search-box">
      <img src={search} alt="Search icon" />
      <input
        onChange={() => saveSearchWord(searchWord.current.value)}
        ref={searchWord}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
