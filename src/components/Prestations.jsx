import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSearchParams } from 'react-router-dom'

const getIndexByParam =  (text) => {
   switch (text) {
       case "soin-visage":
           return 0;
        case "soin-corps":
            return 1;
       default:
           return 0;
   }
}

function Prestations() {
   const [params] = useSearchParams()
   const i = getIndexByParam(params.get('q')) || 0
    return (
        <>
        <div className="w-4/5 mx-auto container my-10 font-lora">
                <Tabs defaultIndex={i}>
    <TabList>
      <Tab>SOIN VISAGE</Tab>
      <Tab>SOIN CORPS</Tab>
    </TabList>

    <TabPanel>
      <div>SOIN VISAGE</div>
    </TabPanel>
    <TabPanel>
      <div> SOIN CORPS</div>
    </TabPanel>
  </Tabs> 
        </div>
      
        </>
    )
}

export default Prestations
