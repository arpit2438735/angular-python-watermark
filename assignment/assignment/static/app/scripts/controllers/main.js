'use strict';

/**
 * @ngdoc function
 * @name staticApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the staticApp
 */

var MainController = function ($http) {
	var formData = new FormData();
	var vm = this;

	vm.uploadImage = function (file, isWaterMark) {

		if(isWaterMark) {
			formData.append('watermark', file.files[0]);
			return;
		}

		formData.append('image', file.files[0]);
	};


	vm.upload = function () {
		$http.post('/api/image/convert', formData, {
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
		}).then(function (response) {
			vm.newImage = response.data;
		});
	}
};

MainController.$inject = ['$http'];

angular.module('staticApp')
  .controller('MainController', MainController);
