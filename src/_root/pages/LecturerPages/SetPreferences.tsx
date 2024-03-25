import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"

import { Button } from '@/components/ui/button'
import { AddNewPreference } from "@/lib/validation"

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
import { Textarea } from '@/components/ui/textarea'

const SetPreferences = () => {
const isLoading = false;
  const isSaved = true;
  const navigate = useNavigate();
  const {toast} = useToast();

  const form = useForm<z.infer<typeof AddNewPreference>>({
    resolver: zodResolver(AddNewPreference),
    defaultValues: {
        staffid: "",
        preference:"",
        department:"",
    },
  })
  
  async function onSubmit(values: z.infer<typeof AddNewPreference>) {
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
    <div className=''>
        <div className="flex flex-row">
          <h1 className="h2-bold py-14 px-16 text-blue-600">Set Preferences</h1>
        </div>
        <section className=" flex flex-1 justify-center items-center flex-col py-10">
    
    <Form  {...form}>

    <div className="sm:w-420 flex-col ">
      
    <h2 className="h3-bold md:h2-bold text-blue-600">Add a New Preference</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full mt-4">

          <FormField
            control={form.control}
            name="staffid"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Staff ID</FormLabel>
                <FormControl>
                    <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        
        
          <FormField
            control={form.control}
            name="preference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Preferance</FormLabel>
                <FormControl>
                <Textarea className="shad-input" {...field}/>
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
        
    </div>
  )
}

export default SetPreferences