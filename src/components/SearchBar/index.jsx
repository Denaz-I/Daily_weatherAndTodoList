import { FaSearch } from "react-icons/fa";

function SearchBar({onChange}) {
return <>
    <div className="flex items-center border pl-4 gap-2 border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md w-full">
        <FaSearch className="text-gray-500" />
        <input 
        id="city"
        type="text" 
        placeholder="Inserisci la città" 
        className="w-full h-full outline-none text-gray-500 bg-transparent placeholder-gray-500 text-sm" 
        onChange={onChange}
        />
    </div>
    </>
}
    


export default SearchBar;