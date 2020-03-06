/* global describe, expect, it, beforeEach, inject */
/* UNIT TESTING. NOT N2N */

describe('coffeeIndexCtrl', () => {
  beforeEach(module('coffeeAssembly')); /* ng-app="coffeeAssembly"  */

  let $rootScope, $controller, Coffee;

  beforeEach(inject((_$rootScope_, _$controller_, _Coffee_) => {
    $rootScope = _$rootScope_;
    Coffee = _Coffee_; /* + ng-factory */
    $controller = _$controller_; /* + ng-controller */
  }));

  describe('filterCoffee', () => {
    let $scope, vm; /* + load in scope */

    beforeEach(() => {
      /* + create a new $scope instance which gives us $scope.$watch etc... */
      $scope = $rootScope.$new();
      /* + instantiate our controller ng-controller="CoffeeIndexCtrl" */
      /* + inject $scope */
      vm = $controller('CoffeeIndexCtrl', { $scope });
      // vm.all = [{ name: 'a', strength: 4, roast: 1 }, { name: 'b', strength: 2, roast: 5 }];
    });

    it('check if FACTORY works', () => {
      const all = Coffee.query();

      expect(all).to.be.a('Array');
      expect(all.length).to.equal(8);
      expect(all[0].name).to.equal('Jamaica Blue Mountain Coffee');
    });

    it('filters coffee by name', () => {
      vm.q = 'Jamaica Blue Mountain Coffee';
      $scope.$digest(); // + trigger any event listers for angular to listen for.

      expect(vm.filtered.length).to.equal(1);
      expect(vm.filtered[0].name).to.equal('Jamaica Blue Mountain Coffee');
    });

    it('filers coffee by strength', () => {
      vm.useStrength = true;
      vm.strength = 3;
      $scope.$digest();

      expect(vm.filtered.length).to.equal(3);
      expect(vm.filtered[1].strength).to.equal(3);
    });
  });
});
