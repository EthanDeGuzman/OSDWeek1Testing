import { greet } from "./greet";

describe('greet - S00199053 Ethan De Guzman', () => {
    it('should include the name in the message', () =>{
        expect(greet('Frank')).toContain('Frank')
    })
})