var app = angular.module('myApp', []);

app.controller('Ctrl', function ($scope) {

    $scope.ret = 123
    $scope.currLanguage = 'english';

    $scope.german = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    $scope.chinese = ".!@#$5G9P06*<>?:{}[_+]AcErP~,`";

    $scope.storedOutput = [];
    $scope.translateStr = function (e) {

        var currPressedLetter = String.fromCharCode(e.keyCode);
        var currSelectesdLanguage = $scope.currLanguage;
        var currInputTextClone = angular.copy($scope.input);

        var currInputTextArr = $scope.input.split('');

        var lastTypedLetter = currInputTextArr[currInputTextArr.length - 1];

        // var traslatedTextArr = '';
        // var traslatedTextStr = '';
        switch (e.keyCode) {
            case 32:
                $scope.storedOutput.push(' ');
                break;

            case 188:
                $scope.storedOutput.push(',');
                break;

            case 49:
                $scope.storedOutput.push('!');
                break;

            case 186:
                $scope.storedOutput.push(';');
                break;

                default:
                var rnum = Math.floor(Math.random() * currSelectesdLanguage.length);
                lastTypedLetter = currSelectesdLanguage.substring(rnum, rnum + 1);
                $scope.storedOutput.push(lastTypedLetter);

        }
        // if (currPressedLetter !== " ") {
        //     var rnum = Math.floor(Math.random() * currSelectesdLanguage.length);
        //     lastTypedLetter = currSelectesdLanguage.substring(rnum, rnum + 1);
        //     $scope.storedOutput.push(lastTypedLetter);
        // } else {
        //     $scope.storedOutput.push(' ');
        // }

        $scope.traslatedTextStr = $scope.storedOutput.join('');

        console.log(currPressedLetter);
        $scope.output = $scope.traslatedTextStr;
    }

});

// var currInputTextArr = $scope.input.split('');
// var randomstring = '';


// //Translate
// for (var ind01 = 0; ind01 < currInputTextArr.length; ind01++) {
//     var currValue = currInputTextArr[ind01];
//     var rnum = Math.floor(Math.random() * currSelectesdLanguage.length);
//     randomstring += currSelectesdLanguage.substring(rnum, rnum + 1);
// }
// var currOutputClone = angular.copy(randomstring);
// //$scope.output = $scope.input;
// console.log(randomstring)