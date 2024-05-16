app.controller('fishCtrlr', ['$scope', '$http', '$filter', function (s, h, f) {


    s.Gamelist = [];
    s.gameid = "JL";
    s.ss = "";
    s.size = 40;
    s.page = 1;
    s.userIP = "";


    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        console.log('Your Public IP Address:', data.ip);
        s.userIP = angular.copy(data.ip);
    })
    .catch(error => {
        console.error('Error fetching IP:', error);
    });
    s.navItems = document.querySelectorAll('#trialni li a');
    // Add click event listener to each item
    s.navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            // Remove "active" class from all items
            s.navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });

            // Add "active" class to the clicked item
            this.classList.add('active');
            
            // Prevent default link behavior (optional)
            event.preventDefault();

            // Display the ID of the clicked item (optional)
            // console.log('Clicked item ID:', this.id);

          
           
            var pagereset = 1;
            var sizereset = 40;
            var gameT = 'SLOTS';
            s.gameid = angular.copy(this.id);
            s.getVendorGames( { 
                page : pagereset.toString(),
                size : sizereset.toString(),
                code : s.gameid.toString(),
                gameType :gameT.toString()});
            //  console.log(s.gameid);
        });

    });

    s.getVendorGames = function () {
      //  console.log(s.gameid == '' ? 'JL' : s.gameid);
        s.gameid == '' ? 'JL' : s.gameid;
        // h.post('../api/GamesApi/GetVendorGames?size='+40+'&gameType=SLOTS'+'&code='+s.gameid)
        h.post('../api/GamesApi/GetVendorGames?size=' + s.size + '&categoryCode=FISHING' + '&code=' + s.gameid).success(function (data) {
                    s.Gamelist = data.ConvertedData;
            // if(s.Gamelist.gameType == "SLOTS") {
            //     s.
            // }
        })
    }
    s.getVendorGames();
    s.viewmore = function () {
        s.size += 40;
        s.getVendorGames();
    }
    s.gameURL = "";
    s.getdata = function (a) {
        console.log(s.userIP);
        console.log(a.gameCode);
        h.post('../api/GamesApi/GetVendorGameUrl?clientIP=' +s.userIP + '&code=' + a.gameCode).success(function (data) {
            s.gameURL = data.data.data.gameUrl;
           // console.log(s.gameURL.gameUrl);
           window.open(s.gameURL);
          
        })

       
       
        
    }


}])