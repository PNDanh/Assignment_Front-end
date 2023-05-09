var myApp = angular.module("myApp", []);

myApp.controller("dangNhap", dangNhap);
function dangNhap($scope, $http) {
    let tkApi = "  http://localhost:3000/tai_khoan";
    $scope.listTk = [];
    $http.get(tkApi)
        .then(function (response) {
            $scope.listTk = response.data;
        })

    $scope.dangNhap = function () {
        const check = 0;
        for (let index = 0; index < $scope.listTk.length; index++) {
            if ($scope.tk === $scope.listTk[index].tk && $scope.mk === $scope.listTk[index].mk) {
                alert("Đăng nhập thành công");
                window.open("../index.html");
                check = 1;
            }
        }
        if (check == 0) {
            alert("Tên tài khoản hoặc mật khẩu không chính xác");
        }
    }

    $scope.tkDangKi = {
        id: "",
        tk: "",
        email: "",
        sdt: "",
        mk: ""
    }

    $scope.onSubmit = function (event) {
        $http.post(tkApi, $scope.tkDangKi)
            .then(function () {
                alert("Đăng kí thành công");
                $scope.listTk.push($scope.tkDangKi);
            })
    }

    $scope.tkMoi = {
        id: "",
        tk: "",
        sdt: "",
        mk: ""
    }

    $scope.onSubmit2 = function (event) {
        const check2 = 0;
        for (let index = 0; index < $scope.listTk.length; index++) {
            if ($scope.tkMoi.tk === $scope.listTk[index].tk && $scope.mkCu === $scope.listTk[index].mk) {
                $scope.tkMoi.sdt = $scope.listTk[index].sdt;
                $scope.tkMoi.email = $scope.listTk[index].email;
                $http.put(tkApi + "/" + $scope.listTk[index].id,$scope.tkMoi)
                .then(function(response){
                    $scope.listTk[index] = response.data;
                })
                alert("Đổi mật khẩu thành công");
                check2 = 1;
            }
        }
        if (check2 == 0) {
            alert("Tài khoản của bạn không có trong hệ thống")
        }
    }



}