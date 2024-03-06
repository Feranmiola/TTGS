import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom"

import { Button } from '@/components/ui/button'
import { AddNewLecturerSchema } from "@/lib/validation"

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

const AddNewLecturer = () => {

  const isLoading = false;

  const form = useForm<z.infer<typeof AddNewLecturerSchema>>({
    resolver: zodResolver(AddNewLecturerSchema),
    defaultValues: {
      staff_id: "",
      name:"",
      email:"",
      school:"",
      department:"",
      password: ""
    },
  })
  
  async function onSubmit(values: z.infer<typeof AddNewLecturerSchema>) {
  }

  return (
    <section className=" flex flex-1 justify-center items-center flex-col py-10">
    
        <Form  {...form}>

        <div className="sm:w-420 flex-col ">
          
          <h2 className="h3-bold md:h2-bold text-purple-500">Add a new lecturer</h2>
          
      
              <FormField
                control={form.control}
                name="staff_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Staff ID</FormLabel>
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
                    <FormLabel>Staff Name</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            

            
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Staff E-mail Address</FormLabel>
                    <FormControl>
                      <Input type="email"  placeholder="" className="shad-input" {...field} />
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
            
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="" className="shad-input" {...field} />
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


export default AddNewLecturer