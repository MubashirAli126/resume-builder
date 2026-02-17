import Sidebar from "./Sidebar";
import FormPanel from "./FormPanel";
import PreviewPanel from "./PreviewPanel";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-12 h-screen">

      {/* Sidebar */}
      <div className="col-span-2 border-r bg-white">
        <Sidebar />
      </div>

      {/* Form Section */}
      <div className="col-span-6 p-6 overflow-y-auto">
        <FormPanel />
      </div>

      {/* Preview */}
      <div className="col-span-4 bg-gray-50 p-4 overflow-y-auto">
        <PreviewPanel />
      </div>

    </div>
  );
};

export default MainLayout;
