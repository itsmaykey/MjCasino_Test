
 app.controller('dashboardCtrlr', ['$scope', '$http', '$filter', function (s, h, f) {

    console.log("Hello");


     s.p = [
        {
            id: 'JL_1',
            name: 'Royal Fishing',
            category: 'FISHING',
            image_url: 'https://trendytreasures.art/game/JL/FISH/JL_1.png',
            other_field: null,
            languages: 'de,en,es,fr,hi,hk,id,it,ja,ko,my,pt,ru,th,tl,tr,vi,zh',
            platforms: 'H5,WEB',
            technology: 'PHP'
        },
        // Add more game objects here if needed
    ];
    
    // Example usage:
    console.log(s.p[0].name); // Outputs 'Royal Fishing'
  

}])