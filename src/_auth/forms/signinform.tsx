import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom"

import { Button } from '@/components/ui/button'
import { SigninValidationSchema } from "@/lib/validation"
import { checkCredentials } from "./storeCredentials"

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



const Signinform = () => {
  
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
    const isAuthenticated = checkCredentials(values.email,values.password);
    
    if(isAuthenticated){
      toast({
        variant: "destructive", 
        title: "Successfully signed in",
        description: "Redirecting you to the dashboard",
      })

      const user = checkCredentials(values.email, values.password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }

      const userFetch = JSON.parse(localStorage.getItem('user') || '{}');

        if(userFetch.userType === 'admin'){
          navigate('/')  
        }else {
          if(userFetch.userType === 'student'){
            navigate('/StudentHome')
          } else{
            navigate('/LecturerHome')
          }
        }
      
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
        
        
        <h2 className="h3-bold md:h2-bold">Login to your account</h2>
        
      
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

            <p className="text-small-regular text-dark-2 text-center mt-3">Don't have an account?
             <Link to = "/sign-up" className="text-primary-500 text-small-semibold ml-1">Sign-up</Link>
             </p>

             <p className="text-small-regular text-dark-2 text-center mt-3">
             <Link to = "/adminSign-in" className="text-primary-500 text-small-semibold ml-1">Admin</Link>
             </p>
              
          </form>
        </div>
    </Form>
    
  )
}
export default Signinform