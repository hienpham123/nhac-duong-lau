import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GoInfo } from "react-icons/go";
import { FaHeart, FaRegImage } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { IoWalletSharp } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { MdAccessTimeFilled } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { reports_list } from "../../../mock/reports";
import { useLazyGetPeopleDetailQuery } from "../services/people.service";
import { IPeopleCard } from "./PeopleCard";

export default function PeopleCardDetail() {
  const [tab, setTab] = useState("info");
  const { id } = useParams();

  const reports = reports_list.filter(item => id && item.related_people == +id)

  const [getPeopleDetail] = useLazyGetPeopleDetailQuery()

  const [data, setData] = useState<IPeopleCard>()

  const getPeopleDetails = async () => {
    const people = await getPeopleDetail(id).unwrap()
    setData(people)
  }
  useEffect(() => {
    getPeopleDetails()
  }, [])

  return (
    <section className="relative w-full min-h-screen">
      <div className="bg-white">
        <div className="sticky top-0 z-50 flex h-12 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
          <Link to={ROUTERS_PATHS.HOME} className="absolute left-3">
            <IoIosArrowBack size={30} color="white" />
          </Link>
          <h1 className="text-xl text-white text-center">Nạp tiền</h1>
        </div>
        <div className="p-2">
          <h1 className="font-semibold text-lg">{data?.description}</h1>

          <div className="sticky top-0 z-10 flex w-full items-center gap-2 justify-evenly mt-5">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setTab('info')}>
              <GoInfo color="#f905e5" />
              <h2 className='text-[#f905e5]'>{`info`}</h2>
            </div>
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setTab('images')}>
              <FaRegImage color="#e74c3c" />
              <h2 className='text-[#e74c3c]'>
                {`images`} {`(${data?.images_list.length ?? 0})`}{" "}
              </h2>
            </div>
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setTab('reports')}>
              <HiSpeakerphone color="#e74c3c" />
              <h2 className='text-[#e74c3c]'>
                {`reports`} {`(${reports?.length ?? 0})`}
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
                src={data?.image_url}
                alt=""
                className="w-full h-full object-cover"
              />
              <h1 className="absolute top-2 left-4 bg-pink-500 text-sm text-white inline-block truncate leading-tight">{`Phan Đình Phùng, Phú Nhuận`}</h1>
            </div>

            <div className="flex flex-col gap-1 mt-3 px-2">
              <div className="flex gap-1">
                {Array.from({ length: data ? data?.vote : 0 }).map((_, index) => (
                  <FaHeart key={index} size={20} color={"rgb(255, 0, 255)"} />
                ))}
              </div>
              <div className="flex justify-start items-center gap-1">
                <IoWalletSharp size={18} color={"rgb(255, 0, 255)"} />
                {data?.price}
              </div>
              <div className="flex justify-start items-center gap-1">
                <TiLocation size={20} color={"rgb(255, 0, 255)"} />
                {data?.province_name}
              </div>
              <div className="flex justify-start items-center gap-1">
                <MdAccessTimeFilled size={20} color={"rgb(255, 0, 255)"} />
                {data?.age}
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
            <p>{data?.pass}</p>
          </div>
          <div className="bg-white flex gap-8 p-3">
            <h1 className="text-md min-w-16">Năm sinh</h1>
            <p>{data?.year_of_birth}</p>
          </div>
          <div className="flex gap-8 p-3">
            <h1 className="text-md min-w-16">Cao (cm)</h1>
            <p>{data?.height}</p>
          </div>
        </>
      )}

      {tab === 'images' && <>
        <div className='grid grid-cols-2 gap-2'>
          {(data ? data?.images_list : []).map(item => {
            return <img src={item} key={item} alt="" className='object-cover w-full h-full' />
          })}
        </div>
      </>}

      {tab === 'reports' && <>
        <div className="p-3">
          <h1 className="text-lg font-semibold">{`Bình luận`}</h1>
        </div>
        <div className='bg-white w-full p-3 flex flex-col gap-3'>
          {reports.map(item => {
            return <div key={item.id} className='flex gap-3'>
              <img
                className="min-w-[31px] md:min-w-[67px] h-[31px] md:h-[67px] object-cover"
                src={item.author_image} alt=""
              />
              <div className='flex flex-col'>
                <p className='text-sm md:text-xl font-semibold' style={{ color: '#f905e5' }}>{item.author}</p>
                <p className='text-sm md:text-xl font-medium'>{item.comment}</p>
              </div>
            </div>
          })}
        </div>
      </>}
    </section>
  );
}
