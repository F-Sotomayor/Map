import { auth, database, providers } from "./firebase";

// Sign In with Google on new window
export default {
  auth: {
    signIn: () => auth.signInWithPopup(providers.google),
    signOut: () => auth.signOut(),
    onChange: (callback) => auth.onAuthStateChanged(callback),
  },
  // Push registry to database
  registries: {
    add: (registry) => database.collection("registries").add(registry),
    list: () =>
      database
        .collection("registries")
        .get()
        .then((snapshot) =>
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        ),
  },
};
