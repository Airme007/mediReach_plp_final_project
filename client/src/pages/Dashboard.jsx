import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import PatientDashboard from "../components/layout/PatientDashboard";
import ProviderDashboard from "../components/layout/ProviderDashboard";

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

  if (user?.unsafeMetadata?.role === 'patient') {
    return <PatientDashboard user={user} />;
  } else if (user?.unsafeMetadata?.role === 'provider') {
    return <ProviderDashboard user={user} />;
  } else {
    return <div>Loading...</div>;
  }
}
