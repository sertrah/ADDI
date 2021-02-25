import React from "react";
import { render, screen } from "@testing-library/react";
import ListLead from "./ListLead";
import { QueryClientProvider, QueryClient } from "react-query";
import { NotificationProvider } from "application/contexts";

const queryClient = new QueryClient();

test("renders Home title", () => {
  const component = render(
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <ListLead />
      </NotificationProvider>
    </QueryClientProvider>
  );
  expect(component.container).toMatchSnapshot();
});
