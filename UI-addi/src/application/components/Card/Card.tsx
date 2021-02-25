import React, { FunctionComponent } from "react";
import { Button } from "application/components";

type ILead = {
  name: string;
  lastName: string;
  birthDate?: string;
  email?: string;
  createdAt?: string;
  nationalId?: string;
  updatedAt?: string;
  id?: string;
};
type CardProps = {
  record: ILead;
  btnAction?: () => void;
  btnText?: string;
};

const Card: FunctionComponent<CardProps> = ({ record, btnAction, btnText }) => (
  <div className="card">
    <div className="card-info">
      <h3>
        {record.name} {record.lastName}
      </h3>
      <p>BirthDay: {record.birthDate}</p>
      <p>National ID: {record.nationalId}</p>
      <p>Email: {record.email}</p>
    </div>
    <div className="card-action">
      {btnAction && (
        <Button className="btn" onClick={() => btnAction()} primary>
          {btnText}
        </Button>
      )}
    </div>
  </div>
);

export default Card;
