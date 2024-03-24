import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js'
import { Button } from "@/components/ui/button"
import {TimetableComponent} from "@/lib/timetableJson/timetableRender"
import timetableData from '@/lib/timetableJson/100SE.json'
import timetableData2 from '@/lib/timetableJson/200SE.json'
import timetableData3 from '@/lib/timetableJson/400SE.json'
import { useNavigate } from 'react-router-dom';
import { Loader } from "lucide-react"

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { ScrollArea } from '@/components/ui/scroll-area';
import {ScrollShadow} from "@nextui-org/react";


const Home = () => {
  const tableRef = useRef(null);
  const isGenerating = false;
  const isGenerated = true;


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


  
  return (
    <div className='mt-16'>
      
      <div className='flex flex-row'>
        <h1 className='h2-bold px-16 text-blue-600' >Generate Timetable</h1>
      </div>
      
      <div className=" items-center justify-center px-16 ">
          <p className="text-black mt-5 ">The Timetable will be generated following the set constaints and resources</p>
          <Button type="submit" className="shad-button_primary mt-4 w-40">
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
                <Tab className='hover:bg-blue-100'>100</Tab>
                <Tab className='hover:bg-blue-100'>200</Tab>
                <Tab className='hover:bg-blue-100'>300</Tab>
                <Tab className='hover:bg-blue-100'>400</Tab>
              </TabList>
              <TabPanels>
                <TabPanel className='justify-center items-center'> 

                {/* 100L Software Engineering Tab  */}

                <Button onClick={exportToPDF} className="shad-button_primary w-40 place-self-center">
                          {!isGenerated? (
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
                                    <TimetableComponent tables={timetableData} ref={tableRef} />
                                  </ScrollShadow>
                                </ScrollArea>
                          )}
                  
                </TabPanel>
                <TabPanel>
                  {/* 200L Software Engineering Tab  */}

                  <Button onClick={exportToPDF} className="shad-button_primary w-40 place-self-center">
                          {isGenerating? (
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
                                    <TimetableComponent tables={timetableData2} ref={tableRef} />
                                  </ScrollShadow>
                                </ScrollArea>
                          )}

                </TabPanel>
                <TabPanel>
                  {/* 300L Software Engineering Tab  */}

                  <p>Nothing generated Here</p>

                </TabPanel>
                <TabPanel>
                  {/* 200L Software Engineering Tab  */}

                  <Button onClick={exportToPDF} className="shad-button_primary w-40 place-self-center">
                          {isGenerating? (
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
                                    <TimetableComponent tables={timetableData3} ref={tableRef} />
                                  </ScrollShadow>
                                </ScrollArea>
                          )}

                </TabPanel>
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
                <TabPanel className='justify-center items-center'> 

                {/* 100L Computer Science Tab  */}

                <Button onClick={exportToPDF} className="shad-button_primary w-40 place-self-center">
                          {isGenerating? (
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
                                    <TimetableComponent tables={timetableData} ref={tableRef} />
                                  </ScrollShadow>
                                </ScrollArea>
                          )}
                  
                </TabPanel>
                <TabPanel>
                  {/* 200L Computer Science Tab  */}

                  <Button onClick={exportToPDF} className="shad-button_primary w-40 place-self-center">
                          {isGenerating? (
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
                                    <TimetableComponent tables={timetableData2} ref={tableRef} />
                                  </ScrollShadow>
                                </ScrollArea>
                          )}

                </TabPanel>
                <TabPanel>
                  {/* 300L Computer Science Tab  */}

                  <p>Nothing generated Here</p>

                </TabPanel>
                <TabPanel>
                  {/* 200L Computer Science Tab  */}

                  <Button onClick={exportToPDF} className="shad-button_primary w-40 place-self-center">
                          {isGenerating? (
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
                                    <TimetableComponent tables={timetableData3} ref={tableRef} />
                                  </ScrollShadow>
                                </ScrollArea>
                          )}

                </TabPanel>
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
                <TabPanel className='justify-center items-center'> 

                {/* 100L Computer Tech Tab  */}
                  <p>Nothing generated Here</p>
                </TabPanel>
                <TabPanel>
                  {/* 200L Computer Tech Tab  */}
                  <p>Nothing generated Here</p>
                </TabPanel>
                <TabPanel>
                  {/* 300L Computer Tech Tab  */}

                  <p>Nothing generated Here</p>

                </TabPanel>
                <TabPanel>
                  {/* 200L Computer Tech Tab  */}
                  <p>Nothing generated Here</p>
                </TabPanel>
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
                <TabPanel className='justify-center items-center'> 

                {/* 100L Computer Information Systems Tab  */}
                  <p>Nothing generated Here</p>
                </TabPanel>
                <TabPanel>
                  {/* 200L Computer Information Systems Tab  */}
                  <p>Nothing generated Here</p>
                </TabPanel>
                <TabPanel>
                  {/* 300L Computer Information Systems Tab  */}

                  <p>Nothing generated Here</p>

                </TabPanel>
                <TabPanel>
                  {/* 200L Computer Information Systems Tab  */}
                  <p>Nothing generated Here</p>
                </TabPanel>
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
                <TabPanel className='justify-center items-center'> 

                {/* 100L Information Technology Tab  */}
                  <p>Nothing generated Here</p>
                </TabPanel>
                <TabPanel>
                  {/* 200L Information Technology Tab  */}
                  <p>Nothing generated Here</p>
                </TabPanel>
                <TabPanel>
                  {/* 300L Information Technology Tab  */}

                  <p>Nothing generated Here</p>

                </TabPanel>
                <TabPanel>
                  {/* 200L Information Technology Tab  */}
                  <p>Nothing generated Here</p>
                </TabPanel>
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