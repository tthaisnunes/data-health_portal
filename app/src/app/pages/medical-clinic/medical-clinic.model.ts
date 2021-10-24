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
  statusExam?: string;
}

export interface MedicalRecords {
  id: number;
  date: Date;
  description: string;
  data: string;
  userId: number;
}
export interface Exams {
  id: number;
  date: Date;
  description: string;
  userId: number;
  status: string;
  statusColor: string;
  imageUrl?: string;
}
export interface MedicalPrescriptions {
  id: number;
  date: Date;
  description: string;
  data: string;
  userId: number;
}

export interface MCExam {
  id: number,
  userId: number,
  requestedDate: Date,
  scheduledDate: Date,
  description: string,
  guia: string,
  result: string,
  statusColor: string,
  status: string,
  action?: string
}