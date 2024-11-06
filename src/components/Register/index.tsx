import React, { useState } from "react"
import imageBg from '../../assets/images/background.jpg'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ButtonShared from "../ButtonShared";
import { useLoginMutation, useRegisterMutation } from "../services/authentication.service";
import useAuth from "../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate()
  const [registerApi] = useRegisterMutation();
  const { login } = useAuth();
  const [loginApi, { isLoading }] = useLoginMutation();
  const [openVisibility, setOpenVisibility] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [code, setCode] = useState<string>('')

    const handleNavigateLogin = () => {
    navigate('/login')
  }
  
  const togglePassword = () => {
    setOpenVisibility(!openVisibility)
  }

  const handleRegister = async () => {
    try {
      const params = {
        username: userName,
        password: password,
        numberPhone: code
      };
      const paramsLogin = {
        username: userName,
        password: password,
      }
      const res: any = await registerApi(params)
      if(res.message === 'Đăng ký thành công') {
        const resLogin = await loginApi(paramsLogin)
        if (resLogin.data) {
          login(resLogin.data);
        }
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-around" style={{background: 'linear-gradient(-45deg,#fa0000,#f039b2)'}}>
      <div className="absolute left-3 top-2" onClick={handleNavigateLogin}>
        <IoIosArrowBack size={30} color="white" />
      </div>
      <div className="flex flex-col items-center w-80">
        <img
          className="w-[80px] h-[80px] rounded-full border-1"
          src={imageBg}
          alt="Avatar"
        />
        <p className="text-3xl text-white font-bold">Nhạc Dương Lầu</p>

        <input
          type="text"
          className="float-right border border-gray-300 p-3 mt-10 w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-center rounded-full"
          placeholder="Vui lòng nhập tên đăng nhập"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
         <div className="relative mt-8 w-80">
          <input
            type={openVisibility ? 'text' : 'password'}
            placeholder="Vui lòng nhập mật khẩu đăng nhập" 
            className="w-full bg-white rounded-full h-[50px] border-none focus:ring-0 text-center px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePassword}
          >
            {openVisibility ? (
              <FaEyeSlash size={20} className="text-gray-500" />
            ) : (
              <FaEye size={20} className="text-gray-500" />
            )}
          </div>
        </div>

        <input
          type="text"
          className="float-right border border-gray-300 p-3 mt-7 w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-400 text-center rounded-full"
          placeholder="Nhập mã giới thiệu"
          value={code}
          onChange={(e) => {
            setCode(e.target.value)
          }}
        />

        <div className="flex justify-between">
          <input type="checkbox" />
          <p className="text-white ml-3">Tôi đã biết và đồng ý thỏa thuận mở tài khoản hiệp ước</p>
        </div>

        <ButtonShared
          loading={false} 
          label="Đăng ký" 
          sx={{
            background: 'linear-gradient(90deg, #c24491, #775fd9)', 
            borderRadius: '9999px',
            marginTop: '30px'
          }} 
          fullWidth
          onClick={handleRegister}
        />
      </div>
    </div>
  )
}

export default Register