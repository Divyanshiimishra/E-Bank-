import { Bell } from "lucide-react"

export default function Navbar() {

  return (

    <div className="flex justify-between items-center mb-8">

      {/* Search Bar */}

      <input
        type="text"
        placeholder="Search..."
        className="border px-4 py-2 rounded-lg w-64"
      />

      {/* Right Side */}

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer" />

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full"
        />

      </div>

    </div>

  )
}