import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"


import { Button } from '@/components/ui/button'
import { StudentSignupValidationSchema, StaffSignupValidationSchema } from "@/lib/validation"

import { storeCredentials } from "./storeCredentials"
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

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



const Signinform = () => {
  
  const isLoading = false;
  const isAccountCreated = true;
  const navigate = useNavigate();
  const {toast} = useToast();

  const form = useForm<z.infer<typeof StudentSignupValidationSchema>>({
    resolver: zodResolver(StudentSignupValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
      classGroup: "",
      level: "",
      password: ""
    },
  })
  
  async function onSubmit(values: z.infer<typeof StudentSignupValidationSchema>) {
    const isAccountCreated = storeCredentials({ email: values.email, 
                                                password: values.password, 
                                                userType: 'student' });
    if(isAccountCreated){
      toast({
        variant: "destructive", 
        title: "Successfully signed up",
        description: "Redirecting you to the login page",
      })
      navigate('/sign-in')
    }else{
      toast({
        variant: "destructive", 
        title: "Account Creation Failed",
        description: "try again",
      })
    }
    
}

const formB = useForm<z.infer<typeof StaffSignupValidationSchema>>({
  resolver: zodResolver(StaffSignupValidationSchema),
  defaultValues: {
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    password: ""
  },
})

async function onSubmitB(values: z.infer<typeof StaffSignupValidationSchema>) {
  const isAccountCreated = storeCredentials({ email: values.email, 
                                              password: values.password, 
                                              userType: 'lecturer' });
  if(isAccountCreated){
    toast({
      variant: "destructive", 
      title: "Successfully signed up",
      description: "Redirecting you to the login page",
    })
    navigate('/sign-in')
  }else{
    toast({
      variant: "destructive", 
      title: "Account Creation Failed",
      description: "try again",
    })
  }
}

  return (
    
  <div>
    
      <div className="sm:w-420 flex-center flex-col">
        
        <h2 className="h3-bold md:h2-bold">Create a new account.</h2>
        
        <p className="text-light-3 small-medium md:base-regular ">Enter your details</p>


        <Tabs defaultValue="account" className="w-[400px] place-self-center">
          <TabsList className="grid w-full grid-cols-2 bg-gray-200">
        
            <TabsTrigger value="StudentAccount" >Student Account</TabsTrigger>
            <TabsTrigger value="LecturerAccount">Lecturer Account</TabsTrigger>
        
          </TabsList>
        
          <TabsContent value="StudentAccount">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full mt-4">
              
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Firstname</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lastname</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="" className="shad-input" {...field} />
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
                    <FormLabel>E-mail Address</FormLabel>
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
                name="classGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Group</FormLabel>
                    <FormControl>
                      <Input type="text"  placeholder="A" className="shad-input" {...field} />
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
                    <FormLabel>Level</FormLabel>
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" className="shad-input" {...field} />
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
                  <div>Sign Up</div>
                )}
              </Button>
            
            </form>

            
        </Form>

          </TabsContent>
          <TabsContent value="LecturerAccount">
          <Form {...formB}>
            <form onSubmit={form.handleSubmit(onSubmitB)} className="flex flex-col w-full mt-4">
              
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Firstname</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lastname</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="" className="shad-input" {...field} />
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
                    <FormLabel>E-mail Address</FormLabel>
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
                      <Input type="password" className="shad-input" {...field} />
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
                  <div>Sign Up</div>
                )}
              </Button>
  
            </form>

            
            </Form>

          </TabsContent>
        
        </Tabs>
        <p className="text-small-regular text-dark-2 text-center mt-3">Already have an account?
              <Link to = "/sign-in" className="text-primary-500 text-small-semibold ml-1">Log in</Link>
          </p>
  
      </div>
  
    </div>
    
    
  )
}

export default Signinform