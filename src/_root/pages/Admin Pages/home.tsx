import React, { useEffect, useRef, useState } from 'react';
import html2pdf from 'html2pdf.js'
import { Button } from "@/components/ui/button"
import {TimetableComponent} from "@/lib/timetableJson/timetableRender"
// import { useNavigate } from 'react-router-dom';
import { Loader } from "lucide-react"

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { ScrollArea } from '@/components/ui/scroll-area';
import {ScrollShadow} from "@nextui-org/react";

interface MyPanelsProps {
  exportToPDF: any,
  isGenerated: boolean,
  isGenerating: boolean,
  timeTable: any,
  tableRef: any,
}

function MyPanels({exportToPDF, isGenerated, isGenerating, timeTable, tableRef}: MyPanelsProps) {

  return (
    <>
      <TabPanel className='justify-center items-center'
      > 

        {/* 100L Software Engineering Tab  */}

        <Button onClick={exportToPDF} className="shad-button_primary w-40 place-self-center">
                  {timeTable.length == 0? (
                    <div className="flex-center gap-2 ">
                      Nothing to Export
                    </div>
                  ):(
                    <div>Export</div>
                  )}
                </Button>
                
                {!isGenerated? (
                    <div className="flex-center gap-2 ">
                      {isGenerating? (
                        <div className="flex-center gap-2 ">
                          
                          <Loader/>

                        </div>
                      ):(
                        <div className="flex-center gap-2 ">
                          
                          Timetable not Generated

                        </div>
                      )}
                      
                    </div>
                  ):(
                      
                        <ScrollArea className='rounded-md border h-80 mt-10'>
                          <ScrollShadow size={100} className='w-full'>
                            <TimetableComponent tables={timeTable} ref={tableRef} />
                          </ScrollShadow>
                        </ScrollArea>
                  )}
          
        </TabPanel>
    </>
  )
}

const levels = [
  100,
  200,
  300,
  400
]


