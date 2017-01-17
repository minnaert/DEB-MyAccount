// JavaScript Document

(function() {
  "use strict";

  var app = angular.module("mainApp", ["ngTable"]);

   
    app.controller('custAcctCtrl', ['$scope', function ($scope) {
            $scope.sectHome = true;
            $scope.sectSelectAccounts = false;        
            $scope.sectReviewPayment = false;

            $scope.sectConfirmPayment = false;
            $scope.sectSchedulePayment = false;
            $scope.sectScheduleReviewPayment = false;

        
            $scope.hasPower = true;
            $scope.hasGas = false;
            $scope.multipleCommodity = false;
            $scope.multipleCustomers = true;
            $scope.multipleAccounts = false;

            $scope.selIdx = null;

            $scope.selectRow = function(selIdx){
                $scope.index = selIdx;
                console.log(selIdx)
            }        
//            $scope.linkPayment ="deb-myact-paynow-select-Accounts.html";

            // Get & set Home
            $scope.setsectHome=function(val)
            {
                $scope.sectHome = val;
                console.log("called home")
            }

            $scope.getsectHome=function(){
                return($scope.sectHome);
            }        

            // Get & set Select Accounts
            $scope.setsectSelectAccounts=function(val)
            {
                $scope.sectSelectAccounts = val;
                console.log("called select accounts")
            }

            $scope.getsectSelectAccounts=function(){
                return($scope.sectSelectAccounts);
            }        
            
            // Get & set Review Payment
            $scope.setsectReviewPayment=function(val)
            {
                $scope.sectReviewPayment = val;
                console.log("called review payment")
            }

            $scope.getsectReviewPayment=function(){
                return($scope.sectReviewPayment);
            }        

            // Get & set Confirm Payment
            $scope.setsectConfirmPayment=function(val)
            {
                $scope.sectConfirmPayment = val;
                console.log("called review payment")
            }

            $scope.getsectConfirmPaymentt=function(){
                return($scope.sectConfirmPayment);
            }        

            // Get & set Schedule Payment
            $scope.setsectSchedulePayment=function(val)
            {
                $scope.sectSchedulePayment = val;
                console.log("called review payment")
            }

            $scope.getSchedulePayment=function(){
                return($scope.sectSchedulePayment);
            }        

            // Get & set Schedule Payment
            $scope.setsectScheduleReviewPayment=function(val)
            {
                $scope.sectScheduleReviewPayment = val;
                console.log("called review payment")
            }

            $scope.getsectScheduleReviewPayment=function(){
                return($scope.sectScheduleReviewPayment);
            }        
            
            
            
        
            // Get & set power
            $scope.sethasPower=function(val)
            {
                $scope.hasPower = val;
                console.log("called has power")
            }

            $scope.gethasPower=function(){
                return($scope.hasPower);
            }        
            // Get & set gas
            $scope.sethasGas=function(val)
            {
                $scope.hasGas = val;
                console.log("called has gas")
            }

            $scope.gethasGas=function(){
                return($scope.hasGas);
            }        

            // Get & set commodity
            $scope.setmultipleCommodity=function(val)
            {
                $scope.multipleCommodity = val;
                console.log("called multiple commodity")
            }

            $scope.getmultipleCommodity=function(){
                return($scope.multipleCommodity);
            }        
            // Get & set customers
            $scope.setmultipleCustomers=function(val)
            {
                $scope.multipleCustomers = val;
                console.log("called multiple customer")
                if (val == false) {
//                    $scope.linkPayment ="deb-myact-paynow-review-payment.html";
                }
            }

            $scope.getmultipleCustomers=function(){
                return($scope.multipleCustomers);
            }        
            // Get & set accounts
            $scope.setmultipleAccounts=function(val)
            {
                $scope.multipleAccounts = val;
                console.log("called multiple customer")
                if (val == false) {
                    console.log("set filter");
//                    changeFilter('accountNumber', '333444555');
                }
            }

            $scope.getmultipleAccounts=function(){
                return($scope.multipleAccounts);
            }        


            // Toggle behavior for specify amount to pay
            $scope.amountToPay = true;
            $scope.editPaymentAmounts = true;
            $scope.toggleAmountToPay = function() {
                $scope.amountToPay = $scope.amountToPay === false ? true: false;
                $scope.editPaymentAmounts = $scope.editPaymentAmounts === false ? true: false;
            };            
            
        }])
        
        app.controller('introController', function(NgTableParams){
            var self = this;

            var dataAccounts = [{commodity: "power", accountNumber: "111222333", invoiceNumber: "PP23456", serviceLocation: "123 Sesame St., New York, NY 10001", invoiceDate: "12-01-2015", dueDate: "12-31-2015", totalDue: 125.00},
                {commodity: "power", accountNumber: "222333444", invoiceNumber: "PP23467", serviceLocation: "123 Sesame St., New York, NY 10002", invoiceDate: "11-01-2015", dueDate: "11-30-2015", totalDue: 225.00},
                {commodity: "power", accountNumber: "333444555", invoiceNumber: "PP23478", serviceLocation: "123 Sesame St., New York, NY 10003", invoiceDate: "10-01-2015", dueDate: "10-31-2015", totalDue: 325.00},
                {commodity: "power", accountNumber: "444555666", invoiceNumber: "PP23489", serviceLocation: "123 Sesame St., New York, NY 10004", invoiceDate: "09-01-2015", dueDate: "09-30-2015", totalDue: 425.00},
                {commodity: "power", accountNumber: "555666777", invoiceNumber: "PP23490", serviceLocation: "1600 Pennsylvania St., Newark, NJ 11022", invoiceDate: "12-01-2015", dueDate: "12-31-2015", totalDue: 525.00},
                {commodity: "gas", accountNumber: "55667788", invoiceNumber: "G12345", serviceLocation: "123 Sesame St., New York, NY 10006", invoiceDate: "12-01-2015", dueDate: "12-31-2015", totalDue: 625.00},
                {commodity: "gas", accountNumber: "55667788", invoiceNumber: "G45678", serviceLocation: "123 Sesame St., New York, NY 10006", invoiceDate: "12-01-2015", dueDate: "12-31-2015", totalDue: 625.00},
                {commodity: "gas", accountNumber: "55667788", invoiceNumber: "G98765", serviceLocation: "123 Sesame St., New York, NY 10006", invoiceDate: "12-01-2015", dueDate: "12-31-2015", totalDue: 625.00},
                {commodity: "gas", accountNumber: "33445566", invoiceNumber: "G23456", serviceLocation: "1600 Pennsylvania St., Newark, NJ 11022", invoiceDate: "12-01-2015", dueDate: "12-31-2015", totalDue: 725.00}
            ];
//            self.tableParams = new NgTableParams({ count: 10}, { counts: [5, 10, 25], dataset: dataAccounts});
            self.tableParamsPower = new NgTableParams({ 
                count: 10,
                filter: { commodity: "power"}
            }, { counts: [5, 10, 25], 
                dataset: dataAccounts
            });
            self.tableParamsGas = new NgTableParams({ 
                group: "accountNumber",
                count: 10,
                filter: { commodity: "gas" }
            }, { counts: [5, 10, 25], 
              dataset: dataAccounts
            }); 
            self.tableParamsGas2 = new NgTableParams({ 
                count: 10,
                filter: { commodity: "gas" }
            }, { counts: [5, 10, 25], 
              dataset: dataAccounts
            }); 

        }) // End controller


        // select checkboxes in table behavior
        var model = {};
        self.model = model;

        // This property is bound to the checkbox in the table header
        model.allItemsSelected = false;

        // Fired when an entity in the table is checked
        self.selectEntity = function () {
            // If any entity is not checked, then uncheck the "allItemsSelected" checkbox
            for (var i = 0; i < model.entities.length; i++) {
                if (!model.entities[i].isChecked) {
                    model.allItemsSelected = false;
                    return;
                }
            }

            // ... otherwise ensure that the "allItemsSelected" checkbox is checked
            model.allItemsSelected = true;
        };        
            
})();



