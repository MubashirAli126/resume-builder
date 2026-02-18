import { User, Mail, Phone, MapPin } from "lucide-react";

const TealTemplate = ({ resumeData }) => {
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
    <div className="resume-template-teal">
      <div className="teal-template__container">
        {/* Top section with profile and accent bars */}
        <div className="teal-template__top">
          <div className="teal-template__profile-row">
            <div className="teal-template__photo-wrap">
              <div className="teal-template__photo">
                {personal.photo ? (
                  <img src={personal.photo} alt="" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <User size={40} className="text-gray-400" />
                )}
              </div>
            </div>
            <div className="teal-template__header-info">
              <h1 className="teal-template__name">{personal.fullName || "—"}</h1>
              <p className="teal-template__title">{personal.title || "—"}</p>
            </div>
          </div>
          <div className="teal-template__accent-bar teal-template__accent-bar--top" />
        </div>

        <div className="teal-template__accent-bar teal-template__accent-bar--right" />

        {/* Main content */}
        <div className="teal-template__content">
          <div className="teal-template__section">
            <h3 className="teal-template__section-title">Contact</h3>
            <div className="teal-template__contact-list">
              {personal.email && (
                <div className="teal-template__contact-item">
                  <Mail size={12} />
                  <span>{personal.email}</span>
                </div>
              )}
              {personal.phone && (
                <div className="teal-template__contact-item">
                  <Phone size={12} />
                  <span>{personal.phone}</span>
                </div>
              )}
              {personal.address && (
                <div className="teal-template__contact-item">
                  <MapPin size={12} />
                  <span>{personal.address}</span>
                </div>
              )}
            </div>
          </div>

          <div className="teal-template__section">
            <h3 className="teal-template__section-title">About me</h3>
            <div
              className="teal-template__text"
              dangerouslySetInnerHTML={{
                __html: about || "<span>—</span>"
              }}
            />
          </div>

          <div className="teal-template__section">
            <h3 className="teal-template__section-title">Job Experience</h3>
            {work.length > 0 ? (
              work.map((item, i) => (
                <div key={i} className="teal-template__item">
                  <span className="font-semibold">{item.jobTitle || item.position}</span>
                  {(item.companyName || item.company) && <span> — {item.companyName || item.company}</span>}
                  {item.duration && <span className="block text-sm text-gray-600">{item.duration}</span>}
                </div>
              ))
            ) : (
              <p className="teal-template__placeholder">—</p>
            )}
          </div>

          <div className="teal-template__section">
            <h3 className="teal-template__section-title">Education</h3>
            {education.length > 0 ? (
              education.map((item, i) => (
                <div key={i} className="teal-template__item">
                  <span>{item.levelOfEducation || item.degree}</span>
                  {item.institution && <span> — {item.institution}</span>}
                  {(item.passingYear || item.year) && <span className="block text-sm text-gray-600">{item.passingYear || item.year}</span>}
                </div>
              ))
            ) : (
              <p className="teal-template__placeholder">—</p>
            )}
          </div>

          <div className="teal-template__section">
            <h3 className="teal-template__section-title">Areas of expertise</h3>
            <p className="teal-template__text">
              {expertise.length > 0 ? expertise.join(", ") : "—"}
            </p>
          </div>

          <div className="teal-template__section">
            <h3 className="teal-template__section-title">Language</h3>
            <p className="teal-template__text">
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

          <div className="teal-template__section">
            <h3 className="teal-template__section-title">References</h3>
            {references.length > 0 ? (
              references.map((ref, i) => (
                <div key={i} className="teal-template__item">
                  <span className="font-medium">{ref.name}</span>
                  {ref.relation && <span> ({ref.relation})</span>}
                  {ref.contact && <span className="block text-sm">{ref.contact}</span>}
                </div>
              ))
            ) : (
              <p className="teal-template__placeholder">—</p>
            )}
          </div>

          <div className="teal-template__section">
            <h3 className="teal-template__section-title">Social link</h3>
            {socialLinks.length > 0 ? (
              socialLinks.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="teal-template__social-link">
                  {link.label}: {link.url}
                </a>
              ))
            ) : (
              <p className="teal-template__placeholder">—</p>
            )}
          </div>
        </div>

        <div className="teal-template__accent-bar teal-template__accent-bar--bottom" />
      </div>
    </div>
  );
};

export default TealTemplate;
