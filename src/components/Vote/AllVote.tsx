import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";

const data = [
  {url: 'https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg', title: 'Bình chọn 1', id: 1},
  {url: 'https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg', title: 'Bình chọn 2', id: 2},
  {url: 'https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg', title: 'Bình chọn 3', id: 3},
  {url: 'https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg', title: 'Bình chọn 4', id: 4},
]

const AllVote = () => {
  const navigate = useNavigate()
  const handleNavigate = (id: number | string) => {
    navigate(ROUTERS_PATHS.VOTE_DETAIL.replace(':id', id.toString()))
  }
  return (
    <section className="w-full min-h-screen">
      <div className="grid grid-cols-2 gap-x-2 gap-y-2 p-3  h-fit">
        {data.map((item, index) => {
          return (
            <div className="bg-white h-fit p-3 rounded-xl text-center" key={index} onClick={() => handleNavigate(item.id)}>
              <img
                src={item.url}
                className="w-28 h-28 lg:w-full lg:h-full object-cover rounded-xl"
                alt=
                {item.title}
              />
              <p className="mt-2">{item.title}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default AllVote;
