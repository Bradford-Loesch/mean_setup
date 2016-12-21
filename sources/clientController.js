app.controller("SCHEMANAMEController", ["$scope", "SCHEMANAMEFactory", function ($scope, SCHEMANAMEFactory) {
    $scope.VARIABLENAMEs = [];
    $scope.VARIABLENAME = {};

    $scope.setSCHEMANAMEs = function() {
        SCHEMANAMEFactory.index(function (data) {
            $scope.VARIABLENAMEs = data;
        });
    }
    $scope.setSCHEMANAMEs();

    function setSCHEMANAME(data) {
        $scope.VARIABLENAME = data;
        $scope.newSCHEMANAME = {};
    }

    $scope.show = function() {
        SCHEMANAMEFactory.show(setSCHEMANAME);
    }

    $scope.create = function (newSCHEMANAME)
    {
        SCHEMANAMEFactory.create(newSCHEMANAME, setSCHEMANAMEs);
    };

    $scope.update = function() {
        SCHEMANAMEFactory.update($scope.newSCHEMANAME, setSCHEMANAMEs);
        newSCHEMANAME = {};
    }

    $scope.delete = function(id) {
        SCHEMANAMEFactory.delete(setSCHEMANAMEs);
    }
}]);
