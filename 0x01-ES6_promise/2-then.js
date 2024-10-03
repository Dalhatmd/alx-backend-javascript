export default function handleResponseFromAPI(promise) {
  return promise
    .then((result) => {
      return {"status": 200, "body": "success"};
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Got a response from the API");
    });
}