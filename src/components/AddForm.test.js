import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddForm from "./AddForm";

test("Form component renders with no error", () => {
  render(<AddForm />);
});

test("Form can be filled and submitted", () => {
  render(<AddForm />);

  //Grab inputs

  const name = screen.getByLabelText("Name:");
  const nickname = screen.getByLabelText(/nickname:/i);
  const position = screen.getByLabelText(/position:/i);
  const description = screen.getByLabelText(/description:/i);
  const button = screen.getByRole("button");

  // input the test text to the fields

  userEvent.click(name);
  userEvent.type(name, "Patrice Jean");
  userEvent.tab();
  userEvent.type(nickname, "PAPA");
  userEvent.tab();
  userEvent.type(position, "Hustle");
  userEvent.tab();
  userEvent.type(
    description,
    "Can you SSSSMMMMEEEELLLLLLLLL WHAT THE ROCK IS COOOOOOOOKING !!!!!!!!!!!!!!!!!!!!!!!!!!"
  );

  // check make sure what is inputed is there

  expect(name).toHaveValue("Patrice Jean");
  expect(nickname).toHaveValue("PAPA");
  expect(position).toHaveValue("Hustle");
  expect(description).toHaveValue(
    "Can you SSSSMMMMEEEELLLLLLLLL WHAT THE ROCK IS COOOOOOOOKING !!!!!!!!!!!!!!!!!!!!!!!!!!"
  );
  userEvent.click(button);
});
