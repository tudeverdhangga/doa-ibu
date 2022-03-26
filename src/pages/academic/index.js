import React from "react";
import { Link } from "react-router-dom";

AcademicPage.propTypes = {};

function AcademicPage(props) {
    return (
        <>
            <div className="text-center relative overflow-hidden bg-no-repeat bg-cover academic-header">
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor:"rgba(0, 0, 0, 0.6)"}}
                >
                    <div className="flex justify-center items-center h-full">
                        <div className="text-white">
                            <h1 className="font-semibold text-5xl mb-4">PENDIDIKAN DI PENS</h1>
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
            <div className="p-6 shadow-lg rounded-lg bg-gray-50 text-gray-700 text-center">
                <h2 className="font-semibold text-3xl mb-5">Hello world!</h2>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                    to featured content or information.
                </p>
                <hr className="my-6 border-gray-300" />
                <p>
                    It uses utility classes for typography and spacing to space content out within the larger
                    container.
                </p>
            </div>
        </>
    );
}

export default AcademicPage;
