import { UserButton } from "@clerk/clerk-react";

import { Bell } from "lucide-react";

export default function Topbar({ user }) {
  return (
    <div className="ml-64 h-16 px-8 bg-white flex items-center justify-between shadow sticky top-0 z-10">

      <h2 className="text-lg font-medium text-gray-700">
        Welcome back, {user.firstName || "User"}
      </h2>

      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-6 w-6 text-gray-600" />
        </button>
        <UserButton />
      </div>

    </div>
  );
}
