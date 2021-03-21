export interface IStation {
  empty_slots: number;
  extra: {
    bike_uids?: string[];
    number?: string;
    slots: number;
    installDate?: string;
    installed?: boolean;
    locked?: boolean;
    name?: string;
    removalDate?: string;
    temperature?: boolean;
    terminalName?: string;
    uid: string | number;
  };
  free_bikes: number;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  timestamp: string;
}
