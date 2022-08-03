import firebase from "firebase";
let db = firebase.firestore(firebase.app());

const addUserInFirestore = async (user) => {
  let res = await db.collection("users").add(user);
  return res;
};

const getUserFromFirestoreById = async (uid) => {
  let res = await db.collection("users").where("uid", "==", uid).get();
  console.log("--------------");
  console.log(res.docs[0].get("uid"));
};

export { addUserInFirestore, getUserFromFirestoreById };
