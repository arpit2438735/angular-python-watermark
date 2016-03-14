'use strict';

/**
 * @ngdoc function
 * @name staticApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the staticApp
 */

var MainController = function ($http) {
	var vm = this;

	var formData = new FormData();
	var image = 'image';
	var waterMark = 'watermark';
	var files = {};

	vm.uploadImage = function (file, isWaterMark) {

		if(isWaterMark) {
			files[waterMark] = file.files[0];
			return;
		}

		files[image] = file.files[0];
	};


	vm.upload = function () {
		vm.error = false;
		vm.serverIssue = false;
		if (Object.keys(files).length !== 2) {
			vm.error = true;
			return;
		}

		formData.append(waterMark, files[waterMark]);
		formData.append(image, files[image]);
		files = {};
		vm.info = true;

		$http.post('/api/image/convert', formData, {
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
		}).success(function (response) {
			vm.info = false;
			vm.newImage = response;
		}).error(function() {
			vm.serverIssue = true;
			vm.info = false;
		});
	}
};

MainController.$inject = ['$http'];

angular.module('staticApp')
  .controller('MainController', MainController);
