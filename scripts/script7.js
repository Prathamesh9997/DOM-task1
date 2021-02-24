// main container
var container = document.createElement("div");
container.setAttribute("id", "myDiv");

// table for data
var table = document.createElement("table");
table.setAttribute("class", "table");
var tr = document.createElement("tr");
var td1 = document.createElement("td");
td1.innerHTML = "<strong>ID</strong>";
var td2 = document.createElement("td");
td2.innerHTML = "<strong>NAME</strong>";
var td3 = document.createElement("td");
td3.innerHTML = "<strong>EMAIL</strong>";
tr.append(td1, td2, td3);
table.append(tr);

// pagination
var pagination = document.createElement("div");
pagination.setAttribute("class", "pagination justify-content-center");

var prev = document.createElement("a");
prev.setAttribute("href", "#");
prev.setAttribute("class", "prev");
prev.setAttribute("onClick", "prevPage()");
prev.innerHTML = "prev";
pagination.append(prev);

var a1 = document.createElement("a");
a1.setAttribute("href", "index.html");
a1.innerHTML = "1";
pagination.append(a1);

for (let i = 1; i < 10; i++) {
  var a = document.createElement("a");
  a.setAttribute("href", `index${i + 1}.html`);
  a.innerHTML = `${i + 1}`;
  if (i === 6) {
    a.setAttribute("class", "active");
  }
  pagination.append(a);
}

var next = document.createElement("a");
next.setAttribute("href", "#");
next.setAttribute("class", "next");
next.setAttribute("onClick", "nextPage()");
next.innerHTML = "next";
pagination.append(next);

container.append(table, pagination);
document.body.append(container);

function prevPage() {
  window.location = "index6.html";
}

function nextPage() {
  window.location = "index8.html";
}

//data fetching
fetch(
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

//data append
function appendData(data) {
  for (var i = 60; i < 70; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = data[i].id;
    var td2 = document.createElement("td");
    td2.innerHTML = data[i].name;
    var td3 = document.createElement("td");
    td3.innerHTML = data[i].email;

    tr.append(td1, td2, td3);
    table.append(tr);
  }
}
