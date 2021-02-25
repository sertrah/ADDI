import { api } from "infraestructure/helpers";

const leadPath = "external";

const validNationalRegistryByID = (id: string) => {
  return api.get(`${leadPath}/nationalRegistry/${id}`);
};

const validJudicialRecordsByID = (id: string) => {
  return api.get(`${leadPath}/judicialRecord/${id}`);
};

const getScoreById = (id: string) => {
  return api.get(`${leadPath}/score/${id}`);
};

export const commonService = {
  validNationalRegistryByID,
  validJudicialRecordsByID,
  getScoreById,
};
