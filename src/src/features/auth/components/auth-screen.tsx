"use client"

import { useState } from "react"


import { SignInFlow } from "../types"
import {SignInCard} from "@/src/features/auth/components/sign-in-card";
import {SignUpCard} from "@/src/features/auth/components/sign-up-card";

export const AuthScreen = () => {
   const [state, setState] = useState<SignInFlow>("signin")

  return (
      <div className="h-full flex  items-center justify-center">
          <div className={"md:h-auto md:w-[420px] "}>
              {state === "signin" ? <SignInCard /> : <SignUpCard />}
          </div>

      </div>
  )
}