import React from 'react'

const SearchBar = React.forwardRef(({ handleSearch }, ref) => {
    const cls = "flex flex-row justify-center pt-2 pb-5";
    const inputCls = "shadow px-4 py-2 text-purple-700 font-bold rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent";
    const btnCls = "bg-purple-600 text-white font-bold px-5 py-2 rounded shadow focus:outline-none hover:bg-purple-700 hover:shadow-lg ml-2";
    return (
        <div className={cls}>
            <input type="text" className={inputCls} placeholder="Search" ref={ref} onKeyPress={(e) => {
                if (e.code === "Enter") {
                    handleSearch();
                }
            }} />
            <button className={btnCls} onClick={handleSearch}>Search</button>
        </div>
    )
})

export default SearchBar
