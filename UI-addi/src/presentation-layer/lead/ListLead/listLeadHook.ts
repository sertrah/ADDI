import React, { useState } from "react";
import { useNotification } from "application/hooks";
import { commonService, leadService } from "infraestructure/services";
import { useMutation, useQueryClient   } from "react-query";

export const useListLeadBussinessLogic = () => {
  const notify = useNotification();
  const queryClient = useQueryClient()
  const [loading, setLoading] = useState("");
  const { mutate: updateLead } = useMutation(leadService.update, {
    onSuccess: () => {
      notify.success({
        title: "Lead",
        message: "In good time, this lead was updated",
      });
      queryClient.refetchQueries()
    },
    onError: (error) => {
      notify.error({
        title: "Lead",
        message: error,
      });
    },
  });


  const checkLeadScore = (id: string) => {
    setLoading("Obteniendo score");
    commonService.getScoreById(id).then(({ score }) => {
      setLoading("");
      if (score >= 60) {
        updateLead({id, type: "prospect"})
      } else {
        notify.error({
          title: "Lead",
          message: `"Ups... su puntaje fue de ${score}, no paso el minimo`,
        });
      }
    });
  };

  const validLeadRecords = (id: string) => {
    setLoading("Verificando datos");
    Promise.all([
      commonService.validJudicialRecordsByID(id),
      commonService.validNationalRegistryByID(id),
    ]).then((responses) => {
      if (responses.every((x) => x.isValid)) {
        checkLeadScore(id);
      } else {
        setLoading("");
        notify.error({
          title: "Lead",
          message: "Ups... este lead parece tener algo sospechoso.",
        });
      }
    });
  };
  return { validLeadRecords, loading };
};
