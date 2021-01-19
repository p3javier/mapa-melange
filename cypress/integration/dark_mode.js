describe("Dark Mode Theme", () => {
  it("changes background color to rgb(48, 48, 48)", () => {
    cy.visit("/")
      .get(".PrivateSwitchBase-input-14")
      .click()
      .get("body")
      .should("have.css", "background-color", "rgb(48, 48, 48)");
  });
});
