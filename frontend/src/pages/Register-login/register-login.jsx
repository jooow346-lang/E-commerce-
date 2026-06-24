import  { useState } from 'react';
import { motion } from 'framer-motion';

export default function AuthPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] flex flex-col items-center justify-center font-['Montserrat',sans-serif] antialiased">
      
      {/* Container الرئيسي */}
      <div className="relative overflow-hidden w-[768px] max-w-full min-h-[480px] bg-white rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
        
        {/* ===================== SIGN UP FORM ===================== */}
        <motion.div
          className="absolute top-0 h-full w-1/2 left-0 flex flex-col items-center justify-center px-10 bg-white"
          animate={{
            translateX: isActive ? '100%' : '0%',
            opacity: isActive ? 1 : 0,
            zIndex: isActive ? 5 : 1,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <form className="w-full flex flex-col items-center justify-center text-center" onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
            
            {/* Social Icons */}
            <div className="flex my-5 gap-2">
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-[20%] inline-flex items-center justify-center text-gray-700 hover:bg-gray-50"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-[20%] inline-flex items-center justify-center text-gray-700 hover:bg-gray-50"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-[20%] inline-flex items-center justify-center text-gray-700 hover:bg-gray-50"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-[20%] inline-flex items-center justify-center text-gray-700 hover:bg-gray-50"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            
            <span className="text-xs text-gray-500 mb-2">or use your email for registration</span>
            <input type="text" placeholder="Name" className="w-full bg-[#eee] border-none my-2 p-[10px_15px] text-xs rounded-lg outline-none" />
            <input type="email" placeholder="Email" className="w-full bg-[#eee] border-none my-2 p-[10px_15px] text-xs rounded-lg outline-none" />
            <input type="password" placeholder="Password" className="w-full bg-[#eee] border-none my-2 p-[10px_15px] text-xs rounded-lg outline-none" />
            
            <button className="bg-[#2da0a8] text-white text-xs font-semibold uppercase tracking-[0.5px] px-11 py-[10px] rounded-lg border border-transparent mt-[10px] cursor-pointer active:scale-95 transition-transform">
              Sign Up
            </button>
          </form>
        </motion.div>

        {/* ===================== SIGN IN FORM ===================== */}
        <motion.div
          className="absolute top-0 h-full w-1/2 left-0 flex flex-col items-center justify-center px-10 bg-white"
          animate={{
            translateX: isActive ? '100%' : '0%',
            zIndex: isActive ? 1 : 2,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <form className="w-full flex flex-col items-center justify-center text-center" onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Sign In</h1>
            
            {/* Social Icons */}
            <div className="flex my-5 gap-2">
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-[20%] inline-flex items-center justify-center text-gray-700 hover:bg-gray-50"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-[20%] inline-flex items-center justify-center text-gray-700 hover:bg-gray-50"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-[20%] inline-flex items-center justify-center text-gray-700 hover:bg-gray-50"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="w-10 h-10 border border-gray-300 rounded-[20%] inline-flex items-center justify-center text-gray-700 hover:bg-gray-50"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            
            <span className="text-xs text-gray-500 mb-2">or use your email password</span>
            <input type="email" placeholder="Email" className="w-full bg-[#eee] border-none my-2 p-[10px_15px] text-xs rounded-lg outline-none" />
            <input type="password" placeholder="Password" className="w-full bg-[#eee] border-none my-2 p-[10px_15px] text-xs rounded-lg outline-none" />
            
            <a href="#" className="text-gray-700 text-[13px] no-underline my-[15px] mb-[10px]">Forget Your Password?</a>
            
            <button className="bg-[#2da0a8] text-white text-xs font-semibold uppercase tracking-[0.5px] px-11 py-[10px] rounded-lg border border-transparent mt-[10px] cursor-pointer active:scale-95 transition-transform">
              Sign In
            </button>
          </form>
        </motion.div>

        {/* ===================== TOGGLE CONTAINER ===================== */}
        <motion.div
          className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-[1000]"
          animate={{
            translateX: isActive ? '-100%' : '0%',
            borderRadius: isActive ? '0 150px 100px 0' : '150px 0 0 100px'
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* الخلفية المتحركة الداخلية للـ Toggle */}
          <motion.div
            className="relative -left-full h-full w-[200%] bg-gradient-to-r from-[#5c6bc0] to-[#2da0a8] text-white"
            animate={{
              translateX: isActive ? '50%' : '0%'
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            {/* Panel اليسار (يظهر عند تفعيل الـ Sign Up) */}
            <motion.div
              className="absolute top-0 w-1/2 h-full flex flex-col items-center justify-center px-[30px] text-center"
              animate={{
                translateX: isActive ? '0%' : '-200%'
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
              <p className="text-xs leading-5 tracking-[0.3px] my-5">Enter your personal details to use all of site features</p>
              <button
                onClick={() => setIsActive(false)}
                className="bg-transparent border border-white text-white text-xs font-semibold uppercase tracking-[0.5px] px-11 py-[10px] rounded-lg mt-[10px] cursor-pointer active:scale-95 transition-transform"
              >
                Sign In
              </button>
            </motion.div>

            {/* Panel اليمين (يظهر في الحالة الافتراضية للـ Sign In) */}
            <motion.div
              className="absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center px-[30px] text-center"
              animate={{
                translateX: isActive ? '200%' : '0%'
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <h1 className="text-3xl font-bold mb-2">Hello, Friend!</h1>
              <p className="text-xs leading-5 tracking-[0.3px] my-5">Register with your personal details to use all of site features</p>
              <button
                onClick={() => setIsActive(true)}
                className="bg-transparent border border-white text-white text-xs font-semibold uppercase tracking-[0.5px] px-11 py-[10px] rounded-lg mt-[10px] cursor-pointer active:scale-95 transition-transform"
              >
                Sign Up
              </button>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}