import { render, screen } from "@testing-library/react";
import { ListComponent } from "./ListComponent";
import "@testing-library/jest-dom";

describe("List Component", () => {
  test("ListComponent should render with props", () => {
    const headerText = "My Header";
    const valuesArray = ["Value 1", "Value 2", "Value 3"];
    render(<ListComponent header={headerText} values={valuesArray} />);

    expect(screen.getByText(headerText)).toBeInTheDocument();

    valuesArray.forEach((val) => {
      expect(screen.getByText(val)).toBeInTheDocument();
    });
  });
});
