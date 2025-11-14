import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";

export default function Dashboard() {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = await getToken({ template: "default" });
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/appointments/my`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAppointments(res.data);
    };

    fetchAppointments();
  }, [getToken]);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold mb-4">
        Welcome, {user?.firstName || "User"}
      </h2>
      <p>Your Appointments:</p>
      <ul>
        {appointments.length > 0 ? (
          appointments.map((a) => (
            <li key={a._id}>
              🩺 {a.reason} — {new Date(a.slot.start).toLocaleString()}
            </li>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </ul>
    </div>
  );
}
