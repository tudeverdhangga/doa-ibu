import React from "react";
import { Link } from "react-router-dom";
import news from "../../dump/news.json";

AcademicPage.propTypes = {};

function AcademicPage(props) {

    const departments = [
        {
            "title": 'Departemen Teknik Elektro',
            "slug": "DTE",
            "prodi" : [
                "D3 Teknik Elektronika",
                "D3 Teknik Elektro Industri",
                "D4 Teknik Elektronika",
                "D4 Teknik Elektro Industri",
                "D3 Teknik Telekomunikasi",
                "D4 Teknik Telekomunikasi",
                "S2 Terapan Teknik Telekomunikasi",
                "S2 Terapan Teknik Elektro",
                "D3K PLN",
                "D3K GMF AeroAsia",
                "D4K PLN",
            ]
        },
        {
            "title": 'Departemen Teknik Informatika dan Komputer',
            "slug": "DTIK",
            "prodi" : [
                "D3 Teknik Informatika",
                "D4 Teknik Informatika",
                "D4 Teknik Komputer",
                "D4 Data Science",
                "S2 Terapan Teknik Informatika",
            ]
        },
        {
            "title": 'Departemen Teknik Mekanika dan Energi',
            "slug": "DTME",
            "prodi" : [
                "D4 Teknik Mekatronika",
                "D4 Sistem Pembangkit Energi",
            ]
        },
        {
            "title": 'Departemen Teknologi Multimedia Kreatif',
            "slug": "DTMK",
            "prodi" : [
                "D3 Multimedia Broadcasting",
                "D4 Teknologi Game",
            ]
        },
    ]

    return (
        <>
            <div className="text-center relative overflow-hidden bg-no-repeat bg-cover academic-header">
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor:"rgba(0, 0, 0, 0.6)"}}
                >
                    <div className="flex justify-center items-center h-full">
                        <div className="text-white xl:px-56 px-10">
                            <h1 className="font-roboto text-3xl font-bold">Program Pendidikan</h1>
                            <h5 className="text-xl pt-2 font-roboto">Adalah komitmen kami untuk mengembangkan secara konsisten sebuah komunitas belajar yang selalu melangkah, dengan selalu membuka tangan untuk merangkul semua pemuda pemudi.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-6 md:px-12 px-6 mt-10">
                <div className="p-6 drop-shadow-lg rounded-lg text-gray-700">
                    <h2 className="font-semibold text-3xl mb-5 text-center">Departemen dan Program Studi</h2>
                    <hr className="my-6 border-gray-300" />
                    <p className="px-6 text-justify">
                        Politeknik Elektronika Negeri Surabaya menyelenggarakan berbagai program pendidikan meliputi program Sarjana Terapan, Diploma 3, dan Pascasarjana. Beberapa fakultas juga menyelenggarakan program kelas kerjasama dengan PLN dan GMF AeroAsia
                    </p>
                </div>
                <div className="px-12 py-6 xl:h-[75vh]">
                    <ul className="
                          nav nav-tabs nav-justified
                          flex flex-col
                          md:flex-row
                          flex-wrap
                          list-none
                          border-b-0
                          pl-0
                          mb-4
                        " id="tabs-tabJustify" role="tablist">
                        {
                            Array.isArray(departments) ?
                                departments.map((value, idx) => {
                                    return (
                                        <li key={idx} className="nav-item flex-grow text-center" role="presentation">
                                            <a href={`#tabs-${value.slug}Justify`} className={idx == 0 ?
                                                `
                                                active
                                              nav-link
                                              w-full
                                              block
                                              font-medium
                                              text-sm
                                              leading-tight
                                              uppercase
                                              border-x-0 border-t-0 border-b-2 border-transparent
                                              px-6
                                              py-3
                                              my-2
                                              hover:border-transparent hover:bg-gray-100
                                              focus:border-transparent
                                            ` :
                                                `
                                              nav-link
                                              w-full
                                              block
                                              font-medium
                                              text-sm
                                              leading-tight
                                              uppercase
                                              border-x-0 border-t-0 border-b-2 border-transparent
                                              px-6
                                              py-3
                                              my-2
                                              hover:border-transparent hover:bg-gray-100
                                              focus:border-transparent
                                            `
                                            } id={`tabs-${value.slug}-tabJustify`} data-bs-toggle="pill" data-bs-target={`#tabs-${value.slug}Justify`} role="tab"
                                               aria-controls={`tabs-${value.slug}Justify`} aria-selected={idx == 0 ? `true` : `false`}>{value.title}</a>
                                        </li>
                                    )
                                }) : ''
                        }
                    </ul>
                    <div className="tab-content" id="tabs-tabContentJustify">
                        {
                            Array.isArray(departments) ?
                                departments.map((value, idx) => {
                                    return (
                                        <div key={idx} className={idx == 0 ? `tab-pane fade show active` : `tab-pane fade show`} id={`tabs-${value.slug}Justify`} role="tabpanel"
                                             aria-labelledby={`tabs-${value.slug}-tabJustify`}>
                                            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
                                            {
                                                Array.isArray(value.prodi) ?
                                                    value.prodi.map((prod, _) => {
                                                        return (
                                                            <div
                                                                key={_}
                                                                className="block p-6 rounded-lg shadow-lg bg-slate-200 text-center">
                                                                <h5 className="text-blue-900 text-xl leading-tight font-medium mb-2">{prod}</h5>
                                                            </div>
                                                        )
                                                    }) : ''
                                            }
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

export default AcademicPage;
