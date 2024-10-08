import {createUser, uploadPhoto} from './utils.js'

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
        console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
  .catch(() => {
    console.error("Signup system offline");
  });
}
