app.controller('cardCtrlr', ['$scope', '$http', '$filter', '$window', function (s, h, f, w) {


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

    s.Gamelist = [];
    s.gameid = "JL";
    
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
            s.showLoader = true;
            s.showGames= false;
            s.getVendorGames();
            //  console.log(s.gameid);
        });

    });

            s.showLoader = true;
            s.showGames= false;
            s.getVendorGames = function () {
    
                s.gameid == '' ? 'JL' : s.gameid;
     
      
                h.post('../api/GamesApi/GetVendorGames?categoryCode=POKER' + '&code=' + s.gameid).success(function (data) {
                    s.Gamelist = data.ConvertedData;
                    console.log(s.Gamelist);
                    s.showLoader = false;
                    s.showGames= true;
                    //s.showGames= true;
                    //s.showLoader = false;
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
              //  console.log(a);
                if(s.username == "") {
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


    

}])