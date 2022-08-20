import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";
import { signInWithGoogle } from "../firebase/providers";
import { useStorage } from "@vueuse/core";
import _ from "lodash";

type Status = "not-authenticated" | "authenticated";
type User = {
  displayName: string;
  uid: string;
  photoURL: string;
  email: string;
};
const LOCAL_KEY_USERS = "u$3r$";
const LOCAL_KEY_USER = "u$3r";

const INITIAL_VALUE_USER = {
  uid: null,
};

type DefaultUser = typeof INITIAL_VALUE_USER;

export const useAuthStore = defineStore("auth", () => {
  const user = useStorage<User | DefaultUser>(
    LOCAL_KEY_USER,
    INITIAL_VALUE_USER,
    localStorage
  );
  const isAuth: Status = user.value.uid ? "authenticated" : "not-authenticated";
  const status = ref<Status>(isAuth);
  const users = useStorage<User[]>(LOCAL_KEY_USERS, [], localStorage);

  const signIn = async () => {
    const { success, ...googleUser } = await signInWithGoogle();
    if (success) {
      user.value = googleUser as User;
      status.value = "authenticated";
      users.value = users.value
        .filter((u) => u.uid !== googleUser?.uid)
        .concat(googleUser as User);
    } else {
      user.value = INITIAL_VALUE_USER;
      status.value = "not-authenticated";
    }
  };

  const signInFromBrowser = (uid: string) => {
    const signedUser = users.value.find((user) => user.uid === uid);
    if (signedUser) {
      user.value = signedUser;
      status.value = "authenticated";
    } else {
      user.value = undefined;
      status.value = "not-authenticated";
    }
  };

  return {
    user,
    status,
    users,

    signIn,
    signInFromBrowser,
  };
});
