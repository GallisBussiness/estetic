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
                  <div className="text-2xl text-blue-600 font-bold">
                  25 000 F CFA
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
                  <div className="text-2xl text-blue-600 font-bold">
                  25 000 F CFA
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
                  <div className="text-2xl text-blue-600 font-bold">
                  15 000 F CFA
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
