import { firestore } from "../configs/firebase";

export const interceptor = async (req, res, next) => {
  const { email } = req.body;
  try {
    await firestore
      .collection("mkm-comming")
      .where("email", "==", email)
      .get()
      .then(async (doc) => {
        doc.docs.map((isEmail) => {
          if (isEmail.exists == true) {
            return res.json({refused_msg: 'The email already exist!'});
          } 
        });
      });

   next()
  } catch (error) {
    return res.json(error);
  }
};
