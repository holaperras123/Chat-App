import { useEffect } from "react"
import useConversation from "../../zustand/useConversation"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti"

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() => {
        // cleanup function 
        return () => setSelectedConversation(null)
    },[setSelectedConversation]); 

  return (
    <div className="md:min-w-[400px] flex flex-col">
        {!selectedConversation ? <NoChatSelected /> :(
            <>
            {/* HEADER */}
            <div className="bg-slate-600 px-4 py-2 mb-2 flex flex-col">

                <div className="flex gap-3 justify-between">
                    <div>
                        <span className="label-text text-gray-800 font-normal ">To:</span>
                        <span className="label-text text-gray-800 font-bold   "> {selectedConversation.fullName}</span>
                    </div>

                    <div>
                        <span className="label-text text-rose-500 font-bold ">R</span>
                        <span className="label-text text-rose-400 font-bold ">P</span>
                        <span className="label-text text-rose-300 font-bold ">P</span>
                    </div>
                </div>
                
            </div>
            

            <Messages /> 
            <MessageInput />
             </>   
        )}
            
    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 flex flex-col font-semibold 
            items-center gap-2">
                <p>Welcome John Doe</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    );
}




/* import MessageInput from "./MessageInput"
import Messages from "./Messages"

const MessageContainer = () => {
  return (
    <div className="md:min-w-[400px] flex flex-col">
        <>
        //HEADER
        <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span><span className="text-gray-900 font-bold"> John Doe</span>
        </div>

        <Messages /> 
       <MessageInput />
      
        
        </>


    </div>
  )
}

export default MessageContainer */