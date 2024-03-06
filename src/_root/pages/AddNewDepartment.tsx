import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom"

import { Button } from '@/components/ui/button'
import { AddNewDepartmentSchema } from "@/lib/validation"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Loader } from "lucide-react"

const AddNewDepartment = () => {
  const isLoading = false;

  const form = useForm<z.infer<typeof AddNewDepartmentSchema>>({
    resolver: zodResolver(AddNewDepartmentSchema),
    defaultValues: {
      code:"",
      name:"",
      school:"",
    },
  })
  
  async function onSubmit(values: z.infer<typeof AddNewDepartmentSchema>) {
  }

  return (
    <section className=" flex flex-1 justify-center items-center flex-col py-10">
    
        <Form  {...form}>

        <div className="sm:w-420 flex-col ">
          
          <h2 className="h3-bold md:h2-bold text-purple-500">Add a new Department</h2>
          

              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department Code</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department Name</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              <FormField
                control={form.control}
                name="school"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>School</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
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

          </div>
      </Form>
  </section>
  )
}

export default AddNewDepartment