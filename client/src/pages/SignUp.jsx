import React from 'react'
import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
  return (
    <div className="bg-gray-700 flex justify-center items-center h-screen">
      <SignUp redirectUrl="/login"
          signInUrl="/login"
        />
    </div>
  )
}

export default SignUpPage
