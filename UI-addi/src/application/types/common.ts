type IClient = {
  name: string;
  lastName: string;
  birthDate?: string;
  email?: string;
  createdAt?: string;
  nationalId?: string;
  updatedAt?: string;
  id: string;
};
interface IFormAddLeadInput {
  name: string;
  lastName: string;
  email: string;
  nationalId: string;
  birthdate: string;
}
export type { IClient, IFormAddLeadInput };
