import { userReducer } from '../utils/reducers';
import {
   UPDATE_USERNAME,
   UPDATE_PASSWORD,
   UPDATE_EMAIL
} from '../utils/actions';
let initialState = {
   username: "",
   email: "",
   password: "",
   _id: "",
   lists: [],
   buckets: [],
   token: ""
}
test('UPDATE_USERNAME', () => {
   let newState = userReducer(initialState, {
      type: UPDATE_USERNAME,
      username: "testuser 1"
   });

   expect(initialState.username).toBe('');
   expect(newState.username).toBe("testuser 1");
});
test('UPDATE_EMAIL', () => {
   let newState = userReducer(initialState, {
      type: UPDATE_EMAIL,
      email: "test@asdfa.com"
   });

   expect(initialState.email).toBe('');
   expect(newState.email).toBe("test@asdfa.com");
});
test('UPDATE_PASSWORD', () => {
   let newState = userReducer(initialState, {
      type: UPDATE_PASSWORD,
      password: "MYPASSWORD"
   });

   expect(initialState.password).toBe('');
   expect(newState.password).toBe("MYPASSWORD");
});