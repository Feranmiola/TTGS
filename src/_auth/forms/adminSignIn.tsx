import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from '@/components/ui/button'
import { SigninValidationSchema } from "@/lib/validation"
import { checkAdminCredentials } from "./storeCredentials"

import { useNavigate } from 'react-router-dom';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Loader } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"



const AdminSignIn = () => {
  
  const isLoading = false;
  const {toast} = useToast();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof SigninValidationSchema>>({
    resolver: zodResolver(SigninValidationSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
  
  async function onSubmit(values: z.infer<typeof SigninValidationSchema>) {
    const isAuthenticated = checkAdminCredentials(values.email,values.password);
    
    if(isAuthenticated){
      toast({
        variant: "destructive", 
        title: "Successfully signed in",
        description: "Redirecting you to the dashboard",
      })

    localStorage.setItem('user', JSON.stringify(true));

      navigate('/')
  
    }else{
      toast({
        variant: "destructive", 
        title: "Sign In Failed",
        description: "Incorrect email or password",
      })
    }
    
}

  return (
  
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        
        
        <h2 className="h3-bold md:h2-bold">Admin SIgn In</h2>
        
      
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full mt-4">         
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
                <div>Sign In</div>
              )}
            </Button>
          </form>
        </div>
    </Form>
    
  )
}
export default AdminSignIn