const Home = () => {
  const tableRef = useRef(null);
  // const isGenerating = false;
  const isGenerated = true;

  const [timeTables, setTimetables] = useState<any>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [selected, setSelected] = useState<any>({level: 100, department: "SE"})

  useEffect(() => {
    fetch("http://localhost:3000/timetable")
    .then(response => response.json())
    .then(data => setTimetables(data))
  }, [isGenerating])

  function generate() {
    let numGroups;

    if(selected.level == 400) numGroups = 2;
    else numGroups = 4;

    const dataToSend = {
      level: selected.level,
      department: selected.department,
      numberOfGroups: numGroups,
    }

    setIsGenerating(true);

    fetch(`http://localhost:3000/timetable/${selected.level + selected.department}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    })
    .then(response => {
      if(response.ok) {
        setIsGenerating(false)
      }
      else {
        setIsGenerating(false)
      }
    })
    .catch(error => {
      setIsGenerating(false)
      console.log(error);
      
    })

  }


  const exportToPDF = () => {
    const opt = {
        margin: [1, 0.5, 1, 0.5],
        filename: 'Timetable.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'in', format: 'a3', orientation: 'landscape' }
    };
    
    const content = document.createElement('div');
    const tables = Array.from(document.querySelectorAll('table'));

    tables.forEach((table, index) => {
        const clone = table.cloneNode(true);
        content.appendChild(clone);
        if (index < tables.length - 1) {
            const pageBreak = document.createElement('div');
            pageBreak.className = 'pagebreak'; 
            content.appendChild(pageBreak);
        }
    });
    html2pdf().from(content).set(opt).save();
};

console.log(timeTables);

console.log(selected);



  
  return (
    <div className='mt-16'>
      
      <div className='flex flex-row'>
        <h1 className='h2-bold px-16 text-blue-600' >Generate Timetable</h1>
      </div>
      
      <div className=" items-center justify-center px-16 ">
          <p className="text-black mt-5 ">The Timetable will be generated following the set constaints and resources</p>
          <Button type="submit" className="shad-button_primary mt-4 w-40"
            onClick={() => generate()}
          >
              {isGenerating? (
                <div className="flex-center gap-2 ">
                  <Loader/>
                </div>
              ):(
                <div>Re-Generate</div>
              )}
            </Button>
      </div>

      <div className="place-content-center justify-center">
        <Tabs align='center' variant='soft-rounded' colorScheme='blue' isLazy className='mt-10 bg-white rounded'>
          <TabList className='mx-2 py-3'>
            <Tab className='hover:bg-blue-100'>Software Engineering</Tab>
            <Tab className='hover:bg-blue-100'>Computer Science</Tab>
            <Tab className='hover:bg-blue-100' isDisabled>Computer Tech</Tab>
            <Tab className='hover:bg-blue-100' isDisabled>Computer Information Systems</Tab>
            <Tab className='hover:bg-blue-100' isDisabled>Information Technology</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
                <Tabs colorScheme='blue'>
              <TabList>
                <Tab className='hover:bg-blue-100'
                  onClick={() => setSelected({level: 100, department: "SE"})}
                >
                  100
                </Tab>
                <Tab className='hover:bg-blue-100'
                  onClick={() => setSelected({level: 200, department: "SE"})}
                >
                  200
                </Tab>
                <Tab className='hover:bg-blue-100'
                  onClick={() => setSelected({level: 300, department: "SE"})}
                >
                  300
                </Tab>
                <Tab className='hover:bg-blue-100'
                  onClick={() => setSelected({level: 400, department: "SE"})}
                >
                  400
                </Tab>
              </TabList>
              <TabPanels>
                {
                  levels.map(level => <MyPanels key={level} exportToPDF={exportToPDF} isGenerated={isGenerated} isGenerating={isGenerating} timeTable={timeTables.filter((table: any) => table.department == "SE" && table.level == level)} tableRef={tableRef} />)
                }
              </TabPanels>
            </Tabs>
            </TabPanel>
            <TabPanel>
            <Tabs colorScheme='blue'>
              <TabList>
                <Tab className='hover:bg-blue-100'>100</Tab>
                <Tab className='hover:bg-blue-100'>200</Tab>
                <Tab className='hover:bg-blue-100'>300</Tab>
                <Tab className='hover:bg-blue-100'>400</Tab>
              </TabList>
              <TabPanels>
                {
                  levels.map(level => <MyPanels key={level} exportToPDF={exportToPDF} isGenerated={isGenerated} isGenerating={isGenerating} timeTable={timeTables.filter((table: any) => table.department == "CS" && table.level == level)} tableRef={tableRef} />)
                }
              </TabPanels>
            </Tabs>
            </TabPanel>
            <TabPanel>
            <Tabs colorScheme='blue'>
              <TabList>
                <Tab className='hover:bg-blue-100'>100</Tab>
                <Tab className='hover:bg-blue-100'>200</Tab>
                <Tab className='hover:bg-blue-100'>300</Tab>
                <Tab className='hover:bg-blue-100'>400</Tab>
              </TabList>
              <TabPanels>
                {
                  levels.map(level => <MyPanels key={level} exportToPDF={exportToPDF} isGenerated={isGenerated} isGenerating={isGenerating} timeTable={timeTables.filter((table: any) => table.department == "CT" && table.level == level)} tableRef={tableRef} />)
                }
              </TabPanels>
            </Tabs>
            </TabPanel>
            <TabPanel>
            <Tabs colorScheme='blue'>
              <TabList>
                <Tab className='hover:bg-blue-100'>100</Tab>
                <Tab className='hover:bg-blue-100'>200</Tab>
                <Tab className='hover:bg-blue-100'>300</Tab>
                <Tab className='hover:bg-blue-100'>400</Tab>
              </TabList>
              <TabPanels>
                {
                  levels.map(level => <MyPanels key={level} exportToPDF={exportToPDF} isGenerated={isGenerated} isGenerating={isGenerating} timeTable={timeTables.filter((table: any) => table.department == "CIS" && table.level == level)} tableRef={tableRef} />)
                }
              </TabPanels>
            </Tabs>
            </TabPanel>
            <TabPanel>
            <Tabs colorScheme='blue'>
              <TabList>
                <Tab className='hover:bg-blue-100'>100</Tab>
                <Tab className='hover:bg-blue-100'>200</Tab>
                <Tab className='hover:bg-blue-100'>300</Tab>
                <Tab className='hover:bg-blue-100'>400</Tab>
              </TabList>
              <TabPanels>
                {
                  levels.map(level => <MyPanels key={level} exportToPDF={exportToPDF} isGenerated={isGenerated} isGenerating={isGenerating} timeTable={timeTables.filter((table: any) => table.department == "IT" && table.level == level)} tableRef={tableRef} />)
                }
              </TabPanels>
            </Tabs>
            </TabPanel>
          </TabPanels>
        </Tabs>

      </div>

      
    </div>
  )
}

export default Home