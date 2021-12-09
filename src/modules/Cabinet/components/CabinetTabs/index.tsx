import { CabinetTab } from "components";
import { Tabs } from "./styles";

export function CabinetTabs () {
  return (
    <Tabs>
      <CabinetTab text="Patients" />
      <CabinetTab text="Resolutions" />
    </Tabs>
  );
}
