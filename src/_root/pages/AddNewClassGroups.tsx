import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom"

import { Button } from '@/components/ui/button'
import { AddNewClassGroupSchema } from "@/lib/validation"

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

const AddNewClassGroup = () => {
  const isLoading = false;

  const form = useForm<z.infer<typeof AddNewClassGroupSchema>>({
    resolver: zodResolver(AddNewClassGroupSchema),
    defaultValues: {
      class_level: 0,
      class_label:"",
      class_size:0,
      class_department:"",
    },
  })
  
  async function onSubmit(values: z.infer<typeof AddNewClassGroupSchema>) {
  }

  return (
    <section className=" flex flex-1 justify-center items-center flex-col py-10">
    
        <Form  {...form}>

        <div className="sm:w-420 flex-col ">
          
          <h2 className="h3-bold md:h2-bold text-purple-500">Add a new class group</h2>
          

              <FormField
                control={form.control}
                name="class_level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class Level</FormLabel>
                    <FormControl>
                      <Input type="number"  placeholder="100" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            

            
              <FormField
                control={form.control}
                name="class_label"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class Label</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="A" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="class_size"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class Size</FormLabel>
                    <FormControl>
                      <Input type="number"  placeholder="70" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            
              <FormField
                control={form.control}
                name="class_department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class Department</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="Software Engineering" className="shad-input" {...field} />
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

export default AddNewClassGroup