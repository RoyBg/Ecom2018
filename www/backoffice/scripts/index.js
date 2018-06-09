var Orders = [];
var i = 0;
var CurrectIndex;

init();

/*


function loadContant(s){

  switch(s){
    case nav_Dashboard:
    console.log("nav_Dashboard");
    $("#ContectBox").load("allDisputes.html");
    break;

    case nav_All_Disputes:
    console.log("nav_All_Disputes");

    $("#ContectBox").load(allDisputes.html);
    break;

    case nav_Product_Return_Policy:
    console.log("nav_Product_Return_Policy");

    document.getElementById(ContectBox).innerHTML = allDisputes.html;
    break;

    case nav_Reports:
    console.log("nav_Reports");
    document.getElementById(ContectBox).innerHTML =allDisputes.html ;
    break;

    
  }
}

*/

function UpdateStatus(s) {

  switch (s) {
    case "cancel":
      document.getElementById("Status").classList.remove("btn-danger");
      document.getElementById("Status").classList.remove("btn-success");
      document.getElementById("Status").classList.add("btn-warning");

      break;

    case "accept":
      document.getElementById("Status").classList.remove("btn-warning");
      document.getElementById("Status").classList.remove("btn-danger");
      document.getElementById("Status").classList.add("btn-success");
      break;

    default:
      document.getElementById("Status").classList.add("btn-danger");
      document.getElementById("Status").classList.remove("btn-success");
      document.getElementById("Status").classList.remove("btn-warning");
      break;

  }

}

function UpdateDisputeList(s) {
  var ul = document.getElementById("Titles");
  var a = document.getElementById(CurrectIndex);

  switch (s) {
    case "accept":
      a.classList.remove("list-group-item-danger");
      a.classList.remove("list-group-item-warning");
      a.classList.add("list-group-item-success");

      break;

    case "cancel":
      a.classList.remove("list-group-item-danger");
      a.classList.remove("list-group-item-success");
      a.classList.add("list-group-item-warning");
      break;

    default:
      a.classList.remove("list-group-item-success");
      a.classList.remove("list-group-item-warning");
      a.classList.add("list-group-item-danger");
      break;


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
  console.log(Orders);
  i = i + 1;
}

function init() {
  getDisputesFromSrv();
//  for (j = 0; j < 10; j++) {
//    addItem(new Order("Order " + j, new Date, "liranzxc", "Iphone " + Math.round((Math.random() * 10).toString()), "the Warminster region of Wiltshire and the 16th century in Cambridgeshire, England. The root of the name in its possible variant spelling forms can be ALD, AUD, OLD or ORD to which have been added a suffix such as AS, ES, ERS, IS, OS, US, etc. 'Orders' therefore has many possible genealogical or historical derivations which are affiliated in common via the shared modern spelling", "request"));
//  }
  CurrectIndex = 0;
  GenerateDoc(Orders[0]);

}

function getDisputesFromSrv(){
  fetch('http://127.0.0.1:8081/getDisputes')
    .then(function(response) {
        return response.json();
    })
    .then(function(obj) {
      console.log(obj);
        for (var key in obj) {
            addItem(obj[key]); 
        }

    });
}
// function removeItem() {
//   var ul = document.getElementById("dynamic-list");
//   var candidate = document.getElementById("candidate");
//   var item = document.getElementById(candidate.value);
//   ul.removeChild(item);
// }

function Order(title, date, name_user, name_product, descript, status) {
  this.title = title;
  date = (date.toString()).substring(0, 25);
  this.date = date;
  this.name_user = name_user;
  this.name_product = name_product;
  this.descript = descript;
  this.status = status;

}


function GenerateDoc(OrderDisplay) {
  console.log(OrderDisplay);
  document.getElementById("title_order").innerHTML = OrderDisplay.title;
  document.getElementById("Name_Customer").innerHTML = OrderDisplay.name_user;
  document.getElementById("Date").innerHTML = OrderDisplay.date;
  document.getElementById("Product_Name").innerHTML = OrderDisplay.name_product;
  var s = document.getElementById("Status").innerHTML = OrderDisplay.status;

  UpdateStatus(s);

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


  if (Orders[CurrectIndex].status == "request") {
    Orders[CurrectIndex].status = "accept";

    UpdateStatus("accept");

    UpdateDisputeList("accept");
  }


}
function Reject() {

  if (Orders[CurrectIndex].status == "request") {
    Orders[CurrectIndex].status = "cancel";

    UpdateStatus("cancel");
    UpdateDisputeList("cancel");
  }

}
function Contact() {
  alert("Contact");
}




