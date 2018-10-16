var app = angular.module('myApp', []);

app.controller('Ctrl', function ($scope) {

    $scope.currLanguage = 'english';
    $scope.isWriteMode = false;
   
    
    $scope.storedOutput = [];
    $scope.lastTraslatedChar = '';

    $scope.changeLanguage = function(lanStr){

        
       var german = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var chinese = ".!@#$5G9P06*<>?:{}[_+]AcErP~,`";

         //Switch language 
        switch(lanStr){
            case 'german':
            $scope.currLanguage = german;
            break;

            case 'chinese':
            $scope.currLanguage = chinese;
            break;

           default:
           $scope.currLanguage = 'english'

        }
     //$scope.currLanguage;
    }

    $scope.clearTranslateField = function () {

        $scope.output = [];
        $scope.storedOutput = [];
        $scope.input = [];
        $scope.isWriteMode = false;

    }
    $scope.translateStr = function (e) {

        // Gather all input stages
        var currPressedLetter = String.fromCharCode(e.keyCode);
        var currSelectesdLanguage = $scope.currLanguage;

        $scope.isWriteMode = true;
        var currInputTextArr = $scope.input.split('');

        var lastTypedLetter = currInputTextArr[currInputTextArr.length - 1];
        // var lastTypedLetterClone = angular.copy(lastTypedLetter);
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


                if (currPressedLetter.toLowerCase() === $scope.input[$scope.input.length - 2]) {

                    var newTranslatedLetter = $scope.storedOutput[$scope.storedOutput.length - 1]
                    $scope.storedOutput.push(newTranslatedLetter);
                   // console.log($scope.storedOutput);
                    // $scope.storedOutput[$scope.storedOutput.length - 1] = '+';
                } else {
                    var rnum = Math.floor(Math.random() * currSelectesdLanguage.length);
                    lastTypedLetter = currSelectesdLanguage.substring(rnum, rnum + 1);
                    $scope.lastTraslatedChar = lastTypedLetter;

                    $scope.storedOutput.push(lastTypedLetter);
                }


        }


        //var storedLastTranslatedChar = $scope.storedOutput[$scope.storedOutput.length - 1];
        $scope.traslatedTextStr = $scope.storedOutput.join('');

        //  console.log(storedLastTranslatedChar);
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