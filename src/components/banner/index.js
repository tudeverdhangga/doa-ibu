const Banner = () =>{
    return(
        <>
            <div className="max-h-full h-full realtive pens-banner">
                <video className="w-full h-full" autoPlay muted loop>
                    <source src="./asset/banner_video.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="absolute text-center text-white top-[50%] w-full">
                <h2 className="text-3xl font-bold font-roboto">Politeknik Elektronika Negeri Surabaya</h2>
                <h5 className="text-xl pt-2 font-roboto">Kampus Perjuangan, Kampus Tradisi Juara</h5>
            </div>
        </>
    )
}

export default Banner