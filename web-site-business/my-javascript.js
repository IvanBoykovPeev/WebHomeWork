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
        document.location.replace("orders.html");
    } 
    else {
        document.location.replace("index.html");
    }
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
        return email;
    }
    else {
        email = "";
        return email;
    }
} 

function send() {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    email = document.getElementById('e-mail').value;
    var eMail = validateEmail(email);
    var order;
    if (document.getElementById('normal').checked) {
        order = "Normal order";
    }
    else {
        order = "Fast order";
    }
    var productNumber = document.getElementById('product-number').value;
    var payHow;
    if (document.getElementById('pay').checked) {
        payHow = "Pay whith bank transaction";
    }
    else payHow = "Pay cash";
    var address = document.getElementById('address').value;
   


        if (firstName == null || firstName == "" ||
        lastName == null || lastName == "" ||
        email == null || eMail == "" ||
        order == null || order == "" ||
        productNumber == null || productNumber == "" ||
        address== null || address == "") {
        document.getElementById('res').innerText = "Не валидни данни";
    }
    else {
        document.getElementById('res').innerText = "";
        var mail = "MAILTO:someoneelse@example.com?cc=" + eMail + "&bcc=andsomeoneelse@example.com&subject=Order&body=" + firstName + "%20" + lastName + "%20" + order + "%20" + productNumber + "%20" + payHow + "%20" + address;
        document.location.replace(mail);
    }   
}

