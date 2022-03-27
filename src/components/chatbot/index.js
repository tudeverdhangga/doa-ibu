import { useEffect, useState } from "react"
import axios from "axios"

const Chatbot = () =>{
    
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [isOpen, setIsOpen] = useState(0)
    const path = "http://localhost:5000/"

    function openCloseChat(){
        if(isOpen){
            setIsOpen(false)
        }else{
            setIsOpen(true)
            axios.get(path + "greeting1")
            .then(res => {
                const jwb = {
                    text : res.data,
                    author : 'chatbot-PENS'
                }
                setMessages(oldMessages => [...oldMessages, jwb])
            })
            axios.get(path + "greeting2")
            .then(res => {
                const jwb = {
                    text : res.data,
                    author : 'chatbot-PENS'
                }
                setMessages(oldMessages => [...oldMessages, jwb])
            })
            axios.get(path + "greeting3")
            .then(res => {
                const jwb = {
                    text : res.data,
                    author : 'chatbot-PENS'
                }
                setMessages(oldMessages => [...oldMessages, jwb])
            })
        }
    }

    function sendMessage(){
        const msg = {
            text: message,
            author : 'me'
        }
        setMessages(oldMessages => [...oldMessages,msg])
        setMessage('')
        const pesan = {'content' : msg.text}  
        axios.post(path + "response", pesan)
        .then(res => {
            const jwb = {
                text : res.data,
                author : 'chatbot-PENS'
            }
            setMessages(oldMessages => [...oldMessages, jwb])
        })
        
    }  
    
    return(
        <div>
            <button className="inline-block z-40 fixed bg-yellow-400 w-auto bottom-10 right-14 shadow-xl p-3 rounded-full hover:bg-yellow-500" onClick={openCloseChat}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V18.5858L6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16H19C19.2652 16 19.5196 15.8946 19.7071 15.7071C19.8946 15.5196 20 15.2652 20 15V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H5ZM2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19C19.7957 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V15C22 15.7957 21.6839 16.5587 21.1213 17.1213C20.5587 17.6839 19.7957 18 19 18H7.41421L3.70711 21.7071C3.42111 21.9931 2.99099 22.0787 2.61732 21.9239C2.24364 21.7691 2 21.4045 2 21V5C2 4.20435 2.31607 3.44129 2.87868 2.87868Z" fill="#FFFFFF"/>
                </svg>
            </button>
            <div className={`${isOpen? 'visible' : 'hidden'}  inline-block fixed z-40 bg-white text-black  xl:w-1/3 md:w-1/2 w-3/4 bottom-10 right-32 h-5/6 rounded-lg overflow-hidden`}>
                <div className={`chat-box`}>
                    <div className={` flex flex-row w-full bg-[#103968] items-center`}>
                        <p className="font-roboto text-lg text-white font-normal tracking-wide pl-5 py-3">Chatbot PENS</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute right-4" onClick={() => setIsOpen(false)}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#FFFFFF"/>
                        </svg>
                    </div>
                    <div className="flex flex-col mt-3 space-y-2 w-full px-5 h-96 overflow-y-auto">
                        {
                            messages.map(item => 
                                <div className={` ${item.author === "me" ? 'flex-row-reverse' : 'flex-row'} flex`}>
                                    <div className="flex flex-row space-x-1">
                                        <div className={`${item.author === "chatbot-PENS" ? 'visible' : 'hidden'} bg-white flex flex-none border-2 border-[#103968] w-10 h-10 p-2 rounded-full`}>
                                            <img 
                                                src="/asset/logo_PENS.png"
                                            />
                                        </div>
                                        <p className={`${item.author === "me" ? 'bg-[#103968] text-white' : 'bg-gray-300 text-black'} w-auto max-w-xs px-4 py-2 rounded-lg`}>{item.text}</p>
                                        <div className={`${item.author === "me" ? 'visible' : 'hidden'} bg-white border-2 border-[#103968] w-10 h-10 rounded-full`}>
                                            <p className="mt-[5px] text-[#103968] text-center text-md align-middle font-bold">Me</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="absolute flex flex-row bottom-0 w-full px-4 pb-4 space-x-2">
                    <input
                        type="text"
                        className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        value={message}
                        placeholder="Enter message here ..."
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="flex bg-[#103968] w-auto shadow-xl pr-3 pl-2.5 py-[11px] items-center rounded-full" onClick={sendMessage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7071 1.29292C22.9788 1.56456 23.0708 1.96779 22.9439 2.33038L15.9439 22.3304C15.8084 22.7174 15.4504 22.9825 15.0408 22.9992C14.6311 23.0159 14.2527 22.7808 14.0862 22.4062L10.2424 13.7576L1.59387 9.91384C1.21919 9.74731 0.984122 9.36894 1.00084 8.95926C1.01755 8.54959 1.28265 8.19162 1.66965 8.05617L21.6697 1.05617C22.0322 0.929264 22.4355 1.02128 22.7071 1.29292ZM12.1928 13.2215L14.8894 19.289L19.6085 5.80571L12.1928 13.2215ZM18.1943 4.3915L4.71108 9.11063L10.7785 11.8073L18.1943 4.3915Z" fill="#FFFFFF"/>
                        </svg>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Chatbot