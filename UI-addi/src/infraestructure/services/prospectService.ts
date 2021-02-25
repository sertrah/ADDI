import { api } from "infraestructure/helpers";
import { IClient } from "application/types";

const leadPath = "client"

function getAll(): Promise<IClient[]> {
  return api.get(`${leadPath}/prospect`) ;
}

export const prospectService = {
  getAll,
};
