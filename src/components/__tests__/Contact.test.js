const { render, screen } = require("@testing-library/react");
const { default: Contact } = require("../Contact");
import "@testing-library/jest-dom";

test("Should load contact us page", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
