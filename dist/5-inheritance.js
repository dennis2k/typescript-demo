/**
 * Inheritance
 */
var inheritance;
(function (inheritance) {
    //Our BaseService with common logic
    class BaseService {
        constructor($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.endpoints = "/api/v1/";
        }
        findById(id) {
            //some logic
            this.endpoints + this.resource;
            return null;
        }
        findByQuery(query) {
            //some logic         
            return null;
        }
        save(model) {
            var isOldRecord = true;
            if (isOldRecord)
                return this.update(model);
            return this.create(model);
            //some logic
        }
        delete(id) {
            //some logic
            return null;
        }
        //Only visible for classes who inherit from BaseService
        update(model) {
            //some logic    
        }
        create(model) {
            //some logic                
        }
    }
    //Our model    
    class Product {
    }
    //Our Service
    class ProductService extends BaseService {
        constructor(...args) {
            super(...args);
            this.resource = "products";
        }
        //We can define our ProductService specific methods here
        //and we can use our parent methods
        findProductsByCategory(category) {
            return super.findByQuery("categoryName=" + category);
        }
        //We can call protected methods on our parent
        setProductNameToCookie(product) {
            product.name = "Cookie";
            super.update(product);
        }
        customMethod() {
            return this.$http.get("smoeotherendpoint");
        }
    }
    //Our controller
    class ProductController {
        constructor(productService) {
            //this.productService.update(""); //No go - methods are protected not public
            this.productService = productService;
            this.productService.findById('someid').then((product) => {
                //Awesome auto complete
                product.data.name;
                product.data.sku;
            });
        }
    }
})(inheritance || (inheritance = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjUtaW5oZXJpdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxJQUFPLFdBQVcsQ0E0RmpCO0FBNUZELFdBQU8sV0FBVyxFQUFDLENBQUM7SUFFaEIsbUNBQW1DO0lBQ25DO1FBS0ksWUFDYyxLQUF1QixFQUN2QixFQUFpQjtZQURqQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtZQUN2QixPQUFFLEdBQUYsRUFBRSxDQUFlO1lBTHZCLGNBQVMsR0FBWSxVQUFVLENBQUM7UUFPeEMsQ0FBQztRQUVNLFFBQVEsQ0FBQyxFQUFXO1lBQ3ZCLFlBQVk7WUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ00sV0FBVyxDQUFDLEtBQVc7WUFDMUIscUJBQXFCO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNNLElBQUksQ0FBQyxLQUFTO1lBQ2pCLElBQUksV0FBVyxHQUFhLElBQUksQ0FBQztZQUNqQyxFQUFFLENBQUEsQ0FBQyxXQUFXLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFMUIsWUFBWTtRQUNoQixDQUFDO1FBQ00sTUFBTSxDQUFDLEVBQVc7WUFDckIsWUFBWTtZQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELHVEQUF1RDtRQUM3QyxNQUFNLENBQUMsS0FBUztZQUN0QixnQkFBZ0I7UUFDcEIsQ0FBQztRQUNTLE1BQU0sQ0FBQyxLQUFTO1lBQ3RCLDRCQUE0QjtRQUNoQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7SUFDZjtJQUdBLENBQUM7SUFFRCxhQUFhO0lBQ2IsNkJBQTZCLFdBQVc7UUFBeEM7WUFBNkIsZUFBb0I7WUFFbkMsYUFBUSxHQUFZLFVBQVUsQ0FBQztRQW9CN0MsQ0FBQztRQWxCRyx3REFBd0Q7UUFDeEQsbUNBQW1DO1FBQ2xDLHNCQUFzQixDQUFDLFFBQWlCO1lBQ3BDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRUQsNkNBQTZDO1FBQzdDLHNCQUFzQixDQUFDLE9BQWlCO1lBQ3BDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUIsQ0FBQztRQUVELFlBQVk7WUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMvQyxDQUFDO0lBR04sQ0FBQztJQUdELGdCQUFnQjtJQUNoQjtRQUVJLFlBQW9CLGNBQStCO1lBQy9DLDRFQUE0RTtZQUQ1RCxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7WUFHL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTztnQkFDaEQsdUJBQXVCO2dCQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUE7UUFFTixDQUFDO0lBRUwsQ0FBQztBQUNMLENBQUMsRUE1Rk0sQ0EyRkYsVUEzRmEsS0FBWCxXQUFXLFFBNEZqQiIsImZpbGUiOiI1LWluaGVyaXRhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEluaGVyaXRhbmNlXHJcbiAqL1xyXG5tb2R1bGUgaW5oZXJpdGFuY2Uge1xyXG4gICBcclxuICAgIC8vT3VyIEJhc2VTZXJ2aWNlIHdpdGggY29tbW9uIGxvZ2ljXHJcbiAgICBhYnN0cmFjdCBjbGFzcyBCYXNlU2VydmljZTxUPiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBlbmRwb2ludHMgOiBzdHJpbmcgPSBcIi9hcGkvdjEvXCI7XHJcbiAgICAgICAgcHJvdGVjdGVkIHJlc291cmNlIDogc3RyaW5nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgJGh0dHAgOiBuZy5JSHR0cFNlcnZpY2UsXHJcbiAgICAgICAgICAgIHByb3RlY3RlZCAkcSA6IG5nLklRU2VydmljZSApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBmaW5kQnlJZChpZCA6IHN0cmluZykgOiBuZy5JSHR0cFByb21pc2U8VD4gIHtcclxuICAgICAgICAgICAgLy9zb21lIGxvZ2ljXHJcbiAgICAgICAgICAgIHRoaXMuZW5kcG9pbnRzICsgdGhpcy5yZXNvdXJjZTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBmaW5kQnlRdWVyeShxdWVyeSA6IGFueSkgOiBuZy5JSHR0cFByb21pc2U8VFtdPiAge1xyXG4gICAgICAgICAgICAvL3NvbWUgbG9naWMgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzYXZlKG1vZGVsIDogVCkge1xyXG4gICAgICAgICAgICB2YXIgaXNPbGRSZWNvcmQgOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoaXNPbGRSZWNvcmQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUobW9kZWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUobW9kZWwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9zb21lIGxvZ2ljXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBkZWxldGUoaWQgOiBzdHJpbmcpIDogbmcuSUh0dHBQcm9taXNlPFQ+IHtcclxuICAgICAgICAgICAgLy9zb21lIGxvZ2ljXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL09ubHkgdmlzaWJsZSBmb3IgY2xhc3NlcyB3aG8gaW5oZXJpdCBmcm9tIEJhc2VTZXJ2aWNlXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZShtb2RlbCA6IFQpIHtcclxuICAgICAgICAgICAgLy9zb21lIGxvZ2ljICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlKG1vZGVsIDogVCkge1xyXG4gICAgICAgICAgICAvL3NvbWUgbG9naWMgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL091ciBtb2RlbCAgICBcclxuICAgIGNsYXNzIFByb2R1Y3Qge1xyXG4gICAgICAgIG5hbWUgOiBzdHJpbmc7XHJcbiAgICAgICAgc2t1IDogbnVtYmVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL091ciBTZXJ2aWNlXHJcbiAgICBjbGFzcyBQcm9kdWN0U2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPFByb2R1Y3Q+IHtcclxuICAgICAgICBcclxuICAgICAgICBwcm90ZWN0ZWQgcmVzb3VyY2UgOiBzdHJpbmcgPSBcInByb2R1Y3RzXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9XZSBjYW4gZGVmaW5lIG91ciBQcm9kdWN0U2VydmljZSBzcGVjaWZpYyBtZXRob2RzIGhlcmVcclxuICAgICAgICAvL2FuZCB3ZSBjYW4gdXNlIG91ciBwYXJlbnQgbWV0aG9kc1xyXG4gICAgICAgICBmaW5kUHJvZHVjdHNCeUNhdGVnb3J5KGNhdGVnb3J5IDogc3RyaW5nKSA6IG5nLklIdHRwUHJvbWlzZTxQcm9kdWN0W10+IHtcclxuICAgICAgICAgICAgIHJldHVybiBzdXBlci5maW5kQnlRdWVyeShcImNhdGVnb3J5TmFtZT1cIiArIGNhdGVnb3J5KTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLy9XZSBjYW4gY2FsbCBwcm90ZWN0ZWQgbWV0aG9kcyBvbiBvdXIgcGFyZW50XHJcbiAgICAgICAgIHNldFByb2R1Y3ROYW1lVG9Db29raWUocHJvZHVjdCA6IFByb2R1Y3QpIDogdm9pZCAge1xyXG4gICAgICAgICAgICAgcHJvZHVjdC5uYW1lID0gXCJDb29raWVcIjtcclxuICAgICAgICAgICAgIHN1cGVyLnVwZGF0ZShwcm9kdWN0KTsgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgY3VzdG9tTWV0aG9kICgpIHtcclxuICAgICAgICAgICAgIHJldHVybiB0aGlzLiRodHRwLmdldChcInNtb2VvdGhlcmVuZHBvaW50XCIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8vQ3VzdG9tIHVzYWdlIG9mICRodHRwP1xyXG4gICAgICAgICBcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgLy9PdXIgY29udHJvbGxlclxyXG4gICAgY2xhc3MgUHJvZHVjdENvbnRyb2xsZXIge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdFNlcnZpY2UgOiBQcm9kdWN0U2VydmljZSkge1xyXG4gICAgICAgICAgICAvL3RoaXMucHJvZHVjdFNlcnZpY2UudXBkYXRlKFwiXCIpOyAvL05vIGdvIC0gbWV0aG9kcyBhcmUgcHJvdGVjdGVkIG5vdCBwdWJsaWNcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZmluZEJ5SWQoJ3NvbWVpZCcpLnRoZW4oKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vQXdlc29tZSBhdXRvIGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LmRhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QuZGF0YS5za3U7XHJcbiAgICAgICAgICAgIH0pICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
