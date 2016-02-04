var flikerApp = angular.module('flikerApp', []);

flikerApp.controller('fliker',['$scope','$http', function ($scope,$http) {
$scope.name="sai";
    //$scope.list=[];
    $scope.images={};
    $scope.text='';
    $scope.submit=function(){
        if($scope.text){
            $scope.list=this.text;
            $scope.text='';
        
            var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?tags="+$scope.list+"&tagmode=any&format=json&jsoncallback=JSON_CALLBACK"
        
        // send AJAX query to Flickr API
         $http.jsonp(flickrAPI)
          .success(function (data) {
          $scope.images = data;
          console.log(data.link);
          $scope.imagesStatus = status;
 console.log(data.found);
        })
        
        // trap error if any
          .error(function (data, status) {
          $scope.images = data;
          $scope.imagesStatus = status;
             console.log("error");
        });
                
        
        }
    };
}]);