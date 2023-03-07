describe('connect wallet spec', () => {
  before(() => {
    cy.visit('/');
  });

  it('should connect wallet with success', () => {
    cy.get('#connectButton').click();
    cy.acceptMetamaskAccess();
    cy.get('#accounts').should(
      'have.text',
      '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    );
  });

  it('import private key and connect wallet using imported metamask account', () => {
    cy.disconnectMetamaskWalletFromAllDapps();
    cy.importMetamaskAccount(
      '0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97',
    );
    cy.get('#connectButton').click();
    cy.acceptMetamaskAccess();
    cy.get('#accounts').should(
      'have.text',
      '0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f',
    );
  });
});
