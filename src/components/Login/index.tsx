import React, { useState } from "react"
import imageBg from '../../assets/images/background.jpg'
import ButtonShared from "../ButtonShared";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useLoginMutation } from "../services/authentication.service";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [loginApi, { isLoading }] = useLoginMutation();
  const { login } = useAuth();
  const [openVisibility, setOpenVisibility] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleNavigateRegister = () => {
    navigate('/register')
  }

  const togglePassword = () => {
    setOpenVisibility(!openVisibility)
  }

  const handleLogin = async () => {
    try {
      const params = {
        username: userName,
        password: password
      };
      const res: any = await loginApi(params);
      if (res.data) {
        login(res.data);
      }
    } catch (err) {
      console.log('err', err);
    }

  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-around" style={{ background: 'linear-gradient(-45deg,#fa0000,#f039b2)' }}>
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
        <div className="w-full text-white mt-2 text-right cursor-pointer">Quên mật khẩu?</div>
        <div className="text-white mt-2 cursor-pointer" onClick={handleNavigateRegister}>Không có tài khoản? Đăng ký ngay</div>
        <ButtonShared
          loading={false}
          label="Đăng nhập"
          sx={{
            background: 'linear-gradient(90deg, #c24491, #775fd9)',
            borderRadius: '9999px',
            marginTop: '50px'
          }}
          fullWidth
          onClick={handleLogin}
        />
      </div>
    </div>
  )
}

export default Login