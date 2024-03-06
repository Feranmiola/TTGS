import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom"

import { Button } from '@/components/ui/button'
import { SignupValidationSchema } from "@/lib/validation"

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



const Signinform = () => {
  
  const isLoading = false;

  const form = useForm<z.infer<typeof SignupValidationSchema>>({
    resolver: zodResolver(SignupValidationSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: ""
    },
  })
  
  async function onSubmit(values: z.infer<typeof SignupValidationSchema>) {
    // const newUser = await account.create(
    //   ID.unique(),
    //   values.email,
    //   values.password,
    //   values.name
    // );

    // console.log(newUser);
}

  return (
    
  
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        
        <h2 className="h3-bold md:h2-bold">Create a new account.</h2>
        
        <p className="text-light-3 small-medium md:base-regular ">Enter your details</p>

      
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="" className="shad-input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
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
                <div>Sign Up</div>
              )}
            </Button>

            <p className="text-small-regular text-dark-2 text-center mt-3">Already have an account?
             <Link to = "/sign-in" className="text-primary-500 text-small-semibold ml-1">Log in</Link>
             </p>
              
          
          </form>
        </div>
    </Form>
    
  )
}

export default Signinform