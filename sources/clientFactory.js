
app.factory('VARIABLENAMEFactory', ['$http', '$routeParams', function ($http, $routeParams) {

    var factory = {};

    factory.index = function(callback) {
        $http.get('/VARIABLENAMEs').then(function(response) {
            VARIABLENAMEs = response.data;
            callback(VARIABLENAMEs);
        }, function(err) {
            console.log(err);
        });
    };

    factory.show = function (callback) {
        $http.get(`/VARIABLENAMEs/${$routeParams.id}`).then(function(response) {
            VARIABLENAME = response.data;
            callback(VARIABLENAME);
        }, function(err) {
            console.log(err);
        });
    }

    factory.create = function(newSCHEMANAME, callback) {
        $http.post('/VARIABLENAMEs', user).then(function(response) {
            callback(response.data);
        }, function(err) {
            console.log(err);
        });
    };

    factory.update = function(newSCHEMANAME, callback) {
        $http.put(`/VARIABLENAMEs/${$routeParams.id}`, user).then(function(response) {
            callback(response);
        }, function(err) {
            console.log(err);
        })
    }

    factory.delete = function(callback) {
        $http.delete(`/VARIABLENAMEs/${$routeParams.id}`).then(function(response) {
            callback(response);
        }, function(err) {
            console.log(err);
        });
    }

    return factory;
}]);
