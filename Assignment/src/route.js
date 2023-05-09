var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix("");
    $routeProvider
    .when("/trang-chu",{
        templateUrl:"./pages/TrangChu.html"
    })
    .when("/gioi-thieu",{
        templateUrl:"./pages/GioiThieu.html"
    })
    .when("/gio-hang",{
        templateUrl:"./pages/GioHang.html"
    })
    .when("/san-pham",{
        templateUrl:"./pages/SanPham.html"
    })
    .when("/quan-ly-danh-muc",{
        templateUrl:"./pages/QuanLyDanhMuc.html"
    })
    .when("/boston",{
        templateUrl:"./pages/Boston.html.html"
    })
    .when("/quan-ly-san-pham-mlb-co-cao",{
        templateUrl:"./pages/QuanLySanPham.html"
    })
    .when("/quan-ly-san-pham-mlb-co-thap",{
        templateUrl:"./pages/QuanLySanPham2.html"
    })
    .when("/quan-ly-san-pham-mlb-co-trung",{
        templateUrl:"./pages/QuanLySanPham3.html"
    })
    .when("/chi-tiet-san-pham/:id",{
        templateUrl: "./pages/ChiTietSanPham.html"
    })
    .when("/dang-nhap",{
        templateUrl:"./pages/DangNhap.html"
    })
    .otherwise({
        redirectTo: "/trang-chu"
    })
})

myApp.controller("sanPhamController",sanPhamController);
myApp.controller("CTsanPhamController",CTsanPhamController);
myApp.controller("danhMucController",danhMucController);


