var expect = chai.expect;

/*
describe( 'MyFunction', function() {
    describe('#doSomething', function() {
        it('should concatenate the two parameters', function() {
            var x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
        });

        it('should throw an error if first parameter is not a string', function() {
            expect(function() {
                testThis(5, 5);
            }).to.throw(Error);
        });
    });
});
*/

describe( 'MyFunctions', function() {
    describe('#testThis', function() {
        it('should show if number of cards is correct', function() {
            var x = testThis(player1.hand.length);
            expect(x).to.equal(26);
        });

        it('should throw an error if parameter does not equal 26', function() {
            expect(function() {
                testThis(27);
            }).to.throw(Error);
        });
    });
});
