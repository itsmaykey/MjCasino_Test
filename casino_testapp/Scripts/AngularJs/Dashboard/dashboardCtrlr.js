
app.controller('dashboardCtrlr', ['$scope', '$http', '$filter', '$window', function (s, h, f, w) {

    s.Gamelist = [];
    s.JILI_SLOTS = [];

    s.getVendors = function () {
        var uri = "../api/GamesApi/GetVendors";
        h.post(uri).success(function (data) {
           // console.log(data);
        })
    }

    function getID(a) {
        console.log(a);
    }
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

    s.gameUrl = function () {
        h.post('../api/GamesApi/GetVendorGameUrl?code=JL_1&clientIP=175.176.95.11').success(function (data) {
            s.gameURL = data;
            console.log(s.gameURL);
        })
    }

    s.gameUrl();

    s.p =
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
            "JL_10",
            "Gem Party",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_10.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_100",
            "Super Rich",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_100.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_101",
            "Medusa",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_101.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_102",
            "RomaX",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_102.png",
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
            "JL_106",
            "TWIN WINS",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_106.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_108",
            "Magic Lamp",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_108.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_109",
            "Fortune Gems",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_109.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_110",
            "Ali Baba",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_110.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_111",
            "Number King",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_111.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_112",
            "Journey West M",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_112.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_113",
            "Poker King",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_113.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_114",
            "European Roulette",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_114.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_115",
            "Agent Ace",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_115.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_116",
            "Happy Taxi",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_116.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_119",
            "All-star Fishing",
            "FISHING",
            "https://trendytreasures.art/game/JL/FISH/JL_119.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_122",
            "iRich Bingo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_122.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_123",
            "Dragon & Tiger",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_123.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_124",
            "7up7down",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_124.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_125",
            "Sic Bo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_125.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_126",
            "Bone Fortune",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_126.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_127",
            "Callbreak",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_127.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_13",
            "Lucky Ball",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_13.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_130",
            "Thor X",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_130.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_132",
            "Pool Rummy",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_132.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_134",
            "Mega Ace",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_134.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_135",
            "Mayan Empire",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_135.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_136",
            "Samba",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_136.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_137",
            "Gold Rush",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_137.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_139",
            "Fortune Bingo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_139.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_14",
            "Hyper Burst",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_14.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_142",
            "Bonus Hunter",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_142.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_144",
            "JILI CAISHEN",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_144.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_145",
            "Neko Fortune",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_145.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_146",
            "World Cup",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_146.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_148",
            "Bingo Carnaval",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_148.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_149",
            "Calaca Bingo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_149.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_150",
            "Lucky Bingo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_150.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_151",
            "Super Bingo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_151.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_152",
            "Baccarat",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_152.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_153",
            "Crazy Pusher",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_153.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_159",
            "TeenPatti Joker",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_159.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_16",
            "Jungle King",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_16.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_160",
            "Callbreak Quick",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_160.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_161",
            "TeenPatti 20-20",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_161.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_163",
            "Ludo Quick",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_163.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_164",
            "Pirate Queen",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_164.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_166",
            "Wild Racer",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_166.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_17",
            "Shanghai Beauty",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_17.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_171",
            "Sin City",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_171.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_172",
            "Elf Bingo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_172.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_173",
            "West Hunter Bingo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_173.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_174",
            "Jackpot Bingo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_174.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_176",
            "Master Tiger",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_176.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_177",
            "Bingo Adventure",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_177.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_178",
            "Go Goal BIngo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_178.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_181",
            "Wild Ace",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_181.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_182",
            "Golden Land",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_182.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_183",
            "Golden Joker",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_183.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_191",
            "Golden Temple",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_191.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_193",
            "Devil Fire",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_193.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_195",
            "King Arthur",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_195.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_197",
            "Color Game",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_197.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_198",
            "Sweet Land",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_198.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_2",
            "Chin Shi Huang",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_2.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_20",
            "Bombing Fishing",
            "FISHING",
            "https://trendytreasures.art/game/JL/FISH/JL_20.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_200",
            "PAPPU",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_200.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_204",
            "Color Prediction",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_204.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_208",
            "Trial of Phoenix",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_208.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_209",
            "Aztec Priestess",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_209.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_21",
            "Fa Fa Fa",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_21.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_212",
            "Dinosaur Tycoon II",
            "FISHING",
            "https://trendytreasures.art/game/JL/FISH/JL_212.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_214",
            "Pearls of Bingo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_214.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_216",
            "Candyland Bingo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_216.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_217",
            "Magic Lamp Bingo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_217.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_219",
            "Blackjack",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_219.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_220",
            "Blackjack Lucky Ladies",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_220.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_223",
            "Fortune Gems 2",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_223.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_225",
            "Cricket King 18",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_225.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_226",
            "Witches Night",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_226.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_228",
            "Arena Fighter",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_228.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_23",
            "Candy Baby",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_23.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_230",
            "Cricket Sah 75",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_230.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_238",
            "Bangla Beauty",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_238.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_239",
            "Dabanggg",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_239.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_253",
            "Video Poker",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_253.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_258",
            "Devil Fire 2",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_258.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_259",
            "Charge Buffalo Ascent",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_259.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_26",
            "Hawaii Beauty",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_26.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_27",
            "SevenSevenSeven",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_27.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_289",
            "Ocean King Jackpot",
            "FISHING",
            "https://trendytreasures.art/game/JL/FISH/JL_289.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_297",
            "Jogo do Bicho",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_297.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_30",
            "Bubble Beauty",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_30.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_303",
            "Fortune Monkey",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_303.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_32",
            "Jackpot Fishing",
            "FISHING",
            "https://trendytreasures.art/game/JL/FISH/JL_32.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_33",
            "FortunePig",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_33.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_35",
            "Crazy777",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_35.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_36",
            "Bao boon chin",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_36.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_37",
            "Night City",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_37.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_38",
            "Fengshen",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_38.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_4",
            "God Of Martial",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_4.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_40",
            "Crazy FaFaFa",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_40.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_42",
            "Dinosaur Tycoon",
            "FISHING",
            "https://trendytreasures.art/game/JL/FISH/JL_42.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_43",
            "XiYangYang",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_43.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_44",
            "DiamondParty",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_44.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_45",
            "Crazy Golden Bank",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_45.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_46",
            "Dragon Treasure",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_46.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_47",
            "Charge Buffalo",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_47.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_48",
            "Lucky Goldbricks",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_48.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_49",
            "Super Ace",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_49.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_5",
            "Hot Chilli",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_5.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_51",
            "Money Coming",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_51.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_58",
            "Golden Queen",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_58.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_6",
            "Fortune Tree",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_6.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_60",
            "Dragon Fortune",
            "FISHING",
            "https://trendytreasures.art/game/JL/FISH/JL_60.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_65",
            "Bangla Beauty",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_65.png",
            null,
            "en,es,hi,hk,id,ko,pt,th,tl,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_67",
            "Fortune Monkey",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_67.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_71",
            "Boom Legend",
            "FISHING",
            "https://trendytreasures.art/game/JL/FISH/JL_71.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_72",
            "TeenPatti",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_72.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_74",
            "Mega Fishing",
            "FISHING",
            "https://trendytreasures.art/game/JL/FISH/JL_74.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_75",
            "AK47",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_75.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_76",
            "Party Night",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_76.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_77",
            "Boxing King",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_77.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_78",
            "Secret Treasure",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_78.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_79",
            "Andar Bahar",
            "POKER",
            "https://trendytreasures.art/game/JL/POKER/JL_79.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_82",
            "Happy Fishing",
            "FISHING",
            "https://trendytreasures.art/game/JL/FISH/JL_82.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_85",
            "Pharaoh Treasure",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_85.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_87",
            "Book of Gold",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_87.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_9",
            "War Of Dragons",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_9.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_91",
            "Lucky Coming",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_91.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ],
        [
            "JL_92",
            "Crazy Hunter",
            "SLOTS",
            "https://trendytreasures.art/game/JL/Slots/JL_92.png",
            null,
            "de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh",
            "H5,WEB",
            "PHP"
        ]
    ]
    
     s.limit = 10;
    s.gamelist_arr = s.p;
    s.Gamelist = [];
    for(let i = 0; i < s.gamelist_arr.length; i++){
    
 s.Gamelist.push({
    
     Code: s.gamelist_arr[i][0],
     Name : s.gamelist_arr[i][1],
     category : s.gamelist_arr[i][2],
     GameImg: s.gamelist_arr[i][3],
     NA : s.gamelist_arr[i][4],
     Language : s.gamelist_arr[i][5],
     Platform : s.gamelist_arr[i][6],
     Currency : s.gamelist_arr[i][7], }); 
    }
    //console.log(s.Gamelist.slice(0,s.limit))

    s.viewmore = function() {
        s.limit+=10;
        console.log(s.limit);
    }

    s.getdata = function(x) {
        console.log(x);
    }

    s.username;
    s.userData = JSON.parse(w.sessionStorage.getItem("user"));
    if (s.userData != null) {
        s.username = s.userData['username'];
        console.log(s.userData);
        console.log(s.username);
    }
}])