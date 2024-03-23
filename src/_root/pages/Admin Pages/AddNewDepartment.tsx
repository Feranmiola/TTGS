import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router-dom"

const AddNewDepartment = () => {
  const isLoading = false;
  const isSaved = true;
  const navigate = useNavigate();
  const {toast} = useToast();

  const form = useForm<z.infer<typeof AddNewDepartmentSchema>>({
    resolver: zodResolver(AddNewDepartmentSchema),
    defaultValues: {
      code:"",
      name:"",
    },
  })
  
  async function onSubmit(values: z.infer<typeof AddNewDepartmentSchema>) {
    if(isSaved){
      toast({
        variant: "destructive", 
        title: "Department Saved",
        description: "Redirecting you to the dashboard",
      })
      navigate('/ManageDepartments')
    }else{
      toast({
        variant: "destructive", 
        title: "Department not saved",
        description: "please try again",
      })
    }

  }

  return (
    <section className=" flex flex-1 justify-center items-center flex-col py-10">
    
        <Form  {...form}>

        <div className="sm:w-420 ">

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full mt-4">
          
        <h2 className="h3-bold md:h2-bold text-blue-600">Add a new Department</h2>
          
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

export default AddNewDepartment