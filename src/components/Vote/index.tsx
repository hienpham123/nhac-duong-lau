import React, { useMemo, useState } from "react"
import AllVote from "./AllVote";

const leftMenu = [
  {title: 'All', key: 'All'},
  {title: 'Profile', key: 'Profile'},
  {title: 'Messages', key: 'Messages'},
  {title: 'Settings', key: 'Settings'},
]

const Vote = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [key, setKey] = useState<string>('All')

  const Profile = () => <div>Profile Component</div>;
  const Messages = () => <div>Messages Component</div>;
  const Settings = () => <div>Settings Component</div>;

  const selectedComponent = useMemo(() => {
    switch (key) {
      case 'All':
        return <AllVote />;
      case 'Profile':
        return <Profile />;
      case 'Messages':
        return <Messages />;
      case 'Settings':
        return <Settings />;
      default:
        return <div>Please select an item</div>;
    }
  }, [key]);
  
  return (
    <div className="w-full min-h-screen">
      <div className="flex">
        <div className="md:hidden p-4">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-blue-800 focus:outline-none z-50"
            aria-label="Toggle Sidebar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className={`fixed inset-y-0 w-64 bg-white text-black h-full flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:block`}>
          <nav className="flex-grow p-4">
            {leftMenu.map((item) => {
              return (
                <div key={item.key} className="block py-2 px-4 rounded hover:bg-gray-300" onClick={() => {setIsOpen(false); setKey(item.key)}}>{item.title}</div>
              )
            })}
          </nav>
        </div>

        <div className="flex-grow pt-4 ml-0 md:ml-64 w-80">
          {selectedComponent}
        </div>
      </div>
    </div>
  )
}

export default Vote