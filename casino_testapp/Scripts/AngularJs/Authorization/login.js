var app = angular.module("loginApp", []);
app.controller('loginCtrlr', ['$scope', '$http', '$filter', function (s, h, f) {


    console.log("Hello");
    s.clickni = function () {
        console.log("Hello");
    }

}])
