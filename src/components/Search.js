import React from "react"

function Search({searchQuery, setSearchQuery}) {
    return (
        <div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..."/>
        </div>
    );
}

export default Search;