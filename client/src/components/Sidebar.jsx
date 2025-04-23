import React from 'react';
import { Home, Image, User, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home' },
    { icon: <Image size={20} />, label: 'Posts' },
    { icon: <User size={20} />, label: 'Profile' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <div className="h-screen mt-20 w-64 bg-gray-900 text-white flex flex-col shadow-xl">
      <div className="mx-10 px-6 py-4 text-2xl font-bold border-b border-gray-700">
        Instagram
      </div>
      <div className="flex-1 px-4 py-6 space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-all"
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
