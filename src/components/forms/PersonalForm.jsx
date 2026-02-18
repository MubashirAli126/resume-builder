import { useForm } from "react-hook-form";
import { useResumeStore } from "../../store/resumeStore";
import { STEPS } from "../../constants/steps";
import { useState, useRef } from "react";
import { User } from "lucide-react";

const MAX_FILE_SIZE = 800 * 1024; // 800KB
const ACCEPTED_TYPES = ["image/jpeg", "image/jpg", "image/gif", "image/png"];

const PersonalForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();
  const [previewImage, setPreviewImage] = useState(resumeData.personal?.photo || null);
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: resumeData.personal || {}
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      alert("File size must be less than 800KB");
      return;
    }
    if (!ACCEPTED_TYPES.includes(file.type)) {
      alert("Allowed formats: JPG, GIF or PNG");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
      updateSection("personal", {
        ...resumeData.personal,
        photo: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = () => {
    setPreviewImage(null);
    updateSection("personal", {
      ...resumeData.personal,
      photo: null
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = (data) => {
    updateSection("personal", {
      ...resumeData.personal,
      ...data
    });
    const nextStep = STEPS[1]?.id || "about";
    setActiveStep(nextStep);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Photo upload section */}
      <div className="flex items-start gap-6">
        <div className="w-28 h-28 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center shrink-0 overflow-hidden">
          {previewImage ? (
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <User size={40} className="text-gray-400" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex gap-3">
            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.jpeg,.gif,.png"
              onChange={handleImageUpload}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 cursor-pointer transition-colors"
            >
              Upload your photo
            </label>
            <button
              type="button"
              onClick={handleResetPhoto}
              className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Allowed JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </div>

      {/* Form fields - 2 column grid */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            className="input"
            placeholder="e.g John doe"
            {...register("fullName", { required: "Name is required" })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            className="input"
            placeholder="Placeholder"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            className="input"
            type="email"
            placeholder="e.g John doe"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            className="input"
            placeholder="e.g 00 00 0000"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Address - full width */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address <span className="text-red-500">*</span>
        </label>
        <input
          className="input"
          placeholder="e.g Villa #1234, Street name, City"
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && (
          <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
        )}
      </div>

      {/* Optional URLs - 2 column */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn URL (optional)
          </label>
          <input
            className="input"
            placeholder="www."
            {...register("linkedInUrl")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Indeed URL (optional)
          </label>
          <input
            className="input"
            placeholder="www."
            {...register("indeedUrl")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Behance URL (optional)
          </label>
          <input
            className="input"
            placeholder="www."
            {...register("behanceUrl")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Website URL (optional)
          </label>
          <input
            className="input"
            placeholder="www."
            {...register("websiteUrl")}
          />
        </div>
      </div>

      {/* Next button */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg bg-white hover:bg-gray-50 transition-colors"
        >
          Next -&gt;
        </button>
      </div>
    </form>
  );
};

export default PersonalForm;
