var Orders = [];
var i = 0;
var CurrectIndex;
init();

function UpdateStatus(s, Item) {

  Orders[CurrectIndex].status = s;
  if (s == "request") {
    document.getElementById(Item).classList.add("btn-danger");

  }
  else {
    if (s == "accept") {
      document.getElementById(Item).classList.remove("btn-danger");
      document.getElementById(Item).classList.add("btn-success");

    }
    else {
      // cancel
      document.getElementById(Item).classList.remove("btn-danger");
      document.getElementById(Item).classList.remove("btn-success");

      document.getElementById(Item).classList.add("btn-warning");

    }
  }

}

function UpdateDisputeList(s) {
  var ul = document.getElementById("Titles");
  var a = document.getElementById(CurrectIndex);
  Orders[CurrectIndex].status = s;

  if (s == "request") {
    a.classList.add("list-group-item-danger");

  }
  else {
    if (s == "accept") {
      a.classList.remove("list-group-item-danger");
      a.classList.add("list-group-item-success");

    }
    else {
      // cancel
      a.classList.remove("list-group-item-danger");
      a.classList.remove("list-group-item-success");
      a.classList.add("list-group-item-warning");

    }
  }
}

function addItem(order) {
  var ul = document.getElementById("Titles");
  var a = document.createElement("a");
  a.setAttribute('id', i);
  a.className = "list-group-item list-group-item-action list-group-item-danger";
  a.innerHTML = order.title;

  ul.appendChild(a);
  Orders.push(order);

  i = i + 1;
}

function init() {

  for (j = 0; j < 10; j++) {
    addItem(new Order("Order " + j, new Date, "liranzxc", "Iphone " + Math.round((Math.random() * 10).toString()), "the Warminster region of Wiltshire and the 16th century in Cambridgeshire, England. The root of the name in its possible variant spelling forms can be ALD, AUD, OLD or ORD to which have been added a suffix such as AS, ES, ERS, IS, OS, US, etc. 'Orders' therefore has many possible genealogical or historical derivations which are affiliated in common via the shared modern spelling", "request"));
  }

}
// function removeItem() {
//   var ul = document.getElementById("dynamic-list");
//   var candidate = document.getElementById("candidate");
//   var item = document.getElementById(candidate.value);
//   ul.removeChild(item);
// }

function Order(title, date, name_user, name_product, descript, status) {
  this.title = title;
  this.date = date;
  this.name_user = name_user;
  this.name_product = name_product;
  this.descript = descript;
  this.status = status;

}


function GenerateDoc(OrderDisplay) {

  document.getElementById("title_order").innerHTML = OrderDisplay.title;
  document.getElementById("Name_Customer").innerHTML = OrderDisplay.name_user;
  document.getElementById("Date").innerHTML = OrderDisplay.date;
  document.getElementById("Product_Name").innerHTML = OrderDisplay.name_product;
  var s = document.getElementById("Status").innerHTML = OrderDisplay.status;
  document.getElementById("Description").innerHTML = (OrderDisplay.descript);
}


$(document).ready(function () {
  console.log("yolo");
  $(".list-group-item").each(function (index) {

    $(this).on("click", function () {
      // For the boolean value // each click 
      CurrectIndex = index;
      GenerateDoc(Orders[index]);

    });
  });
});


function Accept() {

  Orders[CurrectIndex].status = "accept";

  UpdateStatus("accept", "Status");

  UpdateDisputeList("accept");


}

function Reject() {
  Orders[CurrectIndex].status = "cancel";

  UpdateStatus("cancel", "Status");
  UpdateDisputeList("cancel");

}
function Contact() {
  alert("Contact");
}




