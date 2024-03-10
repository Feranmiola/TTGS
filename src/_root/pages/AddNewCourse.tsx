import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom"

import { Button } from '@/components/ui/button'
import { AddNewCourseSchema } from "@/lib/validation"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useNavigate } from "react-router-dom"

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
import { useToast } from "@/components/ui/use-toast"

const AddNewCourse = () => {
  const isLoading = false;
  const navigate = useNavigate();
  const {toast} = useToast();
  const isSaved = true;

  const form = useForm<z.infer<typeof AddNewCourseSchema>>({
    resolver: zodResolver(AddNewCourseSchema),
    defaultValues: {
      code:"",
      name:"",
      department:"",
      level: "",
      course_type_lab:"",
      lecturer: "",
      units: "",
      teachingHours: "",
      outstandingHours:"",
      semester:"",
    },
  })
  
  async function onSubmit(values: z.infer<typeof AddNewCourseSchema>) {
    if(isSaved){
      toast({
        variant: "destructive", 
        title: "Course Saved",
        description: "Redirecting you to the dashboard",
      })
      navigate('/ManageCourses')
    }else{
      toast({
        variant: "destructive", 
        title: "Course not saved",
        description: "please try again",
      })
    }

  }

  return (
    <section className=" flex flex-1 justify-center items-center flex-col py-10">
    <ScrollArea className="rounded-md border">
        <Form  {...form} >

        <div className="sm:w-420 flex-col ">
          
          <h2 className="h3-bold md:h2-bold text-purple-500 flex flex-col">Add a new course</h2>
          
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full mt-4">
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
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Level</FormLabel>
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
                name="course_type_lab"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Type</FormLabel>
                    <FormControl>
                      <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Select Course Type" />
                          </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectItem value="lab" className="hover:bg-gray-200">Practical</SelectItem>
                              <SelectItem value="theory" className="hover:bg-gray-200">Theory</SelectItem>
                          </SelectContent>
                        </Select>
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

                    <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Select Lecturer" />
                          </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectItem value="adetunji" className="hover:bg-gray-200">Dr Adetunji Oluwatofunmi</SelectItem>
                              <SelectItem value="mensah" className="hover:bg-gray-200">Mr Mensah Yaw</SelectItem>
                              
                          </SelectContent>
                        </Select>

                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="units"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Units</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teachingHours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teaching Hours</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="outstandingHours"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Outstanding Hours</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="semester"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Semester</FormLabel>
                    <FormControl>
                    <Select {...field} onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Select Course Semester" />
                          </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectItem value="first" className="hover:bg-gray-200">First</SelectItem>
                              <SelectItem value="second" className="hover:bg-gray-200">Second</SelectItem>
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
    </ScrollArea>
  </section>
  )
}

export default AddNewCourse