describe('Meu teste Meta', () => {
  const clientId = '67823c6d-58de-494f-96d9-86a4c22682cb'
  const clientSecret = 'c2d6a06f-5f31-448b-9079-7e170e8536e4'
  const credentials = `${clientId}:${clientSecret}`;
  const base64Credentials = btoa(credentials);
  const apiUrl = 'https://api-homologacao.getnet.com.br/auth/oauth/v2/token'


  it('Deve autenticar e retornar status 200 ', () => {
    cy.request({
      method: 'POST',
      url: api Url, 
           
      body: {
        scope: 'oob',
        grant_type: 'client_credentials'
      },

      headers: {
      'content-type' : 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${base64Credentials}`
    }
      
  }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('access_token');
  });
  
    });
it('Deve retornar status 400 de erro', () => {
    cy.request({
      method: 'POST',
      url: apiUrl,
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400); 
      expect(response.body).to.have.property('error');
})
}
)},
)