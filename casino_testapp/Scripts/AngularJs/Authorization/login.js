var app = angular.module('loginApp', []);
app.controller('loginCtrlr', ['$scope', '$rootScope', '$http', '$filter', '$window', function (s, rs, h, f, w) {
    s.username;
    s.password;
<<<<<<< HEAD
    s.uname
=======
    s.cPassword;
    s.referrer = "";
    s.userData;
    s.loggingIn = false;
    s.currentyLogged = false;
    s.checkCurrentUser = true;
    s.userData = JSON.parse(w.sessionStorage.getItem("user"));
    if (s.userData != null) {
        w.location.href = '../';
        console.log(true);
        s.checkCurrentUser = !s.checkCurrentUser;
    } else {
        console.log(false);
        s.checkCurrentUser = !s.checkCurrentUser;
    }

>>>>>>> 486f6d55d13480eddd8a6d8c9099052972eb1a77
    s.login = function () {
       
        console.log(s.username, s.password);
        s.loggingIn = !s.loggingIn;
        h.post("../api/Authorization/Login?username=" + s.username + "&password=" + s.password).success(function (data) {
            s.userData = data;
            console.log(data);
            w.sessionStorage.setItem("user", JSON.stringify(data["data"]));
<<<<<<< HEAD

  
         
            console.log(w.sessionStorage.getItem("user"));
=======
            console.log(JSON.parse(w.sessionStorage.getItem("user")));
            s.loggingIn = !s.loggingIn;
            w.location.href = '../';
>>>>>>> 486f6d55d13480eddd8a6d8c9099052972eb1a77
        });
    }

    //s.register = function () {
    //    console.log(s.username, s.password);
    //    s.loggingIn = !s.loggingIn;
    //    h.post("../api/Authorization/Register?username=" + s.username + "&password=" + s.password + "$referrer=" + s.referrer).success(function (data) {
    //        s.userData = data;
    //        console.log(data);
    //        w.sessionStorage.setItem("user", JSON.stringify(data["data"]));
    //        console.log(JSON.parse(w.sessionStorage.getItem("user")));
    //        s.loggingIn = !s.loggingIn;
    //        w.location.href = '../';
    //    });
    //}

    s.register = function () {
        console.log(s.username, s.password);
        if (s.password == s.cPassword) {
            s.loggingIn = !s.loggingIn;
            h.post("../api/Authorization/Register?username=" + s.username + "&password=" + s.password + "&referrer=" + s.referrer).success(function (data) {
                s.userData = data;
                console.log(data);
                w.sessionStorage.setItem("user", JSON.stringify(data["data"]));
                console.log(JSON.parse(w.sessionStorage.getItem("user")));
                s.loggingIn = !s.loggingIn;
                w.location.href = '../';
            });
        } else {
            console.log(s.password);
            console.log(s.cPassword);
            console.log(s.loggingIn);
        }
    }
}])
