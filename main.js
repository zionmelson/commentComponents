import "./style.css";
import {
  getComments,
  openDatabase,
  postComments,
  clearComments,
} from "./js/indexedDB";
import Comment from "./js/comment";

document.querySelector("#app").innerHTML = `
  <div>
   <section>
    <h1>Enter a comment</h1>
   </section>
   <section>
      <form>
        <div class="formDiv">
          <label for="name">Name</label>
          <br>
          <input type="text" name="name" id="name" autocomplete="on" placeholder="Enter name..." required />
        </div>
        <div class="formDiv">
          <label for="email">Email</label>
          <br>
          <input type="email" name="email" id="email" autocomplete="on" placeholder="Enter email..." required />
        </div>
        <div class="formDiv">
          <label for="comment">Comment</label>
          <br>
          <textarea name="comment" id="comment" cols="30" rows="5" placeholder="Enter comment..." required ></textarea>
        </div>
        <span><input type="checkbox" id="checkbox" name="checkbox" value="checked" required>
        </span><label id="agree">Agree to share info</label>
        <br><br>
        <button type="submit" id="submit">Submit</button>
        <button id="reset">Reset</button>
        <div id="results-field">
        </div>
      </form>
   </section>
  </div>

  <template id="template">
    <style>
      #comment-output {
        font-weight: bold;
        color: #FFFFda;
        width: 50vw;
        height: 25vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 1rem;
        align-items: center;
        border-style: solid;
        border-radius: 1rem;
        border-width: 5px;
        border-color: #000000;
        background-image: linear-gradient(135deg, #00002a, #FFFFF1);
      }
      
      #top {
        background: black;
        border-radius: .5rem .5rem 0rem 0rem;
        height: 10vh;
        width: 100%;
        padding-top: 10px;
      }
      #little {
        font-size: 10px;
      }

    </style>
    <div id="container">
      <div id="comment-output">
        <div id="top">  
          <h1><span id="usersname"></span> Comment</h1>
        </div>  
        <div id="info">
          <p id="users-comment"></p>
          <p id="little">By: <span id="users-email"></span></p>
        <div>
      </div>
    </div>  
  </template>
`;

openDatabase();

window.customElements.define("comment-com", Comment);

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const comment = document.querySelector("#comment");
const agree = document.querySelector("#checkbox");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const results = document.querySelector("#results-field");

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  createComment();
  // window.location.reload();
});

document.querySelector;
// document.querySelector("#submit").addEventListener("click", load());

export const createComment = () => {
  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  const commentValue = document.getElementById("comment").value;

  postComments(nameValue, emailValue, commentValue);
};

reset.addEventListener("click", () => {
  clearComments();
  window.location.reload();
});

getComments(results);
