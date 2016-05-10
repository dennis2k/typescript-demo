/**
 * Typings
 */
module typings {
    
    //Simple
    
    var num : number;
    var name : string = "Dennis"    
    var age : number = 30;
    var isHappy : boolean = true;
    var isEvil : boolean | string = 'ofc';
    var somethingElse : any = "";
    
    //Collections
    var series : string[] = ['Breaking Bad','Lost', 'Game of thrones']
    var series2 : Array<Person> = [];

    //enums
    enum DeliveryType {Pickup = 1, Delivery = 2};
    var type : DeliveryType = DeliveryType.Pickup;
    
    //Type assertion / type cast
    var someString : any = "Some string";
    var stringLength : number = (<string>someString).length;

    //Type alias
    type StringOrBoolean = string | boolean;     
    
    var alias : StringOrBoolean = true;


    //Generics
    interface Tree<T> {
        value : T;
        parent : T;
        children : T[];
    }
    interface Person {
        name : string;
    }  
        
}
