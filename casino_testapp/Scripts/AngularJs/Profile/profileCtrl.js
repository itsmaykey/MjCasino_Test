app.controller('profileCtrlr', ['$scope', '$http', '$filter', '$window', function (s, h, f, w) {




    s.historyBalance = "";

    s.getUserBalance = function () {
        h.post('../api/user/GetBalance').success(function (data) {
            s.historyBalance = data.history;
            console.log(s.historyBalance);

            //s.showGames= true;
            //s.showLoader = false;
            // if(s.Gamelist.gameType == "SLOTS") {
            //     s.
            // }
        })
    }
    s.getUserBalance();


    s.username = "";
    s.tag = "";
    s.userData = JSON.parse(w.sessionStorage.getItem("user"));
    if (s.userData != null) {
        s.username = s.userData['username'];
        s.tag = s.userData['tag'];
        console.log(s.userData);
        console.log(s.username);



    }
}])