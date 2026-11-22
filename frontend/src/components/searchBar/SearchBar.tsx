import "./SearchBar.css";
import { Search } from "lucide-react";

interface ISearchBar {
    placeholder: string;
}

function SearchBar({ placeholder }: ISearchBar) {
    return (
        <div className="search-bar">
            <label htmlFor="search-input">
                <input
                    id="search-input"
                    type="text"
                    placeholder={placeholder}
                />
            </label>

            <button type="button">
                <Search size={18} />
            </button>
        </div>
    );
}

export default SearchBar;