import 'babel-polyfill'
import updateUi from '../client/js/updatePage'


describe('Test that function updateUi exists' , () => {
    test('It should return true', async () => {
        expect(updateUi).not.toBeNull();
    });
});