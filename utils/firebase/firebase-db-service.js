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

const createThreadId = (sender, receiver) => {
  if (sender.length < receiver.length) {
    return sender + receiver;
  } else {
    return receiver + sender;
  }
};

const createChatRoom = async (sender, receiver, message) => {
  let threadPath = createThreadId(sender, receiver);
  console.log(threadPath);
  let chats = db.collection("/messages");
  chats.add({
    sender: sender,
    receiver: receiver,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    uid: sender,
    text: message,
  });
};

export { addUserInFirestore, getUserFromFirestoreById, createChatRoom };
