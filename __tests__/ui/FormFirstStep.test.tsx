import { render } from "../../src/test-utils/testing-library-utils";
import { screen, waitFor } from "@testing-library/react";
import FormFirstStep from "../../src/components/FormFirstStep/FormFirstStep";
import userEvent from "@testing-library/user-event";
import { TestService } from "../../src/test-utils/services/TestService";

jest.mock("../../src/test-utils/services/TestService");
const mockTestService = jest.mocked(TestService);

describe("FormFirstStep", () => {
  const firstName = "batuhan";
  const age = "18";
  const user = userEvent.setup();
  beforeEach(() => {
    render(<FormFirstStep />);
  });

  test("Required fields are in document", () => {
    expect(
      screen.getByRole("textbox", { name: /first name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /last name/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /age/i })).toBeInTheDocument();
  });

  test("onSubmit is called when all fields pass validation", async () => {
    await user.type(getFirstName(), firstName);
    await user.type(getAge(), age);
    await user.click(getNextButton());

    await waitFor(async () => {
      expect(mockTestService.testSubmit).toHaveBeenCalledTimes(1);
      expect(mockTestService.testSubmit).toHaveBeenCalledWith({
        firstName,
        age: 18,
        email: "",
        gender: "female",
        interests: "",
        lastName: "",
        millionare: false,
        moreDetail: false,
      });
    });
  });
  test("has 2 required fields on first step", async () => {
    await user.click(getNextButton());
    // await waitFor(() => {
    //   expect(getFirstName()).toHaveErrorMessage("Your First Name is required");
    // //   expect(getAge()).toHaveErrorMessage("Age is required");
    // });
    expect(getFirstName()).toHaveErrorMessage("Your First Name is required");
    expect(getAge()).toHaveErrorMessage("Age is required");
  });
});

function getFirstName() {
  return screen.getByRole("textbox", { name: /first name/i });
}
function getAge() {
  return screen.getByRole("textbox", { name: /age/i });
}
function getNextButton() {
  return screen.getByRole("button", { name: /next/i });
}
