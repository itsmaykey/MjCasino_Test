/// <reference path="C:\Users\DAVNOR\Documents\Visual Studio 2013\Projects\MjCasino_Test\casino_testapp\Views/Shared/_Layout.cshtml" />
/// <reference path="C:\Users\DAVNOR\Documents\Visual Studio 2013\Projects\MjCasino_Test\casino_testapp\Views/Shared/_Layout.cshtml" />
/// <reference path="C:\Users\DAVNOR\Documents\Visual Studio 2013\Projects\MjCasino_Test\casino_testapp\Views/Shared/_Layout.cshtml" />
/// <reference path="C:\Users\DAVNOR\Documents\Visual Studio 2013\Projects\MjCasino_Test\casino_testapp\Views/Shared/_Layout.cshtml" />
/// <reference path="C:\Users\DAVNOR\Documents\Visual Studio 2013\Projects\MjCasino_Test\casino_testapp\Views/Shared/_Layout.cshtml" />

var app = angular.module('loginApp', []);
app.controller('loginCtrlr', ['$scope', '$rootScope', '$http', '$filter', '$window', '$location', function (s, rs, h, f, w, l) {

    

    s.username;
    s.password;
    s.uname
    s.cPassword;
    s.referrer = "";
    s.userData;
    s.userBalance;
    s.loggingIn = false;
    s.currentyLogged = false;
    s.checkCurrentUser = true;
    s.userCaptcha;
    s.captchaMessage;
    s.forangulaycopy;
    s.refferalCode;


    s.userData = JSON.parse(w.sessionStorage.getItem("user"));
    if (s.userData != null) {
        w.location.href = '../';
        console.log(true);
        s.userBalance = JSON.parse(w.sessionStorage.getItem("bal"));
        s.checkCurrentUser = !s.checkCurrentUser;
    } else {
        console.log(false);
        s.checkCurrentUser = !s.checkCurrentUser;
    }

    s.getKey;
    s.getAuth;
    s.getId;

    s.getReferralCode = function () {
        var url = l.absUrl().split('?')[1];
        if (url != null) {
            s.referralCode = url.split('=')[1];
        }
    }

    s.getReferralCode();


    s.login = function () {
        console.log(s.username, s.password);
        if (s.username != null && s.password != null) {
            s.loggingIn = !s.loggingIn;
            h.post("../api/Authorization/Login?username=" + s.username + "&password=" + s.password + "&host=" + location.host).then(function (data) {
                //console.log(data);
                if (data.data.errCode) {
                    s.loggingIn = !s.loggingIn;
                    Swal.fire({
                        title: "ERROR",
                        text: data.data.message,
                        icon: "warning"
                    });
                } else {
                    s.userData = data;
                    s.forangulaycopy = data.data.data;
                    console.log(s.userData);
                    s.getKey = angular.copy(s.forangulaycopy.key);
                    s.getAuth = angular.copy(s.forangulaycopy.auth);
                    s.getId = angular.copy(s.forangulaycopy.id);

                    console.log(data.data);
                    w.sessionStorage.setItem("user", JSON.stringify(data["data"]));
                    // console.log(JSON.parse(w.sessionStorage.getItem("user")));
                    s.loggingIn = !s.loggingIn;
                    s.getBalance();


                }
            }, function (response) {
                s.loggingIn = !s.loggingIn;
                Swal.fire({
                    title: "ERROR" + response.status,
                    text: response.statusText,
                    icon: "error"
                });
            });
        }
    }


    s.getBalance = function () {
        h.post('../api/user/GetBalance?auth=' + s.getAuth + '&key=' + s.getKey + '&id=' + s.getId).success(function (data) {
            if (data.errCode) {
                s.loggingIn = !s.loggingIn;
            }
            else {
                s.userBalance = data;
                w.sessionStorage.setItem("bal", JSON.stringify(data));
                console.log(s.userBalance);
                s.loggingIn = !s.loggingIn;
                w.location.href = '../';
            }



        })
    }
    s.register = function () {
        console.log(s.username, s.password);
        if (s.username != null && s.password != null && s.cPassword != null && s.userCaptcha != null) {
            var isValidated = s.validateCaptcha();
            console.log(isValidated);
            if (isValidated) {
                if (s.password == s.cPassword) {
                    s.loggingIn = !s.loggingIn;
                    h.post("../api/Authorization/Register?username=" + s.username + "&password=" + s.password + "&referrer=" + s.referralCode).success(function (data) {
                        if (data.data.errCode) {
                            s.loggingIn = !s.loggingIn;
                            Swal.fire({
                                title: "ERROR",
                                text: data.data.message,
                                icon: "warning"
                            });
                        } else {
                            s.userData = data;
                            console.log(data);
                            w.sessionStorage.setItem("user", JSON.stringify(data["data"]));
                            console.log(JSON.parse(w.sessionStorage.getItem("user")));
                            s.loggingIn = !s.loggingIn;
                            w.location.href = '../';
                        }
                    });
                } else {
                    s.isRightCaptcha = false;
                    s.captchaMessage = "Password did not match.";
                }
            }
        }
    }

    s.generateCaptcha = function () {
        s.numerator = Math.round((Math.random() * 2) * 10);
        s.denominator = Math.round((Math.random() * 2) * 10);
        s.operators = ['+', '-'];
        s.operatorSize = s.operators.length;
        s.operatorIndex = Math.floor(Math.random() * s.operatorSize);
        //if (s.operatorIndex == 4) {
        //    s.operatorIndex = 3;
        //}
        s.equation = s.numerator + " " + s.operators[s.operatorIndex] + " " + s.denominator;
    }

    s.generateCaptcha();
    s.isRightCaptcha = true;
    s.validateCaptcha = function () {
        s.solution = 0;
        if (s.operatorIndex == 0) {
            s.solution = s.numerator + s.denominator;
        } else {
            s.solution = s.numerator - s.denominator;
        }

        if (s.userCaptcha == s.solution) {
            console.log("very good" + s.userCaptcha);
            s.isRightCaptcha = true;
        } else {
            s.captchaMessage = "Wrong captcha, please try again.";
            s.generateCaptcha();
            s.isRightCaptcha = false;
        }

        return s.isRightCaptcha;
    }

}])
