import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js'
import { Button } from "@/components/ui/button"
import {TimetableComponent} from "@/lib/timetableJson/timetableRender"
import timetableData from '@/lib/timetableJson/100SE.json'
import { Loader } from "lucide-react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';


const Home = () => {
  const tableRef = useRef(null);
  const isGenerating = false;
  const isGenerated = false;

  const exportToPDF = () => {
    const opt = {
        margin: [1, 0.5, 1, 0.5], // Adjust margins as needed to center the table on the page
        filename: 'Timetable.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'in', format: 'a3', orientation: 'landscape' }
    };

    // Create a new div to hold the tables
    const content = document.createElement('div');

    // Get all the tables within the div
    const tables = Array.from(document.querySelectorAll('table'));

    // Loop over each table
    tables.forEach((table, index) => {
        // Clone the table and append it to the content div
        const clone = table.cloneNode(true);
        content.appendChild(clone);

        // If this is not the last table, add a page break
        if (index < tables.length - 1) {
            const pageBreak = document.createElement('div');
            pageBreak.className = 'pagebreak'; // We'll use this class to add a page break in the PDF
            content.appendChild(pageBreak);
        }
    });

    // Use html2pdf to export the content div to a PDF
    html2pdf().from(content).set(opt).save();
};


  
  return (
    <div className='mt-16'>
      
      <div className='flex flex-row'>
        <h1 className='h2-bold px-16 text-blue-600' >Generate Timetable</h1>
      </div>
      
      <div className=" items-center justify-center ">
          <p className="text-black text-center mt-5 ">The Timetable will be generated following the set constaints and resources</p>
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
        <Tabs className="place-self-center ">

        <TabsList className="grid grid-cols-4 px-10 w-full">
          <TabsTrigger value="SoftwareEngineering">Software Engineering</TabsTrigger>
          <TabsTrigger value="ComputerScience">Computer Science</TabsTrigger>
          <TabsTrigger value="CIS">CIS</TabsTrigger>
          <TabsTrigger value="CT">Computer Technology</TabsTrigger>
        </TabsList>

          <TabsContent value="SoftwareEngineering">
            
            

             <Button onClick={exportToPDF} className="shad-button_primary mt-4 w-40 place-self-center">
              {isGenerating? (
                <div className="flex-center gap-2 ">
                  Nothing to Export
                </div>
              ):(
                <div>Export</div>
              )}
            </Button>
            
             {isGenerated? (
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
                <ScrollArea className='rounded-md border h-96 mt-10'>
                
                  <TimetableComponent tables={timetableData} ref={tableRef} />
                  <ScrollBar orientation='vertical'/>
                  
                </ScrollArea>
              )}

        
          </TabsContent>

        
          <TabsContent value="ComputerScience">
            <Button onClick={exportToPDF}>Export</Button>
            <div>
              TimetableComponent(timetableData);
            </div>
            
          </TabsContent>

        </Tabs>
      </div>

      
    </div>
  )
}

export default Home