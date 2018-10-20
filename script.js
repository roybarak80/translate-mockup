var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);

app.controller('Ctrl', function ($scope) {

    $scope.primaryLanguage = 'english';
    $scope.secondaryLanguage = 'german';

    // Define the desegnate fields for translate
    $scope.inputLanguageField = '';
    $scope.outputLanguageField = [];

    $scope.clearTranslateField = function () {
        $scope.inputTranslated = '';
        $scope.outputLanguageField = [];

    }

    $scope.changeLanguage = function (isPressed) {

        // Show clear button and letters count
        $scope.isWriteMode = true;
        if (isPressed) {
            $scope.inputTranslated = '';
            $scope.outputLanguageField = [];
        }

        var currPrimaryLanguage = '';
        var currSecondaryLanguage = '';
        // Define Languages
        var german = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var chinese = ".!@#$5G9P06*<>?:{}[_+]AcErP~,`";

        //Switch language 
        switch ($scope.primaryLanguage) {
            case 'german':
                currPrimaryLanguage = german;
                break;

            case 'chinese':
                currPrimaryLanguage = chinese;
                break;

            case 'english':
                currPrimaryLanguage = [];
                break;

        }

        switch ($scope.secondaryLanguage) {
            case 'german':
                currSecondaryLanguage = german;
                break;

            case 'chinese':
                currSecondaryLanguage = chinese;
                break;

            case 'english':
                currSecondaryLanguage = [];
                break;

        }

        return [currPrimaryLanguage, currSecondaryLanguage];

    }

    $scope.translateText = function (e, input, currSelectedLang) {

        var currLanguage = $scope.changeLanguage();
        var translateOutPutArr = $scope.translateOutPut(e, currLanguage)

        var currInput = $scope.inputTranslated;
        var currOutput = $scope.outputLanguageField;

        var outStr = '';

        if (currOutput.length > 0) {

            if (translateOutPutArr[1].length > 0) {
                var currOutputArr = $scope.outputLanguageField.split('');
                currOutputArr.push(translateOutPutArr[1]);
                outStr = currOutputArr.join('');
            } else {
                outStr = currInput;
            }

        } else {
            if (translateOutPutArr[1].length > 0) {
                var currOutputArr = [];
                currOutputArr.push(translateOutPutArr[1]);
                outStr = currOutputArr.join('');
            } else {
                outStr = currInput;
            }
        }

        $scope.outputLanguageField = outStr;

    }

    $scope.translateOutPut = function (e, currSelectedLanguage) {

        var languagesOutArr = [];
        for (var ind01 = 0; ind01 < currSelectedLanguage.length; ind01++) {
            var currSelectedLanguageItem = currSelectedLanguage[ind01];

            if (currSelectedLanguageItem.length != 0) {

                switch (e.keyCode) {
                    case 32:
                        languagesOutArr.push(' ');
                        break;

                    case 188:
                        languagesOutArr.push(',');
                        break;

                    case 49:
                        languagesOutArr.push('!');
                        break;

                    case 186:
                        languagesOutArr.push(';');
                        break;

                    default:
                        var rnum = Math.floor(Math.random() * currSelectedLanguageItem.length);
                        currInputLastChar = currSelectedLanguageItem.substring(rnum, rnum + 1);
                        languagesOutArr.push(currInputLastChar);
                }

            } else {
                languagesOutArr.push('');
            }

        }

        return languagesOutArr;
    }

    $scope.switchFields = function () {
        
        var currInput = $scope.inputTranslated;
        var currOutput = $scope.outputLanguageField;

        $scope.outputLanguageField = currInput;
        $scope.inputTranslated = currOutput;
    }
});