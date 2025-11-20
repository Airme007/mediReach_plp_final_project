import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children, user }) {
  const role = user.unsafeMetadata.role;

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar role={role} />
      <Topbar user={user} />

      <main className="ml-64 mt-16 p-8">
        {children}
      </main>
    </div>
  );
}
