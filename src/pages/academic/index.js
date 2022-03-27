import React from "react";
import { Link } from "react-router-dom";
import news from "../../dump/news.json";

AcademicPage.propTypes = {};

function AcademicPage(props) {

    const departments = [
        {
            "title": 'Departemen Teknik Elektro',
            "slug": "DTE",
            "img": "./asset/depart_teknik_elektro.jpg",
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
            "img": "./asset/depart_teknik_informatika.jpg",
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
            "img": "./asset/depart_teknik_meka.jpg",
            "prodi" : [
                "D4 Teknik Mekatronika",
                "D4 Sistem Pembangkit Energi",
            ]
        },
        {
            "title": 'Departemen Teknologi Multimedia Kreatif',
            "slug": "DTMK",
            "img": "./asset/depart_teknik_mmk.jpg",
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
                        <div className="text-white font-roboto">
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
            <div className="mx-6 md:px-12 px-6">
                <div className="pt-16 px-10">
                    <div className="inline-block mb-12 font-roboto">
                        <h3 className="w-[40%] mb-10 font-extrabold text-5xl realtive pt-[20px] pr-auto pb-[15px] border-b-4 border-b-[#f2c808] border-solid text-[#103968]">Departemen dan Program Studi</h3>
                        <p>Politeknik Elektronika Negeri Surabaya menyelenggarakan berbagai program pendidikan meliputi program Sarjana Terapan, Diploma 3, dan Pascasarjana. Beberapa fakultas juga menyelenggarakan program kelas kerjasama dengan PLN dan GMF AeroAsia</p>
                    </div>
                    <div className="department grid grid-cols-1 md:grid-cols-2 font-roboto">
                        {
                            departments?.map((value, idx) => {
                                return (
                                    <figure className="m-8">
                                        <div className="galeri">
                                            <div className="galeri-img">
                                                <a className="max-h-[150px]">
                                                    <img className="w-full h-[250px] object-cover top-[50%] left-[50%]" src={value.img}/>
                                                </a>
                                            </div>
                                            <div className="galeri-caption flex items-center pens-primary border-l-4 border-l-[#f2c808] border-solid mx-0 h-16 mt-[-30px] py-[10px] px-[15px] text-center z-[1] relative text-white">
                                                <a className="text-sm font-bold max-h-16 no-underline absolute ">{value.title}</a>
                                            </div>
                                        </div>
                                    </figure>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default AcademicPage;
