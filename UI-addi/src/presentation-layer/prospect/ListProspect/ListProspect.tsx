import React, { FunctionComponent, useState } from "react"; // importing FunctionComponent
import { useQuery } from "react-query";
import { prospectService } from "infraestructure/services";
import { Card, Loader } from "application/components";

type ILead = {
  name: string;
  lastName: string;
  birthDate?: string;
  email?: string;
  createdAt?: string;
  nationalId?: string;
  updatedAt?: string;
  id: string;
};
const AddQualified: FunctionComponent = () => {
  const { data: leadList, isLoading } = useQuery(
    "prospects",
    prospectService.getAll,
    {
      retry: 1,
      retryDelay: 3000,
    }
  );

  return (
    <section>
      <h1>List of prospects</h1>
      {isLoading && <Loader />}
      {!isLoading &&
        leadList?.map((lead: ILead) => (
          <Card
            record={lead}
            key={lead.id}
          />
        ))}
    </section>
  );
};

export default AddQualified;
