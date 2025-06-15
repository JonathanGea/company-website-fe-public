export interface Employee {
  name: string;
  position: string;
  photoUrl: string;
  department?: string;
  subordinates?: Employee[];
}