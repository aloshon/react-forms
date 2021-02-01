import React from "react";
import {render, fireEvent} from "@testing-library/react";
import TodoList from "./TodoList";

it("renders successfully", function (){
    render(<TodoList/>);
});

it("matches snapshot", function (){
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new item", function (){
    const {queryByText, getByLabelText} = render(<TodoList/>);
    const input = getByLabelText("Task");
    const btn = queryByText("Add Todo!");

    expect(queryByText('Walk Dogs')).not.toBeInTheDocument();

    fireEvent.change(input, {target: {value: 'Walk Dogs'}});
    fireEvent.click(btn);

    expect(queryByText('Walk Dogs')).toBeInTheDocument();
});