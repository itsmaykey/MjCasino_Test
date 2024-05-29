
app.controller('dashboardCtrlr', ['$scope', '$http', '$filter', '$window', function (s, h, f, w) {

    s.Gamelist = [];
    s.liveGames = [];
    s.popularGames = [];
    s.tableGames = [];
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


s.arrPopularGames = 
[
    [
        "JL_1",
        "Royal Fishing",
        "FISHING",
        "https://trendytreasures.art/game/JL/FISH/JL_1.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "CQ9_10",
        "Lucky Bats",
        "SLOTS",
        "https://trendytreasures.art/game/CQ9/Slots/CQ9_10.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "JL_103",
        "Golden Empire",
        "SLOTS",
        "https://trendytreasures.art/game/JL/Slots/JL_103.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "SPNX_5f6c4c9f2a9fb35188b0eb1a",
        "Lucky God",
        "SLOTS",
        "https://trendytreasures.art/game/SPNX/Slots/SPNX_5f6c4c9f2a9fb35188b0eb1a.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "PP_1001",
        "Dragon Tiger",
        "LIVE",
        "https://trendytreasures.art/game/PP/LIVE/PP_1001.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "PP_1101",
        "Sweet Bonanza Candyland",
        "LIVE",
        "https://trendytreasures.art/game/PP/LIVE/PP_1101.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "SPNX_5f4f26f96f589e3bd48ec18e",
        "Outlaw Rich",
        "SLOTS",
        "https://trendytreasures.art/game/SPNX/Slots/SPNX_5f4f26f96f589e3bd48ec18e.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ]
]
for(let i = 0; i < s.arrPopularGames.length; i++){
    s.popularGames.push({
        gameCode: s.arrPopularGames[i][0],
        gameName : s.arrPopularGames[i][1],
        gameType : s.arrPopularGames[i][2],
        gameCover: s.arrPopularGames[i][3],
        gameNull : s.arrPopularGames[i][4],
        language : s.arrPopularGames[i][5],
        platform : s.arrPopularGames[i][6],
        currency : s.arrPopularGames[i][7], }); 
       }
       console.log(s.popularGames);


s.arrTableGames = [
    [
        "EVOLIVE_PowerInfiniteBJ1",
        "Power Blackjack",
        "LIVE",
        "https://trendytreasures.art/game/EVOLIVE/LIVE/EVOLIVE_PowerInfiniteBJ1.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "EVOLIVE_cpxl81x0rgi34cmo",
        "Blackjack VIP B",
        "LIVE",
        "https://trendytreasures.art/game/EVOLIVE/LIVE/EVOLIVE_cpxl81x0rgi34cmo.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "EVOLIVE_LightningDice001",
        "Lightning Dice",
        "LIVE",
        "https://trendytreasures.art/game/EVOLIVE/LIVE/EVOLIVE_LightningDice001.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "EVOLIVE_LightningBac0001",
        "Lightning Baccarat",
        "LIVE",
        "https://trendytreasures.art/game/EVOLIVE/LIVE/EVOLIVE_LightningBac0001.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "EVOLIVE_n5emwq5c5dwepwam",
        "Three Card Poker",
        "LIVE",
        "https://trendytreasures.art/game/EVOLIVE/LIVE/EVOLIVE_n5emwq5c5dwepwam.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "EVOLIVE_NoCommBac0000001",
        "No Commission Baccarat",
        "LIVE",
        "https://trendytreasures.art/game/EVOLIVE/LIVE/EVOLIVE_NoCommBac0000001.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
    [
        "EVOLIVE_rng-bj-lightning",
        "First Person Lightning Blackjack",
        "RNG",
        "https://trendytreasures.art/game/EVOLIVE/LIVE/EVOLIVE_rng-bj-lightning.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
]
for(let i = 0; i < s.arrTableGames.length; i++){
    s.tableGames.push({
        gameCode: s.arrTableGames[i][0],
        gameName : s.arrTableGames[i][1],
        gameType : s.arrTableGames[i][2],
        gameCover: s.arrTableGames[i][3],
        gameNull : s.arrTableGames[i][4],
        language : s.arrTableGames[i][5],
        platform : s.arrTableGames[i][6],
        currency : s.arrTableGames[i][7], }); 
       }
       console.log(s.tableGames);

s.arrLiveGames =
[
    [
        "EVOLIVE_CrazyTime0000001",
        "Crazy Time",
        "LIVE",
        "https://trendytreasures.art/game/EVOLIVE/LIVE/EVOLIVE_CrazyTime0000001.png",
        null,
        "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
        "H5,WEB",
        "PHP"
    ],
]
for(let i = 0; i < s.arrLiveGames.length; i++){
    s.liveGames.push({
        gameCode: s.arrLiveGames[i][0],
        gameName : s.arrLiveGames[i][1],
        gameType : s.arrLiveGames[i][2],
        gameCover: s.arrLiveGames[i][3],
        gameNull : s.arrLiveGames[i][4],
        language : s.arrLiveGames[i][5],
        platform : s.arrLiveGames[i][6],
        currency : s.arrLiveGames[i][7], }); 
       }
       console.log(s.liveGames);


}])