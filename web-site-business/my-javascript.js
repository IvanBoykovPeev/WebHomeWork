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
    var address = document.getElementById('address').value;
    var mail = "mailto:someone@example.com?Subject=Hello%20again&body=" + firstName + "%20"+ lastName + "%0A" + address;
    location.replace(mail);
}