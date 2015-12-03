'use strict';

angular.module('emswebportalApp')
  .controller('MainCtrl', function ($scope, $cookies, $http, $location, $modal) {

    /*
      Overview: Registration page(s) linked by the same controller. Route changes when next button is clicked and
      validation is checked for the current page. Each element(input field) has an object with a watch property (what
      is currently entered in the input field) and a validation property (boolean value that stores whether or not the
      input matches the regex). Upon running the validation check with each key-up, a css style is applied to show
      the user whether or not the information they provided is valid. Modals are added to alert the user of any
      incomplete or incorrect data, and the information contained within the modals are stored as separate HTML files.
      Cookies are applied within the verification function, which runs on every key-up; Which in turn results in up to
      date cookies of every keystroke, but does not retain invalid information. Upon final submission, a final check is
      performed that checks the boolean values of the validation cookies. If validation is successful, then input data
      stored within cookies are then submitted to the database as values in a JSON object. If it is successfully
      submitted, then the user will be directed to a confirmation HTML page, and validation cookies will be cleared to
      prevent multiple submissions by accident.
    */

    //Welcome message
    $scope.welcome = "Welcome";
    $scope.title = "We're glad to have you on board";

    //Initiating ng-model objects and properties ("watch" for user input, "validate" for input validation)
    $scope.address = {
      watch: "",
      validate: ""
    };
    $scope.fname = {
      watch: "",
      validate: ""
    };
    $scope.mname = {
      watch: "",
      validate: ""
    };
    $scope.lname = {
      watch: "",
      validate: ""
    };
    $scope.city = {
      watch: "",
      validate: ""
    };
    $scope.zip = {
      watch: "",
      validate: ""
    };
    $scope.home = {
      watch: "",
      validate: ""
    };
    $scope.alt = {
      watch: "",
      validate: ""
    };
    $scope.email = {
      watch: "",
      validate: ""
    };
    $scope.gender = {
      watch: "",
      validate: ""
    };
    $scope.dob = {
      watch: "",
      validate: ""
    };
    $scope.age = {
      watch: "",
      validate: ""
    };
    $scope.workedbefore = {
      watch: "",
      validate: ""
    };
    $scope.currentemp = {
      watch: "",
      validate: ""
    };
    $scope.currentinschool = {
      watch: "",
      validate: ""
    };
    $scope.fall2015 = {
      watch: "",
      validate: ""
    };
    $scope.school = {
      watch: "",
      validate: ""
    };
    $scope.grade = {
      watch: "",
      validate: ""
    };
    $scope.referred = {
      watch: "",
      validate: ""
    };
    $scope.income = {
      watch: "",
      validate: ""
    };
    $scope.household = {
      watch: "",
      validate: ""
    };
    $scope.ethnicity = {
      watch: "",
      validate: ""
    };
    $scope.state = {
      watch: "",
      validate: ""
    };
    $scope.famethnicity = {
      watch: "",
      validate: ""
    };
    $scope.hispanicfam = {
      watch: "",
      validate: ""
    };
    $scope.fostercare = {
      watch: "",
      validate: ""
    };
    $scope.publicassist = {
      watch: "",
      validate: ""
    };
    $scope.essay = {
      watch: "",
      validate: ""
    };


    //Cookie setting function
    $scope.setCookie = function() {
        //sets the current ng-model value (.watch) to a cookie key
      $cookies.put('cAddress', $scope.address.watch, {'expires': $scope.expireDate});
          //sets the current ng-model validation value (.validate) to a cookie key
        $cookies.put('cAddressValid', $scope.address.validate, {'expires': $scope.expireDate});
      $cookies.put('cFname', $scope.fname.watch, {'expires': $scope.expireDate});
        $cookies.put('cFnameValid', $scope.fname.validate, {'expires': $scope.expireDate});
      $cookies.put('cMname', $scope.mname.watch, {'expires': $scope.expireDate});
        $cookies.put('cMnameValid', $scope.mname.validate, {'expires': $scope.expireDate});
      $cookies.put('cLname', $scope.lname.watch, {'expires': $scope.expireDate});
        $cookies.put('cLnameValid', $scope.lname.validate, {'expires': $scope.expireDate});
      $cookies.put('cCity', $scope.city.watch, {'expires': $scope.expireDate});
        $cookies.put('cCityValid', $scope.city.validate, {'expires': $scope.expireDate});
      $cookies.put('cZip', $scope.zip.watch, {'expires': $scope.expireDate});
        $cookies.put('cZipValid', $scope.zip.validate, {'expires': $scope.expireDate});
      $cookies.put('cHome', $scope.home.watch, {'expires': $scope.expireDate});
        $cookies.put('cHomeValid', $scope.home.validate, {'expires': $scope.expireDate});
      $cookies.put('cAlt', $scope.alt.watch, {'expires': $scope.expireDate});
        $cookies.put('cAltValid', $scope.alt.validate, {'expires': $scope.expireDate});
      $cookies.put('cEmail', $scope.email.watch, {'expires': $scope.expireDate});
        $cookies.put('cEmailValid', $scope.email.validate, {'expires': $scope.expireDate});
      $cookies.put('cGender', $scope.gender.watch, {'expires': $scope.expireDate});
        $cookies.put('cGenderValid', $scope.gender.validate, {'expires': $scope.expireDate});
      $cookies.put('cDOB', $scope.dob.watch, {'expires': $scope.expireDate});
        $cookies.put('cDOBValid', $scope.dob.validate, {'expires': $scope.expireDate});
      $cookies.put('cAge', $scope.age.watch, {'expires': $scope.expireDate});
        $cookies.put('cAgeValid', $scope.age.validate, {'expires': $scope.expireDate});
      $cookies.put('cWorkedbefore', $scope.workedbefore.watch, {'expires': $scope.expireDate});
        $cookies.put('cWorkedbeforeValid', $scope.workedbefore.validate, {'expires': $scope.expireDate});
      $cookies.put('cCurrentemp', $scope.currentemp.watch, {'expires': $scope.expireDate});
        $cookies.put('cCurrentempValid', $scope.currentemp.validate, {'expires': $scope.expireDate});
      $cookies.put('cCurrentinschool', $scope.currentinschool.watch, {'expires': $scope.expireDate});
        $cookies.put('cCurrentinschoolValid', $scope.currentinschool.validate, {'expires': $scope.expireDate});
      $cookies.put('cFall2015', $scope.fall2015.watch, {'expires': $scope.expireDate});
        $cookies.put('cFall2015Valid', $scope.fall2015.validate, {'expires': $scope.expireDate});
      $cookies.put('cSchool', $scope.school.watch, {'expires': $scope.expireDate});
        $cookies.put('cSchoolValid', $scope.school.validate, {'expires': $scope.expireDate});
      $cookies.put('cGrade', $scope.grade.watch, {'expires': $scope.expireDate});
        $cookies.put('cGradeValid', $scope.grade.validate, {'expires': $scope.expireDate});
      $cookies.put('cReferred', $scope.referred.watch, {'expires': $scope.expireDate});
        $cookies.put('cReferredValid', $scope.referred.validate, {'expires': $scope.expireDate});
      $cookies.put('cIncome', $scope.income.watch, {'expires': $scope.expireDate});
        $cookies.put('cIncomeValid', $scope.income.validate, {'expires': $scope.expireDate});
      $cookies.put('cHousehold', $scope.household.watch, {'expires': $scope.expireDate});
        $cookies.put('cHouseholdValid', $scope.household.validate, {'expires': $scope.expireDate});
      $cookies.put('cEthnicity', $scope.ethnicity.watch, {'expires': $scope.expireDate});
        $cookies.put('cEthnicityValid', $scope.ethnicity.validate, {'expires': $scope.expireDate});
      $cookies.put('cState', $scope.state.watch, {'expires': $scope.expireDate});
        $cookies.put('cStateValid', $scope.state.validate, {'expires': $scope.expireDate});
      $cookies.put('cFamethnicity', $scope.famethnicity.watch, {'expires': $scope.expireDate});
        $cookies.put('cFamethnicityValid', $scope.famethnicity.validate, {'expires': $scope.expireDate});
      $cookies.put('cHispanicfam', $scope.hispanicfam.watch, {'expires': $scope.expireDate});
        $cookies.put('cHispanicfamValid', $scope.hispanicfam.validate, {'expires': $scope.expireDate});
      $cookies.put('cFostercare', $scope.fostercare.watch, {'expires': $scope.expireDate});
        $cookies.put('cFostercareValid', $scope.fostercare.validate, {'expires': $scope.expireDate});
      $cookies.put('cPublicassist', $scope.publicassist.watch, {'expires': $scope.expireDate});
        $cookies.put('cPublicassistValid', $scope.publicassist.validate, {'expires': $scope.expireDate});

      //These two do not require validation other than being non-null
      $cookies.put('cEssay', $scope.essay.watch, {'expires': $scope.expireDate});
      $cookies.put('cAge', $scope.age.watch, {'expires': $scope.expireDate});
    };

    //Required function for storing CKeditor cookies
    CKEDITOR.on('instanceCreated', function(e) {
      e.editor.on('change', function () {
        $scope.verification($scope.essay, $scope.essayRegex);
      });
    });

    //Prototype verification function for input fields
    $scope.verification = function(input, regex){
      //Test what is currently entered in the input field against the appropriate regex
      if (regex.test(input.watch)) {
        input.validate = true;
        //Set the cookies when the validation becomes true. No need to keep invalid cookies
        $scope.setCookie();
      } else {
        input.validate = false;
      }

    };

    //Prototype verification function for drop-downs
    $scope.dropdownVerify = function(input) {

      if (input.watch === "") {
        input.validate = false;
      } else {
        input.validate = true;
        //Set the cookies when the validation becomes true. No need to keep invalid cookies
        $scope.setCookie();
      }

    };

    //Getting cookies if possible (cookies cannot be null or else an error is thrown)
    if ($cookies.get('cAddress', 'cAddressValid') != null) {
      //Setting the ng-model object to be the value of the cookies
      $scope.address.watch = $cookies.get('cAddress');
      $scope.address.validate = $cookies.get('cAddressValid');
    } else {}
    if ($cookies.get('cFname', 'cFnameValid') != null) {
      $scope.fname.watch = $cookies.get('cFname');
      $scope.fname.validate = $cookies.get('cFnameValid');
    } else {}
    if ($cookies.get('cMname', 'cMnameValid') != null) {
      $scope.mname.watch = $cookies.get('cMname');
      $scope.mname.validate = $cookies.get('cMnameValid');
    } else {}
    if ($cookies.get('cLname', 'cLnameValid') != null) {
      $scope.lname.watch = $cookies.get('cLname');
      $scope.lname.validate = $cookies.get('cLnameValid');
    } else {}
    if ($cookies.get('cCity', 'cCityValid') != null) {
      $scope.city.watch = $cookies.get('cCity');
      $scope.city.validate = $cookies.get('cCityValid');
    } else {}
    if ($cookies.get('cZip', 'cZipValid') != null) {
      $scope.zip.watch = $cookies.get('cZip');
      $scope.zip.validate = $cookies.get('cZipValid');
    } else {}
    if ($cookies.get('cHome', 'cHomeValid') != null) {
      $scope.home.watch = $cookies.get('cHome');
      $scope.home.validate = $cookies.get('cHomeValid');
    } else {}
    if ($cookies.get('cAlt', 'cAltValid') != null) {
      $scope.alt.watch = $cookies.get('cAlt');
      $scope.alt.validate = $cookies.get('cAltValid');
    } else {}
    if ($cookies.get('cEmail', 'cEmailValid') != null) {
      $scope.email.watch = $cookies.get('cEmail');
      $scope.email.validate = $cookies.get('cEmailValid');
    } else {}
    if ($cookies.get('cGender', 'cGenderValid') != null) {
      $scope.gender.watch = $cookies.get('cGender');
      $scope.gender.validate = $cookies.get('cGenderValid');
    } else {}
    if ($cookies.get('cDOB', 'cDOBValid') != null) {
      $scope.dob.watch = $cookies.get('cDOB');
      $scope.dob.validate = $cookies.get('cDOBValid');
    } else {}
    if ($cookies.get('cAge', 'cAgeValid') != null) {
      $scope.age.watch = $cookies.get('cAge');
      $scope.age.validate = $cookies.get('cAgeValid');
    } else {}
    if ($cookies.get('cWorkedbefore', 'cWorkedbeforeValid') != null) {
      $scope.workedbefore.watch = $cookies.get('cWorkedbefore');
      $scope.workedbefore.validate = $cookies.get('cWorkedbeforeValid');
    } else {}
    if ($cookies.get('cCurrentemp', 'cCurrentempValid') != null) {
      $scope.currentemp.watch = $cookies.get('cCurrentemp');
      $scope.currentemp.validate = $cookies.get('cCurrentempValid');
    } else {}
    if ($cookies.get('cCurrentinschool', 'cCurrentinschoolValid') != null) {
      $scope.currentinschool.watch = $cookies.get('cCurrentinschool');
      $scope.currentinschool.validate = $cookies.get('cCurrentinschoolValid');
    } else {}
    if ($cookies.get('cFall2015', 'cFall2015Valid') != null) {
      $scope.fall2015.watch = $cookies.get('cFall2015');
      $scope.fall2015.validate = $cookies.get('cFall2015Valid');
    } else {}
    if ($cookies.get('cSchool', 'cSchoolValid') != null) {
      $scope.school.watch = $cookies.get('cSchool');
      $scope.school.validate = $cookies.get('cSchoolValid');
    } else {}
    if ($cookies.get('cGrade', 'cGradeValid') != null) {
      $scope.grade.watch = $cookies.get('cGrade');
      $scope.grade.validate = $cookies.get('cGradeValid');
    } else {}
    if ($cookies.get('cReferred', 'cReferredValid') != null) {
      $scope.referred.watch = $cookies.get('cReferred');
      $scope.referred.validate = $cookies.get('cReferredValid');
    } else {}
    if ($cookies.get('cIncome', 'cIncomeValid') != null) {
      $scope.income.watch = $cookies.get('cIncome');
      $scope.income.validate = $cookies.get('cIncomeValid');
    } else {}
    if ($cookies.get('cHousehold', 'cHouseholdValid') != null) {
      $scope.household.watch = $cookies.get('cHousehold');
      $scope.household.validate = $cookies.get('cHouseholdValid');
    } else {}
    if ($cookies.get('cEthnicity', 'cEthnicityValid') != null) {
      $scope.ethnicity.watch = $cookies.get('cEthnicity');
      $scope.ethnicity.validate = $cookies.get('cEthnicityValid');
    } else {}
    if ($cookies.get('cState', 'cStateValid') != null) {
      $scope.state.watch = $cookies.get('cState');
      $scope.state.validate = $cookies.get('cStateValid');
    } else {}
    if ($cookies.get('cFamethnicity', 'cFamethnicityValid') != null) {
      $scope.famethnicity.watch = $cookies.get('cFamethnicity');
      $scope.famethnicity.validate = $cookies.get('cFamethnicityValid');
    } else {}
    if ($cookies.get('cHispanicfam', 'cHispanicfamValid') != null) {
      $scope.hispanicfam.watch = $cookies.get('cHispanicfam');
      $scope.hispanicfam.validate = $cookies.get('cHispanicfamValid');
    } else {}
    if ($cookies.get('cFostercare', 'cFostercareValid') != null) {
      $scope.fostercare.watch = $cookies.get('cFostercare');
      $scope.fostercare.validate = $cookies.get('cFostercareValid');
    } else {}
    if ($cookies.get('cPublicassist', 'cPublicassistValid') != null) {
      $scope.publicassist.watch = $cookies.get('cPublicassist');
      $scope.publicassist.validate = $cookies.get('cPublicassistValid');
    } else {}
    if ($cookies.get('cAge') != null) {
      $scope.age.watch = $cookies.get('cAge');
    } else {}
    if ($cookies.get('cEssay') != null) {
      $scope.essay.watch = $cookies.get('cEssay');
    } else {}

    //Prototype css styling function
    $scope.styling = function(input){
      //Do nothing if the input is blank (no coloring applied)
      if (input.watch === "") {
      } else if (input.validate) {
        //If valid, apply green coloring to input box
        return {'border-radius': '5px', 'border-color': '#62a60a', 'border-width': '1px', 'background-color': '#F5FFF7'};
      } else {
        //If invalid, apply red coloring to input box
        return {'border-radius': '5px', 'border-color': '#F05D5D', 'border-width': '1px', 'background-color': '#FFF7F8'};
      }

    };

    //Variable for storing route URLs
    $scope.nextUrl = "/RegisterStep2.html";
    $scope.nextUrl2 = "/RegisterStep3.html";
    $scope.errUrl = "app/main/Error.html";
    $scope.submitUrl = "app/main/Success.html";
    $scope.verifySubmit = "app/main/VerifySubmit.html";

    //Arrays for ng-repeat
    $scope.states = [
      "", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA",
      "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR",
      "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ];
    $scope.ethnicities = [
      "", "White American", "Hispanic American", "African American", "Native American", "Asian American",
      "Pacific Islands American", "Other"
    ];
    $scope.grades = [
      "", "9th", "10th", "11th", "12th"
    ];
    $scope.referrals = [
      "", "Newspaper", "Facebook", "Twitter", "LinkedIn", "Job search website", "Friend or acquaintance", "School",
      "Other"
    ];

    //Regular Expressions for input verification
    $scope.nameRegex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
    $scope.emailRegex = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
    $scope.zipRegex = /\b\d{5}\b/;
    $scope.phoneRegex = /^[0-9]*$/;
    $scope.addressRegex = /[A-Za-z0-9'\.\-\s\,]/;
    $scope.dobRegex = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
    $scope.ageRegex = /(^[1-9]?[0-9]{1}$|^100$)/;
    $scope.incomeRegex = /^[0-9]{1,6}$/;
    $scope.cityRegex = /^(?:[a-zA-Z]+(?:[.\/\-,])?\s?)+$/;
    $scope.essayRegex = /([^\s]*)/;


    // Setting a few days for cookie expiration to be used in the age calculation (3 day expiration timer)
    $scope.expireDate = new Date();
    $scope.expireDate.setDate($scope.expireDate.getDate() + 3);

    //Prototype age calculation from Date of Birth input
    $scope.calculateAge = function(birthday) { // Birthday is input from DOB field
      $scope.birthdayDate = Date.parse(birthday); //Date is parsed
      $scope.ageDifMs = Date.now() - $scope.birthdayDate; //Subtract todays date from input DOB
      $scope.ageDate = new Date($scope.ageDifMs); //Milliseconds from epoch
      $scope.age.watch = Math.abs($scope.ageDate.getUTCFullYear() - 1970); //Years from epoch
    };

    //Modal opening template function (on error)
    $scope.openError = function () {

      $scope.modalInstance = $modal.open({
        size: '',
        scope: $scope,
        animation: true,
        templateUrl: $scope.errUrl, //URL for the error modal
        controller: 'MainCtrl'

      });
    };

    //Modal opening template function (on submission verification)
    $scope.openSubmit = function () {

      $scope.modalInstance = $modal.open({
        size: '',
        scope: $scope,
        animation: true,
        templateUrl: $scope.verifySubmit, //URL for the error modal
        controller: 'MainCtrl'

      });
    };

    //Modal closing template function
    $scope.closeModal = function () {

      $scope.modalInstance.close();
    };

    //Options for ng-ckeditor
    $scope.editorOptions = {
      language: 'en',
      uiColor: '#FFFFFF'
    };

    /*
    Prevent navigation if any form is invalid. Multiple functions to test validation on different pages
    */
    //Route change for first page
    $scope.routeChange1 = function(newUrl) {

      //Check for total form validation for step 1
      $scope.totalValid1 = Boolean($scope.address.validate && $scope.fname.validate && $scope.lname.validate &&
      $scope.zip.validate && $scope.home.validate &&
      $scope.email.validate && $scope.ethnicity.validate && $scope.dob.validate &&
      $scope.school.validate && $scope.grade.validate && $scope.referred.validate &&
      $scope.gender.validate && $scope.workedbefore.validate && $scope.currentemp.validate &&
      $scope.currentinschool.validate && $scope.fall2015.validate);

        if ($scope.totalValid1) {
          $location.path(newUrl); //Go to next page (2)
        } else {
          $scope.openError(); //Open error modal
        }

    };
    //Route change for the second page
    $scope.routeChange2 = function(newUrl) {

      //Check for total form validation for step 2
      $scope.totalValid2 = Boolean($scope.income.validate && $scope.household.validate && $scope.hispanicfam.validate &&
      $scope.famethnicity.validate && $scope.fostercare.validate && $scope.publicassist.validate);


        if ($scope.totalValid2) {
          $location.path(newUrl); //Go to next page (3)
        } else {
          $scope.openError(); //Open error modal
        }

    };

    //Information submission function
    $scope.submitInfo = function() {

      //Final Validation check
      $scope.submitValidation = Boolean($cookies.get('cAddressValid') && $cookies.get('cFnameValid') && $cookies.get('cLnameValid') &&
        $cookies.get('cZipValid') && $cookies.get('cHomeValid') &&
        $cookies.get('cEmailValid') && $cookies.get('cEthnicityValid') && $cookies.get('cDOBValid') &&
        $cookies.get('cSchoolValid') && $cookies.get('cGradeValid') && $cookies.get('cReferredValid') &&
        $cookies.get('cGenderValid') && $cookies.get('cWorkedbeforeValid') && $cookies.get('cCurrentempValid') &&
        $cookies.get('cCurrentinschoolValid') && $cookies.get('cFall2015Valid') && $cookies.get('cIncomeValid') &&
        $cookies.get('cHouseholdValid') && $cookies.get('cHispanicfamValid') &&
        $cookies.get('cFamethnicityValid') && $cookies.get('cFostercareValid') && $cookies.get('cPublicassistValid'));

      //Function for getting the date and time of the submission
      $scope.today = new Date();
      $scope.submitTime = $scope.today.toISOString();


      //Function for a more human friendly date and time submission (commented out for possible future use)
      /*
      $scope.dd = $scope.today.getDate();
      $scope.mm = $scope.today.getMonth()+1; //January is 0!
      $scope.yyyy = $scope.today.getFullYear();
      $scope.hh = $scope.today.getHours();
      $scope.mm = $scope.today.getMinutes();
      $scope.ss = $scope.today.getSeconds();

      if($scope.dd<10) {
        $scope.dd='0'+$scope.dd
      }

      if($scope.mm<10) {
        $scope.mm='0'+$scope.mm
      }

      $scope.today = 'Date: '+$scope.mm+'/'+$scope.dd+'/'+$scope.yyyy+' Time: '+$scope.hh+':'+$scope.mm+':'+$scope.ss;
      */


      /*
        Function for posting cookies to the database, *then* redirecting to confirmation page and deleting validation
        cookies to prevent a user from submitting multiple times.
      */
      if ($scope.submitValidation) {
        //Assign cookies to a JSON object, attach to a key, then submit to the DB
        $http.post('http://helloworld.stpaul.city:8080/ems/registration', {
          FirstName: $cookies.get('cFname'),
          MiddleName: $cookies.get('cMname'),
          LastName: $cookies.get('cLname'),
          Address: $cookies.get('cAddress'),
          City: 'Saint Paul',
          State: 'Minnesota',
          Zip: $cookies.get('cZip'),
          PrimaryPhone: $cookies.get('cHome'),
          AltPhone: $cookies.get('cAlt'),
          Email: $cookies.get('cEmail'),
          Gender: $cookies.get('cGender'),
          Ethnicity: $cookies.get('cEthnicity'),
          DOB: $cookies.get('cDOB'),
          Age: $cookies.get('cAge'),
          WorkedForCityBefore: $cookies.get('cWorkedbefore'),
          CurrentlyEmployed: $cookies.get('cCurrentemp'),
          CurrentlyInSchool: $cookies.get('cCurrentinschool'),
          AttendingFall2015: $cookies.get('cFall2015'),
          NameOfSchool: $cookies.get('cSchool'),
          Grade: $cookies.get('cGrade'),
          ReferredBy: $cookies.get('cReferred'),
          FamilyIncome: $cookies.get('cIncome'),
          HouseholdSize: $cookies.get('cHousehold'),
          FamilyEthnicity: $cookies.get('cFamethnicity'),
          HispanicFamily: $cookies.get('cHispanicfam'),
          FosterCare: $cookies.get('cFostercare'),
          PublicAssistance: $cookies.get('cPublicassist'),
          Essay: $cookies.get('cEssay'),
          DateOfSubmission: $scope.submitTime }).then(function() {
            //Change path to the success page when data is submitted
            $location.path('/Success.html');
            //Remove validation cookies to prevent multiple submissions by accident (Just First name for now)
              $cookies.remove('cFnameValid');
          });

          } else {
            $scope.openError(); //Open error modal

          }
    };

  });
