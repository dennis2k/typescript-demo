/**
 * Functions
 */    
module functions {
   
    //Shorthand functions
    
    var x = ['a','b','c'];
    
    //Normal
    x.forEach(function(letter) {
        console.log(letter);
    })

    //fat arrow with body
    x.forEach((letter) => {
        console.log(letter)
    })
    
    //fat arror single statement
    x.forEach(x => console.log(x));

    class Man {
        private age : number = 30;
        private name : string = "";
        private address : string;
        private zip : string;
        
        //Context of this keyword
        elder(numbers : number[]) {
            
            numbers.forEach(function(n) {
                console.log("Outputting elder() this.age",this.age)
                //this.age += n; //Error as this refers to the current scope
            })
            
            //Keep the reference to the logical this
            numbers.forEach((n) => {
                this.age += n;
                console.log("Outputting elder() this.age",this.age)
            })
            
            //compiles to something like
            var __this = this;
            numbers.forEach(function(n) {
                //__this.age += n;
            })    
        }
        
        //x number of arguments
        setName(...names : string[] ) {
            this.name = names.join(' ');
            console.log(this.name);         
        }
        
        // Optional arguments
        setDelivery(address : string, zip? : string)  {
            this.address = address;
            if(zip)
                this.zip = zip;
        }
        
        //ES7 support for exponentiation operator
        powerMeUp(number : number) {
            var x = 2 ** 4; // 2*2*2*2 - Compiles to Math.power(2,4)
        }
        
        //Method overload
        setAge(age : number) : void;
        setAge(age : string) : void;
        setAge({ age : number }) : void;
        
        //Method implementation
        setAge(age : any) : void {
            if(typeof age == "object") 
                this.age = age.age;
            if(typeof age == "number") 
                this.age = age;
            if(typeof age == "string") 
                this.age = parseInt(age);
        }        
    }

    var m = new Man();

    //x number of arguments
    m.setName("Dennis","AKA","newb slayer", 'Mortensen',"SADAD","ASDAD")

    //Show intellisense
    var ingenting = m.setAge(1);
        
    
    //Aynsc await - ES6 Only
    class CoolClass {
        
        doAsyncAwait() {
            var defer = Q.defer();
            
            setTimeout(() => {
                defer.resolve("HEY HERE IS MY ASYNC AWAIT DATA !!");
            },5000)
            
            return defer.promise;
        }        
    }
    
    //Prefix function with async to use async / await
    async function wrapper() {
        var coolClass = new CoolClass();
        console.log("Start doing async !! ")
        var asyncData = await coolClass.doAsyncAwait();        
        console.log("Done doing async !! ",asyncData)
    }
    
    wrapper();
}
