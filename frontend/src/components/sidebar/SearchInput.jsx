import { TbHeartSearch } from "react-icons/tb";
import { GiAk47 } from "react-icons/gi";
import { GiRoyalLove } from "react-icons/gi";



const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle bg-rose-600 text-white hover:bg-blue-900">
            {/* <TbHeartSearch className="w-6 h-6 outline-none"/> */}
            {/* <GiAk47 className="w-6 h-6 outline-none"/> */}
            <GiRoyalLove className="w-7 h-7 outline-none pt-1 flex-auto"/>

        </button>
    </form>
  )
}

export default SearchInput


/* 
STARTER CODE SEARCH INPUT 

import { TbHeartSearch } from "react-icons/tb";
import { GiAk47 } from "react-icons/gi";
import { GiRoyalLove } from "react-icons/gi";



const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle bg-rose-600 text-white hover:bg-blue-900">
            //<TbHeartSearch className="w-6 h-6 outline-none"/>
            //<GiAk47 className="w-6 h-6 outline-none"/> 
            <GiRoyalLove className="w-7 h-7 outline-none pt-1 flex-auto"/>

        </button>
    </form>
  )
}

export default SearchInput */