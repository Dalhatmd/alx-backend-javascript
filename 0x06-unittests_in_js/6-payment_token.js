function getPaymentTokenFromApi(success) {
  if (success) {
    return new Promise((resolve, reject) => {
      resolve({ data: 'Successful response from the API' });
    });
  }
}

module.exports = getPaymentTokenFromApi;
