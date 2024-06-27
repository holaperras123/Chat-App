import { useState } from "react";
import { GiRoyalLove } from "react-icons/gi";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search,setSearch] = useState("");

  const {setSelectedConversation}= useConversation();
  const {conversations} = useGetConversations()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error("Search must be at least 3 characters long")
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLocaleLowerCase()))

    if (conversation) {
      setSelectedConversation(conversation)
      setSearch('')
    } else (toast.error('No user found'))

  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Search..." className="input input-bordered rounded-full" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
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