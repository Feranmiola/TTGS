import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom"

import { Button } from '@/components/ui/button'
import { AddNewCourseSchema } from "@/lib/validation"

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

const AddNewCourse = () => {
  const isLoading = false;

  const form = useForm<z.infer<typeof AddNewCourseSchema>>({
    resolver: zodResolver(AddNewCourseSchema),
    defaultValues: {
      code:"",
      name:"",
      department:"",
      course_type_lab:"",
      lecturer: "",
    },
  })
  
  async function onSubmit(values: z.infer<typeof AddNewCourseSchema>) {
  }

  return (
    <section className=" flex flex-1 justify-center items-center flex-col py-10">
    
        <Form  {...form}>

        <div className="sm:w-420 flex-col ">
          
          <h2 className="h3-bold md:h2-bold text-purple-500">Add a new course</h2>
          

              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Code</FormLabel>
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
                    <FormLabel>Course Name</FormLabel>
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
                    <FormLabel>Course Department</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="course_type_lab"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Type</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              <FormField
                control={form.control}
                name="lecturer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assigned Lecturer(s)</FormLabel>
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

export default AddNewCourse