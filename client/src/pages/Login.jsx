import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className="bg-gray-700 flex justify-center items-center h-screen">
      <SignIn redirectUrl="https://localhost:5173/" signUpUrl="/sign-up"  />
    </div>
  );
};

export default Login;
