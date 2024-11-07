import React, { useMemo, useState } from "react";
import AllVote from "./AllVote";

const leftMenu = [
  { title: 'Tất cả', key: 'All' },
  { title: 'Trên không', key: 'Profile' },
];

const Vote = () => {
  const [key, setKey] = useState('All');

  const Profile = () => <div>Profile Component</div>;

  const selectedComponent = useMemo(() => {
    switch (key) {
      case 'All':
        return <AllVote />;
      case 'Profile':
        return <AllVote />;
      default:
        return <div>Please select an item</div>;
    }
  }, [key]);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 w-full flex h-16 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center z-10">
        <h1 className="px-20 text-base sm:text-xl font-semibold text-white text-center truncate max-w-full">
          Bình chọn
        </h1>
      </div>

      {/* Main layout */}
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div className="w-20 lg:w-40 bg-gray-50 flex flex-col p-4 h-full sticky top-16">
          <nav className="space-y-4">
            {leftMenu.map((item) => (
              <div
                key={item.key}
                className={`w-full lg:min-w-[100px] py-2 px-4 rounded-lg cursor-pointer font-semibold text-center ${
                  key === item.key ? 'text-pink-600 border-l-4 border-pink-600' : 'text-gray-700'
                }`}
                onClick={() => setKey(item.key)}
              >
                {item.title}
              </div>
            ))}
          </nav>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow p-4 overflow-y-auto h-full min-h-[500px] flex justify-center items-center">
          <div className="w-full max-w-3xl pt-12">{selectedComponent}</div>
        </div>
      </div>
    </div>
  );
};

export default Vote;
