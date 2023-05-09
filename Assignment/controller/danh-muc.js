function danhMucController($scope, $http){
    var API = " http://localhost:3000/danh_muc";
    $scope.listDM = [];
    $http.get(API)
    .then(function(response){
        $scope.listDM = response.data;
    })
}