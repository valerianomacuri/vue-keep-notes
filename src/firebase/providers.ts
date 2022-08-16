import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { FirebaseAuth } from ".";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = user;
    return {
      success: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
    };
  }
};
