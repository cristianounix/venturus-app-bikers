describe('Bikers Test', function () {
    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('BikersController', {
          $scope: scope
      });
    }));

    it('deve objeter uma lista de bikers', function () {
        expect(this.$scope.bikers.length).toBe(6);
    });
    
    it('deve objeter uma lista de bikers', function () {

        it('deve adicionar um novo ítem à lista com dados do escopo', function () {
            biker = {
                name: 'Teste',
                email: 'teste@gmail.com',
                city: 'Campinas',
                rideGroup: 'Always',
                daysOfWeek: 'Sun,Mon',
                date: utils.createdDate()
            };
            $scope.addBiker(biker);

            expect(this.$scope.bikers.length).toBe(7);

            expect(this.$scope.bikers[7].email).toBe('teste@gmail.com');
        });
    });
    
});