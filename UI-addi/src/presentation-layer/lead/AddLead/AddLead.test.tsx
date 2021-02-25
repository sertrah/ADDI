import React, { FC } from "react";
import AddLeadForm from "./AddLeadForm";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { NotificationProvider } from "application/contexts";
import userEvent from "@testing-library/user-event";

let mockSave: any;
describe("Contact tests", () => {
  beforeEach(() => {
    const queryClient = new QueryClient();
    mockSave = jest.fn();
    render(
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <AddLeadForm handleSubmitForm={mockSave} />
        </NotificationProvider>
      </QueryClientProvider>
    );
  });

  it("should render the basic fields", () => {
    expect(screen.getByText(/Name*/)).toBeInTheDocument();
    expect(screen.getByText(/last name*/)).toBeInTheDocument();
    expect(screen.getByText(/Email*/)).toBeInTheDocument();
    expect(screen.getByText(/Birth date*/)).toBeInTheDocument();
    expect(
      screen.getByText(/National Identification Number*/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("Expect form button is disabled", function () {
    const button = screen.getByRole("button", { name: /Submit/i });
    expect(button).toBeDisabled();
  });

  it("The form must work correctly :D", async () => {
    fireEvent.input(screen.getByLabelText("name"), {
      target: {
        value: "name",
      },
    });
    fireEvent.input(screen.getByLabelText("lastName"), {
      target: {
        value: "last name",
      },
    });
    fireEvent.input(screen.getByLabelText("email"), {
      target: {
        value: "email@gmail.com",
      },
    });
    fireEvent.input(screen.getByLabelText("birthdate"), {
      target: {
        value: "2/3/2020",
      },
    });
    fireEvent.input(screen.getByLabelText("nationalId"), {
      target: {
        value: "asdasdasd",
      },
    });
    const button = screen.getByRole("button", { name: /Submit/i });
    expect(button).toBeEnabled();
    userEvent.click(button);
    await waitFor(() =>
      expect(mockSave).toBeCalled()
    );
  });
});
