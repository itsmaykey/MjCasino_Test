/// <reference path="C:\Users\DAVNOR\Documents\Visual Studio 2013\Projects\MjCasino_Test\casino_testapp\Views/Shared/_Layout.cshtml" />
/// <reference path="C:\Users\DAVNOR\Documents\Visual Studio 2013\Projects\MjCasino_Test\casino_testapp\Views/Shared/_Layout.cshtml" />
/// <reference path="C:\Users\DAVNOR\Documents\Visual Studio 2013\Projects\MjCasino_Test\casino_testapp\Views/Shared/_Layout.cshtml" />
/// <reference path="C:\Users\DAVNOR\Documents\Visual Studio 2013\Projects\MjCasino_Test\casino_testapp\Views/Shared/_Layout.cshtml" />
/// <reference path="C:\Users\DAVNOR\Documents\Visual Studio 2013\Projects\MjCasino_Test\casino_testapp\Views/Shared/_Layout.cshtml" />

var app = angular.module('loginApp', []);
app.controller('loginCtrlr', ['$scope', '$rootScope', '$http', '$filter', '$window', function (s, rs, h, f, w) {
   
    s.username;
    s.password;
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

    s.login = function () {
        console.log(s.username, s.password);
        s.loggingIn = !s.loggingIn;
        h.post("../api/Authorization/Login?username=" + s.username + "&password=" + s.password).success(function (data) {
            s.userData = data;
            console.log(data);
          
            w.sessionStorage.setItem("user", JSON.stringify(data["data"]));
            console.log(JSON.parse(w.sessionStorage.getItem("user")));
            s.loggingIn = !s.loggingIn;
            w.location.href = '../';
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


    s.historyBalance;
    s.getUserBalance = function () {
        h.post('../api/user/GetBalance').success(function (data) {
            s.gBalance = data.ConvertedData;
            console.log(s.gBalance);

            //s.showGames= true;
            //s.showLoader = false;
            // if(s.Gamelist.gameType == "SLOTS") {
            //     s.
            // }
        })
    }
    s.getUserBalance();
}])
