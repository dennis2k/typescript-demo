/**
 * Interfaces
 */
module interfaceAndClasses {
    interface Movie {
        id : number;
        name : string;
        // rating : number;       //break implementation
        description? : string;    //optional
        //[key : string] : any;     //Allows us to do movie['someOtherProperty'] = false;
    }    

    /**
     * Classes
     */
    class MovieService {
        private movies : Movie[];
        private someInput : string; //Obsolete when using private in constructor
        private _version : string = "1.3.3.7"; //Used for our custom getter method
        public static TOP_RATING = 10; //static constant property
        
        constructor(private someInut : string) {   
            this.movies = [];
        }
        
        get version() {
            return "v " + this._version;
        }
        
        addMovie(movie : Movie) : void {
            this.movies.push(movie);
        }
        getProductByName(name) : Movie {
            var candidates = this.movies.filter((movie) => {
                return  movie.name == name;
            })
            return (candidates.length > 0) ? candidates[0] : null;                 
        }
    }
    var movies = new MovieService("SomeStringInput");
    
    
    //Add objects that keeps the interface
    movies.addMovie({ id : 0, name : 'God father'});
    movies.addMovie({ id : 1, name : 'Lock stock and 2 smoking barrels', description : "Gangsta movie"});

    //Custom getter
    movies.version; // 'v 1.3.3.7'
    


    //Statuc value
    MovieService.TOP_RATING; // 10;


    //See my awesome autocomplete
    var movie : Movie = movies.getProductByName("God father");
    
    //Allow defining any property
    movie['sadaomeViewRelatedValue'] = true;
    
     




    /**
     *  Abstract classes
     */
    abstract class Person {
        
        name : string;    
        
        abstract  securityClearance() : any
        
        constructor() {
            console.log("Do some very important calculation")
        }
        
        isLoggedIn() : boolean {
            return false;
        }
    }

    class Major extends Person {
        
        constructor() {
            super(); //Call parent constructor
        }
        //Must implement this method
        securityClearance() {
            return "DEFCON5";
        }
    }    
}
