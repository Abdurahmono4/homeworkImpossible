import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

export function useLogin() {
  const dispatch = useDispatch();
  const signin = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
        dispatch(login({ email: data.email, password: data.password }));
      })
      .catch((e) => {
        alert(e.message);
        console.log(e.message);
      });
  };

  return { signin };
}
