import 'tw-elements'
import dataNews from '../../dump/news.json'

const NewsSection = () =>{
    return(
        <div className="h-auto pb-20">
            <div id="carouselExampleCaptions" className="carousel slide relative w-full overflow-x-hidden h-[450px] px-20" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden py-10">
                    <div className="carousel-item active relative px-5 float-left w-full bg-white">
                        <img
                            src={dataNews.news[0].img}
                            className="block w-[560px] h-[360px] shadow-xl shadow-zinc-300"
                            alt="..."
                        />
                        <div className="carousel-caption hidden top-14 left-[54%] right-0 pt-0 md:block absolute text-left text-black">
                            <h5 className="font-roboto font-bold text-2xl -mt-10">{dataNews.news[0].header.title}</h5>
                            <p className="mt-2">Surabaya, pens.ac.id - Kembali mengharumkan kampus Politeknik Elektronika Negeri Surabaya (PENS) melalui 
                                prestasi, kali ini lima Mahasiswa D3 Teknik Informatika berhasil meraih Silver Medal dalam Youth International 
                                Science Fair (YISF) 2022. Kompetisi tingkat internasional ini, digelar selama tiga hari (14-17/3), dan bertempat...</p>
                            <button className="inline-block bg-[#103968] shadow-md leading-tight shadow-zinc-400  justify-center items-center mt-8 py-2.5 px-6 rounded-md text-white font-roboto  text-sm font-normal tracking-wider transition hover:bg-white hover:text-[#103968] hover:border-[#103968] hover:border-2 duration-500 ease-in-out">Baca selengkapnya</button>
                        </div>
                    </div>
                    <div className="carousel-item relative px-5 float-left w-full bg-whit">
                    <img
                        src={dataNews.news[1].img}
                        className="block w-[560px] h-[360px] shadow-xl shadow-zinc-300"
                        alt="..."
                    />
                    <div className="carousel-caption hidden top-14 left-[54%] right-0 pt-0 md:block absolute text-left text-black">
                        <h5 className="font-roboto font-bold text-2xl -mt-10">{dataNews.news[1].header.title}</h5>
                        <p className="mt-2">Surabaya, pens.ac.id - Kembali mengharumkan kampus Politeknik Elektronika Negeri Surabaya (PENS) melalui 
                            prestasi, kali ini lima Mahasiswa D3 Teknik Informatika berhasil meraih Silver Medal dalam Youth International 
                            Science Fair (YISF) 2022. Kompetisi tingkat internasional ini, digelar selama tiga hari (14-17/3), dan bertempat...</p>
                        <button className="inline-block bg-[#103968] shadow-md leading-tight shadow-zinc-400  justify-center items-center mt-8 py-2.5 px-6 rounded-md text-white font-roboto  text-sm font-normal tracking-wider transition hover:bg-white hover:text-[#103968] hover:border-[#103968] hover:border-2 duration-500 ease-in-out">Baca selengkapnya</button>
                    </div>
                    </div>
                    <div className="carousel-item relative px-5 float-left w-full bg-whit">
                    <img
                        src={dataNews.news[2].img}
                        className="block w-[560px] h-[360px] shadow-xl shadow-zinc-300"
                        alt="..."
                    />
                    <div className="carousel-caption hidden top-14 left-[54%] right-0 pt-0 md:block absolute text-left text-black">
                        <h5 className="font-roboto font-bold text-2xl -mt-10">{dataNews.news[2].header.title}</h5>
                        <p className="mt-2">Surabaya, pens.ac.id - Kembali mengharumkan kampus Politeknik Elektronika Negeri Surabaya (PENS) melalui 
                            prestasi, kali ini lima Mahasiswa D3 Teknik Informatika berhasil meraih Silver Medal dalam Youth International 
                            Science Fair (YISF) 2022. Kompetisi tingkat internasional ini, digelar selama tiga hari (14-17/3), dan bertempat...</p>
                        <button className="inline-block bg-[#103968] shadow-md leading-tight shadow-zinc-400  justify-center items-center mt-8 py-2.5 px-6 rounded-md text-white font-roboto  text-sm font-normal tracking-wider transition hover:bg-white hover:text-[#103968] hover:border-[#103968] hover:border-2 duration-500 ease-in-out">Baca selengkapnya</button>
                    </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev -ml-10 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z" fill="#103968"/>
                    </svg>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 -mr-10"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071C10.9024 19.3166 10.9024 18.6834 11.2929 18.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L11.2929 5.70711C10.9024 5.31658 10.9024 4.68342 11.2929 4.29289Z" fill="#103968"/>
                    </svg>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="flex flex-row space-x-7 justify-center w-full h-auto relative">
                <div className='flex'>
                    <div className=' bg-black'>
                        <img
                            src={dataNews.news[3].img}
                            alt="..."
                            className='w-[360px] h-[400px] object-cover opacity-50 hover:blur-sm transition duration-300 ease-in-out'
                        />
                    </div>
                    <div className="absolute z-10 text-white font-roboto font-semibold w-[320px] mx-5 text-lg bottom-5">
                        {dataNews.news[3].header.title}
                    </div>
                </div>
                <div className='flex'>
                    <div className=' bg-black '>
                        <img
                            src={dataNews.news[4].img}
                            alt="..."
                            className='w-[360px] h-[400px] object-cover opacity-50 hover:blur-sm transition duration-300 ease-in-out'
                        />
                    </div>
                    <div className="absolute z-10 text-white font-roboto font-semibold w-[320px] mx-5 text-lg bottom-5">
                        {dataNews.news[4].header.title}
                    </div>
                </div>
                <div className='flex'>
                    <div className=' bg-black '>
                        <img
                            src={dataNews.news[5].img}
                            alt="..."
                            className='w-[360px] h-[400px] object-cover opacity-50 hover:blur-sm transition duration-300 ease-in-out'
                        />
                    </div>
                    <div className="absolute z-10 text-white font-roboto font-semibold w-[320px] mx-5 text-lg bottom-5">
                        {dataNews.news[5].header.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsSection