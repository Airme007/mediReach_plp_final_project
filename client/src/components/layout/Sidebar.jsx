import { NavLink } from "react-router-dom";

export default function Sidebar({ role }) {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-slate-800 text-white flex flex-col shadow-lg">

      <div className="p-6 text-2xl font-bold">MediReach</div>

      <nav className="flex-1 px-4 space-y-2">
        <NavLink className="block p-3 rounded-lg hover:bg-slate-700" to="/">
          Home
        </NavLink>
        <NavLink className="block p-3 rounded-lg hover:bg-slate-700" to="/dashboard">
          Dashboard
        </NavLink>

        {role === "patient" && (
          <>
            <NavLink className="block p-3 rounded-lg hover:bg-slate-700" to="/book">
              Book Appointment
            </NavLink>
            <NavLink className="block p-3 rounded-lg hover:bg-slate-700" to="/appointments">
              My Appointments
            </NavLink>
            <NavLink className="block p-3 rounded-lg hover:bg-slate-700" to="/reminders">
              Reminders
            </NavLink>
          </>
        )}

        {role === "provider" && (
          <>
            <NavLink className="block p-3 rounded-lg hover:bg-slate-700" to="/schedule">
              Today's Schedule
            </NavLink>
            <NavLink className="block p-3 rounded-lg hover:bg-slate-700" to="/availability">
              Manage Availability
            </NavLink>
            <NavLink className="block p-3 rounded-lg hover:bg-slate-700" to="/patients">
              My Patients
            </NavLink>
          </>
        )}

        <NavLink className="block p-3 rounded-lg hover:bg-slate-700" to="/profile">
          Profile
        </NavLink>
      </nav>

    </div>
  );
}
