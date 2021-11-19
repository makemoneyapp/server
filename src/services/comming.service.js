import { firestore } from "../configs/firebase";

export const saveEmail = async (req, res) => {
  const { email } = req.body;
  try {
    firestore.collection("mkm-comming").add({
      email,
    });
    return res.json({ success_msg: "Your email has been save successfuly" });
  } catch (error) {
    return res.json(error);
  }
};
