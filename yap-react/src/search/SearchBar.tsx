import { FC } from "react";

const SearchBar: FC<{}> = () => {
    return (
        <div className="App-search">
            <input type="text" placeholder="Search..."/>
        </div>
    );
};

export default SearchBar;