import React from "react";
import 'tw-elements';
import { Link } from "react-router-dom";
import {element} from "tw-elements/dist/src/js/mdb/util";
import {url} from "tailwindcss/lib/util/dataTypes";
import {Widgets, Explanation, Services} from "../../dump/aboutContent";

AboutPage.propTypes = {};

function AboutPage(props) {
    return (
        <>
        <div className="text-center relative overflow-hidden bg-no-repeat bg-cover about-header">
            <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{backgroundColor:"rgba(0, 0, 0, 0.6)"}}
            >
                <div className="flex justify-center items-center h-full">
                    <div className="text-white xl:px-56 px-10">
                        <h1 className="font-roboto text-3xl font-bold">Tentang Politeknik Elektronika Negeri Surabaya</h1>
                        <h5 className="text-xl pt-2 font-roboto">Politeknik Elektronika Negeri Surabaya adalah kampus modern, komprehensif, terbuka, multi budaya, dan humanis yang mencakup disiplin ilmu yang luas.</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:px-12 xs:px-6 py-10">
            <div className="px-12 mt-12 grid md:grid-cols-3 xs:grid-cols-1">
                <div className="grid col-span-2 grid-rows-1 gap-4">
                    <div className="">
                        <div>
                            <h2 className="font-semibold text-center text-3xl">Sejarah</h2>
                        </div>
                        <div className="mt-4 px-6">
                            <p className="text-justify">{Explanation.body}</p>
                        </div>
                        <div className="mt-4 px-6 text-justify">
                            {
                                Explanation.body_history.map((value, idx) => {
                                    return (
                                        <div key={idx}>
                                            <p className="font-semibold">
                                                {value.subtitle}
                                            </p>
                                            <p className="mb-4">
                                                {value.desc}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={`mt-6`}>
                            <h2 className="font-semibold text-center text-3xl">Visi</h2>
                        </div>
                        <div className="mt-4 px-6">
                            <p className="text-justify">{Explanation.visi}</p>
                        </div>
                        <div className={`mt-6`}>
                            <h2 className="font-semibold text-center text-3xl">Misi</h2>
                        </div>
                        <div className="mt-4 px-6 text-justify">
                            <div className="flex justify-center">
                                <ul className="bg-white rounded-lg text-gray-900">
                                    {
                                        Explanation.misi.map((value, idx) => {
                                            return (
                                                <li key={idx} className={"py-2 border-b border-gray-300 w-full rounded-t-lg"}>
                                                    {value}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-12 gap-4 justify-end">
                    <div className="text-center">
                        <h2 className="font-semibold text-3xl">Widgets</h2>
                    </div>
                    <div className="p-2 m-2 grid lg:grid-cols-2 xs:grid-cols-1 gap-4">
                        {
                            Widgets.map((value, index) => {
                                return (
                                    <div key={index} className="flex justify-center">
                                        <div key={index} className="rounded-lg shadow-lg bg-white max-w-sm">
                                            <a href="#!">
                                                <img className="rounded-t-lg hover:scale-125" src={`/asset/${value.img}`}
                                                     alt=""/>
                                            </a>
                                            <div className="p-6">
                                                <h5 className="text-gray-900 text-xl font-medium mb-2">{`${value.body}`}</h5>
                                                <p className="text-gray-700 text-base mb-4"></p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="my-6 container mx-auto bg-scroll content-bg-grey py-10 ">
            <div>
                <h2 className="font-semibold text-center text-3xl mb-5">Layanan</h2>
            </div>
            <div className="grid grid-rows-1 gap-4 px-12">
            {
                Services.map((value, idx) => {
                    return (
                        <div key={idx} className="flex mt-4 px-12">
                            <div className="w-full flex flex-col md:flex-row rounded-lg bg-white shadow-lg">
                                <img
                                    className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg hover:rotate-[15deg]"
                                    src={`/asset/${value.img}`} alt=""/>
                                <div className="p-6 flex flex-col justify-start">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{`${value.title}`}</h5>
                                    <p className="text-gray-700 text-base mb-4">{`${value.body}`}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
        </>
    );
}

export default AboutPage;
