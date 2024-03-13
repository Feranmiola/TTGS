import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js'
import { Button } from "@/components/ui/button"
import TimetableComponent from "@/lib/timetableJson/timetableRender"
import timetableData from '@/lib/timetableJson/100SE.json'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ScrollArea } from '@/components/ui/scroll-area';


const Home = () => {
  const tableRef = useRef(null);

  const exportToPDF = () => {
    const opt = {
      margin: 1,
      filename: 'Timetable.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: 'in', format: 'a3', orientation: 'landscape' }
    };

    if (tableRef.current) {
      html2pdf().from(tableRef.current).set(opt).save();
    }
  };
  
  return (
    <div className=''>
      
      <div className='flex flex-row'>
        <h1 className='h2-bold py-11 px-16 text-purple-400' >Generate Timetable</h1>
      </div>
      
      <div className=" items-center place-self-center">
          <p className="text-black text-center ">The Timetable will be generated following the set constaints and resources</p>
          <Button type="submit" className="shad-button_primary mt-4 w-30 place-self-center">
              <div>Generate</div>  
            </Button>
      </div>

      <div className="place-content-center justify-center">
        <Tabs className="place-self-center w-[400px]">

        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="SoftwareEngineering">Software Engineering</TabsTrigger>
          <TabsTrigger value="ComputerScience">Computer Science</TabsTrigger>
        </TabsList>

          <TabsContent value="SoftwareEngineering">
            <Button className='shad-button_primary' onClick={exportToPDF}>Export</Button>
            <TimetableComponent ref={tableRef} data={timetableData} />
          </TabsContent>
        
          <TabsContent value="ComputerScience">
            <Button onClick={exportToPDF}>Export</Button>
            <TimetableComponent ref={tableRef} data={timetableData} />
          </TabsContent>

        </Tabs>
      </div>
      
      
      
    </div>
  )
}

export default Home