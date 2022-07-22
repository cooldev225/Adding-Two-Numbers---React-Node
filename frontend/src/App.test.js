import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import AddTwoNumbers from "./components/AddTwoNumbers";
import axios from "axios";

jest.mock("axios");

describe("AddTwoNumbers", () => {
  test("validation test - error message should be displayed", async () => {
    render(<AddTwoNumbers />);
    const inputBox = screen.getAllByPlaceholderText("First Number")[0];
    await fireEvent.change(inputBox, { target: { value: "123a" } });
    expect(inputBox.value).toBe("123a");
    const errorMsg = screen.getByText("Insert correct numbers!");
    expect(errorMsg.className).toBe("error");
  });
  
  test("api call test - the result(30) should be returned and displayed", async () => {
    render(<AddTwoNumbers />);
    axios.post.mockResolvedValueOnce({
      data: {
        result: 30,
      },
    });
    const btn = screen.getAllByRole("button")[0];
    await act(async () => {
      await fireEvent.click(btn);
    });
    const result = document.getElementsByClassName("result-value")[0];
    expect(result.innerHTML).toBe("30");
  });
});
