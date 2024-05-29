
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

    console.log(s.userData);

    if (s.userData != null) {
        s.username = s.userData.UserDetails.data.username;
        s.getAuth = s.userData.UserDetails.data.auth;
        s.getKey = s.userData.UserDetails.data.key;
        s.getId = s.userData.UserDetails.data.id;
        s.logged = true;
        s.notlogged = false;
        s.balance = s.userData.Balance;
        s.downlines = s.userData.Downlines;

        console.log(s.username);
        console.log(s.getAuth);
        console.log(s.getKey);
        console.log(s.getId);
        console.log(s.balance);
        console.log(s.downlines);

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


    s.signOut = function () {
        console.log("llloooooggeddout!");
        w.sessionStorage.removeItem("user");
        w.location.href = '../Authorization/Login';
    }


}])
   