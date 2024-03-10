import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom"

import { Button } from '@/components/ui/button'
import { AddNewLecturerSchema } from "@/lib/validation"

import { useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"

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
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Input } from "@/components/ui/input"
import { Loader } from "lucide-react"

const AddNewLecturer = () => {

  const isLoading = false;

  const isSaved = true;
  const navigate = useNavigate();
  const {toast} = useToast();

  const form = useForm<z.infer<typeof AddNewLecturerSchema>>({
    resolver: zodResolver(AddNewLecturerSchema),
    defaultValues: {
      staff_id: "",
      name:"",
      email:"",
      department:"",
      password: ""
    },
  })
  
  async function onSubmit(values: z.infer<typeof AddNewLecturerSchema>) {
    if(isSaved){
      toast({
        variant: "destructive", 
        title: "Lecturer Saved",
        description: "Redirecting you to the dashboard",
      })
      navigate('/ManageLecturers')
    }else{
      toast({
        variant: "destructive", 
        title: "Lecturer not saved",
        description: "please try again",
      })
    }
  }

  return (
    <section className=" flex flex-1 flex-center flex-col py-10">
    
        <Form  {...form}>

        <div className="sm:w-420 ">
          
          <h2 className="h3-bold md:h2-bold text-purple-500">Add a new lecturer</h2>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full mt-4">
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
            </form>
          </div>
      </Form>
  </section>
  )
}


export default AddNewLecturer