import React from 'react'
// import FormationsTab from './FormationsTab'

function Formations() {
    return (
        <>
<section className="px-2 py-15 bg-white md:px-0 font-lora">
  <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div className="px-5 py-10 mx-auto">
       <h1 className="text-5xl text-pink-600 my-3">Duree 7 mois</h1>
  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            2 jours par mois mardi-jeudi de 9H00 à13H00-14H00-17H00
          </h1>
    </div>
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <p className="mx-auto text-base text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">Théorie et pratique des techniques d’esthétique / six modules décrits ci-dessous.
 Après remise des Protocoles de cours</p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="image1.jpeg" alt="team" />
          </div>
      </div>
    </div>
  </div>
</section>
{/* 
           <div className="container mx-auto px-10 font-lora">
             <FormationsTab />
</div> */}

<section className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24 font-lora">
    <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 className="box-border mb-4 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
            PLAN DE FORMATION SESSION EXCELLENCE
            </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                EPILATIONS
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        450.000
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        FCFA
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Matériel utilisé
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Théorie
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Règles d’hygiène
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Epilation jambes complètes et bras
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Epilation aisselles et maillot
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Epilation visage
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique sur modèles réels
                    </li>
                </ul>
            </div>
            <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-pink-500 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                SOINS DU VISAGE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        550.000
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        FCFA
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Matériel utilisé
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Règles d’hygiène
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Anatomie de la peau /cosmétologie
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Déroulement d’un soin
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Les différents  gestes technique
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Différents types de peau (Peau déshydratée,Peau grasse,Peau sensible,Peau mature,Peau mixte)
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique sur modèles réels
                    </li>
                </ul>
            </div>
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                SOIN DU CORPS
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        550.000
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        FCFA
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Matériel utilisé
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Règles d’hygiène
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Déroulement d’un soin corps
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Gommage corps
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Enveloppement
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Massage
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Soins jambes lourdes
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Soin du buste/Dos
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique sur modèles réels
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section className="py-6 leading-7 text-gray-900 bg-white sm:py-6 md:py-6 lg:py-6 font-lora">
        <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                MANUCURE PEDICURE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        450.000
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        FCFA
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Matériel utilisé
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Règles d’hygiène
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                         Les ongles : nature et maladies
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                         Le déroulement d’une manucure
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Le déroulement d’une pédicure
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pose vernis + pose vernis permanent
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Dépose vernis permanent
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique sur modèles réels   manucure pédicure
                    </li>
                </ul>
            </div>
            <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-pink-500 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                ONGLERIE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        450.000
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        FCFA
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Matériel utilisé
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Règles d’hygiène
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pose capsule + limage
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Application du gel
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        les différentes French
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Décoration d’ongle
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pose chablon
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Finition
                    </li>
                </ul>
            </div>
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                MAQUILLAGE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        350.000
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        FCFA
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Connaissances et hygiène des produits et outils de maquillage
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Morphologie d’un visage
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Colorimétrie
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Déroulement d’un maquillage
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Les différentes techniques de maquillage :Jour /Cocktail/Soir/Mariée
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique sur modèles réels
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Soins jambes lourdes
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Soin du buste/Dos
                    </li>
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique sur modèles réels
                    </li>
                </ul>
            </div>
        </div>
</section>
<section className="py-6 leading-7 text-gray-900 bg-white sm:py-6 md:py-6 lg:py-6 font-lora">
        <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                ACCUEIL –VENTE
                </h3>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        350.000
                    </p>
                    <p className="box-border m-0 border-solid" style={{borderImage: 'initial'}}>
                        FCFA
                    </p>
                </div>
                <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Tenue
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Prise de rendez-vous 
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Accueil Client
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Prise en charge de la cliente 
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Fiche cliente
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Vente additionnelle
                    </li>
                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-pink-500 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Pratique en situation réelle
                    </li>
                </ul>
            </div>
        </div>
</section>

<div className="container px-20 py-10 mx-auto font-lora bg-white">
       <h1 className="text-2xl font-bold text-pink-600 my-3">Tarif</h1>
  <h1 className="text-lg font-normal tracking-tight text-gray-900">
  Formation Complète :		<span className="text-pink-700 font-bold"> 2.800.000 FCFA</span>
          </h1>
          <h1 className="text-lg font-normal tracking-tight text-gray-900">
          Frais de dossier : <span className="text-pink-700 font-bold">100.000 FCFA</span>
          </h1>
          <h1 className="text-lg font-normal tracking-tight text-gray-900">
          Kit : la liste est transmise au moment de l’inscription et commandée par nos soins.
          </h1>
          <h1 className="text-lg font-normal tracking-tight text-gray-900">
          Acompte de <span className="text-pink-700 font-bold">50% </span> à l’inscription :   <span className="text-pink-700 font-bold">1.450.000 FCFA</span>
          </h1>
          <h1 className="text-lg font-normal tracking-tight text-gray-900">
          Le solde peut être réglé par mensualités  le 1er de chaque mois.
          </h1>
    </div>

        </>
    )
}

export default Formations
