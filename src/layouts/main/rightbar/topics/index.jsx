import Topic from "./topic";
import { topics } from "../../../../utils/consts";

import SidebarSection from "../../../../components/siderbar-section";

export default function Topics() {
  return (
    <SidebarSection title="İlgini çekebilecek gündemler" more="/trends">
      {topics.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
    </SidebarSection>
  );
}
