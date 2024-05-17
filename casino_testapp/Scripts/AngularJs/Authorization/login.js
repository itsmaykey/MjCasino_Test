var app = angular.module('loginApp', []);
app.controller('loginCtrlr', ['$scope', '$http', '$filter', '$window', function (s, h, f, w) {
    s.username;
    s.password;

    s.login = function () {
        console.log(s.username, s.password);
        h.post("../api/Authorization/Login?username=" + s.username +"&password=" + s.password).success(function (data) {
            console.log(data);
            w.sessionStorage.setItem("user", JSON.stringify(data["data"]));
            console.log(w.sessionStorage.getItem("user"));
        });
    }
    //s.login();
}])
