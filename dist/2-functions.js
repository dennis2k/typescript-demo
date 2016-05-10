var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
/**
 * Functions
 */
var functions;
(function (functions) {
    //Shorthand functions
    var x = ['a', 'b', 'c'];
    //Normal
    x.forEach(function (letter) {
        console.log(letter);
    });
    //fat arrow with body
    x.forEach((letter) => {
        console.log(letter);
    });
    //fat arror single statement
    x.forEach(x => console.log(x));
    class Man {
        constructor() {
            this.age = 30;
            this.name = "";
        }
        //Context of this keyword
        elder(numbers) {
            numbers.forEach(function (n) {
                console.log("Outputting elder() this.age", this.age);
                //this.age += n; //Error as this refers to the current scope
            });
            //Keep the reference to the logical this
            numbers.forEach((n) => {
                this.age += n;
                console.log("Outputting elder() this.age", this.age);
            });
            //compiles to something like
            var __this = this;
            numbers.forEach(function (n) {
                //__this.age += n;
            });
        }
        //x number of arguments
        setName(...names) {
            this.name = names.join(' ');
            console.log(this.name);
        }
        // Optional arguments
        setDelivery(address, zip) {
            this.address = address;
            if (zip)
                this.zip = zip;
        }
        //ES7 support for exponentiation operator
        powerMeUp(number) {
            var x = Math.pow(2, 4); // 2*2*2*2 - Compiles to Math.power(2,4)
        }
        //Method implementation
        setAge(age) {
            if (typeof age == "object")
                this.age = age.age;
            if (typeof age == "number")
                this.age = age;
            if (typeof age == "string")
                this.age = parseInt(age);
        }
    }
    var m = new Man();
    //x number of arguments
    m.setName("Dennis", "AKA", "newb slayer", 'Mortensen', "SADAD", "ASDAD");
    //Show intellisense
    var ingenting = m.setAge(1);
    //Aynsc await - ES6 Only
    class CoolClass {
        doAsyncAwait() {
            var defer = Q.defer();
            setTimeout(() => {
                defer.resolve("HEY HERE IS MY ASYNC AWAIT DATA !!");
            }, 5000);
            return defer.promise;
        }
    }
    //Prefix function with async to use async / await
    function wrapper() {
        return __awaiter(this, void 0, void 0, function* () {
            var coolClass = new CoolClass();
            console.log("Start doing async !! ");
            var asyncData = yield coolClass.doAsyncAwait();
            console.log("Done doing async !! ", asyncData);
        });
    }
    wrapper();
})(functions || (functions = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjItZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxJQUFPLFNBQVMsQ0FnSGY7QUFoSEQsV0FBTyxTQUFTLEVBQUMsQ0FBQztJQUVkLHFCQUFxQjtJQUVyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFFdEIsUUFBUTtJQUNSLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxNQUFNO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFFRixxQkFBcUI7SUFDckIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU07UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBRUYsNEJBQTRCO0lBQzVCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUvQjtRQUFBO1lBQ1ksUUFBRyxHQUFZLEVBQUUsQ0FBQztZQUNsQixTQUFJLEdBQVksRUFBRSxDQUFDO1FBeUQvQixDQUFDO1FBckRHLHlCQUF5QjtRQUN6QixLQUFLLENBQUMsT0FBa0I7WUFFcEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNuRCw0REFBNEQ7WUFDaEUsQ0FBQyxDQUFDLENBQUE7WUFFRix3Q0FBd0M7WUFDeEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDdkQsQ0FBQyxDQUFDLENBQUE7WUFFRiw0QkFBNEI7WUFDNUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFDO2dCQUN0QixrQkFBa0I7WUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLEtBQWdCO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBRUQscUJBQXFCO1FBQ3JCLFdBQVcsQ0FBQyxPQUFnQixFQUFFLEdBQWE7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDO2dCQUNILElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLENBQUM7UUFFRCx5Q0FBeUM7UUFDekMsU0FBUyxDQUFDLE1BQWU7WUFDckIsSUFBSSxDQUFDLEdBQUcsU0FBQSxDQUFDLEVBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyx3Q0FBd0M7UUFDNUQsQ0FBQztRQU9ELHVCQUF1QjtRQUN2QixNQUFNLENBQUMsR0FBUztZQUNaLEVBQUUsQ0FBQSxDQUFDLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sR0FBRyxJQUFJLFFBQVEsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDbkIsRUFBRSxDQUFBLENBQUMsT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDO2dCQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFFbEIsdUJBQXVCO0lBQ3ZCLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUUsV0FBVyxFQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQTtJQUVwRSxtQkFBbUI7SUFDbkIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUc1Qix3QkFBd0I7SUFDeEI7UUFFSSxZQUFZO1lBQ1IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXRCLFVBQVUsQ0FBQztnQkFDUCxLQUFLLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBO1lBRVAsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFFRCxpREFBaUQ7SUFDakQ7O1lBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7WUFDcEMsSUFBSSxTQUFTLEdBQUcsTUFBTSxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQyxTQUFTLENBQUMsQ0FBQTtRQUNqRCxDQUFDO0tBQUE7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUMsRUFoSE0sU0FBUyxLQUFULFNBQVMsUUFnSGYiLCJmaWxlIjoiMi1mdW5jdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRnVuY3Rpb25zXHJcbiAqLyAgICBcclxubW9kdWxlIGZ1bmN0aW9ucyB7XHJcbiAgIFxyXG4gICAgLy9TaG9ydGhhbmQgZnVuY3Rpb25zXHJcbiAgICBcclxuICAgIHZhciB4ID0gWydhJywnYicsJ2MnXTtcclxuICAgIFxyXG4gICAgLy9Ob3JtYWxcclxuICAgIHguZm9yRWFjaChmdW5jdGlvbihsZXR0ZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsZXR0ZXIpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL2ZhdCBhcnJvdyB3aXRoIGJvZHlcclxuICAgIHguZm9yRWFjaCgobGV0dGVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobGV0dGVyKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy9mYXQgYXJyb3Igc2luZ2xlIHN0YXRlbWVudFxyXG4gICAgeC5mb3JFYWNoKHggPT4gY29uc29sZS5sb2coeCkpO1xyXG5cclxuICAgIGNsYXNzIE1hbiB7XHJcbiAgICAgICAgcHJpdmF0ZSBhZ2UgOiBudW1iZXIgPSAzMDtcclxuICAgICAgICBwcml2YXRlIG5hbWUgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHByaXZhdGUgYWRkcmVzcyA6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHppcCA6IHN0cmluZztcclxuICAgICAgICBcclxuICAgICAgICAvL0NvbnRleHQgb2YgdGhpcyBrZXl3b3JkXHJcbiAgICAgICAgZWxkZXIobnVtYmVycyA6IG51bWJlcltdKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBudW1iZXJzLmZvckVhY2goZnVuY3Rpb24obikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPdXRwdXR0aW5nIGVsZGVyKCkgdGhpcy5hZ2VcIix0aGlzLmFnZSlcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5hZ2UgKz0gbjsgLy9FcnJvciBhcyB0aGlzIHJlZmVycyB0byB0aGUgY3VycmVudCBzY29wZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9LZWVwIHRoZSByZWZlcmVuY2UgdG8gdGhlIGxvZ2ljYWwgdGhpc1xyXG4gICAgICAgICAgICBudW1iZXJzLmZvckVhY2goKG4pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWdlICs9IG47XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk91dHB1dHRpbmcgZWxkZXIoKSB0aGlzLmFnZVwiLHRoaXMuYWdlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9jb21waWxlcyB0byBzb21ldGhpbmcgbGlrZVxyXG4gICAgICAgICAgICB2YXIgX190aGlzID0gdGhpcztcclxuICAgICAgICAgICAgbnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKG4pIHtcclxuICAgICAgICAgICAgICAgIC8vX190aGlzLmFnZSArPSBuO1xyXG4gICAgICAgICAgICB9KSAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy94IG51bWJlciBvZiBhcmd1bWVudHNcclxuICAgICAgICBzZXROYW1lKC4uLm5hbWVzIDogc3RyaW5nW10gKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWVzLmpvaW4oJyAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lKTsgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gT3B0aW9uYWwgYXJndW1lbnRzXHJcbiAgICAgICAgc2V0RGVsaXZlcnkoYWRkcmVzcyA6IHN0cmluZywgemlwPyA6IHN0cmluZykgIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gYWRkcmVzcztcclxuICAgICAgICAgICAgaWYoemlwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy56aXAgPSB6aXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vRVM3IHN1cHBvcnQgZm9yIGV4cG9uZW50aWF0aW9uIG9wZXJhdG9yXHJcbiAgICAgICAgcG93ZXJNZVVwKG51bWJlciA6IG51bWJlcikge1xyXG4gICAgICAgICAgICB2YXIgeCA9IDIgKiogNDsgLy8gMioyKjIqMiAtIENvbXBpbGVzIHRvIE1hdGgucG93ZXIoMiw0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL01ldGhvZCBvdmVybG9hZFxyXG4gICAgICAgIHNldEFnZShhZ2UgOiBudW1iZXIpIDogdm9pZDtcclxuICAgICAgICBzZXRBZ2UoYWdlIDogc3RyaW5nKSA6IHZvaWQ7XHJcbiAgICAgICAgc2V0QWdlKHsgYWdlIDogbnVtYmVyIH0pIDogdm9pZDtcclxuICAgICAgICBcclxuICAgICAgICAvL01ldGhvZCBpbXBsZW1lbnRhdGlvblxyXG4gICAgICAgIHNldEFnZShhZ2UgOiBhbnkpIDogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBhZ2UgPT0gXCJvYmplY3RcIikgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFnZSA9IGFnZS5hZ2U7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBhZ2UgPT0gXCJudW1iZXJcIikgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFnZSA9IGFnZTtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGFnZSA9PSBcInN0cmluZ1wiKSBcclxuICAgICAgICAgICAgICAgIHRoaXMuYWdlID0gcGFyc2VJbnQoYWdlKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbSA9IG5ldyBNYW4oKTtcclxuXHJcbiAgICAvL3ggbnVtYmVyIG9mIGFyZ3VtZW50c1xyXG4gICAgbS5zZXROYW1lKFwiRGVubmlzXCIsXCJBS0FcIixcIm5ld2Igc2xheWVyXCIsICdNb3J0ZW5zZW4nLFwiU0FEQURcIixcIkFTREFEXCIpXHJcblxyXG4gICAgLy9TaG93IGludGVsbGlzZW5zZVxyXG4gICAgdmFyIGluZ2VudGluZyA9IG0uc2V0QWdlKDEpO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAvL0F5bnNjIGF3YWl0IC0gRVM2IE9ubHlcclxuICAgIGNsYXNzIENvb2xDbGFzcyB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9Bc3luY0F3YWl0KCkge1xyXG4gICAgICAgICAgICB2YXIgZGVmZXIgPSBRLmRlZmVyKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlZmVyLnJlc29sdmUoXCJIRVkgSEVSRSBJUyBNWSBBU1lOQyBBV0FJVCBEQVRBICEhXCIpO1xyXG4gICAgICAgICAgICB9LDUwMDApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZGVmZXIucHJvbWlzZTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9QcmVmaXggZnVuY3Rpb24gd2l0aCBhc3luYyB0byB1c2UgYXN5bmMgLyBhd2FpdFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gd3JhcHBlcigpIHtcclxuICAgICAgICB2YXIgY29vbENsYXNzID0gbmV3IENvb2xDbGFzcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnQgZG9pbmcgYXN5bmMgISEgXCIpXHJcbiAgICAgICAgdmFyIGFzeW5jRGF0YSA9IGF3YWl0IGNvb2xDbGFzcy5kb0FzeW5jQXdhaXQoKTsgICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZSBkb2luZyBhc3luYyAhISBcIixhc3luY0RhdGEpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHdyYXBwZXIoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
