

app.controller('layoutCtrl', ['$scope', '$http', '$filter', '$window', function (s, h, f, w) {

   
    s.logged = false;
    s.notlogged = true;
    s.uKey;
    s.getAuth;
    s.getId;
    s.getRef;
    s.getTag;
    s.getNet;
    

    s.userData = JSON.parse(w.sessionStorage.getItem("user"));

    console.log(s.userData);

    if (s.userData != null) {
        //data samag pasa
        s.username = s.userData.UserDetails.data.username;
        s.getAuth = s.userData.UserDetails.data.auth;
        s.getKey = s.userData.UserDetails.data.key;
        s.getId = s.userData.UserDetails.data.id;
        s.getRef = s.userData.UserDetails.data.referrer;
        s.getTag = s.userData.UserDetails.data.tag;
        s.getNet = s.userData.UserDetails.data.network;
        s.logged = true;
        s.notlogged = false;
        s.userBalance = s.userData.Balance.balance;
        s.userDownlines = s.userData.Downlines;

      
        console.log(s.userBalance);
        console.log(s.userDownlines);

        // console.log(u);
        // w3.displayObject("userName", u);
       
    }
    s.DepositBtn = function(){
        window.open("../Account/_Deposit", '_self');
    }

    s.toLogin = function() {
        window.open("../Authorization/login", '_self');

    }
   s.toRegister = function () {
        window.open("../Authorization/Registration", '_self');
   }

   s.transferBtn = function (a) {
       //console.log(s.username);
       //console.log(s.getAuth);
       //console.log(s.getKey);
       //console.log(s.getId);
       //console.log(s.getRef);
       //console.log(s.getTag);
       //console.log(s.getNet);
       //console.log(a)
       //console.log(a.balanace_sum = a.Amount)
       //if (s.userBalance == 0) {
       //    Swal.fire({
       //        icon: "error",
       //        title: "Insufficient Balance!",
       //        text: "Please add fund first",
              
       //    });
       //}
       //else {
           h.post('../api/user/PostTransfer?auth='
          + s.getAuth +
          '&key=' + s.getKey +
          '&id=' + s.getId +
          '&username=' + s.username +
          '&tag=' + s.getTag +
          '&referrer=' + s.getRef +
          '&network=' + s.getNet +
          '&transfer_to_network=' + a.balance_network +
          '&transfer_to_id=' + a.balance_id +
          '&transfer_to_username=' + a.balance_username +
          '&transfer_to_tag=' + a.balance_tag +
          '&transfer_to_referrer=' + a.balance_referrer +
          '&transfer_to_amount=' + a.Amount).success(function (data) {
              Swal.fire({
                  icon: data.icon,
                  title: data.title,
                  text: data.text,
              });

              a.Amount = "";
          })
      /// }

      
   }


}])
   