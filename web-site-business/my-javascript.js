function titleChange(obj) {
	obj.style.color = "#8282FF";
	obj.style.letterSpacing = "60px";
}

function normalStyle(obj) {
	obj.style.color = "#FFE271";
	obj.style.letterSpacing = "30px";
}

function orderConfirm() {
    var x = confirm("Желаете ли да пазарувате")
    if(x==true) {
        window.location.replace("orders.html");
    }
    else {
        window.location.replace("index.html");
    }
}