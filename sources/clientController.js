app.controller("SCHEMANAMEController", ["$scope", "SCHEMANAMEFactory", function ($scope, SCHEMANAMEFactory) {
    $scope.VARIABLENAMEs = [];
    $scope.VARIABLENAME = {};

    $scope.getSCHEMANAMEs = function() {
        SCHEMANAMEFactory.index(function (data) {
            $scope.VARIABLENAMEs = data;
        });
    }
    $scope.getSCHEMANAMEs();

    function setSCHEMANAME(data) {
        $scope.VARIABLENAME = data;
    }
    $scope.show = function() {
        SCHEMANAMEFactory.show($routeParams.id, setSCHEMANAME);
    }

    $scope.create = function (newSCHEMANAME)
    {
        SCHEMANAMEFactory.create(newSCHEMANAME, function (data) {
            $scope.VARIABLENAMEs.push(data);
            newSCHEMANAME = {};
        });
    };

    $scope.update = function() {
        SCHEMANAMEFactory.update($routeParams.id, $scope.newSCHEMANAME);
        newSCHEMANAME = {};
    }

    $scope.delete = function(id) {
        SCHEMANAMEFactory.delete(id, setSCHEMANAMEs);
    }
}]);
