import React, { useState } from "react"
import imageBg from '../../assets/images/background.jpg'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { CheckBox } from "@mui/icons-material";
import ButtonShared from "../ButtonShared";

const Register = () => {
  const navigate = useNavigate()
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

  const handleRegister = () => {

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

        <TextField
          type={openVisibility ? 'text' : 'password'}
          fullWidth 
          placeholder="Vui lòng nhập mật khẩu đăng nhập" 
          sx={{
            background: 'white',
            borderRadius: '9999px',
            border: 'none !important',
            marginTop: '30px',
            height: '50px',
            '& .MuiInputBase-input': {
              textAlign: 'center', 
              height: '100%'
            },
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