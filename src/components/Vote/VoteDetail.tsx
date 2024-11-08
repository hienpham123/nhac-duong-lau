import React, { useCallback, useEffect, useMemo, useState } from "react"
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { CiCircleMore, CiShoppingCart } from "react-icons/ci";
import { Link, useParams } from "react-router-dom"
import ROUTERS_PATHS from "../../shared/constants/router-path"
import { formatTime, getRandomTwo } from "../../shared/utils/helpers"

interface historyPeriodType {
  historyPeriod: number;
  value: string[]
}

const valueButton = [
  { title: 'A', key: 'A' },
  { title: 'B', key: 'B' },
  { title: 'C', key: 'C' },
  { title: 'D', key: 'D' },
]

const VoteDetail = () => {
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(false)
  const [timeLeft, setTimeLeft] = useState<number>(120)
  const [numberPeriod, setNumberPeriod] = useState<number>(202411080000)
  const [valuePeriod, setValuePeriod] = useState<string[]>(getRandomTwo(['A', 'B', 'C', 'D']))
  const [historyPeriod, setHistoryPeriod] = useState<historyPeriodType[]>([])
  const [buttonChoose, setButtonChoose] = useState<string[]>([])
  const [money, setMoney] = useState<string | number>('')

  const getData = () => { }

  const toggleItem = () => {
    setIsOpen((prev) => !prev);
  };

  const historyPeriodRows = useMemo(() => {
    return historyPeriod.length > 0 ?
      historyPeriod.map((item: historyPeriodType, index: number) => {
        return (
          <tr key={index}>
            <td className="text-black font-bold text-xl md:text-2xl">{item.historyPeriod}</td>
            <td style={{ float: 'right' }}>
              {item.value.map((i: string, k: number) => {
                return (
                  <span className={`text-black font-bold text-xl md:text-2xl ${k === 0 ? 'mr-2' : ''}`} key={k}>{i}</span>
                )
              })}
            </td>
          </tr>
        )
      }) :
      <tr><td colSpan={2} className="text-center">Không có dữ liệu</td></tr>;
  }, [historyPeriod]);

  const handleClickVote = useCallback((key: string) => {
    setButtonChoose((prevButtonChoose) => {
      if (!prevButtonChoose.includes(key)) {
        setIsOpenInfo(true)
        return [...prevButtonChoose, key];
      } else {
        const arr = prevButtonChoose.filter((item) => item !== key);
        setIsOpenInfo(arr.length > 0)
        return arr
      }
    });
  }, []);

  useEffect(() => {
    getData()
  }, [id])

  useEffect(() => {
    if (timeLeft < 0) {
      const _historyPeriod: historyPeriodType[] = [...historyPeriod]
      _historyPeriod.push({ historyPeriod: numberPeriod, value: valuePeriod })
      setTimeLeft(120)
      setNumberPeriod((prev) => prev + 1)
      setValuePeriod(getRandomTwo(['A', 'B', 'C', 'D']))
      setHistoryPeriod(_historyPeriod)
    } else {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  return (
    <div className="w-full min-h-screen">
      <div className="sticky top-0 w-full flex h-16 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center z-10">
        <Link to={ROUTERS_PATHS.VOTE} className="absolute left-3">
          <IoIosArrowBack size={30} color="white" />
        </Link>
        <h1 className="px-20 text-base sm:text-xl font-semibold text-white text-center truncate max-w-full">
          Bình chọn {id}
        </h1>
      </div>

      <div className="p-5 flex justify-between items-center bg-white">
        <div className="flex items-center">
          <img
            src="https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg"
            className="w-20 h-20 object-cover"
          />

          <p className="ml-5 font-bold text-black text-xl md:text-2xl">{numberPeriod}</p>
        </div>
        <div className="text-red-600 text-xl md:text-4xl">
          {formatTime(timeLeft)}
        </div>

      </div>
      <div className="bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] h-[1px] w-[80%] mx-auto"></div>

      <div className="bg-white">
        <button
          onClick={toggleItem}
          className="w-full text-left p-4 bg-white focus:outline-none"
        >
          <div className="flex justify-between items-center">
            <div className="flex">
              {valuePeriod.map((item: string, index: number) => {
                return (
                  <span className={`text-black font-bold text-xl md:text-2xl ${index === 0 ? 'mr-10' : ''} ml-5`} key={index}>{item}</span>
                )
              })}
            </div>
            <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 bg-white absolute z-10 w-full h-fit">
            <table style={{ width: '80%' }}>
              <tr className="w-full">
                <td className="text-black font-bold text-xl md:text-2xl" style={{ width: '30%' }}>Số kỳ</td>
                <td className="text-black font-bold text-xl md:text-2xl" style={{ width: '70%', textAlign: 'right' }}>Kết quả bình chọn </td>
              </tr>
              {historyPeriodRows}
            </table>
          </div>
        )}
      </div>

      <div className="flex justify-between p-5">
        <span className="text-red-500 text-xl">[3 phút]</span>
        <span className="flex items-center cursor-pointer text-red-500 text-xl font-bold"><CiCircleMore /> Lịch sử bình chọn</span>
      </div>
      <div className="bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] h-[1px] w-[80%] mx-auto"></div>

      <div className="flex justify-between p-5">
        {valueButton.map((item) => {
          const isCheck = buttonChoose.includes(item.key)
          return (
            <button className={`${isCheck ? 'bg-red-500 text-white' : 'bg-white text-gray-700'} w-20 md:w-28 aspect-square rounded-md text-2xl md:text-4xl`} key={item.key} onClick={() => handleClickVote(item.key)}>{item.title}</button>
          )
        })}
      </div>
      <div className="absolute bottom-0 w-full">
        {isOpenInfo && (
          <div className="flex flex-col justify-center px-5 bg-white w-full h-28" style={{ boxShadow: '0 0 1.333vw 0 #cacaca' }}>
            <div className="flex justify-between">
              <span>
                Hiện tại số đã chọn:
                {buttonChoose.length > 0 ? (
                  <span className="ml-3 text-red-500">
                    {buttonChoose.reduce((acc, cur, index, arr) => {
                      return acc += cur + (index !== arr.length - 1 ? ',' : '')
                    }, '')}
                  </span>
                ) : (
                  <span></span>
                )}
              </span>
              <IoIosArrowDown size={24} onClick={() => setIsOpenInfo(false)} />
            </div>
            <div className="flex justify-between">
              <div>
                <span>
                  Số điểm bình chọn
                </span>
                <input className="ml-2" type="text" placeholder="Vui lòng nhập số tiền" style={{ outline: 'none' }} value={money} onChange={(e) => setMoney(e.target.value)} />
              </div>
              <div>K</div>
            </div>
            <div className="flex justify-between">
              <div>
                <span>Tổng cộng</span>
                <span className="ml-1 text-red-500">{buttonChoose.length}</span>
                <span className="ml-1">Đặt</span>
              </div>
              <div>
                <span>Tổng cộng</span>
                <span className="ml-1 text-red-500">{buttonChoose.length * Number(money)}</span>
                <span className="ml-1">K</span>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between bg-white w-full h-14 md:h-20 md:pr-10 pr-5" style={{ boxShadow: '0 0 1.333vw 0 #cacaca' }}>
          <div className="flex">
            <div>
              <CiShoppingCart size={24} className="mx-auto" />
              <span>Bình chọn</span>
            </div>
            <div className="w-px h-10 bg-gray-400 mx-1"></div>
            <div className="text-left">
              <div className="text-black">Số dư khả dụng</div>
              <span>
                <span className="text-red-500">0</span>
                <span className="ml-1">K</span>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] w-fit px-7 py-2 rounded-full text-xl text-white">Xác nhận</div>
        </div>
      </div>
    </div>
  )
}

export default VoteDetail