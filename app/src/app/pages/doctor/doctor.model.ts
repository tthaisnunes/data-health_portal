export interface PacientData {
  id: number;
  name: string;
  sex: string;
  age: number;
  status: string;
  statusColor: string;
  height: number;
  weight: number;
  email: string;
  phone: string;
  cellPhone: string;
  zipCode: string;
  street: string;
  streetNumber: number;
  complement: string;
  neighborhood: string;
  state: string;
  city: string;
  notes: string;
}

export interface MedicalRecords {
  id: number;
  date: Date;
  description: string;
  data: string;
  userId: number;
}
