
var app = angular.module('layoutApp', []);
app.controller('layoutCtrl', ['$scope', '$http', '$filter', '$window', function (s, h, f, w) {

    s.getusername;
    s.getnetwork;
    s.getid;
    s.getreferer;
    s.gettag;
    s.getauth;
    s.getkey;
    s.transfernetwork;
    s.transferid;
    s.transferusername;
    s.transferreferer;
    s.transferamount;

  
    s.getKey;
    s.getAuth;
    s.getId;

    s.userData = JSON.parse(w.sessionStorage.getItem("user"));
    s.userBalance = JSON.parse(w.sessionStorage.getItem("bal"));
    s.userDownlines = JSON.parse(w.sessionStorage.getItem("downlines"));

    if (s.userData != null) {
        s.username = s.userData.data['username'];
        s.getAuth = s.userData.data['auth'];
        s.getKey = s.userData.data['key'];
        s.getId = s.userData.data['id'];
        console.log(s.userData);

        console.log(s.userBalance);
        console.log(s.userDownlines);
        s.logged = true;
        s.notlogged = false;

        // console.log(u);
        // w3.displayObject("userName", u);
       

    }
    else {
        s.logged = false;
        s.notlogged = true;
    }
 
   
   

   
   
    s.toLogin = function() {
        window.open("../Authorization/login", '_self');

    }
   s.toRegister = function () {
        window.open("../Authorization/Registration", '_self');
    }


}])
   