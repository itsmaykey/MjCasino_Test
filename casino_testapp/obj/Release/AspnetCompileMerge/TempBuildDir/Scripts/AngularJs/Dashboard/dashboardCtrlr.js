
app.controller('dashboardCtrlr', ['$scope', '$http', '$filter', '$window', function (s, h, f, w) {

    s.Gamelist = [];
    s.liveGames = [];
    s.limit = 7;
    s.getVendors = function () {
        var uri = "../api/GamesApi/GetVendors";
        h.post(uri).success(function (data) {
            // console.log(data);
        })
    }
    function getID(a) {
        console.log(a);
    }

    
    s.getLivegames = function () {
        h.post('../api/GamesApi/GetVendorGames?categoryCode=LIVE' + '&code=EVOLIVE').success(function (data) {
            // console.log(data);
            s.liveGames = data.ConvertedData;
           // console.log(s.liveGames);
            //            s.Gamelist = data       ;   
            //       console.log(s.Gamelist);

            //        // if(s.Gamelist.gameType == "SLOTS") {
            //        //     s.
            //        // }
        })
    }
    s.getLivegames();
    //s.getVendors();

    //s.getVendorGames = function () {
    //    h.post("../api/GamesApi/GetVendorGames?code=JL&page=1&size=100").success(function (data) {
    //            s.Gamelist = data       ;   
    //       console.log(s.Gamelist);

    //        // if(s.Gamelist.gameType == "SLOTS") {
    //        //     s.
    //        // }

    //    })
    //}
    //s.getVendorGames();

    //s.gameUrl = function () {
    //    h.post('../api/GamesApi/GetVendorGameUrl?code=JL_1&clientIP=175.176.95.11').success(function (data) {
    //        s.gameURL = data;
    //        console.log(s.gameURL);
    //    })
    //}

    //s.gameUrl();

    
    // s.username = "";
    // s.userData = JSON.parse(w.sessionStorage.getItem("user"));
    // if (s.userData != null) {
    //     s.username = s.userData.data['username'];
    //     console.log(s.userData);
    //     console.log(s.username);
    // }
}])