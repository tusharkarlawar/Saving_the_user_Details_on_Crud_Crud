const y = document.getElementById("reg");
y.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#formSec").style.background = "#ccc";
});
const z = document.getElementById("reg");
z.addEventListener("mouseover", (event) => {
  event.preventDefault();
  document.querySelector("#formSec").style.background = "#cbb";
});
const a = document.getElementById("reg");
a.addEventListener("mouseout", (event) => {
  event.preventDefault();
  document.querySelector("#formSec").style.background = "#acb";
});

const x = document.getElementById("reg");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const errorMessage = document.querySelector("#msg");
const date = document.querySelector("#date");
const time = document.querySelector("time");
const form = document.querySelector("#reg");
const userList = document.querySelector("#user");
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    phoneInput.values === "" ||
    date.value === ""
  ) {
    errorMessage.classList.add("error");
    errorMessage.innerHTML = "*Please enter all fields";
    errorMessage.style.color = "blue";

    setTimeout(() => {
      errorMessage.remove();
    }, 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `${nameInput.value} : ${emailInput.value} : ${phoneInput.value}`
      )
    );

    userList.appendChild(li);

    // localStorage.setItem(phoneInput.value, nameInput.value);

    let store = {
      phone: phoneInput.value,
      name: nameInput.value,
      email: emailInput.value,
    };
    li.id = store.phone;

    axios.post("https://crudcrud.com/api/29a9226259c14f63a1bb4cf8dd68e5ba/appointmentData",store)
        .then((response) => {
            console.log(response)
        })
        .catch((err)=> {
            console.log(err)

        })

    window.addEventListener("DOMContentLoaded",() => {
        axios.get("https://crudcrud.com/api/29a9226259c14f63a1bb4cf8dd68e5ba/appointmentData")
        .then((response) => {
            console.log(response)

            for(var i=0;i<response.data.length;i++){
                onSubmit(response.data[i])
            }
        })
        .catch((err)=> {
            console.log(err)

        })

   })


    


    
    

    
    //localStorage.setItem(store.email, JSON.stringify(store));
    // console.log(localStorage.getItem(phoneInput.value))
    console.log(store);
    // add Edit button
    let editBtn = document.createElement("button");
    editBtn.className = "edit btn-light btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);
    let space = document.createTextNode(" ");
    // append the space before the edit button
    li.appendChild(space);
    ///add Edit button
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // Append text node
    deleteBtn.appendChild(document.createTextNode("Delete"));
    //append button to li
    li.appendChild(deleteBtn);
    //-----------------
    // removeItem(event, li, key)

    // Reset the form fields after successful submission
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
  }
  x.reset();
}

// *****delete button functionality*****
// userList.addEventListener('click', removeItem);
userList.addEventListener("click", function (event) {
  removeItem(event, phoneInput.value);
});
function removeItem(event, phoneInput) {
  event.preventDefault();
  if (event.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li2 = event.target.parentElement;

     // localStorage.removeItem(phoneInput);
      userList.removeChild(li2);
    }
  }
}