import { render } from "../../src/test-utils/testing-library-utils";
import { screen, waitFor } from "@testing-library/react";
import FormFirstStep from "../../src/components/FormFirstStep/FormFirstStep";
import userEvent from "@testing-library/user-event";
import { TestService } from "../../src/test-utils/services/TestService";

jest.mock("../../src/test-utils/services/TestService");
const mockTestService = jest.mocked(TestService);
const user = userEvent.setup();

describe("FormFirstStep", () => {
  const firstName = "batuhan";
  const age = "18";

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
});
describe("FormFirstStep fails", () => {
  beforeEach(() => {
    render(<FormFirstStep />);
  });

  test("with 2 required fields ", async () => {
    await user.click(getNextButton());
    await waitFor(() => {
      expect(
        screen.getByText(/Your First Name is required/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Must be at least 18 years old to continue/i)
      ).toBeInTheDocument();
    });
  });
  test("if first name is not provided", async () => {
    await user.type(getAge(), "18");
    await user.click(getNextButton());
    await waitFor(() => {
      expect(
        screen.getByText(/Your First Name is required/i)
      ).toBeInTheDocument();
    });
  });
  test("if age is not provided", async () => {
    await user.type(getFirstName(), "longmont");
    await user.click(getNextButton());
    await waitFor(() => {
      expect(
        screen.getByText(/Must be at least 18 years old to continue/i)
      ).toBeInTheDocument();
    });
  });
  test("if first name has numbers in it", async () => {
    await user.type(getFirstName(), "1221longmont");
    await user.click(getNextButton());
    await waitFor(() => {
      expect(
        screen.getByText(/First name should not contain numbers/i)
      ).toBeInTheDocument();
    });
  });
  test("if first name is too short", async () => {
    await user.type(getFirstName(), "on");
    await user.click(getNextButton());
    await waitFor(() => {
      expect(
        screen.getByText(/must be at lest 3 characters long/i)
      ).toBeInTheDocument();
    });
  });
  test("if first name is too long", async () => {
    await user.type(getFirstName(), "longmontlongmontlongmontlongmont");
    await user.click(getNextButton());
    await waitFor(() => {
      expect(
        screen.getByText(/Must be 15 characters at the most/i)
      ).toBeInTheDocument();
    });
  });
  test("if age is not provided", async () => {
    await user.type(getFirstName(), "longmont");
    await user.click(getNextButton());
    await waitFor(() => {
      expect(
        screen.getByText(/Must be at least 18 years old to continue/i)
      ).toBeInTheDocument();
    });
  });
  test("if more details is checked but interests is not provided", async () => {
    await user.click(screen.getByRole("checkbox", { name: /more details/i }));
    await user.click(getNextButton());
    await waitFor(() => {
      expect(
        screen.getByText(/This field is required if more details is checked/i)
      ).toBeInTheDocument();
    });
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
