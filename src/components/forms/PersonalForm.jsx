import { useForm } from "react-hook-form";
import { useResumeStore } from "../../store/resumeStore";
import { STEPS } from "../../constants/steps";
import { useState } from "react";

const PersonalForm = () => {
  const { resumeData, updateSection, setActiveStep } =
    useResumeStore();

  const [previewImage, setPreviewImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: resumeData.personal
  });

  // ---------- IMAGE UPLOAD ----------
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);

        updateSection("personal", {
          ...resumeData.personal,
          photo: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  };

  // ---------- NEXT BUTTON ----------
  const onSubmit = (data) => {
    updateSection("personal", {
      ...resumeData.personal,
      ...data
    });

    // Move to next step
    const nextStep = STEPS[1].id;
    setActiveStep(nextStep);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      {/* PHOTO */}
      <div>
        <label className="block font-medium mb-1">
          Upload Photo
        </label>

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {previewImage && (
          <img
            src={previewImage}
            alt="preview"
            className="w-20 h-20 mt-2 rounded-full object-cover"
          />
        )}
      </div>

      {/* FULL NAME */}
      <div>
        <label className="block font-medium">Full Name</label>
        <input
          className="input"
          {...register("fullName", { required: "Name is required" })}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* TITLE */}
      <div>
        <label className="block font-medium">Title</label>
        <input
          className="input"
          {...register("title", { required: "Title is required" })}
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="block font-medium">Email</label>
        <input
          className="input"
          {...register("email", { required: "Email required" })}
        />
      </div>

      {/* PHONE */}
      <div>
        <label className="block font-medium">Phone</label>
        <input className="input" {...register("phone")} />
      </div>

      {/* ADDRESS */}
      <div>
        <label className="block font-medium">Address</label>
        <textarea className="input" {...register("address")} />
      </div>

      {/* NEXT BUTTON */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </form>
  );
};

export default PersonalForm;
