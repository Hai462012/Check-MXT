// KEY VIP mặc định
let keys = JSON.parse(localStorage.getItem("keys")) || ["Vip-admin"];

function login() {
  let input = document.getElementById("key").value;

  if (keys.includes(input)) {
    window.location.href = "dashboard.html";
  } else {
    alert("Key sai!");
  }
}

// giả lập chạy
function fakeRun(name) {
  document.getElementById("status").innerText = name + " đang chạy...";
}

// ADMIN LOGIN
function adminLogin() {
  let pass = document.getElementById("adminPass").value;

  if (pass === "admin123") {
    document.getElementById("loginAdmin").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    loadKeys();
  } else {
    alert("Sai mật khẩu!");
  }
}

// tạo key
function createKey(type) {
  let key = "KEY-" + Math.random().toString(36).substr(2, 6);

  keys.push(key);
  localStorage.setItem("keys", JSON.stringify(keys));

  loadKeys();
}

// load key
function loadKeys() {
  let list = document.getElementById("keyList");
  list.innerHTML = "";

  keys.forEach(k => {
    let li = document.createElement("li");
    li.innerText = k;
    list.appendChild(li);
  });
}
