

const PensTVSection = () =>{
    return(
        <div className="static block">
            <div className="absolute flex flex-col w-2/3 h-screen px-16 pt-[150px] bg-[#103968] pens-tv">
                <div className="flex border-l border-white pl-20">
                    <p className="uppercase font-roboto font-normal tracking-widest text-white text-[56px]">pens tv</p>
                </div>
                <p className="font-roboto font-light text-white text-lg ml-20 w-1/2 mt-5">Get to know your personality to find the most suitable study program for you!</p>
                <button className="flex w-[300px] bg-yellow-400 shadow-lg shadow-zinc-800 justify-center items-center ml-20 mt-10 py-4 text-white text-lg font-semibold uppercase tracking-widest transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">subscribe now</button>
            </div>
            <iframe className="absolute shadow-2xl shadow-zinc-900 flex mr-16 z-10 right-0 justify-right w-[720px] h-[480px] mt-20" src="https://www.youtube.com/embed/Sjn1-Vg5Ezw"></iframe>
        </div>
    )
}

export default PensTVSection