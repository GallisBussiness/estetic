import React from 'react'
import Zoom from 'react-reveal/Zoom'

function RituelMinceur() {
    return (
        <>
          <div className="px-10 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-10">
                <Zoom>
                   <div className="bg-white shadow-lg rounded-lg w-96">
                <div className="py-5 px-5">
                <span className="font-bold text-gray-800 text-lg">SOINS CRYOGENIQUE</span>
                <div className="flex items-center justify-between">
                  <div className="md:text-lg text-sm text-gray-600 font-light">
                    Durée : 1 h
                  </div>
                  <div className="text-2xl text-gray-600 font-bold">
                  25 000 F CFA
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-x-2">
                <hr className="w-10 h-1 bg-black my-1" />
                   <div className="text-lg text-black text-justify">
                   Un enveloppement - soin cryothérapie, qui traite les sensations d'inconfort et de fatigue dans les jambes. Un traitement dont l'éfficacité du complexe algal, enrichi en menthol et camphre est très largement approuvée. La sensation de fatigue douloureuse des jambes s'estompent pour une silhouette affinée.
                 </div>
                 </div>
                 </div>
                </div> 
                </Zoom>
               
                <Zoom>
                    <div className="bg-white shadow-lg rounded-lg w-96">
                <div className="py-5 px-5">
                <span className="font-bold text-gray-800 text-lg">DETOX MINCEUR LEGERETE</span>
                <div className="flex items-center justify-between">
                  <div className="md:text-lg text-sm text-gray-600 font-light">
                    Durée : 1h
                  </div>
                  <div className="text-2xl text-gray-600 font-bold">
                  45 000 F CFA
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-x-2">
                <hr className="w-10 h-1 bg-black my-1" />
                   <div className="text-lg text-black text-justify">
                  Concentré de performance et d'efficacité, ce soin minceur professionnel sur mesure zone à zone, gommage ultra exfoliant, double enveloppement effet chaud froid hautement actif associées à un massage spécifique pour remodeler visiblement votre silhouette les capitons,raffermir et tonifier votre peau.
                  Gommage-enveloppement-massage-minceur localisé
                 </div>
                 </div>
                 </div>
                </div> 
                </Zoom>
               
                <Zoom>
                   <div className="bg-white shadow-lg rounded-lg w-96">
                <div className="py-5 px-5">
                <span className="font-bold text-gray-800 text-lg">RITUEL MINCEUR TRADITIONNEL</span>
                <div className="flex items-center justify-between">
                  <div className="md:text-lg text-sm text-gray-600 font-light">
                    Durée : 1h
                  </div>
                  <div className="text-2xl text-gray-600 font-bold">
                  15 000 F CFA
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-x-2">
                <hr className="w-10 h-1 bg-black my-1" />
                   <div className="text-lg text-black text-justify">
                 Massage amincissant localisé sur le ventre, les cuisses pour affiner visiblement la silhouette.
                 </div>
                 </div>
                 </div>
                </div> 
                </Zoom>
                   
            </div>
        </div>  
        </>
    )
}

export default RituelMinceur
