import {
  User,
  Users,
  Link2,
  Briefcase,
  GraduationCap,
  UserCheck,
  Languages,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const OrangeBlackTemplate = ({ resumeData }) => {
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
    <div className="resume-template-orange-black">
      <div className="resume-template__container">
        {/* Left Column - Black with Orange */}
        <div className="resume-template__sidebar">
          {/* Orange triangle top-left */}
          <div className="resume-template__triangle" />

          {/* Profile photo with orange teardrop */}
          <div className="resume-template__photo-wrap">
            <div className="resume-template__photo">
              {personal.photo ? (
                <img
                  src={personal.photo}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <User size={48} className="text-gray-400" />
              )}
            </div>
            <div className="resume-template__photo-teardrop" />
          </div>

          {/* Timeline container */}
          <div className="resume-template__timeline-wrap">
            <div className="resume-template__timeline-line resume-template__timeline-line--orange" />

            {/* Contact Me */}
            <div className="resume-template__section">
              <div className="resume-template__section-marker" />
              <div className="resume-template__section-icon">
                <User size={14} className="text-gray-700" />
              </div>
              <h3 className="resume-template__sidebar-title">Contact Me</h3>
              <div className="resume-template__contact-list">
                {personal.email && (
                  <div className="resume-template__contact-item">
                    <Mail size={12} />
                    <span>{personal.email}</span>
                  </div>
                )}
                {personal.phone && (
                  <div className="resume-template__contact-item">
                    <Phone size={12} />
                    <span>{personal.phone}</span>
                  </div>
                )}
                {personal.address && (
                  <div className="resume-template__contact-item">
                    <MapPin size={12} />
                    <span>{personal.address}</span>
                  </div>
                )}
                {!personal.email && !personal.phone && !personal.address && (
                  <p className="resume-template__placeholder">—</p>
                )}
              </div>
            </div>

            <div className="resume-template__divider" />

            {/* References */}
            <div className="resume-template__section">
              <div className="resume-template__section-marker" />
              <div className="resume-template__section-icon">
                <Users size={14} className="text-gray-700" />
              </div>
              <h3 className="resume-template__sidebar-title">References</h3>
              <div className="resume-template__ref-list">
                {references.length > 0 ? (
                  references.map((ref, i) => (
                    <div key={i} className="resume-template__ref-item">
                      <span className="font-medium">{ref.name}</span>
                      {ref.relation && <span> ({ref.relation})</span>}
                      {ref.contact && (
                        <span className="block text-sm opacity-90 mt-1">{ref.contact}</span>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="resume-template__placeholder">—</p>
                )}
              </div>
            </div>

            <div className="resume-template__divider" />

            {/* Social link */}
            <div className="resume-template__section">
              <div className="resume-template__section-marker" />
              <div className="resume-template__section-icon">
                <Link2 size={14} className="text-gray-700" />
              </div>
              <h3 className="resume-template__sidebar-title">Social link</h3>
              <div className="resume-template__social-list">
                {socialLinks.length > 0 ? (
                  socialLinks.map((link, i) => (
                    <div key={i} className="resume-template__social-item">
                      <span className="resume-template__social-label">{link.label}</span>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-template__social-link"
                      >
                        {link.url}
                      </a>
                    </div>
                  ))
                ) : (
                  <p className="resume-template__placeholder">—</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - White */}
        <div className="resume-template__main">
          {/* Header - light grey with name/title */}
          <div className="resume-template__header">
            <h1 className="resume-template__name">
              {personal.fullName || "—"}
            </h1>
            <p className="resume-template__title">
              {personal.title || "—"}
            </p>
          </div>

          {/* Timeline container for right column */}
          <div className="resume-template__main-timeline">
            <div className="resume-template__timeline-line resume-template__timeline-line--gray" />

            {/* About me */}
            <div className="resume-template__main-section">
              <div className="resume-template__main-marker" />
              <div className="resume-template__main-icon">
                <User size={12} className="text-gray-700" />
              </div>
              <h3 className="resume-template__main-title">About me</h3>
              <p className="resume-template__main-text">
                {about ? (
                  <span dangerouslySetInnerHTML={{ __html: about }} />
                ) : (
                  "—"
                )}
              </p>
            </div>

            {/* Work Experience */}
            <div className="resume-template__main-section">
              <div className="resume-template__main-marker" />
              <div className="resume-template__main-icon">
                <Briefcase size={12} className="text-gray-700" />
              </div>
              <h3 className="resume-template__main-title">Work Experience</h3>
              <div className="resume-template__main-list">
                {work.length > 0 ? (
                  work.map((item, i) => (
                    <div key={i} className="resume-template__main-item resume-template__main-item--row">
                      <div>
                        <span className="font-semibold">{item.jobTitle || item.position}</span>
                        {(item.companyName || item.company) && <span> — {item.companyName || item.company}</span>}
                      </div>
                      {item.duration && <span className="text-sm text-gray-600 shrink-0">{item.duration}</span>}
                    </div>
                  ))
                ) : (
                  <p className="resume-template__placeholder">—</p>
                )}
              </div>
            </div>

            {/* Education */}
            <div className="resume-template__main-section">
              <div className="resume-template__main-marker" />
              <div className="resume-template__main-icon">
                <GraduationCap size={12} className="text-gray-700" />
              </div>
              <h3 className="resume-template__main-title">Education</h3>
              <div className="resume-template__main-list">
                {education.length > 0 ? (
                  education.map((item, i) => (
                    <div key={i} className="resume-template__main-item resume-template__main-item--row">
                      <div>
                        <span className="font-semibold">{item.levelOfEducation || item.degree}</span>
                        {item.institution && <span> — {item.institution}</span>}
                      </div>
                      {(item.passingYear || item.year) && <span className="text-sm text-gray-600 shrink-0">{item.passingYear || item.year}</span>}
                    </div>
                  ))
                ) : (
                  <p className="resume-template__placeholder">—</p>
                )}
              </div>
            </div>

            {/* Areas of expertise */}
            <div className="resume-template__main-section">
              <div className="resume-template__main-marker" />
              <div className="resume-template__main-icon">
                <UserCheck size={12} className="text-gray-700" />
              </div>
              <h3 className="resume-template__main-title">Areas of expertise</h3>
              <div className="resume-template__main-list">
                {expertise.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {expertise.map((item, i) => (
                      <span key={i} className="resume-template__tag">{item}</span>
                    ))}
                  </div>
                ) : (
                  <p className="resume-template__placeholder">—</p>
                )}
              </div>
            </div>

            {/* Language */}
            <div className="resume-template__main-section">
              <div className="resume-template__main-marker" />
              <div className="resume-template__main-icon">
                <Languages size={12} className="text-gray-700" />
              </div>
              <h3 className="resume-template__main-title">Language</h3>
              <div className="resume-template__main-list">
                {language.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {language.map((item, i) => (
                      <span key={i} className="resume-template__tag">
                        {typeof item === "string"
                          ? item
                          : [item.language, item.proficiency].filter(Boolean).join(" – ")}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="resume-template__placeholder">—</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrangeBlackTemplate;
