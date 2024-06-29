// ========================================
// Task 1:
// ----------
// const loginForm = document.getElementById("login-form");
// const nameField = loginForm.querySelector("#name");
// const pwField = loginForm.querySelector("#password");

// loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     localStorage.setItem("username", nameField.value);
//     sessionStorage.setItem("username", nameField.value);
//     loginForm.submit()
// });
// window.addEventListener("load", () => {
//     if (localStorage.getItem("username")) {
//         document.getElementById(
//             "welcome"
//         ).textContent = `Welcome form local ${localStorage.getItem("username")} `;
//     }
//     if (sessionStorage.getItem("username")) {
//         document.getElementById(
//             "welcome"
//         ).innerHTML += `<br>Welcome from session ${sessionStorage.getItem(
//             "username"
//         )}`;
//     }
// });
//  - yes, but it will be cleared for the next visit
//  - difference between local storage and session storage
//      * local storage presists until deleted and is shared across all pages with same origin
//      * session storage is cleared when the window is closed only accessible within same tab/window
//  - local yes / session no
// ========================================
// Task 2:
// ----------
const loginForm = document.getElementById("login-form");
const nameField = loginForm.querySelector("#name");
const pwField = loginForm.querySelector("#password");
const remCB = loginForm.querySelector("#rem-cbox");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (remCB.value == "on") {
        localStorage.setItem("username", nameField.value);
        localStorage.setItem("password", pwField.value);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
    localStorage.setItem("remember", remCB.value);
    loginForm.submit();
});
window.addEventListener("load", () => {
    if (localStorage.getItem("remember") == "on") {
        nameField.value = localStorage.getItem("username");
        pwField.value = localStorage.getItem("password");
    }
});
// ========================================
// Task 3:
// ----------
const student = {
    id: "0000",
    name: "Ahmed Rushdi",
    age: 98,
    address: {
        country: "Egypt",
        city: "Cairo",
        district: "Downtown",
    },
    skills: ["Python", "ML", "JS"],
    isLeader: false,
};
console.log(`Task 3: ${JSON.stringify(student)}\n---`);
// ========================================
// Task 4:
// ----------
const students = [
    {
        id: "0000",
        name: "Ahmed Rushdi 0",
        age: 98,
        address: {
            country: "Egypt",
            city: "Cairo",
            district: "Downtown",
        },
        skills: ["Python", "ML"],
        isLeader: false,
    },
    {
        id: "0001",
        name: "Ahmed Rushdi 1",
        age: 98,
        address: {
            country: "Egypt",
            city: "Cairo",
            district: "Downtown",
        },
        skills: ["Python", "JS"],
        isLeader: false,
    },
    {
        id: "0002",
        name: "Ahmed Rushdi 2",
        age: 98,
        address: null,
        skills: ["JS"],
        isLeader: false,
    },
];
console.log("Task 4:\n================");
for (const stud of students) {
    console.log(`Student Name: ${stud.name}`);
    console.log(`Skills: ${stud.skills.join(", ")}`);
    console.log("---");
}
// -yes
// XML uses tags and JSON uses keys and values
// ========================================
// Task 5:
// ----------
const uidDiv = document.getElementById("uid-data");
const uidBtn = document.getElementById("uid-btn");
const uidField = document.getElementById("user-id");
let xhr = new XMLHttpRequest();

uidBtn.addEventListener("click", () => {
    // console.log('here')
    xhr.open("GET", `https://reqres.in/api/users/${uidField.value}`, true);
    xhr.send();
    // console.log(xhr)
});

function displayUserOnDiv(div, userData) {
    div.innerHTML = "";
    uName = document.createElement("p");
    uEmail = document.createElement("p");
    textDiv = document.createElement("div");
    uAvatar = document.createElement("img");
    uName.textContent = `${userData.first_name} ${userData.last_name}`;
    uEmail.textContent = `${userData.email}`;
    uAvatar.src = userData.avatar;
    div.appendChild(uAvatar);
    textDiv.appendChild(uName);
    textDiv.appendChild(uEmail);
    div.appendChild(textDiv);
}

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        userData = JSON.parse(xhr.responseText).data;
        // console.log(xhr.responseText)
        displayUserOnDiv(uidDiv, userData);
    }
};

document.addEventListener('DOMContentLoaded',  function () {
    const dropDownUsers = document.getElementById("drop-users");
    let xhr2 = new XMLHttpRequest();
    xhr2.open("GET", `https://reqres.in/api/users/`, true);
    xhr2.send();
    xhr2.onreadystatechange = () => {
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            // console.log("here");
            usersData = JSON.parse(xhr2.responseText).data;
            let options = "";
            for (const userData of usersData) {
                options = options.concat(
                    `<option value="${userData.id}"> ${userData.first_name} ${userData.last_name}</option>`
                );
                // console.log(userData);
            }
            dropDownUsers.innerHTML = options;
        }
    };
    
    let xhr3 = new XMLHttpRequest();
    dropDownUsers.addEventListener("change", () => {
        console.log("here")
        const uidDiv2 = document.getElementById("uid-data2");
        xhr3.open(
            "GET",
            `https://reqres.in/api/users/${dropDownUsers.value}`,
            true
        );
        xhr3.send();
        console.log("sent")
    });
    xhr3.onreadystatechange = () => {
        if (xhr3.readyState === 4 && xhr3.status === 200) {
            userData = JSON.parse(xhr3.responseText).data;
            // console.log(xhr3.responseText)
            displayUserOnDiv(document.getElementById("uid-data2"), userData);
        }
    };
})
