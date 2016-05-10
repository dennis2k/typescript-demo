/**
 * Delaration files
 */
declare module vertica.base64 {
    export interface IBase64 {
        encode(val : string) : string;
        decode(val : string) : string;
    }
}


class AuthService {
    constructor(
        private Base64Servie : vertica.base64.IBase64
    ) {
        Base64Servie.encode("something");
        Base64Servie.decode("something");
       
    }
}

//cd c:\dev\stockings\app
//tsd install underscore --save
//restart vscode


