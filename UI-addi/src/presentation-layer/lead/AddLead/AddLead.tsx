import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { useHistory } from "react-router-dom";
import AddLeadForm from "./AddLeadForm";
import { useNotification } from "application/hooks";
import { useMutation } from "react-query";
import { leadService } from "infraestructure/services";
import { ROUTER_PATH_LIST } from "application/constants";
import { Loader } from "application/components";
import { IFormAddLeadInput } from "application/types";

import "./addlead.scss";

const AddLead: FunctionComponent = () => {
  const history = useHistory();
  const notify = useNotification();

  const { mutate: saveLead, isLoading } = useMutation(leadService.save, {
    onSuccess: () => {
      notify.success({
        title: "Lead",
        message: "In good time, we will contact you soon",
      });
      setTimeout(() => {
        history.push(ROUTER_PATH_LIST.leads);
      }, 2000);
    },
    onError: (error) => {
      notify.success({
        title: "Lead",
        message: error,
      });
    },
  });

  const handleSubmit = (body: IFormAddLeadInput, fn: ()=> void) => {
    saveLead(body, {onSettled: ()=> {
      fn()
    }});
  };
  return (
    <section className="addlead--container">
      {isLoading && <Loader/> }
      <AddLeadForm handleSubmitForm={handleSubmit} disabled={isLoading} />
    </section>
  );
};

export default AddLead;
