import ScrollAnimation from 'react-animate-on-scroll';

const PensTVSection = () =>{
    return(
        <>
            <div className="static block lg:max-h-[50rem] lg:h-[50rem] max-h-[60rem] h-[60rem] w-full">
                <div className="z-[-1] absolute w-full lg:w-2/3 lg:max-h-[50rem] lg:h-[50rem] max-h-[60rem] h-[60rem] bg-pens-tv"></div>
                <div className="flex lg:flex-row flex-col items-center w-full h-full justify-center align-center md:mr-20">
                    <ScrollAnimation animateOnce={true} animateIn="animate__fadeInLeft" className="animate__animated">
                        <div className="flex flex-col items-center">
                            <div className="flex lg:border-l border-white lg:pl-16">
                                <p className="uppercase font-roboto font-normal tracking-widest text-white text-[56px]">pens tv</p>
                            </div>
                            <p className="font-roboto font-light text-white text-lg lg:ml-20 w-1/2 mt-5">Get to know your personality to find the most suitable study program for you!</p>
                            <button className="flex w-[220px] xl:w-[300px] bg-yellow-400 shadow-lg shadow-zinc-800 justify-center items-center lg:ml-24 mt-10 py-4 text-white text-lg font-semibold uppercase tracking-widest hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">subscribe now</button>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} animateIn="animate__fadeInRight" className="animate__animated">
                        <div className="md:right-0">
                            <iframe className="shadow-2xl shadow-zinc-900 flex z-10 mr-0 lg:mr-20 md:right-0 justify-right w-[300px] h-[200px] sm:w-[480px] sm:h-[320px] xl:w-[720px] md:h-[480px] mt-20" src="https://www.youtube.com/embed/Sjn1-Vg5Ezw"></iframe>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </>
    )
}

export default PensTVSection