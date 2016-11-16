import home from './index';

describe('Controller: Home', function() {
    let $controller;

    beforeEach(angular.mock.module(home));

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it ('name is initialized to World', function() {
        let ctrl = $controller('HomeController');
        expect(ctrl.name).toBe('World');
    });

    it ('changeName sets name to "angular-tips"', function() {
        let ctrl = $controller('HomeController');
        ctrl.changeName();

        expect(ctrl.name).toBe('angular-tips');
    });

    it ('randomName sets name to "angular-tips"', function() {
        let ctrl = $controller('HomeController');
        ctrl.randomName();

        expect(ctrl.name).toMatch(/(John|Elisa|Mark|Annie)/);
    });
});
