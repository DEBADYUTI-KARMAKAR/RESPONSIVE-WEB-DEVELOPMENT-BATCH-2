let myapp = angular.module('myapp',[]);

myapp.controller('myappcontroller',['$scope', function($scope){

    $scope.institute =[ 
        {
            name:"Debadyuti",
            course:"Node Js",
            fees:100
        },
        {
            name:"Ayan",
            course:"Java",
            fees:80
        },
        {
            name:"Saheb",
            course:"Python",
            fees:56
        }

    ];
   


}]);

