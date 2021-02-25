import React, { FunctionComponent, useState } from "react"; // importing FunctionComponent
import { useQuery } from "react-query";
import { leadService } from "infraestructure/services";
import { Card, Loader } from "application/components";
import { useListLeadBussinessLogic } from "./listLeadHook";
import { IClient } from "application/types";

const ListLead: FunctionComponent = () => {
  const { data: leadList, isLoading } = useQuery(
    "products",
    leadService.getAll,
    {
      retry: 1,
      retryDelay: 3000,
    }
  );
  const { validLeadRecords, loading } = useListLeadBussinessLogic();

  return (
    <section>
      <h1>List of qualified lead</h1>
      {loading && <Loader text={loading} />}
      {!isLoading &&
        leadList?.map((lead: IClient) => (
          <Card
            record={lead}
            btnAction={() => validLeadRecords(lead.id)}
            btnText="Validar lead"
            key={lead.id}
          />
        ))}
    </section>
  );
};

export default ListLead;
