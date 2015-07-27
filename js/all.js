/*global angular*/
;(function($) {
  
    'use strict';
    /**
     * Start module
     */
    var module = angular.module('app', []);

    /**
     * Util functions
     */
    var utils = {
        createdDate: function() {
            var d = new Date();
            var hours = d.getHours();
            var ampm = (parseInt(hours) >= 12) ? "PM" : "AM";
            console.log(ampm);
            return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + hours + ":" + d.getMinutes() + ampm;
        }
    };

    /**
     * Service factory
     */
    module.service('BikersService', ['$http', function($http) {
        var path = 'json';
        var bikers = {};
        bikers.days = function() {
            return $http.get(path + '/mock-days.json').success(function(data) {
                return data;
            });
        };
        bikers.list = function() {
            return $http.get(path + '/mock-bickers.json').success(function(data) {
                bikers = data;
                return bikers;
            });
        };
        return bikers;
    }]);
    /**
     * Constroller of application
     */
    module.controller('BikersController', ['$scope', '$filter', 'BikersService', function($scope, $filter, BikersService) {
        $scope.selectedDays = {};
        BikersService.list().then(function(_result) {
            $scope.bikers = _result.data.bikers;
        }, function(_result) {
            console.log(_result);
        });
        /**
         * Get Days of de Week
         */
        BikersService.days().then(function(_result) {
            $scope.days = _result.data.days;
        }, function(_result) {
            console.log(_result);
        });
        /**
         * Filter selected days
         */
         $scope.daysChoosed = function() {
            var trues = $filter("filter")( $scope.days , {selected:true} );
            if (trues == undefined)
                return false;
            return trues.length;
        }
        function filterDay() {
            var daysData = $filter('filter')($scope.days, {
                selected: true
            });
        }

        function getDaysOfWeek(){
            var daysOfWeek = [];
            for (var i = 0; i < $scope.days.length; i++) {
                if ($scope.days[i].selected) {
                    daysOfWeek.push($scope.days[i].name);
                }
            }
            return daysOfWeek;
        }
        /**
         * Add biker
         */
        $scope.addBiker = function() {
            var copyBiker = {};
            var daysOfWeek = '';
            angular.copy($scope.input, copyBiker);
            daysOfWeek = getDaysOfWeek($scope.days).join();
            $scope.bikers.push({
                name: copyBiker.name,
                email: copyBiker.email,
                city: copyBiker.city,
                rideGroup: copyBiker.rideGroup,
                daysOfWeek: daysOfWeek,
                date: utils.createdDate()
            });
            $scope.input = {};
            copyBiker = null;
            daysOfWeek = null;
            $scope.input.rideGroup = 'Always';
            $(".css-checkbox").attr("checked", false);
            $("input.regular-radio:first").prop('checked', true);
            $('html, body').animate({scrollTop:1000},'50');
        };

        $scope.delete = function(_index) {
            $scope.bikers.splice(_index, 1);
        };
    }]);

}(jQuery));;$(document).ready(function() {
  $(".open, .close").click(function(){
    $(".open, .close").hide();
    $("#content-help").toggle(function(){
      if($(this).css('display')=='none'){
        $('.open').show();
      } else{
        $('.close').show();
      }
    });
  });
});