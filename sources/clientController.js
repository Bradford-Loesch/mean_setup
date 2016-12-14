/*
    "Brains" of the app
    Asks factory to make requests,
    uses data to update scope
*/


app.controller("mainController", ["$scope", "mainFactory", function ($scope, mainFactory) {
    $scope.items = [];

    mainFactory.index(function (items) {
        $scope.items = items;
    });

    $scope.submitForm = function (newItem)
    {
        mainFactory.create(newItem, function (createdItem) {
            $scope.items.push(createdItem);

            // Reset Form
            newItem.title = "";
            newItem.dueDate = "";
        });
    };
}]);
