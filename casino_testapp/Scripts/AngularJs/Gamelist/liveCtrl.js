app.controller('liveCtrlr', ['$scope', '$http', '$filter', function (s, h, f) {


    s.Gamelist = [];
    s.gameid = "EVOLIVE";
    s.ss = "";
    s.limit = 40;
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
if(s.limit == 40) {
    s.page -= 1;
}
else {
    s.limit = s.limit/s.page
}

s.gameid = angular.copy(this.id);
s.getVendorGames();
//  console.log(s.gameid);
});

});

s.getVendorGames = function () {
    //console.log(s.gameid == '' ? 'JL' : s.gameid);
    s.gameid == '' ? 'JL' : s.gameid;
    // console.log(s.size);
    // h.post('../api/GamesApi/GetVendorGames?size='+40+'&gameType=SLOTS'+'&code='+s.gameid)
    h.post('../api/GamesApi/GetVendorGames?categoryCode=LIVE' + '&code=' + s.gameid).success(function (data) {
        s.Gamelist = data.ConvertedData;
        console.log(s.Gamelist);
        // if(s.Gamelist.gameType == "SLOTS") {
        //     s.
        // }
    })
}
s.getVendorGames();
s.viewmore = function () {
    s.limit += 40;
    s.page += 1;
    //console.log(s.page);
    s.getVendorGames();
}
s.gameURL = "";
s.getdata = function (a) {
     
    h.post('../api/GamesApi/GetVendorGameUrl?clientIP=' +s.userIP + '&code=' + a.gameCode).success(function (data) {
        s.gameURL = data.data.data.gameUrl;
        // console.log(s.gameURL.gameUrl);
        window.open(s.gameURL);
          
    })

       
       
        
}


}])