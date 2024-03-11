import { Button } from "@/components/ui/button"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


const Home = () => {
  return (
    <div>
      <div className='flex flex-row'>
        <h1 className='h2-bold py-14 px-16 text-purple-400' >Generate Timetable</h1>
        <p className=''>Admin</p>
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
       
          </TabsContent>
        
          <TabsContent value="ComputerScience">
       
          </TabsContent>

        </Tabs>
      </div>
      
      
    </div>
  )
}

export default Home