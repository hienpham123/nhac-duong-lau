
import React from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';
import ROUTERS_PATHS from '../../shared/constants/router-path';

const vietnamProvinces = [
    { id: 1, name: "An Giang" },
    { id: 2, name: "Bà Rịa Vũng Tàu" },
    { id: 3, name: "Bạc Liêu" },
    { id: 4, name: "Bắc Giang" },
    { id: 5, name: "Bắc Kạn" },
    { id: 6, name: "Bắc Ninh" },
    { id: 7, name: "Bến Tre" },
    { id: 8, name: "Bình Dương" },
    { id: 9, name: "Bình Định" },
    { id: 10, name: "Bình Phước" },
    { id: 11, name: "Bình Thuận" },
    { id: 12, name: "Cà Mau" },
    { id: 13, name: "Cao Bằng" },
    { id: 14, name: "Cần Thơ" },
    { id: 15, name: "Đà Nẵng" },
    { id: 16, name: "Đắk Lắk" },
    { id: 17, name: "Đắk Nông" },
    { id: 18, name: "Điện Biên" },
    { id: 19, name: "Đồng Nai" },
    { id: 20, name: "Đồng Tháp" },
    { id: 21, name: "Gia Lai" },
    { id: 22, name: "Hà Giang" },
    { id: 23, name: "Hà Nam" },
    { id: 24, name: "Hà Nội" },
    { id: 25, name: "Hà Tĩnh" },
    { id: 26, name: "Hải Dương" },
    { id: 27, name: "Hải Phòng" },
    { id: 28, name: "Hậu Giang" },
    { id: 29, name: "Hòa Bình" },
    { id: 30, name: "Hưng Yên" },
    { id: 31, name: "Khánh Hòa" },
    { id: 32, name: "Kiên Giang" },
    { id: 33, name: "Kon Tum" },
    { id: 34, name: "Lai Châu" },
    { id: 35, name: "Lâm Đồng" },
    { id: 36, name: "Lạng Sơn" },
    { id: 37, name: "Lào Cai" },
    { id: 38, name: "Long An" },
    { id: 39, name: "Nam Định" },
    { id: 40, name: "Nghệ An" },
    { id: 41, name: "Ninh Bình" },
    { id: 42, name: "Ninh Thuận" },
    { id: 43, name: "Phú Thọ" },
    { id: 44, name: "Phú Yên" },
    { id: 45, name: "Quảng Bình" },
    { id: 46, name: "Quảng Nam" },
    { id: 47, name: "Quảng Ngãi" },
    { id: 48, name: "Quảng Ninh" },
    { id: 49, name: "Quảng Trị" },
    { id: 50, name: "Sóc Trăng" },
    { id: 51, name: "Sơn La" },
    { id: 52, name: "Tây Ninh" },
    { id: 53, name: "Thái Bình" },
    { id: 54, name: "Thái Nguyên" },
    { id: 55, name: "Thanh Hóa" },
    { id: 56, name: "Thừa Thiên Huế" },
    { id: 57, name: "Tiền Giang" },
    { id: 58, name: "TP Hồ Chí Minh" },
    { id: 59, name: "Trà Vinh" },
    { id: 60, name: "Tuyên Quang" },
    { id: 61, name: "Vĩnh Long" },
    { id: 62, name: "Vĩnh Phúc" },
    { id: 63, name: "Yên Bái" }
];

export default function ChosenPeople() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <section className='w-full min-h-screen'>
            <div className="flex h-12 md:h-20 items-center bg-fuchsia-400 justify-center">
                <h1 className="text-xl sm:text-3xl font-semibold text-white text-center">Chọn người tình</h1>
            </div>
            <div className="w-full rounded-md">
                <TabContext value={value}>
                    <TabList
                        onChange={handleChange}
                        centered // Căn giữa các tab
                        sx={{
                            "& .MuiTabs-flexContainer": {
                                height: "80px",
                                justifyContent: "space-around",
                                backgroundColor: "#ffffff", // Nền trắng cho tiêu đề tab
                                // Đảm bảo căn giữa
                            },
                            "& .MuiTab-root": {
                                textTransform: "none", // Chuyển sang chữ thường
                                backgroundColor: "#ffffff", // Nền trắng cho tiêu đề tab
                                fontWeight: "bold",
                                color: "gray",
                                fontSize: "20px",
                                "&.Mui-selected": {
                                    color: "#f905e5", // Màu tab active
                                },
                            },
                            "& .MuiTabs-indicator": {
                                backgroundColor: "#f905e5", // Màu của gạch chân
                            },
                        }}
                    >
                        <Tab label="Thành phố" value="1" />
                        <Tab label="Giá xử lí" value="2" />
                    </TabList>

                    <TabPanel value="1">
                        <div>
                            <div className='bg-[#8a637d] p-2 rounded-lg' style={{ lineHeight: 1 }}>
                                <span className='text-sm text-white leading-none'>{`Dịch vụ cung cấp gái đẹp miễn phí trên toàn quốc , Có thể sắp xếp bất cứ nơi nào tại Việt Nam và bất cứ lúc nào , Bạn chỉ cần liên hệ lễ tân sẽ lập tức sắp xếp.`}</span>
                            </div>

                            <div className='mt-3'>
                                {vietnamProvinces.map((province, index) => (
                                    <Link to={ROUTERS_PATHS.CHOOSEN_PROVINCE.replace(':province', province.id.toString()) }>
                                        <div
                                            key={index}
                                            className='bg-white w-full p-4 border-b border-gray-200'
                                        >
                                            <h1 className='text-base md:text-2xl font-medium uppercase'>{province.name}</h1>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value="2">
                        <div className='flex flex-col gap-2'>
                            <div className='bg-[#8a637d] p-2 rounded-lg' style={{ lineHeight: 1 }}>
                                <span className='text-sm text-white' style={{ lineHeight: 1 }}>{`Dịch vụ cung cấp gái đẹp miễn phí trên toàn quốc , Có thể sắp xếp bất cứ nơi nào tại Việt Nam và bất cứ lúc nào , Bạn chỉ cần liên hệ lễ tân sẽ lập tức sắp xếp.`}</span>
                            </div>
                            <h3 className='text-[#0bdab0] font-semibold'>{`Có những tài nguyên nào?`}</h3>
                            <h3 className='font-semibold'>{`Người nổi tiếng trên mạng, người mẫu, tiếp viên hàng không, người mẫu trẻ, sinh viên đại học, chỉ có điều bạn không nghĩ ra được và bạn không thể làm được nếu không có nền tảng này`}</h3>
                            <h3 className='text-[#0bdab0] font-semibold'>{`Khu vực phục vụ`}</h3>
                            <h3 className='font-semibold'>{`Các cuộc hẹn miễn phí trong cùng một thành phố, hoặc ở bất kỳ đâu trong cả nước, các thành phố cấp một và cấp hai tại địa phương ở Việt Nam và các thành phố cấp ba cũng có thể được sắp xếp bằng cách liên hệ với nhân viên tiếp tân。`}</h3>
                        </div>
                    </TabPanel>
                </TabContext>
            </div>
        </section>
    )
}