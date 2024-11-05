import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoInfo } from "react-icons/go";
import { FaHeart, FaRegImage } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { IoWalletSharp } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { MdAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";

export default function PeopleCardDetail() {
  const [tab, setTab] = useState("info");

  const list_images = [{
    image: 'https://artena.vn/wp-content/uploads/2024/09/anh-gai-xinh-9645vHT.jpg',
  },
  {
    image: 'https://image.anninhthudo.vn/h600/Uploaded/2024/wopkplw/2022_09_29/gia-han-ban-gai-hoang-duc-6-2042.jpg',
  },
  {
    image: 'https://akinavn.vn/wp-content/uploads/anh-gai-xinh-000b61V.webp',
  },
  {
    image: 'https://s1.media.ngoisao.vn/resize_580/news/2022/09/25/gai-biki-14-ngoisaovn-w1080-h1440.jpg',
  },
  {
    image: 'https://imgt.taimienphi.vn/cf/Images/np/2022/8/16/anh-gai-xinh-cute-de-thuong-hot-girl-4.jpg',
  }
  ]

  return (
    <section className="relative w-full">
      <div className="bg-white">
        <div className="flex h-12 items-center bg-fuchsia-400 justify-center">
          <Link to={ROUTERS_PATHS.HOME} className="absolute left-3">
            <IoIosArrowBack size={30} color="white" />
          </Link>
          <h1 className="text-xl text-white text-center">Nạp tiền</h1>
        </div>
        <div className="p-2">
          <h1 className="font-semibold text-lg">{`[REUP] Linh Kelly ✅ - FACE XINH + SIÊU TÌNH CẢM + HÀNG HOT`}</h1>

          <div className="flex w-full items-center gap-2 justify-evenly mt-5">
            <div className="flex items-center gap-1" onClick={() => setTab('info')}>
              <GoInfo color="#f905e5" />
              <h2 style={{ color: "#f905e5" }}>{`info`}</h2>
            </div>
            <div className="flex items-center gap-1" onClick={() => setTab('images')}>
              <FaRegImage color="#e74c3c" />
              <h2 style={{ color: "#e74c3c" }}>
                {`images`} {`(5)`}{" "}
              </h2>
            </div>
            <div className="flex items-center gap-1" onClick={() => setTab('reports')}>
              <HiSpeakerphone color="#e74c3c" />
              <h2 style={{ color: "#e74c3c" }}>
                {`reports`} {`(12)`}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {tab === "info" && (
        <>
          <div className="bg-white">
            <div className="relative overflow-hidden">
              <img
                src="https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
              <h1 className="absolute top-2 left-4 w-full bg-pink-500 text-sm text-white inline-block truncate leading-tight">{`Phan Đình Phùng, Phú Nhuận`}</h1>
            </div>

            <div className="flex flex-col gap-1 mt-3 px-2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaHeart key={index} size={20} color={"rgb(255, 0, 255)"} />
                ))}
              </div>
              <div className="flex justify-start items-center gap-1">
                <IoWalletSharp size={18} color={"rgb(255, 0, 255)"} />
                {`1tr5 - 10tr`}
              </div>
              <div className="flex justify-start items-center gap-1">
                <TiLocation size={20} color={"rgb(255, 0, 255)"} />
                {`Phu Nhuan`}
              </div>
              <div className="flex justify-start items-center gap-1">
                <MdAccessTimeFilled size={20} color={"rgb(255, 0, 255)"} />
                {`20`}
              </div>
            </div>
          </div>

          <div className="p-3">
            <h1 className="text-xl font-semibold">Thông số</h1>
          </div>

          <div className="bg-white flex gap-8 p-3 justify-center items-center">
            <h1 className="text-md min-w-max">Giới thiệu</h1>
            <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper lorem sit amet ex luctus faucibus. Sed et sollicitudin lectus, at ultricies elit. Sed dignissim finibus congue. Etiam scelerisque massa vel lacus maximus pulvinar. Integer fermentum velit ac tortor ultricies, sit amet tempus ex placerat. Integer sed magna sed quam tincidunt auctor. Pellentesque viverra nibh sit amet commodo imperdiet. Sed fringilla dapibus euismod. Pellentesque tristique laoreet libero, eu fermentum mauris cursus quis. Fusce pharetra id est sed lobortis.`}</p>
          </div>

          <div className="flex gap-8 p-3">
            <h1 className="text-md min-w-16">Pass</h1>
            <p>{`ABCxyz`}</p>
          </div>
          <div className="bg-white flex gap-8 p-3">
            <h1 className="text-md min-w-16">Năm sinh</h1>
            <p>{`2000`}</p>
          </div>
          <div className="flex gap-8 p-3">
            <h1 className="text-md min-w-16">Cao (cm)</h1>
            <p>{`168`}</p>
          </div>
        </>
      )}

      {tab === 'images' && <>
        <div className='grid grid-cols-2 gap-2'>
          {list_images.map(item => {
            return <img src={item.image} alt="" className='object-cover w-full h-full' />
          })}
        </div>
      </>}

    </section>
  );
}
