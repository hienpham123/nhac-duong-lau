import React, { useState } from "react"
import imageBg from '../../assets/images/background.jpg'
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ButtonShared from "../ButtonShared";

const Login = () => {
  const [openVisibility, setOpenVisibility] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const togglePassword = () => {
    setOpenVisibility(!openVisibility)
  }

  const handleLogin = () => {

  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-around" style={{background: 'linear-gradient(-45deg,#fa0000,#f039b2)'}}>
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
        <TextField 
          type={openVisibility ? 'text' : 'password'}
          fullWidth 
          placeholder="Vui lòng nhập mật khẩu đăng nhập" 
          sx={{
            background: 'white',
            borderRadius: '9999px',
            border: 'none !important',
            marginTop: '30px',
            height: '50px'
          }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {openVisibility ? (
                  <VisibilityOffIcon onClick={togglePassword} />
                ) : (
                  <VisibilityIcon onClick={togglePassword} />
                )}
              </InputAdornment>
            ),
            style: { textAlign: 'center' },
          }}
        />   
        <div className="w-full text-white mt-2 text-right cursor-pointer">Quên mật khẩu?</div>
        <div className="text-white mt-2 cursor-pointer">Không có tài khoản? Đăng ký ngay</div>
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