import React, { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { InputText, Button } from "application/components";
import { IFormAddLeadInput } from "application/types";

const formSchema = object().shape({
  name: string()
    .max(255, "Must be exactly 255 digits")
    .required("Please write down your first name"),
  lastName: string()
    .max(255, "Must be exactly 255 digits")
    .required("Please write down your last name"),
  email: string()
    .max(255, "Must be exactly 255 digits")
    .email("Invalid email")
    .required("Don’t forget to tell us what your email address is"),
  nationalId: string()
    .max(500, "Must be exactly 255 digits")
    .required("Don’t forget to write something to use!"),
  birthdate: string()
    .max(500, "Must be exactly 255 digits")
    .required("Don’t forget to write something to use!"),
});

const defaultValues = {
  name: "",
  lastName: "",
  email: "",
  nationalId: "",
  birthdate: "",
};

type AddLeadFormProps = {
  handleSubmitForm: (a: IFormAddLeadInput, reset: (value?: IFormAddLeadInput) => void) => void;
  disabled?: boolean;
};

const AddLeadForm: FC<AddLeadFormProps> = ({ handleSubmitForm, disabled }) => {
  const {
    control,
    handleSubmit,
    errors: formErrors,
    formState: { dirtyFields },
    reset,
  } = useForm<IFormAddLeadInput>({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit((data: IFormAddLeadInput)=> handleSubmitForm(data, reset))}>
      <InputText
        id="name"
        label="Name*"
        control={control}
        errors={formErrors}
      />
      <InputText
        id="lastName"
        label="last name*"
        control={control}
        errors={formErrors}
      />
      <InputText
        id="email"
        label="Email*"
        type="email"
        control={control}
        errors={formErrors}
      />
      <InputText
        id="birthdate"
        label="Birth date*"
        control={control}
        errors={formErrors}
      />
      <InputText
        id="nationalId"
        label="National Identification Number*"
        control={control}
        errors={formErrors}
      />
      <Button
        id="form-button"
        type="submit"
        primary
        disabled={Object.entries(dirtyFields).length < 4 || disabled}
      >
        Submit
      </Button>
    </form>
  );
};

export default AddLeadForm;
