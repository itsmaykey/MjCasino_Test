app.controller('profileCtrlr', ['$scope', '$http', '$filter', '$window', function (s, h, f, w) {

    s.username = "";
    s.getAuth;
    s.getKey;
    s.getId;
    s.userData = JSON.parse(w.sessionStorage.getItem("user"));
    if (s.userData != null) {
        s.username = s.userData.data['username'];

        s.getAuth = s.userData.data['auth'];
        s.getKey = s.userData.data['key'];
        s.getId = s.userData.data['id'];

      //  console.log(s.getAuth)
      
      //  console.log(s.userData);
      //  console.log(s.username);
    }


    s.historyBalance = "";
    s.TransactionHistory = "";
  
    s.getTransactionHistory = function () {
        h.post('../api/user/GetTransactionHistory?auth=' + s.getAuth + '&key=' + s.getKey + '&id=' + s.getId).success(function (data) {
            s.TransactionHistory = data.history;
           // console.log(s.TransactionHistory);

            //s.showGames= true;
            //s.showLoader = false;
            // if(s.Gamelist.gameType == "SLOTS") {
            //     s.
            // }
        })
    }
    s.getTransactionHistory();

    // s.getUserBalance = function () {
    //     h.post('../api/user/GetBalance').success(function (data) {
    //         s.historyBalance = data;
    //         w.sessionStorage.setItem("bal", JSON.stringify(data));
    //        /// console.log(s.userBalance);
    //       //  w.location.href = '../';
    //         console.log(JSON.parse(w.sessionStorage.getItem("bal")));
    //        // console.log(s.historyBalance);

    //         //s.showGames= true;
    //         //s.showLoader = false;
    //         // if(s.Gamelist.gameType == "SLOTS") {
    //         //     s.
    //         // }
    //     })
    // }
    // s.getUserBalance();

  
}])