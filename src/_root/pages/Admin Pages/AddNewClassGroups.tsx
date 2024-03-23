import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"

import { Button } from '@/components/ui/button'
import { AddNewClassGroupSchema } from "@/lib/validation"

import {
  Form,
  FormControl,
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

const AddNewClassGroup = () => {
  const isLoading = false;
  const isSaved = true;
  const navigate = useNavigate();
  const {toast} = useToast();

  const form = useForm<z.infer<typeof AddNewClassGroupSchema>>({
    resolver: zodResolver(AddNewClassGroupSchema),
    defaultValues: {
      class_level: "",
      class_label:"",
      class_size:"",
      class_department:"",
    },
  })
  
  async function onSubmit(values: z.infer<typeof AddNewClassGroupSchema>) {
    if(isSaved){
      toast({
        variant: "destructive", 
        title: "Class Group Saved",
        description: "Redirecting you to the dashboard",
      })
      navigate('/ManageClassGroups')
    }else{
      toast({
        variant: "destructive", 
        title: "Class Group not saved",
        description: "please try again",
      })
    }
  }

  return (
    <section className=" flex flex-1 justify-center items-center flex-col py-10">
    
        <Form  {...form}>

        <div className="sm:w-420 flex-col ">
          
        <h2 className="h3-bold md:h2-bold text-blue-600">Add a New Class Group</h2>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full mt-4">

              <FormField
                control={form.control}
                name="class_level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Class Level</FormLabel>
                    <FormControl>
                    <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="100" />
                          </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectItem value="100" className="hover:bg-gray-200">100</SelectItem>
                              <SelectItem value="200" className="hover:bg-gray-200">200</SelectItem>
                              <SelectItem value="300" className="hover:bg-gray-200">300</SelectItem>
                              <SelectItem value="400" className="hover:bg-gray-200">400</SelectItem>
                              <SelectItem value="500" className="hover:bg-gray-200">500</SelectItem>
                          </SelectContent>
                        </Select>
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
                      <Input type="text"  placeholder="70" className="shad-input" {...field} />
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
                    <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Select Department" />
                          </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectItem value="softwareEngineering" className="hover:bg-gray-200">Software Engineering</SelectItem>
                              <SelectItem value="computerScience" className="hover:bg-gray-200">Computer Science</SelectItem>
                              <SelectItem value="cis" className="hover:bg-gray-200">CIS</SelectItem>
                              <SelectItem value="computerTechnology" className="hover:bg-gray-200">Computer Technology</SelectItem>
                          </SelectContent>
                        </Select>
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

export default AddNewClassGroup