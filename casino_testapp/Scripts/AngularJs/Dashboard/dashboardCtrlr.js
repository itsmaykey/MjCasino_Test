
app.controller('dashboardCtrlr', ['$scope', '$http', '$filter', '$window', function (s, h, f, w) {

    s.Gamelist = [];
    s.liveGames = [];
    s.limit = 7;
    s.userIP;
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
    //    console.log('Your Public IP Address:', data.ip);
        s.userIP = angular.copy(data.ip);
    })
    .catch(error => {
        console.error('Error fetching IP:', error);
    });


    s.getVendors = function () {
        var uri = "../api/GamesApi/GetVendors";
        h.post(uri).success(function (data) {
            // console.log(data);
        })
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

   

   
    // s.gamelist_arr = s.p;
    // s.Gamelist = [];
    // for (let i = 0; i < s.gamelist_arr.length; i++) {

    //     s.Gamelist.push({

    //         Code: s.gamelist_arr[i][0],
    //         Name: s.gamelist_arr[i][1],
    //         category: s.gamelist_arr[i][2],
    //         GameImg: s.gamelist_arr[i][3],
    //         NA: s.gamelist_arr[i][4],
    //         Language: s.gamelist_arr[i][5],
    //         Platform: s.gamelist_arr[i][6],
    //         Currency: s.gamelist_arr[i][7],
    //     });
    // }
    //console.log(s.Gamelist.slice(0,s.limit))

    s.viewmore = function () {
        s.limit += 10;
       // console.log(s.limit);
    }

    s.gameURL = "";
    s.getdata = function (a) {
      //  console.log(a);
        if(s.username == "")
             {
            Swal.fire({
                title: "You are not Logged!",
                icon: "error",
                showCancelButton: true,
                confirmButtonText: "Login",
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                window.open("../Authorization/login", '_self');
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
    });
            }

    else {
        h.post('../api/GamesApi/GetVendorGameUrl?clientIP=' +s.userIP + '&code=' + a.gameCode +'&auth=' + s.getAuth + '&key=' + s.getKey + '&id=' + s.getId).success(function (data) {
            s.gameURL = data.data.data.gameUrl;
            // console.log(s.gameURL.gameUrl);
            s.opengameUrl = true;
            s.gamelistUrl = false;
            window.open(s.gameURL,'_self')
          //  s.openG = $('#iframe1').append('<iframe  height=500 width=100% src='+s.gameURL+')></iframe>');
        // s.openGameURL = window.open(s.gameURL, '_self');
          
        })
    }

}

s.username = "";
s.getAuth ="";
s.getId = "";
s.getKey = "";
s.userData = JSON.parse(w.sessionStorage.getItem("user"));
if (s.userData != null) {
    s.username = s.userData.data['username'];
    s.getAuth = s.userData.data['auth'];
    s.getKey = s.userData.data['key'];
    s.getId = s.userData.data['id'];
}

}])