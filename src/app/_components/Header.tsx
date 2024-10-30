// const Header = () => {
//     return (
//       <header className="fixed top-0 right-0 left-12 p-4 bg-white shadow-sm z-10 ml-[240px]">

//         <h2 className="text-xl font-semibold">Welcome to our Good Deed Mapping App!</h2>
//         <p className="mt-2">Start sharing your good deeds today.</p>
//       </header>
//     );
//   };
  
//   export default Header;


  "use client";

import { UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 h-16 bg-white shadow-sm flex items-center justify-between px-6 w-[calc(100%-288px)]">
      <div className="text-xl font-semibold text-gray-800">
        Dashboard
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">User Name</span>
        <UserCircle className="h-8 w-8 text-gray-600" />
      </div>
    </header>
  );
};

export default Header;