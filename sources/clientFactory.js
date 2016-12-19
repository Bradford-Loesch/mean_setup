
app.factory("mainFactory", ["$http", function ($http) {

    var factory = {};

    factory.index = function (retreivedItems){
        $http.get("/items").then(function (response) {
            retreivedItems(response.data.items);
        });
    };

    factory.create = function (newItem, finishedCreatingItem){
        $http.post("/items", newItem).then(function (response) {
            finishedCreatingItem(response.data.item);
        });
    };

    return factory;
}]);
