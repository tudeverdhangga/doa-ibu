import React from "react";
import {Link, useParams} from "react-router-dom";
import {url} from "tailwindcss/lib/util/dataTypes";
import news from "../../dump/news.json"

NewsDetailPage.propTypes = {};

function NewsDetailPage(props) {
    const [newsDetail, setNewsDetail] = React.useState(null);

    let { id } = useParams();

    React.useEffect(() => {
        if (Array.isArray(news.news)) {
            setNewsDetail(news.news[id-1])
        }
    }, []);

    return (
        <>
            <div className="grid lg:grid-cols-12 gap-4 justify-between mt-6">
                <div className="lg:col-span-10 grid grid-rows-1 justify-center p-4 mx-6">
                    <section id="newsHeader" className="flex flex-wrap justify-center p-6">
                        <div className="text-justify">
                            <h1 className="text-4xl font-semibold">{newsDetail !== null ? newsDetail.header?.title : ""}</h1>
                            <p className="text-md my-3">{newsDetail !== null ? "by "+newsDetail.header?.editor + " | " + newsDetail.header?.date: ""}</p>
                        </div>
                        <div className="mt-6 p-0">
                            <img
                                className="block max-w-full h-auto news-header"
                                src={newsDetail !== null ? `/asset/${newsDetail.img}` : `/asset/news_cartoon.jpg`}
                            />
                        </div>
                    </section>
                    <section id="newsContent" className="mx-8 p-6 shadow-lg rounded-lg drop-shadow-lg text-gray-500 text-center">
                        {/*<h2 className="font-semibold text-3xl mb-5">Hello world!</h2>*/}
                        <hr className="my-6 border-gray-300" />
                        <p className="text-md text-justify">{newsDetail !== null ? newsDetail.body : ""}</p>
                    </section>
                </div>
                <div className="lg:col-span-2 mx-6 p-4">
                    <h3 className="text-xl text-center">Berita Terbaru</h3>
                    <div className="newest-news">
                        {
                            Array.isArray(news.news) ?
                                news.news.map((value, idx) => {
                                    return (
                                        <div key={idx} className="mt-12 flex justify-center">
                                            <div className="rounded-lg shadow-lg bg-white max-w-sm text-justify">
                                                <a href="#!">
                                                    <img className="rounded-t-lg" src={`/asset/${value.img}`}
                                                         alt=""/>
                                                </a>
                                                <div className="p-6">
                                                    <h5 className="text-gray-900 text-sm font-medium">{value.header.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : ''
                        }
                    </div>
                </div>
            </div>

        </>
    );
}

export default NewsDetailPage;
