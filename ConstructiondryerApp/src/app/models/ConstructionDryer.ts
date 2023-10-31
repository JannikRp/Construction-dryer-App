import { DryerLocation } from "./DryerLocation";

export interface ConstructionDryer {
  ID: string;
  ConstructionProject: string;
  CostCenter: string;
  Tenant: string;
  Location: DryerLocation;
  Counter: string;
  GPS: string;
}
