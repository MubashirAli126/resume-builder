import OrangeBlackTemplate from "./OrangeBlackTemplate";
import BlueTemplate from "./BlueTemplate";
import TealTemplate from "./TealTemplate";

import "./OrangeBlackTemplate.css";
import "./BlueTemplate.css";
import "./TealTemplate.css";

export const TEMPLATES = {
  orangeBlack: OrangeBlackTemplate,
  blue: BlueTemplate,
  teal: TealTemplate
};

const TEMPLATE_ID_MAP = {
  template2: "blue",
  template3: "teal"
};

export const TemplateRenderer = ({ templateId, resumeData }) => {
  const resolvedId = TEMPLATE_ID_MAP[templateId] || templateId;
  const Template = TEMPLATES[resolvedId] || OrangeBlackTemplate;
  return <Template resumeData={resumeData} />;
};
