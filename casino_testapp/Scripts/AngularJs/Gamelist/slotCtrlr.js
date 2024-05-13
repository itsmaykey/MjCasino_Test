app.controller('slotCtrlr', ['$scope', '$http', '$filter', function (s, h, f) {


    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            console.log('Your Public IP Address:', data.ip);
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
        });



    s.Gamelist = [];
    s.gameid = "JL";
    s.ss = "";
    s.size = 40;
    s.page = 1;

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

            s.gameid = angular.copy(this.id);
            s.getVendorGames();
            //  console.log(s.gameid);
        });

    });

    s.getVendorGames = function () {
        console.log(s.gameid == '' ? 'JL' : s.gameid);
        s.gameid == '' ? 'JL' : s.gameid;
        // h.post('../api/GamesApi/GetVendorGames?size='+40+'&gameType=SLOTS'+'&code='+s.gameid)
        h.post('../api/GamesApi/GetVendorGames?size=' + s.size + '&gameType=SLOTS' + '&code=' + s.gameid).success(function (data) {
            s.Gamelist = data.ConvertedData;
            console.log(s.Gamelist);

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
    s.getdata = function (a) {
        console.log(a);
    }

   
        //async function getCloudflareJSON(){
        //    let data = await fetch('https://www.cloudflare.com/cdn-cgi/trace').then(res=>res.text())
        //    let arr = data.trim().split('\n').map(e=>e.split('='))
        //    return Object.fromEntries(arr)
        //}

        //async function generate_url(game_code){

        //    let client = await getCloudflareJSON();
    
        //    await axios.post('https://amethys888.net/api/integrations/allinone/game/url',
        //    { auth: 'NzXG9de5khdQn4iUYdXYqR5JOntnOPcy', id: 'oqlc6nyg', game_code: 'JL_10', client_ip: '49.146.8.236', key: '011d739dc3ff798f31ab07d07ad1e91' }, 
        //    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        //    .then(async function(res){ 
    
        //        if(res.data.errCode === 0){ console.log(res.data); }

          
    
        //    }).catch(function(err){ console.log(err) });
   

        //}
        //generate_url();
    s.gameUrl = function() {
        h.post('../api/GamesApi/GetVendorGameUrl?clientIP=49.146.8.236' + '&code=' + 'JL_10').success(function (data) {
            s.gameURL = data;
            console.log(s.gameURL);
        })
    }

    s.gameUrl();
      
        
    


}])