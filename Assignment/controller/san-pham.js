function sanPhamController($scope, $http){
    let coCao_api = "http://localhost:3000/giay_MLB_co-cao";
    let coThap_api = "http://localhost:3000/giay_MLB_co-thap";
    let coTrung_api = "http://localhost:3000/giay_MLB_co-trung";

    $scope.viTriHienTai = -1;
    $scope.listMLB_coCao = [];
    $scope.listMLB_coThap = [];
    $scope.listMLB_coTrung = [];

    $http.get(coCao_api)
    .then(function(response){
        $scope.listMLB_coCao = response.data;
    })

    $http.get(coThap_api)
    .then(function(response){
        $scope.listMLB_coThap = response.data;
    })

    $http.get(coTrung_api)
    .then(function(response){
        $scope.listMLB_coTrung = response.data;
    })

    // Delete
    $scope.xoa = function(index){
        var idSP = $scope.listMLB_coCao[index].id;
        $http.delete(coCao_api+"/"+idSP)
        .then(function(response){
            alert("Xóa thành công");
            $scope.listMLBcoCao.plice(index, 1);
        })
    }

    $scope.xoa2 = function(index){
        var idSP = $scope.listMLB_coThap[index].id;
        $http.delete(coThap_api+"/"+idSP)
        .then(function(response){
            alert("Xóa thành công");
            $scope.listMLB_coThap.splice(index, 1);
        })
    }

    $scope.xoa3 = function(index){
        var idSP = $scope.listMLB_coTrung[index].id;
        $http.delete(coTrung_api+"/"+idSP)
        .then(function(response){
            alert("Xóa thành công");
            $scope.listMLB_coTrung.splice(index, 1);
        })
    }

    // showDetails

    $scope.mlb = {
        id: "",
        ten: "",
        loai: "",
        gia: "",
        img: ""
    }

    $scope.hienThi = function(index){
        $scope.viTriHienTai = index;
        var idSP = $scope.listMLB_coCao[index].id;
        $http.get(coCao_api+"/"+idSP)
        .then(function(response){
            $scope.mlb = response.data;
        })
    }

    $scope.hienThi2 = function(index){
        $scope.viTriHienTai = index;
        var idSP = $scope.listMLB_coThap[index].id;
        $http.get(coThap_api+"/"+idSP)
        .then(function(response){
            $scope.mlb = response.data;
        })
    }

    $scope.hienThi3 = function(index){
        $scope.viTriHienTai = index;
        var idSP = $scope.listMLB_coTrung[index].id;
        $http.get(coTrung_api+"/"+idSP)
        .then(function(response){
            $scope.mlb = response.data;
        })
    }

    // Xóa trắng

    $scope.dong = function(){
        $scope.mlb = {
            id: "",
            ten: "",
            loai: "",
            gia: "",
            img: ""
        }
    }

    $scope.onSubmit = function(event){
        if($scope.viTriHienTai==-1){
            if($scope.mlb.loai==="bigball"){
                $http.post(coCao_api,$scope.mlb)
                .then(function(){
                    alert("Thêm thành công");
                    $scope.listMLB_coCao.push($scope.mlb);
                })
            }
            else if($scope.mlb.loai==="playball"){
                $http.post(coThap_api,$scope.mlb)
                .then(function(){
                    alert("Thêm thành công");
                    $scope.listMLB_coThap.push($scope.mlb);
                })
            }
            else{
                $http.post(coTrung_api,$scope.mlb)
                .then(function(){
                    alert("Thêm thành công");
                    $scope.listMLB_coTrung.push($scope.mlb);
                })   
            }
        }
        else{
            if($scope.mlb.loai==="bigball"){
                let id = $scope.listMLB_coCao[$scope.viTriHienTai].id;
                $http.put(coCao_api+"/"+id,$scope.mlb)
                .then(function(){
                    $scope.viTriHienTai = -1;
                })
            }
            else if($scope.mlb.loai==="playball"){
                let id = $scope.listMLB_coThap[$scope.viTriHienTai].id;
                $http.put(coThap_api+"/"+id,$scope.mlb)
                .then(function(){
                    $scope.viTriHienTai = -1;
                }) 
            }
            else{
                let id = $scope.listMLB_coTrung[$scope.viTriHienTai].id;
                $http.put(coTrung_api+"/"+id,$scope.mlb)
                .then(function(){
                    $scope.viTriHienTai = -1;
                }) 
            }
        
        }
    }

}
