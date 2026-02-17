import { useResumeStore } from "../store/resumeStore";

const FinalPreviewPage = () => {
  const resume = useResumeStore((s) => s.resumeData);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Final Resume Preview</h1>

      <div className="bg-white p-6 rounded shadow space-y-4">

        {/* Personal */}
        {resume.personal && (
          <div>
            {resume.personal.photo && (
              <img
                src={resume.personal.photo}
                className="w-24 h-24 rounded-full object-cover"
              />
            )}
            <h2 className="text-xl font-bold">{resume.personal.fullName}</h2>
            <p>{resume.personal.title}</p>
            <p>{resume.personal.email}</p>
            <p>{resume.personal.phone}</p>
            <p>{resume.personal.address}</p>
          </div>
        )}

        {/* About Me */}
        {resume.about && (
          <div>
            <h3 className="font-bold">About Me</h3>
            <p>{resume.about}</p>
          </div>
        )}

        {/* Education */}
        {resume.education.length > 0 && (
          <div>
            <h3 className="font-bold">Education</h3>
            {resume.education.map((edu, idx) => (
              <p key={idx}>
                {edu.degree} - {edu.institution} ({edu.year})
              </p>
            ))}
          </div>
        )}

        {/* Work */}
        {resume.work.length > 0 && (
          <div>
            <h3 className="font-bold">Work Experience</h3>
            {resume.work.map((job, idx) => (
              <p key={idx}>
                {job.position} - {job.company} ({job.duration})
              </p>
            ))}
          </div>
        )}

        {/* Expertise */}
        {resume.expertise.length > 0 && (
          <div>
            <h3 className="font-bold">Areas of Expertise</h3>
            <p>{resume.expertise.join(", ")}</p>
          </div>
        )}

        {/* Languages */}
        {resume.language.length > 0 && (
          <div>
            <h3 className="font-bold">Languages</h3>
            <p>{resume.language.join(", ")}</p>
          </div>
        )}

        {/* References */}
        {resume.references.length > 0 && (
          <div>
            <h3 className="font-bold">References</h3>
            {resume.references.map((ref, idx) => (
              <p key={idx}>
                {ref.name} - {ref.relation} ({ref.contact})
              </p>
            ))}
          </div>
        )}

      </div>

      {/* Placeholder Buttons */}
      <div className="mt-6 flex gap-2 flex-wrap">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Download PDF
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Download PNG
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Copy Shareable Link
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Share via Email
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Share on LinkedIn
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Save to Google Drive
        </button>
      </div>
    </div>
  );
};

export default FinalPreviewPage;
