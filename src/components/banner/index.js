const Banner = () =>{
    return(
        <>
            <div className="max-h-[80vh] h-[80vh] realtive pens-banner">
                <video className="w-full h-full" autoPlay muted loop>
                    <source src="./asset/banner_video.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="absolute text-center text-white top-[40%] w-full">
                <h2 className="text-3xl font-bold">Politeknik Elektronika Negeri Surabaya</h2>
                <h5 className="text-xl pt-2">Kampus Perjuangan, Kampus Tradisi Juara</h5>
            </div>
        </>
    )
}

export default Banner