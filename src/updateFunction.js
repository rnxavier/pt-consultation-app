import { db } from "./Firebase";

export const handleUpdate = ({ updatedHeight, id }) => {
  db.collection("clients")
    .doc(id)
    .set(
      {
        height: updatedHeight,
      },
      {
        merge: true,
      }
    )
    .then(() => {
      console.log("Document updated successfully!");
    })
    .catch((err) => {
      console.log("An error occurred while updating the document");
      console.log(err.message);
    });
};
