/**
 * Modules
 */
module inventory {
    export class Product {
        name : string;  
        sku : string; 
        category : Category;
    } 
    class Category {
        name : string;
        parent : string;
    }
    //Alright since we are in same module         
    var p = new Product();
    var c = new Category(); 
}
//We need to call the module / namespace 
var p = new inventory.Product();
//var c = new inventory.Category(); // No export = isolated to inventory module scope

module finance {
    
    class OrderLines {
        quantity : number;
        product : inventory.Product;
        
    }        
}

