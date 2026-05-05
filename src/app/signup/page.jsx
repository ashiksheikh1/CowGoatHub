"use client"

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

import { toast, ToastContainer } from "react-toastify";
const SignUpPage = () => {
  const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const image = e.target.image.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(name, image, email, password)

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password
    });

    if(data){
       router.push("/login")
    }
    if (error) {
      toast.error(error.message || "Login failed");
    }
    if (data) {
      toast.success("Login Successful!");
    }

  };

  return (
 <div>
     <ToastContainer />
     <Form className="flex w-96 flex-col gap-4 container mx-auto my-10" onSubmit={onSubmit}>
   
      <TextField
        isRequired
        name="name"
        type="text"

      >
        <Label>Name</Label>
        <Input placeholder="your name" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="image"
        type="url"

      >
        <Label>Image Url</Label>
        <Input placeholder="image url" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="your email" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit" className="text-white font-semibold 
          bg-gradient-to-r from-green-500 to-emerald-700 hover:from-emerald-600 hover:to-green-500">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary" className="text-white font-semibold 
          bg-gradient-to-r from-green-500 to-emerald-700 hover:from-emerald-600 hover:to-green-500">
          Reset
        </Button>
      </div>
    </Form>
 </div>
  );
};

export default SignUpPage;