import React from "react";
import 'tw-elements';
import { Link } from "react-router-dom";
import {element} from "tw-elements/dist/src/js/mdb/util";
import {url} from "tailwindcss/lib/util/dataTypes";
import {Widgets, Explanation} from "../../dump/aboutContent";

AboutPage.propTypes = {};

function AboutPage(props) {
    return (
        <>
        <div className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg about-header">
            <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{backgroundColor:"rgba(0, 0, 0, 0.6)"}}
            >
                <div className="flex justify-center items-center h-full">
                    <div className="text-white">
                        <h1 className="font-semibold text-5xl mb-4">Tentang PENS</h1>
                        <a
                            className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            href="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            Seleksi Masuk
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-6 grid md:grid-cols-2 xs:grid-cols-1 justify-around">
            <div className="grid grid-rows-1 gap-4">
                <div>
                    <div>
                        <h2 className="font-semibold text-center text-3xl">Content</h2>
                    </div>
                    <div className="mt-4 px-6">
                        <p className="text-justify">{Explanation.body}</p>
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
                    <div className="mt-4 px-6">
                        <div className="flex justify-center">
                            <ul className="bg-white rounded-lg text-gray-900">
                                {
                                    Explanation.misi.map((value, idx) => {
                                        return (
                                            <li key={idx} className={"py-2 border-b border-gray-200 w-full rounded-t-lg"}>
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
            <div className="grid grid-rows-12 gap-4">
                <div className="text-center">
                    <h2 className="font-semibold text-3xl">Widgets</h2>
                </div>
                <div className="row-span-12 p-2 m-2 grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4">
                    {
                        Widgets.map((value, index) => {
                            return (
                                <div key={index} className="flex justify-center">
                                    <div key={index} className="rounded-lg shadow-lg bg-white max-w-sm">
                                        <a href="#!">
                                            <img className="rounded-t-lg" src={`/asset/${value.img}`}
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
        </>
    );
}

export default AboutPage;
