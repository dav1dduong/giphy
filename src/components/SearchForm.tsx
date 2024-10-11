import { FormEvent, useState } from "react";
import "./SearchForm.css";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();

  // for a controlled form: you must have one state variable for each input.
  const [query, setQuery] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // setSearchTerm(query);
    navigate(`/?${new URLSearchParams({ term: query })}`);
    setQuery("");
  };
  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
