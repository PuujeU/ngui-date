angular.module('date-demo', ['ngRoute', 'ngui-date-component'])
      .config(function ($routeProvider, $locationProvider) {
            $routeProvider
            .when('/date', {
                templateUrl: '/demo/date/view.html',
                controller: DateCtrl,
                page:'date'
            })
      })

      .run(['$rootScope', '$route', function ($rootScope, $route) {
            $rootScope.$on('$routeChangeSuccess', function () {
              $rootScope.$pageName = document.title = $route.current.page;
            });
      }])
;

angular.module('ngui-date-component', [
        'ngui-date'
])
.config(function ($nguiDateConfigProvider) {
        $nguiDateConfigProvider.setBaseTemplateUrl('/template');
})
;
