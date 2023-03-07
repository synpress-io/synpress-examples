describe("connect wallet spec", () => {
  before(() => {
    cy.visit("/");
  });
  it("should connect wallet with success", () => {
    cy.get("#connectButton").click();
    cy.acceptMetamaskAccess();
    cy.get("#accounts").should(
      "have.text",
      "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
    );
  });
});
