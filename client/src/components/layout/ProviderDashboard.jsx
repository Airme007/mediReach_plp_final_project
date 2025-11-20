import DashboardLayout from "./DashboardLayout";
import { Users, Calendar, Stethoscope, Clock, CheckCircle, AlertCircle } from "lucide-react";

export default function ProviderDashboard({ user }) {
  return (
    <DashboardLayout user={user}>

      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          Provider Dashboard
        </h1>
        <p className="text-gray-600 mt-2">Manage your practice efficiently</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 font-medium">Patients Today</p>
              <h2 className="text-3xl font-bold text-green-800 mt-2">7</h2>
            </div>
            <Users className="h-12 w-12 text-green-500" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 font-medium">Upcoming Appointments</p>
              <h2 className="text-3xl font-bold text-blue-800 mt-2">12</h2>
            </div>
            <Calendar className="h-12 w-12 text-blue-500" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 font-medium">Total Patients</p>
              <h2 className="text-3xl font-bold text-purple-800 mt-2">240</h2>
            </div>
            <Stethoscope className="h-12 w-12 text-purple-500" />
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <Clock className="h-6 w-6 text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Today's Schedule</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">James Carter</p>
                <p className="text-sm text-gray-600">10:00 AM • Online Consultation</p>
              </div>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>

            <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <Users className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Sarah Johnson</p>
                <p className="text-sm text-gray-600">11:30 AM • In-Person</p>
              </div>
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <Users className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Mike Davis</p>
                <p className="text-sm text-gray-600">2:00 PM • Follow-up</p>
              </div>
              <AlertCircle className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <Stethoscope className="h-6 w-6 text-green-500 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">Quick Actions</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-blue-800">Schedule</p>
            </button>

            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-green-800">Patients</p>
            </button>

            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200">
              <Stethoscope className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-purple-800">Records</p>
            </button>

            <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200">
              <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-orange-800">Availability</p>
            </button>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}
