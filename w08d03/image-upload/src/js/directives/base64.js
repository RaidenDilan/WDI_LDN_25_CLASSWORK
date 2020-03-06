angular
  .module('birdApp')
  .directive('base64', base64);

function base64() {
  const fileReader = new FileReader();
  return {
    restrict: 'A',
    require: 'ngModel',
    link($scope, element, attrs, ngModel) {

      // once you've load do this function which loads the file.
      fileReader.onload = function fileLoaded() {
        // console.log(fileReader.result);
        ngModel.$setViewValue(fileReader.result); // uplaoding the ng-model before the file uploads to the wherever
      };

      // console.log(element);
      element.on('change', (e) => {  // on is pure javascript and $on is angular version
        // console.log(e.dataTransfer.files);
        // console.log(e.target.files || e.dataTransfer.files); // e.target.files is Chrome & Safari then e.dataTransfer.files is all other browers
        const file = (e.target.files || e.dataTransfer.files)[0]; // getting hold of the image file
        fileReader.readAsDataURL(file); // this is gonna read the file data
      });
    }
  };
}
