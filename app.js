(function(){
var app = angular.module('store', [ ]);
app.controller('StoreController', function(){
this.product = gem;
});
var gem = [{
name: 'Dodecahedron',
price: 2.95,
description: 'hi how u doing',
canPurchase:true,

},
{
name: "Pentagonal Gem",
price: 5.95,
description: "lwaekfndlaskdfmalskdf.malsdkfnmleaksdf.nlaskd.fmx",
canPurchase: false,
}];
})();