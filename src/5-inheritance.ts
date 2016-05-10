/**
 * Inheritance
 */
module inheritance {
   
    //Our BaseService with common logic
    abstract class BaseService<T> {
        
        private endpoints : string = "/api/v1/";
        protected resource : string;
        
        constructor(
            protected $http : ng.IHttpService,
            protected $q : ng.IQService ) {
            
        }
        
        public findById(id : string) : ng.IHttpPromise<T>  {
            //some logic
            this.endpoints + this.resource;
            return null;
        }
        public findByQuery(query : any) : ng.IHttpPromise<T[]>  {
            //some logic         
            return null;
        }
        public save(model : T) {
            var isOldRecord : boolean = true;
            if(isOldRecord)
                return this.update(model);
            return this.create(model);
            
            //some logic
        }
        public delete(id : string) : ng.IHttpPromise<T> {
            //some logic
            return null;
        }
        
        //Only visible for classes who inherit from BaseService
        protected update(model : T) {
            //some logic    
        }
        protected create(model : T) {
            //some logic                
        }
    }
    
    //Our model    
    class Product {
        name : string;
        sku : number;
    }
    
    //Our Service
    class ProductService extends BaseService<Product> {
        
        protected resource : string = "products";
        
        //We can define our ProductService specific methods here
        //and we can use our parent methods
         findProductsByCategory(category : string) : ng.IHttpPromise<Product[]> {
             return super.findByQuery("categoryName=" + category);
         }
         
         //We can call protected methods on our parent
         setProductNameToCookie(product : Product) : void  {
             product.name = "Cookie";
             super.update(product); 
             
         }
         
         customMethod () {
             return this.$http.get("smoeotherendpoint");
         }
         //Custom usage of $http?
         
    }
        
    
    //Our controller
    class ProductController {
        
        constructor(private productService : ProductService) {
            //this.productService.update(""); //No go - methods are protected not public
            
            this.productService.findById('someid').then((product) => {
                //Awesome auto complete
                product.data.name;
                product.data.sku;
            })     
                                    
        } 
        
    }
}
