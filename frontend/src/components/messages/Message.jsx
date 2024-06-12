const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src="/tam-icon-app.png" alt="user avatar" />
            </div>
        </div>
        <div className="chat-bubble text-white bg-rose-500 ">Hey bro</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:30</div>
    </div>
  )
}

export default Message