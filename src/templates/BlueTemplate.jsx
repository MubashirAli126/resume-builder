import { User, Mail, Phone, MapPin } from "lucide-react";

const BlueTemplate = ({ resumeData }) => {
  const personal = resumeData?.personal || {};
  const about = resumeData?.about || "";
  const education = resumeData?.education || [];
  const work = resumeData?.work || [];
  const expertise = resumeData?.expertise || [];
  const language = resumeData?.language || [];
  const references = resumeData?.references || [];

  const socialLinks = [
    personal.linkedInUrl && { label: "LinkedIn URL", url: personal.linkedInUrl },
    personal.indeedUrl && { label: "Indeed URL", url: personal.indeedUrl },
    personal.behanceUrl && { label: "Behance URL", url: personal.behanceUrl },
    personal.websiteUrl && { label: "Website URL", url: personal.websiteUrl }
  ].filter(Boolean);

  return (
    <div className="resume-template-blue">
      <div className="blue-template__container">
        {/* Left Column - Dark Blue */}
        <div className="blue-template__sidebar">
          <div className="blue-template__photo-wrap">
            <div className="blue-template__photo">
              {personal.photo ? (
                <img src={personal.photo} alt="" className="w-full h-full object-cover rounded-full" />
              ) : (
                <User size={40} className="text-blue-200" />
              )}
            </div>
          </div>
          <div className="blue-template__section">
            <h3 className="blue-template__sidebar-title">Contact Me</h3>
            <div className="blue-template__contact-list">
              {personal.phone && (
                <div className="blue-template__contact-item">
                  <Phone size={12} />
                  <span>{personal.phone}</span>
                </div>
              )}
              {personal.email && (
                <div className="blue-template__contact-item">
                  <Mail size={12} />
                  <span>{personal.email}</span>
                </div>
              )}
              {personal.address && (
                <div className="blue-template__contact-item">
                  <MapPin size={12} />
                  <span>{personal.address}</span>
                </div>
              )}
              {!personal.email && !personal.phone && !personal.address && (
                <p className="blue-template__placeholder">—</p>
              )}
            </div>
          </div>
          <div className="blue-template__section">
            <h3 className="blue-template__sidebar-title">References</h3>
            {references.length > 0 ? (
              references.map((ref, i) => (
                <div key={i} className="blue-template__ref-item">
                  <span className="font-medium">{ref.name}</span>
                  {ref.relation && <span> ({ref.relation})</span>}
                  {ref.contact && <span className="block text-sm opacity-90 mt-1">{ref.contact}</span>}
                </div>
              ))
            ) : (
              <p className="blue-template__placeholder">—</p>
            )}
          </div>
          <div className="blue-template__section">
            <h3 className="blue-template__sidebar-title">Social link</h3>
            {socialLinks.length > 0 ? (
              socialLinks.map((link, i) => (
                <div key={i} className="blue-template__social-item">
                  <span className="block text-sm">{link.label}</span>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm underline">
                    {link.url}
                  </a>
                </div>
              ))
            ) : (
              <p className="blue-template__placeholder">—</p>
            )}
          </div>
        </div>

        {/* Right Column - White with curved header */}
        <div className="blue-template__main">
          <div className="blue-template__header-curve" />
          <div className="blue-template__content">
            <h1 className="blue-template__name">{personal.fullName || "—"}</h1>
            <p className="blue-template__title">{personal.title || "—"}</p>

            <div className="blue-template__section-main">
              <h3 className="blue-template__main-title">About me</h3>
              <div
                className="blue-template__main-text"
                dangerouslySetInnerHTML={{
                  __html: about || "<span>—</span>"
                }}
              />
            </div>

            <div className="blue-template__section-main">
              <h3 className="blue-template__main-title">Job Experience</h3>
              {work.length > 0 ? (
                work.map((item, i) => (
                  <div key={i} className="blue-template__main-item">
                    <div className="flex justify-between">
                      <span className="font-semibold">{item.jobTitle || item.position}</span>
                      {item.duration && <span className="text-sm text-gray-600">{item.duration}</span>}
                    </div>
                    <span className="text-sm">{item.companyName || item.company || ""}</span>
                  </div>
                ))
              ) : (
                <p className="blue-template__placeholder-main">—</p>
              )}
            </div>

            <div className="blue-template__section-main">
              <h3 className="blue-template__main-title">Education</h3>
              {education.length > 0 ? (
                education.map((item, i) => (
                  <div key={i} className="blue-template__main-item">
                    <div className="flex justify-between">
                      <span>{(item.levelOfEducation || item.degree) || "—"} {(item.institution) ? `— ${item.institution}` : ""}</span>
                      {(item.passingYear || item.year) && <span className="text-sm text-gray-600">{item.passingYear || item.year}</span>}
                    </div>
                  </div>
                ))
              ) : (
                <p className="blue-template__placeholder-main">—</p>
              )}
            </div>

            <div className="blue-template__section-main">
              <h3 className="blue-template__main-title">Areas of expertise</h3>
              <p className="blue-template__main-text">
                {expertise.length > 0 ? expertise.join(", ") : "—"}
              </p>
            </div>

            <div className="blue-template__section-main">
              <h3 className="blue-template__main-title">Language</h3>
              <p className="blue-template__main-text">
                {language.length > 0
                  ? language
                      .map((item) =>
                        typeof item === "string"
                          ? item
                          : [item.language, item.proficiency].filter(Boolean).join(" – ")
                      )
                      .join(", ")
                  : "—"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueTemplate;
