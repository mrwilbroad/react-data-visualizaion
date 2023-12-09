import staffsDataset from "../../Data/datasets.json";
import type { staffstype } from "../../types/staffs";

const staffsAvailable: staffstype[] = staffsDataset;
const YearOfStaffs = new Set(staffsAvailable.map((e) => e.year));

export const YearLabel = [...YearOfStaffs].sort();
