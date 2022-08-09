import { openDB, deleteDB, wrap, unwrap } from "idb";

export function openDatabase() {
  // creates the database
  openDB("commentDB", 1, {
    upgrade(db) {
      //creates the object store
      db.createObjectStore("comments", {
        // increments the key id
        autoIncrement: true,
      });
    },
  });
}

export async function postComments(name, email, comment) {
  const db = await openDB("commentDB", 1);
  db.add("comments", { name: name, email: email, comment: comment });
  db.close;
}

export async function getComments(result) {
  const db = await openDB("commentDB", 1);
  db.getAll("comments").then((res) => {
    console.log(res);
    for (let i = 0; i < res.length; i++) {
      const component = document.createElement("comment-com");
      component.setAttribute("name", res[i].name);
      component.setAttribute("email", res[i].email);
      component.setAttribute("comment", res[i].comment);

      result.append(component);
    }
  });
  db.close();
}

export async function clearComments() {
  const db = await openDB("commentDB", 1);
  db.clear("comments");
  db.close();
}
