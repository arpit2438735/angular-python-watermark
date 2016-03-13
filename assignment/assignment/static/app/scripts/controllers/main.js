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

	this.uploadImage = function (file, isWaterMark) {

		if(isWaterMark) {
			formData.append('watermark', file.files[0]);
			return;
		}

		formData.append('image', file.files[0]);
	};


	this.upload = function () {
		$http.post('/api/image/convert', formData, {
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
		}).then(function (response) {

		});
	}
};

MainController.$inject = ['$http'];

angular.module('staticApp')
  .controller('MainController', MainController);
