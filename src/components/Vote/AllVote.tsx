import React from "react";

const AllVote = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="grid grid-cols-2 gap-x-2 gap-y-2 p-3  h-fit">
        <div className="bg-white h-fit p-3 rounded-xl text-center">
          <img
            src="https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg"
            className="w-28 h-28 lg:w-full lg:h-full lg:w-full lg:h-full object-cover rounded-xl"
            alt="Bình chọn 1"
          />
          <p className="mt-2">Bình chọn 1</p>
        </div>
        <div className="bg-white h-fit p-3 rounded-xl text-center">
          <img
            src="https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg"
            className="w-28 h-28 lg:w-full lg:h-full object-cover rounded-xl"
            alt="Bình chọn 2"
          />
          <p className="mt-2">Bình chọn 2</p>
        </div>
        <div className="bg-white h-fit p-3 rounded-xl text-center">
          <img
            src="https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg"
            className="w-28 h-28 lg:w-full lg:h-full object-cover rounded-xl"
            alt="Bình chọn 3"
          />
          <p className="mt-2">Bình chọn 3</p>
        </div>
        <div className="bg-white h-fit p-3 rounded-xl text-center">
          <img
            src="https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg"
            className="w-28 h-28 lg:w-full lg:h-full object-cover rounded-xl"
            alt="Bình chọn 4"
          />
          <p className="mt-2">Bình chọn 4</p>
        </div>
      </div>
    </section>
  );
};

export default AllVote;
