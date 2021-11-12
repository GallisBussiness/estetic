import { Input, InputGroup, InputRightAddon } from '@chakra-ui/input'
import { SearchIcon } from '@heroicons/react/solid'
import React, { useEffect, useMemo, useState } from 'react'
import json from '../data.json'
import Formation from './Formation'

function Formations() {
  const [valueSearch,setValueSearch] = useState("");
  const dataJson  = useMemo(() =>  json.data.formations,[])
  const [data,setData] = useState(dataJson)

  useEffect(() => {
    setData(dataJson.filter((d) => {
        if (valueSearch === "") {
          //if query is empty
          return d
        } else if (d.title.toLowerCase().includes(valueSearch.toLowerCase())) {
          //returns filtered array
          return d
        }
        return null;
      }))
    return () => {
       return null
    }
  }, [valueSearch,dataJson])
    return (
        <>
<section className="px-2 py-32 bg-white md:px-0 font-lora">
  <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Beautiful Pages to</span>
            <span className="block text-indigo-600 xl:inline">Tell Your Story!</span>
          </h1>
          <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">It's never been easier to build beautiful websites that convey your message and tell your story.</p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="image3.jpg" alt="" />
          </div>
      </div>
    </div>
  </div>
</section>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between font-lora">
           <div className="h-96 w-full md:w-3/5 relative md:sticky top-0 p-3 mx-4">
             <div className="w-full bg-pink-600 text-white p-2 text-center text-lg font-semibold">Menu</div>
             <section className="container mx-auto px-4 my-2">
  <div className="flex items-center justify-between">
  <InputGroup>
  <Input type="search" placeholder="Rechercher une formation" onChange={(e) => setValueSearch(e.target.value)} />
    <InputRightAddon children={<SearchIcon className="h-6 w-6 text-white" />} />
  </InputGroup>
  </div>
</section>
           </div>
            <div className="grid grid-cols-12 gap-6">
                
                     {data.map((data,index) => (
                    <div key={index} className="col-span-12 md:col-span-3">
                     <Formation  formation={data} />
                        </div>
                        ))}
            </div>
        </div>
        
        </>
    )
}

export default Formations
