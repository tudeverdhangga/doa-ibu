import program from '../../dump/program.json'
import ScrollAnimation from 'react-animate-on-scroll';

const ProgramPens = () =>{
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-items-center w-full h-full px-5 md:px-20 pt-20 pb-28">
                {
                    program.program?.map((item) => {
                        return (
                            <ScrollAnimation animateIn="animate__fadeInUp" className="animate__animated mx-2">
                                <div className="max-h-[28rem] h-[28rem] w-full flex justify-center">
                                    <div className="flex flex-col justify-between px-8 py-10 rounded-sm shadow-xl bg-[#f4f6fa] max-w-sm">
                                        <h5 className="text-[#103968] font-roboto text-lg tracking-widest leading-tight font-medium uppercase mb-2 h-[90px]">{item.department}</h5>
                                        <p className="text-gray-700 text-base font-roboto mb-4 mt-5">{item.detail}</p>
                                        <button type="button" className="mt-5 inline-block px-6 py-2.5 bg-[#103968] text-white font-normal text-xs leading-tight font-roboto tracking-wider rounded shadow-md transition duration-150 ease-in-out">Baca selengkapnya</button>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProgramPens