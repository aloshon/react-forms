import React from "react";
import {render, fireEvent} from "@testing-library/react";
import BoxList from "./BoxList";

it("renders successfully", function (){
    render(<BoxList/>);
});

it("matches snapshot", function (){
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("should add a new Box", function() {
    // Checks to see if remove button is on DOM, if so then the box is rendered

    const { getByLabelText, queryByText, container } = render(<BoxList />);
    const colorInput = getByLabelText("Color");
    const heightInput= getByLabelText("Height");
    const widthInput = getByLabelText("Width");
    fireEvent.change(colorInput, { target: { value: "blue" } });
    fireEvent.change(widthInput, { target: { value: 100 } });
    fireEvent.change(heightInput, { target: { value: 100 } });
    const button = queryByText("Add Box!");
    fireEvent.click(button);

    const removeBtn = queryByText("X");
    expect(removeBtn).toBeInTheDocument();
  });