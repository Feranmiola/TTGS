import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"

import { Button } from '@/components/ui/button'
import { AddNewLectureHallSchema } from "@/lib/validation"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Input } from "@/components/ui/input"
import { Loader } from "lucide-react"


const AddNewLectureHall = () => {

  const isLoading = false;
  const isSaved = true;
  const navigate = useNavigate();
  const {toast} = useToast();

  const form = useForm<z.infer<typeof AddNewLectureHallSchema>>({
    resolver: zodResolver(AddNewLectureHallSchema),
    defaultValues: {
      code:"",
      capacity:"",
      hall_type_lab: "",
    },
  })
  
  async function onSubmit(values: z.infer<typeof AddNewLectureHallSchema>) {
    
    if(isSaved){
      toast({
        variant: "destructive", 
        title: "Lecture Hall Saved",
        description: "Redirecting you to the dashboard",
      })
      navigate('/ManageLectureHalls')
    }else{
      toast({
        variant: "destructive", 
        title: "Lecture Hall not saved",
        description: "please try again",
      })
    }
  }

  return (
    <section className=" flex flex-1 justify-center items-center flex-col py-10">
    
        <Form  {...form}>

        <div className="sm:w-420 flex-col ">
          
          <h2 className="h3-bold md:h2-bold text-purple-500">Add a new lecture hall</h2>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full mt-4">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room Code</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              <FormField
                control={form.control}
                name="capacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hall Capacity</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hall_type_lab"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hall Type</FormLabel>
                    <FormControl>
                        <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Select Hall Type" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="Practical" className="hover:bg-purple-200">Practical</SelectItem>
                            <SelectItem value="Theory" className="hover:bg-purple-200">Theory</SelectItem>
                          </SelectContent>
                        </Select>
                      {/* <Input type="text"  placeholder="" className="shad-input" {...field} /> */}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              <Button type="submit" className="shad-button_primary mt-4 w-40 place-self-center">
                {isLoading? (
                  <div className="flex-center gap-2 ">
                    <Loader/>
                  </div>
                ):(
                  <div>Add</div>
                )}
              </Button>
              
              </form>
          </div>
      </Form>
  </section>
  )
}

export default AddNewLectureHall