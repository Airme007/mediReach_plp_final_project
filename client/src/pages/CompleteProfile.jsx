import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useState } from "react";

export default function CompleteProfile({ onComplete }) {
  const { user } = useUser();
  const [role, setRole] = useState("");

  const saveRole = async () => {
    if (!role) {
      alert("Please select a role");
      return;
    }

    await user.update({
      unsafeMetadata: { role }
    });

    onComplete();
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold">Choose your role</h2>

      <select 
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 mt-6"
      >
        <option value="">Select your role</option>
        <option value="patient">Patient</option>
        <option value="provider">Provider</option>
      </select>

      <button
        onClick={saveRole}
        className="bg-blue-600 text-white mt-4 px-4 py-2 rounded"
      >
        Continue
      </button>
    </div>
  );
}
