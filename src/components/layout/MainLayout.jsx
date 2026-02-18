import Sidebar from "./Sidebar";
import FormPanel from "./FormPanel";
import PreviewPanel from "./PreviewPanel";
import { Info, Settings, Bell, ChevronDown, User } from "lucide-react";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shrink-0">
        <h1 className="text-xl font-bold text-gray-900">Resume builder</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Info size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Settings size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Bell size={20} />
          </button>
          <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full hover:bg-gray-100">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={18} className="text-gray-500" />
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="grid grid-cols-12 flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="col-span-2 bg-gray-100 border-r border-gray-200 overflow-y-auto">
          <Sidebar />
        </div>

        {/* Center - Form Section */}
        <div className="col-span-6 bg-white p-6 overflow-y-auto">
          <FormPanel />
        </div>

        {/* Right - Preview */}
        <div className="col-span-4 bg-gray-100 p-6 overflow-y-auto">
          <PreviewPanel />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
