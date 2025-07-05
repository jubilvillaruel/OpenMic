'use client';

import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
     
      <div className="flex w-full lg:w-1/2 items-center justify-center px-8 py-12">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-white">Login to your account</h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#0FAC7D]"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-300">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#0FAC7D]"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#0FAC7D] hover:bg-[#0c9a6c] text-black font-semibold rounded-md transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-gray-400 text-center">
            Don’t have an account?{' '}
            <Link href="/auth/signup" className="text-[#0FAC7D] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>


       <div className="hidden lg:flex w-1/2 bg-[#0FAC7D] items-center justify-center">
        <h1 className="text-5xl font-extrabold text-[#0a0a0a]">Welcome Back to OpenMic 🎤</h1>
      </div>

    </div>
  );
}

export default LoginPage;