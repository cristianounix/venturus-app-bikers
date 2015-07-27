describe('Add Bikers', function () {

    describe('BikersController', function () {
        beforeEach(function () {
            this.$scope = {};
            this.controller = new BikersController(this.$scope);
        });

        it('deve objeter uma lista de bikers', function () {
            expect(this.$scope.bikers.length).toBe(6);
        });

        describe('addBikers', function () {
            it('deve adicionar um novo ítem à lista com dados do escopo', function () {
                biker = {
                    name: 'Teste',
                    email: 'teste@gmail.com',
                    city: 'Campinas',
                    rideGroup: 'Always',
                    daysOfWeek: 'Sun,Mon',
                    date: utils.createdDate()
                };
                this.$scope.addBiker(biker);
                
                expect(this.$scope.bikers.length).toBe(7);
                
                expect(this.$scope.bikers[7].email).toBe('teste@gmail.com');
            });
        });

    });

});