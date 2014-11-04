function titleChange(obj) {
    obj.style.color = "#8282FF";
	obj.style.letterSpacing = "60px";
}

function normalStyle(obj) {
	obj.style.color = "#FFE271";
	obj.style.letterSpacing = "30px";
}

function orderConfirm() {
    var x;
    x = confirm("Желаете ли да пазарувате")
    if (x == true) {
        location.replace("orders.html");
    } 
    else {
        location.replace("index.html");
    }
}

function send() {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var eMail = document.getElementById('e-mail').value;
    
    var order;
    if (document.getElementById('normal').checked) {
        order = document.getElementById('normal-label').innerText;
    }
    else {
        order = document.getElementById('fast-label').innerText;
    }
    var productNumber = document.getElementById('product-number').value;
    var payHow;
    if (document.getElementById('pay').checked) {
        payHow = "Ще платя с банков превод";
    }
    else payHow = "Ще платя при доставка";
    var address = document.getElementById('address').value;
    if (firstName == null || firstName == "" ||
        lastName == null || lastName == "" ||
        eMail == null || eMail == "" ||
        order == null || order == "" ||
        productNumber == null || productNumber == "" ||
        address== null || address == "") {
        document.getElementById('res').innerText = "Не валидни данни";
    }
    else {
      var mail = "mailto:someone@example.com?cc=someone@example.com&subject=Поръчка&body=" + firstName +"%20" + lastName + order + productNumber + payHow + address;
           location.assign(mail);
    }   
}