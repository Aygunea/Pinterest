const messages = document.querySelector(".messages");
const messagesDots = document.querySelector(".fa-comment-dots");
const messagesClicked = document.querySelector(".messagesClicked");

messagesDots.addEventListener("click", function () {
  if (messagesClicked.style.display === "block") {
    messagesClicked.style.display = "none";
    console.log("console");
  } else {
    messagesClicked.style.display = "block";
  }
});

const questionBox = document.querySelector(".questionBox");
const helpBox = document.querySelector(".helpBox");
questionBox.addEventListener("click", function () {
  if (helpBox.style.display === "block") {
    helpBox.style.display = "none";
  } else {
    helpBox.style.display = "block";
  }
});

// const cardBox = document.getElementsByClassName("cardBox");
// const card = document.getElementsByClassName("card");
// console.log(cardBox);
// card.addEventListener("mouseenter", function(){
//   if (cardBox.style.display === "block") {
//     cardBox.style.display = "none";
//   } else {
//     cardBox.style.display = "block";
//   }
// });

const inviteFriend = document.querySelector(".inviteFriend");
const inviteFriendContact = document.querySelector(".inviteFriendContact");
const messageFoot = document.querySelector(".messageFoot");

inviteFriend.addEventListener("click", () => {
  if (inviteFriendContact.style.display === "none") {
    inviteFriendContact.style.display = "block";
    // messageFoot.style.display = "block";
    // messagesClicked.style.display = "block";
    console.log("invitefriendcontact is none");
  } else if (inviteFriendContact.style.display === "block") {
    inviteFriendContact.style.display = "none";
    messageFoot.style.display = "block";
    console.log("messageFoot is block");
  } else {
    inviteFriendContact.style.display = "block";
    messageFoot.style.display = "none";
    // messagesClicked.style.display = "block";
    console.log("invitefriendcontact is block");
  }
});

// const chooseBtn = document.querySelector(".chooseBtn");
// const chooseBtnDown = document.querySelector(".chooseBtnDown");
// chooseBtn.addEventListener("click", function () {
//   if (chooseBtnDown.style.display === "block") {
//     chooseBtnDown.style.display = "none";
//     console.log("chooseBtnDown is none")
//   } else {
//     chooseBtnDown.style.display = "block";
//     console.log("chooseBtnDown is block")
//   }
// });
