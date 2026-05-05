"use client"
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

import { toast, ToastContainer } from "react-toastify";


import { GrGoogle } from "react-icons/gr";


const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message || "Login failed");
        }


        if (data) {
            toast.success("Login Successful!");
        }
    };
    const handleGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });

    };
    return (
      <div>
      <ToastContainer />
          <Form className="flex w-96 flex-col gap-4 container mx-auto my-10" onSubmit={onSubmit}>
      
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
                <Input placeholder="john@example.com" />
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
            <button onClick={handleGoogle} className=" text-white font-semibold 
          bg-gradient-to-r from-green-500 to-emerald-700 
          hover:from-emerald-600 hover:to-green-500 flex items-center justify-center py-3 
           w-full"><GrGoogle className="mr-2"></GrGoogle> Google Login</button>
        </Form>
      </div>
    );
};

export default LoginPage;