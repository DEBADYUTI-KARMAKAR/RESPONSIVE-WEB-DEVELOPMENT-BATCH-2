let myapp = angular.module('myapp',['ngRoute']);

myapp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl:'views/home.html'
        })
        .when('/directory',{
            templateUrl: 'views/directory.html',
            controller: 'myappcontroller'
        }).otherwise({
            redirectTo: '/home'
        })
}]);
myapp.controller('myappcontroller',['$scope', function($scope){

    $scope.removedata = function(institutes){
        let removedata = $scope.institute.indexOf(institutes);
        $scope.institute.splice(removedata,1);
    }
    $scope.addStudent = function(){
        $scope.institute.push({
            name: $scope.student.name,
            course:$scope.student.course,
            fees:parseInt($scope.student.fees),
            available:true
        });
        $scope.student.name="";
        $scope.student.course="";
        $scope.student.fees="";
    };
    $scope.institute =[ 
        {
            name:"Debadyuti",
            course:"Node Js",
            fees:100,
            available: true,
            pic:"content/img/1.jpg"
        },
        {
            name:"Ayan",
            course:"Java",
            fees:80,
            
            available: true,
            pic:"content/img/1.jpg"
        },
        {
            name:"Saheb",
            course:"Python",
            fees:56,
    
            available: false,
            pic:"content/img/1.jpg"
        },
        {
            name:"Parthib",
            course:"C",
            fees:40,
            
            available: true,
            pic:"content/img/1.jpg"
        },
        {
            name:"Rajdeep",
            course:"C++",
            fees:60,
            
            available: true,
            pic:"content/img/1.jpg"
        }

    ];
   
    console.log(angular.toJson($scope.institute));


}]);

