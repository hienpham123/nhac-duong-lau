
import React from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const vietnamProvinces = [
    "An Giang", "Bà Rịa - Vũng Tàu", "Bạc Liêu", "Bắc Giang", "Bắc Kạn", "Bắc Ninh",
    "Bến Tre", "Bình Dương", "Bình Định", "Bình Phước", "Bình Thuận", "Cà Mau",
    "Cao Bằng", "Cần Thơ", "Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên",
    "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Nội",
    "Hà Tĩnh", "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên",
    "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn",
    "Lào Cai", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận",
    "Phú Thọ", "Phú Yên", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh",
    "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên",
    "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "TP Hồ Chí Minh", "Trà Vinh",
    "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
];

export default function ChosenPeople() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <section className='w-full min-h-screen'>
            <div className="flex h-20 items-center bg-fuchsia-400 justify-center">
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
                            <div className='bg-[#8a637d] p-2 rounded-lg'>
                                <span className='text-sm text-white'>{`Dịch vụ cung cấp gái đẹp miễn phí trên toàn quốc , Có thể sắp xếp bất cứ nơi nào tại Việt Nam và bất cứ lúc nào , Bạn chỉ cần liên hệ lễ tân sẽ lập tức sắp xếp.`}</span>
                            </div>

                            <div className='mt-3'>
                                {vietnamProvinces.map((province, index) => (
                                    <div
                                        key={index}
                                        className='bg-white w-full p-4 border-b border-gray-200'
                                    >
                                        <h1 className='text-2xl font-medium uppercase'>{province}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value="2">
                        <div className='flex flex-col gap-2'>
                            <div className='bg-[#8a637d] p-2 rounded-lg'>
                                <span className='text-sm text-white'>{`Dịch vụ cung cấp gái đẹp miễn phí trên toàn quốc , Có thể sắp xếp bất cứ nơi nào tại Việt Nam và bất cứ lúc nào , Bạn chỉ cần liên hệ lễ tân sẽ lập tức sắp xếp.`}</span>
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