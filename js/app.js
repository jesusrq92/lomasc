angular.module("lomasc", ['ImageZoom'])
	.controller("deptosController", ["$scope", "$http", "$log", function($scope, $http, $log){

		$scope.deptos = {
			"torre1":{
				"deptos":[
					{
						"numero": "PH1",
						"clase": "t1-dPH1",
						"status": "vendido",
						"torre":"1"
					},
					{
						"numero": "1002",
						"clase": "t1-d1002",
						"status": "vendido",
						"torre":"1"
					},
					{
						"numero": "1001",
						"clase": "t1-d1001",
						"status": "vendido",
						"torre":"1"
					},
					{
						"numero": "1000",
						"clase": "t1-d1000",
						"status": "vendido",
						"torre":"1"
					},
					{
						"numero": "901",
						"clase": "t1-d901",
						"status": "vendido",
						"torre":"1"
					},
					{
						"numero": "801",
						"clase": "t1-d801",
						"status": "vendido",
						"torre":"1"
					},
					{
						"numero": "701",
						"clase": "t1-d701",
						"status": "vendido",
						"torre":"1"
					},
					{
						"numero": "601",
						"clase": "t1-d601",
						"status": "disponible",
						"torre":"1"
					},
					{
						"numero": "501",
						"clase": "t1-d501",
						"status": "disponible",
						"torre":"1"
					},
					{
						"numero": "401",
						"clase": "t1-d401",
						"status": "vendido",
						"torre":"1"
					},
					{
						"numero": "301",
						"clase": "t1-d301",
						"status": "vendido",
						"torre":"1"
					},
					{
						"numero": "201",
						"clase": "t1-d201",
						"status": "vendido",
						"torre":"1"
					},
					{
						"numero": "Villa Jardín",
						"clase": "t1-d101",
						"status": "vendido",
						"torre":"1"
					}
				]
			},
			"torre2":{
				"deptos":[
					{
						"numero": "PH2",
						"clase": "t2-dPH2",
						"status": "vendido",
						"torre":"2"
					},
					{
						"numero": "1003",
						"clase": "t2-d1003",
						"status": "vendido",
						"torre":"2"
					},
					{
						"numero": "1002",
						"clase": "t2-d1002",
						"status": "vendido",
						"torre":"2"
					},
					{
						"numero": "1001",
						"clase": "t2-d1001",
						"status": "vendido",
						"torre":"2"
					},
					{
						"numero": "1000",
						"clase": "t2-d1000",
						"status": "disponible",
						"torre":"2"
					},
					{
						"numero": "901",
						"clase": "t2-d901",
						"status": "disponible",
						"torre":"2"
					},
					{
						"numero": "801",
						"clase": "t2-d801",
						"status": "disponible",
						"torre":"2"
					},
					{
						"numero": "701",
						"clase": "t2-d701",
						"status": "vendido",
						"torre":"2"
					},
					{
						"numero": "601",
						"clase": "t2-d601",
						"status": "disponible",
						"torre":"2"
					},
					{
						"numero": "501",
						"clase": "t2-d501",
						"status": "vendido",
						"torre":"2"
					},
					{
						"numero": "401",
						"clase": "t2-d401",
						"status": "disponible",
						"torre":"2"
					},
					{
						"numero": "301",
						"clase": "t2-d301",
						"status": "disponible",
						"torre":"2"
					},
					{
						"numero": "201",
						"clase": "t2-d201",
						"status": "vendido",
						"torre":"2"
					},
					{
						"numero": "Villa Jardín",
						"clase": "t2-d101",
						"status": "vendido",
						"torre":"2"
					}
				]
			},
			"torre3":{
				"deptos":[
					{
						"numero": "PH3",
						"clase": "t3-dPH3",
						"status": "disponible",
						"torre":"3"
					},
					{
						"numero": "1003",
						"clase": "t3-d1003",
						"status": "vendido",
						"torre":"3"
					},
					{
						"numero": "1002",
						"clase": "t3-d1002",
						"status": "vendido",
						"torre":"3"
					},
					{
						"numero": "1001",
						"clase": "t3-d1001",
						"status": "vendido",
						"torre":"3"
					},
					{
						"numero": "1000",
						"clase": "t3-d1000",
						"status": "disponible",
						"torre":"3"
					},
					{
						"numero": "901",
						"clase": "t3-d901",
						"status": "vendido",
						"torre":"3"
					},
					{
						"numero": "801",
						"clase": "t3-d101",
						"status": "vendido",
						"torre":"3"
					},
					{
						"numero": "701",
						"clase": "t3-d701",
						"status": "disponible",
						"torre":"3"
					},
					{
						"numero": "601",
						"clase": "t3-d601",
						"status": "vendido",
						"torre":"3"
					},
					{
						"numero": "501",
						"clase": "t3-d501",
						"status": "disponible",
						"torre":"3"
					},
					{
						"numero": "401",
						"clase": "t3-d401",
						"status": "vendido",
						"torre":"3"
					},
					{
						"numero": "301",
						"clase": "t3-d301",
						"status": "vendido",
						"torre":"3"
					},
					{
						"numero": "201",
						"clase": "t3-d201",
						"status": "disponible",
						"torre":"3"
					},
					{
						"numero": "Villa Jardín",
						"clase": "t3-d101",
						"status": "vendido",
						"torre":"3"
					}
				]
			},
		};
		
		$log.debug($scope.deptos);

		$scope.modalfotos = function(datos){
			$scope.datosDepto = datos;
			$log.debug(datos);
		}
	}])