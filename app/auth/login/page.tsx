"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function page() {
  const router = useRouter();
  const { toast } = useToast();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // if (regex.test(email)) {
  //   console.log("Valid email");
  // } else {
  //   console.log("Invalid email");
  // }

  const handleSubmit = async () => {
    try {
      if (!mail || !regex.test(mail) || !password || password.length < 8) {
        toast({
          variant: "destructive",
          title:
            "Email should be proper or password must be at least 8 characters",

          // description: "There was a problem with your request.",
        });
        return;
      }
      const userRes = await axios.post(`http://localhost:3000/user/login`, {
        Email: mail,
        Password: password,
      });

      const user = userRes.data;
      //   setUser(user); // Set the fetched country user
      console.log("USER ", user);
      localStorage.setItem("token", user.token);

      // const userProf = await axios.get(`http://localhost:3000/user/profile`, {
      //   headers: {
      //     // Authorization: `Bearer ${userToken}`, // Set the Bearer token in the Authorization header
      //     Authorization: `Bearer ${user.token}`, // Set the Bearer token in the Authorization header
      //     // Accept: "application/json", // Optional, depending on the API
      //   },
      // });

      // const userVal = userProf.data;
      // console.log("prof ", userVal);

      if (!user.profile.onboarding.Bool) {
        router.push("/onboarding?step=1");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {}
  };

  return (
    <div>
      <div className="">
        <h1>Sign in</h1>
        <p>Login into your Quizrr account</p>
      </div>
      <div className="">
        <div className="">
          <p>Email Address</p>
          <Input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="email"
            placeholder="name@address.com"
          />
        </div>

        <div className="">
          <p>Password</p>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="">
          <Button onClick={handleSubmit}>Sign in</Button>
        </div>
      </div>
    </div>
  );
}
export default page;
