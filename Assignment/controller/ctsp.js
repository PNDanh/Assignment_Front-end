function CTsanPhamController($scope,$routeParams,$http){
    let coCao_api = "http://localhost:3000/giay_MLB_co-cao";

    $scope.listMLB_coCao = [];

    $http.get(coCao_api)
    .then(function(response){
        $scope.listMLB_coCao = response.data;
    })

    $scope.idHT = $routeParams.id;

    $scope.spgh = {
        id:"",
        ten:"",
        loai:"",
        gia:"",
        img:""
    }

    $scope.themVaoGioHang = function(event){
        $http.post(coCao_api,$scope.spgh)
        .then(function(){
            $scope.listMLB_coCao.push($scope.spgh);
            alert("Thêm vào giỏ hàng thành công");
        })
    }
    
}