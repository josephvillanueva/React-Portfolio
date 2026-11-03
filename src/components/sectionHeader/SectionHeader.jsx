import "./sectionHeader.css";

// One heading pattern for every section: a short eyebrow, the title, and an
// optional one-line lead. `as` is h2 for a section and h3 for a sub-section.
const SectionHeader = ({ eyebrow, title, lead, id, as: Heading = "h2" }) => (
  <div className="section_header">
    <p className="section_eyebrow">{eyebrow}</p>
    <Heading id={id}>{title}</Heading>
    {lead && <p className="section_lead">{lead}</p>}
  </div>
);

export default SectionHeader;
