import { api } from "infraestructure/helpers";
import { IFormAddLeadInput } from "application/types";
import { IClient } from "application/types";

const leadPath = "client"

const  getAll = (): Promise<IClient[]> => {
  return api.get(`${leadPath}/lead`) ;
}

const save  = (body: IFormAddLeadInput) =>{
  return api.post(leadPath, body) ;
}

const update  = ({id, ...body}: {id: string, type: string}) =>{
  return api.put(`${leadPath}/${id}`, body) ;
}

export const leadService = {
  getAll,
  save,
  update,
};
