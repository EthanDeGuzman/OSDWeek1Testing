import {getCurrencies} from './currencies';

describe('currencies - S00199053 Ethan De Guzman', () => {
    it('should contain USD', () =>{
        expect(getCurrencies()).toContain('USD');
    })
    it('should contain GDP', () =>{
        expect(getCurrencies()).toContain('GDP');
    })
    it('should contain EUR', () =>{
        expect(getCurrencies()).toContain('EUR');
    })
    it('should not contain Yen', () =>{
        expect(getCurrencies()).not.toContain('Yen');
    })
})