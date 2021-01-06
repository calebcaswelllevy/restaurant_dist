/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


    exports.__esModule = true;
    exports.About = void 0;
    var load_js_1 = __webpack_require__(/*! ./load.js */ "./src/load.js");
    function About() {
        var mainContent = document.getElementById('content');
        mainContent.innerHTML = "";
        //create the navBar
        load_js_1.makeNavBar();
        var active = "About";
        load_js_1.boldActive(active);
        //Get the body ready to go
        var body = document.createElement('body');
        var title = document.createElement('h1');
        var description = document.createElement('div');
        var image = document.createElement('img');
        image.id = 'about-image';
        description.id = 'description';
        description.textContent = ('El Tarasco is a South Bay classic that has been serving up Michoacán style Mexican food since 1965. Lots of things have changed in Manhattan Beach since then, but Tarasco is holding down the fort. This page is a tribute to my favorite Mexican place since I was a kid. I recommend the Jr. Super Deluxe with red and green mole.');
        title.textContent = 'About';
        image.setAttribute('src', 'images/storefront.png');
        body.appendChild(title);
        body.appendChild(description);
        body.appendChild(image);
        mainContent.appendChild(body);
        load_js_1.makeFooter();
    }
    exports.About = About;
    
    
    /***/ }),
    
    /***/ "./src/gallery.js":
    /*!************************!*\
      !*** ./src/gallery.js ***!
      \************************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
    
    
    exports.__esModule = true;
    exports.Menu = void 0;
    var load_js_1 = __webpack_require__(/*! ./load.js */ "./src/load.js");
    function Menu() {
        var mainContent = document.getElementById('content');
        mainContent.innerHTML = "";
        //draw navbar
        load_js_1.makeNavBar();
        var active = "Menu";
        load_js_1.boldActive(active);
        //get the body ready
        var body = document.createElement('body');
        body.classList.add("container");
        var title = document.createElement('h1');
        //Add images of the menu:
        var menuFront = document.createElement('img');
        // try out root
        menuFront.setAttribute('src', '/images/Menufront.jpg');
        menuFront.setAttribute('alt', 'An image of the front of the menu');
        menuFront.classList.add('menu');
        var menuBack = document.createElement('img');
        //try out one directory back
        menuBack.setAttribute('src', '../images/menuBack.jpg');
        menuBack.setAttribute('alt', 'An image of the back of the menu');
        menuBack.classList.add('menu');
        //Add it to the DOM
        title.textContent = 'Menu';
        body.appendChild(title);
        body.appendChild(menuFront);
        body.appendChild(menuBack);
        mainContent.appendChild(body);
        load_js_1.makeFooter();
    }
    exports.Menu = Menu;
    
    
    /***/ }),
    
    /***/ "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
    
    
    exports.__esModule = true;
    var load_js_1 = __webpack_require__(/*! ./load.js */ "./src/load.js");
    load_js_1.Home();
    
    
    /***/ }),
    
    /***/ "./src/load.js":
    /*!*********************!*\
      !*** ./src/load.js ***!
      \*********************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
    
    
    exports.__esModule = true;
    exports.boldActive = exports.makeNavBar = exports.makeFooter = exports.Home = void 0;
    var gallery_1 = __webpack_require__(/*! ./gallery */ "./src/gallery.js");
    var about_1 = __webpack_require__(/*! ./about */ "./src/about.js");
    var order_1 = __webpack_require__(/*! ./order */ "./src/order.js");
    function Home() {
        var content = document.getElementById("content");
        content.innerHTML = "";
        var mainContent = document.createElement("div");
        makeNavBar();
        var active = "Home";
        boldActive(active);
        //flesh out mainContent:
        var makeBody = (function () {
            var titleHolder = document.createElement('div');
            var title = document.createElement('h1');
            title.textContent = "";
            title.id = 'title';
            titleHolder.appendChild(title);
            mainContent.appendChild(titleHolder);
            content.appendChild(titleHolder);
            // Add an image
            var imageHolder = document.createElement('div');
            var mainImage = document.createElement('img');
            mainImage.classList.add('main-image');
            mainImage.id = 'main-image';
            mainImage.setAttribute("src", "images/main.png");
            content.appendChild(mainImage);
            // Add some text
        })();
        // add the footer below the main content:
        makeFooter();
    }
    exports.Home = Home;
    //build the footer:
    function makeFooter() {
        var content = document.getElementById("content");
        var footer = document.createElement('div');
        footer.innerHTML = '<a href="www.calebcaswelllevy.gitub.io">Website developed by Caleb Caswell-Levy</a>';
        footer.id = "footer";
        content.appendChild(footer);
    }
    exports.makeFooter = makeFooter;
    //build the nav bar
    function makeNavBar() {
        var content = document.getElementById("content");
        var navBar = document.createElement("ul");
        var tabs = ["Home", "Menu", "Order", "About"];
        navBar.id = 'navBar';
        navBar.classList.add('container');
        //Add image to navBar
        var image = document.createElement("img");
        image.setAttribute('src', 'images/header.png');
        image.setAttribute('alt', 'El Tarasco Logo');
        image.id = 'logo';
        navBar.appendChild(image);
        //add elements to NavBar:
        for (var i = 0; i < 4; i++) {
            var listElement = document.createElement("li");
            var link = document.createElement("a");
            link.id = "link-" + i;
            link.classList.add('link');
            link.textContent = tabs[i];
            listElement.classList.add('link-holder');
            listElement.appendChild(link);
            navBar.appendChild(listElement);
        }
        // Add navbar to document
        content.appendChild(navBar);
        //add event listeners to nav bar elements:
        var home = document.getElementById('link-0');
        var menu = document.getElementById('link-1');
        var order = document.getElementById('link-2');
        var about = document.getElementById('link-3');
        home.addEventListener('click', Home);
        menu.addEventListener('click', gallery_1.Menu);
        order.addEventListener('click', order_1.Order);
        about.addEventListener('click', about_1.About);
    }
    exports.makeNavBar = makeNavBar;
    function boldActive(active) {
        var navbar = document.getElementById('navBar');
        for (var i = 1; i < 5; i++) {
            if (navbar.childNodes[i].childNodes[0].textContent === active) {
                navbar.childNodes[i].childNodes[0].classList.add('active');
            }
            else {
                navbar.childNodes[i].childNodes[0].classList.remove('active');
            }
        }
    }
    exports.boldActive = boldActive;
    
    
    /***/ }),
    
    /***/ "./src/order.js":
    /*!**********************!*\
      !*** ./src/order.js ***!
      \**********************/
    /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
    
    
    exports.__esModule = true;
    exports.Order = void 0;
    var load_js_1 = __webpack_require__(/*! ./load.js */ "./src/load.js");
    function Order() {
        var jrDeluxe = {
            name: 'Jr. Super Deluxe Burrito',
            alias: 'jrDeluxe',
            price: 5
        };
        var taco = {
            name: 'Asada Tacos',
            alias: 'taco',
            price: 4
        };
        var relleno = {
            name: 'Chiles Rellenos with rice and beans',
            alias: 'relleno',
            price: 6
        };
        var enchilada = {
            name: 'Cheese Enchiladas with rice and beans',
            alias: 'enchilada',
            price: 6
        };
        var menu = [jrDeluxe, taco, relleno, enchilada];
        //clear the page
        var mainContent = document.getElementById('content');
        mainContent.innerHTML = "";
        //draw the navBar and content
        load_js_1.makeNavBar();
        var active = "Order";
        load_js_1.boldActive(active);
        var content = document.getElementById('content');
        var title = document.createElement('h1');
        title.textContent = 'Order';
        mainContent.appendChild(title);
        //Add menu selections to display
        menu.forEach(function (dish) {
            makeItem(dish);
        });
        load_js_1.makeFooter();
        function makeItem(dish) {
            //make all the pieces of HTML
            var body = document.getElementById('content');
            var item = document.createElement('div');
            var image = document.createElement('img');
            var text = document.createElement('div');
            var counter = makeCounter(dish);
            item.classList.add('item', 'container');
            image.classList.add('food-pic');
            text.classList.add('food-text');
            counter.classList.add('counter');
            //Add content to elements
            text.textContent = dish.name + " - $" + dish.price + ".00";
            image.setAttribute('alt', "A photo of " + dish.name);
            image.setAttribute('src', "images/" + dish.alias + ".png");
            //Add dish HTML elements to display
            item.appendChild(image);
            item.appendChild(text);
            item.appendChild(counter);
            body.appendChild(item);
        }
        function makeCounter(dish) {
            //Make all the pieces:
            var counter = document.createElement('div');
            var sub = document.createElement('button');
            var count = document.createElement('div');
            var add = document.createElement('button');
            //Add classes and IDs:
            counter.classList.add('container', 'counter');
            sub.classList.add('btn', 'count-element');
            add.classList.add('btn', 'count-element');
            count.classList.add('count-element');
            add.id = "add";
            sub.id = "sub";
            count.id = "count";
            //add text
            var orderNumber = 0;
            count.textContent = orderNumber.toString();
            sub.textContent = '-';
            add.textContent = '+';
            //Add event listeners to change order number:
            sub.addEventListener('click', function () {
                orderNumber > 0 ?
                    orderNumber-- :
                    orderNumber = 0;
                count.textContent = orderNumber.toString();
            });
            add.addEventListener('click', function () {
                orderNumber++;
                count.textContent = orderNumber.toString();
            });
            //Put it all together and return it:
            counter.appendChild(sub);
            counter.appendChild(count);
            counter.appendChild(add);
            return counter;
        }
    }
    exports.Order = Order;
    
    
    /***/ })
    
    /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/ 	
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		if(__webpack_module_cache__[moduleId]) {
    /******/ 			return __webpack_module_cache__[moduleId].exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
    /******/ 		};
    /******/ 	
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/ 	
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/ 	
    /************************************************************************/
    /******/ 	// startup
    /******/ 	// Load entry module
    /******/ 	__webpack_require__("./src/index.js");
    /******/ 	// This entry module used 'exports' so it can't be inlined
    /******/ })()
    ;
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL29yZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLGFBQWE7QUFDYixnQkFBZ0IsbUJBQU8sQ0FBQyxnQ0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7Ozs7Ozs7Ozs7QUMzQkE7QUFDYixrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLGdCQUFnQixtQkFBTyxDQUFDLGdDQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7Ozs7Ozs7Ozs7QUNoQ0M7QUFDYixrQkFBa0I7QUFDbEIsZ0JBQWdCLG1CQUFPLENBQUMsZ0NBQVc7QUFDbkM7Ozs7Ozs7Ozs7O0FDSGE7QUFDYixrQkFBa0I7QUFDbEIsa0JBQWtCLEdBQUcsa0JBQWtCLEdBQUcsa0JBQWtCLEdBQUcsWUFBWTtBQUMzRSxnQkFBZ0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuQyxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDL0IsY0FBYyxtQkFBTyxDQUFDLCtCQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7OztBQzVGTDtBQUNiLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2IsZ0JBQWdCLG1CQUFPLENBQUMsZ0NBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7Ozs7OztVQ3BHYjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFib3V0ID0gdm9pZCAwO1xudmFyIGxvYWRfanNfMSA9IHJlcXVpcmUoXCIuL2xvYWQuanNcIik7XG5mdW5jdGlvbiBBYm91dCgpIHtcbiAgICB2YXIgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgLy9jcmVhdGUgdGhlIG5hdkJhclxuICAgIGxvYWRfanNfMS5tYWtlTmF2QmFyKCk7XG4gICAgdmFyIGFjdGl2ZSA9IFwiQWJvdXRcIjtcbiAgICBsb2FkX2pzXzEuYm9sZEFjdGl2ZShhY3RpdmUpO1xuICAgIC8vR2V0IHRoZSBib2R5IHJlYWR5IHRvIGdvXG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib2R5Jyk7XG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5pZCA9ICdhYm91dC1pbWFnZSc7XG4gICAgZGVzY3JpcHRpb24uaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gKCdFbCBUYXJhc2NvIGlzIGEgU291dGggQmF5IGNsYXNzaWMgdGhhdCBoYXMgYmVlbiBzZXJ2aW5nIHVwIE1pY2hvYWPDoW4gc3R5bGUgTWV4aWNhbiBmb29kIHNpbmNlIDE5NjUuIExvdHMgb2YgdGhpbmdzIGhhdmUgY2hhbmdlZCBpbiBNYW5oYXR0YW4gQmVhY2ggc2luY2UgdGhlbiwgYnV0IFRhcmFzY28gaXMgaG9sZGluZyBkb3duIHRoZSBmb3J0LiBUaGlzIHBhZ2UgaXMgYSB0cmlidXRlIHRvIG15IGZhdm9yaXRlIE1leGljYW4gcGxhY2Ugc2luY2UgSSB3YXMgYSBraWQuIEkgcmVjb21tZW5kIHRoZSBKci4gU3VwZXIgRGVsdXhlIHdpdGggcmVkIGFuZCBncmVlbiBtb2xlLicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvaW1hZ2VzL3N0b3JlZnJvbnQucG5nJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgbG9hZF9qc18xLm1ha2VGb290ZXIoKTtcbn1cbmV4cG9ydHMuQWJvdXQgPSBBYm91dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuTWVudSA9IHZvaWQgMDtcbnZhciBsb2FkX2pzXzEgPSByZXF1aXJlKFwiLi9sb2FkLmpzXCIpO1xuZnVuY3Rpb24gTWVudSgpIHtcbiAgICB2YXIgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgLy9kcmF3IG5hdmJhclxuICAgIGxvYWRfanNfMS5tYWtlTmF2QmFyKCk7XG4gICAgdmFyIGFjdGl2ZSA9IFwiTWVudVwiO1xuICAgIGxvYWRfanNfMS5ib2xkQWN0aXZlKGFjdGl2ZSk7XG4gICAgLy9nZXQgdGhlIGJvZHkgcmVhZHlcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JvZHknKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAvL0FkZCBpbWFnZXMgb2YgdGhlIG1lbnU6XG4gICAgdmFyIG1lbnVGcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnVGcm9udC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvaW1hZ2VzL01lbnVmcm9udC5qcGcnKTtcbiAgICBtZW51RnJvbnQuc2V0QXR0cmlidXRlKCdhbHQnLCAnQW4gaW1hZ2Ugb2YgdGhlIGZyb250IG9mIHRoZSBtZW51Jyk7XG4gICAgbWVudUZyb250LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICB2YXIgbWVudUJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtZW51QmFjay5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvaW1hZ2VzL21lbnVCYWNrLmpwZycpO1xuICAgIG1lbnVCYWNrLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0FuIGltYWdlIG9mIHRoZSBiYWNrIG9mIHRoZSBtZW51Jyk7XG4gICAgbWVudUJhY2suY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIC8vQWRkIGl0IHRvIHRoZSBET01cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBib2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1lbnVGcm9udCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtZW51QmFjayk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgbG9hZF9qc18xLm1ha2VGb290ZXIoKTtcbn1cbmV4cG9ydHMuTWVudSA9IE1lbnU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgbG9hZF9qc18xID0gcmVxdWlyZShcIi4vbG9hZC5qc1wiKTtcbmxvYWRfanNfMS5Ib21lKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmJvbGRBY3RpdmUgPSBleHBvcnRzLm1ha2VOYXZCYXIgPSBleHBvcnRzLm1ha2VGb290ZXIgPSBleHBvcnRzLkhvbWUgPSB2b2lkIDA7XG52YXIgZ2FsbGVyeV8xID0gcmVxdWlyZShcIi4vZ2FsbGVyeVwiKTtcbnZhciBhYm91dF8xID0gcmVxdWlyZShcIi4vYWJvdXRcIik7XG52YXIgb3JkZXJfMSA9IHJlcXVpcmUoXCIuL29yZGVyXCIpO1xuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgdmFyIG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWtlTmF2QmFyKCk7XG4gICAgdmFyIGFjdGl2ZSA9IFwiSG9tZVwiO1xuICAgIGJvbGRBY3RpdmUoYWN0aXZlKTtcbiAgICAvL2ZsZXNoIG91dCBtYWluQ29udGVudDpcbiAgICB2YXIgbWFrZUJvZHkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGl0bGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICB0aXRsZS5pZCA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlSG9sZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVIb2xkZXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlSG9sZGVyKTtcbiAgICAgICAgLy8gQWRkIGFuIGltYWdlXG4gICAgICAgIHZhciBpbWFnZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgbWFpbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIG1haW5JbWFnZS5jbGFzc0xpc3QuYWRkKCdtYWluLWltYWdlJyk7XG4gICAgICAgIG1haW5JbWFnZS5pZCA9ICdtYWluLWltYWdlJztcbiAgICAgICAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9pbWFnZXMvbWFpbi5wbmdcIik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkltYWdlKTtcbiAgICAgICAgLy8gQWRkIHNvbWUgdGV4dFxuICAgIH0pKCk7XG4gICAgLy8gYWRkIHRoZSBmb290ZXIgYmVsb3cgdGhlIG1haW4gY29udGVudDpcbiAgICBtYWtlRm9vdGVyKCk7XG59XG5leHBvcnRzLkhvbWUgPSBIb21lO1xuLy9idWlsZCB0aGUgZm9vdGVyOlxuZnVuY3Rpb24gbWFrZUZvb3RlcigpIHtcbiAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9ICc8YSBocmVmPVwid3d3LmNhbGViY2Fzd2VsbGxldnkuZ2l0dWIuaW9cIj5XZWJzaXRlIGRldmVsb3BlZCBieSBDYWxlYiBDYXN3ZWxsLUxldnk8L2E+JztcbiAgICBmb290ZXIuaWQgPSBcImZvb3RlclwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cbmV4cG9ydHMubWFrZUZvb3RlciA9IG1ha2VGb290ZXI7XG4vL2J1aWxkIHRoZSBuYXYgYmFyXG5mdW5jdGlvbiBtYWtlTmF2QmFyKCkge1xuICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIHZhciBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdmFyIHRhYnMgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIk9yZGVyXCIsIFwiQWJvdXRcIl07XG4gICAgbmF2QmFyLmlkID0gJ25hdkJhcic7XG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIC8vQWRkIGltYWdlIHRvIG5hdkJhclxuICAgIHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnaW1hZ2VzL2hlYWRlci5wbmcnKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdFbCBUYXJhc2NvIExvZ28nKTtcbiAgICBpbWFnZS5pZCA9ICdsb2dvJztcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIC8vYWRkIGVsZW1lbnRzIHRvIE5hdkJhcjpcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICB2YXIgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsuaWQgPSBcImxpbmstXCIgKyBpO1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2xpbmsnKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IHRhYnNbaV07XG4gICAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpbmstaG9sZGVyJyk7XG4gICAgICAgIGxpc3RFbGVtZW50LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuICAgIH1cbiAgICAvLyBBZGQgbmF2YmFyIHRvIGRvY3VtZW50XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyB0byBuYXYgYmFyIGVsZW1lbnRzOlxuICAgIHZhciBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmstMCcpO1xuICAgIHZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmstMScpO1xuICAgIHZhciBvcmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5rLTInKTtcbiAgICB2YXIgYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluay0zJyk7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEhvbWUpO1xuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnYWxsZXJ5XzEuTWVudSk7XG4gICAgb3JkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcmRlcl8xLk9yZGVyKTtcbiAgICBhYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFib3V0XzEuQWJvdXQpO1xufVxuZXhwb3J0cy5tYWtlTmF2QmFyID0gbWFrZU5hdkJhcjtcbmZ1bmN0aW9uIGJvbGRBY3RpdmUoYWN0aXZlKSB7XG4gICAgdmFyIG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZCYXInKTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgICAgICBpZiAobmF2YmFyLmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgICBuYXZiYXIuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmF2YmFyLmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuYm9sZEFjdGl2ZSA9IGJvbGRBY3RpdmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLk9yZGVyID0gdm9pZCAwO1xudmFyIGxvYWRfanNfMSA9IHJlcXVpcmUoXCIuL2xvYWQuanNcIik7XG5mdW5jdGlvbiBPcmRlcigpIHtcbiAgICB2YXIganJEZWx1eGUgPSB7XG4gICAgICAgIG5hbWU6ICdKci4gU3VwZXIgRGVsdXhlIEJ1cnJpdG8nLFxuICAgICAgICBhbGlhczogJ2pyRGVsdXhlJyxcbiAgICAgICAgcHJpY2U6IDVcbiAgICB9O1xuICAgIHZhciB0YWNvID0ge1xuICAgICAgICBuYW1lOiAnQXNhZGEgVGFjb3MnLFxuICAgICAgICBhbGlhczogJ3RhY28nLFxuICAgICAgICBwcmljZTogNFxuICAgIH07XG4gICAgdmFyIHJlbGxlbm8gPSB7XG4gICAgICAgIG5hbWU6ICdDaGlsZXMgUmVsbGVub3Mgd2l0aCByaWNlIGFuZCBiZWFucycsXG4gICAgICAgIGFsaWFzOiAncmVsbGVubycsXG4gICAgICAgIHByaWNlOiA2XG4gICAgfTtcbiAgICB2YXIgZW5jaGlsYWRhID0ge1xuICAgICAgICBuYW1lOiAnQ2hlZXNlIEVuY2hpbGFkYXMgd2l0aCByaWNlIGFuZCBiZWFucycsXG4gICAgICAgIGFsaWFzOiAnZW5jaGlsYWRhJyxcbiAgICAgICAgcHJpY2U6IDZcbiAgICB9O1xuICAgIHZhciBtZW51ID0gW2pyRGVsdXhlLCB0YWNvLCByZWxsZW5vLCBlbmNoaWxhZGFdO1xuICAgIC8vY2xlYXIgdGhlIHBhZ2VcbiAgICB2YXIgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgLy9kcmF3IHRoZSBuYXZCYXIgYW5kIGNvbnRlbnRcbiAgICBsb2FkX2pzXzEubWFrZU5hdkJhcigpO1xuICAgIHZhciBhY3RpdmUgPSBcIk9yZGVyXCI7XG4gICAgbG9hZF9qc18xLmJvbGRBY3RpdmUoYWN0aXZlKTtcbiAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgdmFyIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdPcmRlcic7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIC8vQWRkIG1lbnUgc2VsZWN0aW9ucyB0byBkaXNwbGF5XG4gICAgbWVudS5mb3JFYWNoKGZ1bmN0aW9uIChkaXNoKSB7XG4gICAgICAgIG1ha2VJdGVtKGRpc2gpO1xuICAgIH0pO1xuICAgIGxvYWRfanNfMS5tYWtlRm9vdGVyKCk7XG4gICAgZnVuY3Rpb24gbWFrZUl0ZW0oZGlzaCkge1xuICAgICAgICAvL21ha2UgYWxsIHRoZSBwaWVjZXMgb2YgSFRNTFxuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIHZhciBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgY291bnRlciA9IG1ha2VDb3VudGVyKGRpc2gpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nLCAnY29udGFpbmVyJyk7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtcGljJyk7XG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnZm9vZC10ZXh0Jyk7XG4gICAgICAgIGNvdW50ZXIuY2xhc3NMaXN0LmFkZCgnY291bnRlcicpO1xuICAgICAgICAvL0FkZCBjb250ZW50IHRvIGVsZW1lbnRzXG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBkaXNoLm5hbWUgKyBcIiAtICRcIiArIGRpc2gucHJpY2UgKyBcIi4wMFwiO1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiQSBwaG90byBvZiBcIiArIGRpc2gubmFtZSk7XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgXCIvaW1hZ2VzL1wiICsgZGlzaC5hbGlhcyArIFwiLnBuZ1wiKTtcbiAgICAgICAgLy9BZGQgZGlzaCBIVE1MIGVsZW1lbnRzIHRvIGRpc3BsYXlcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY291bnRlcik7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1ha2VDb3VudGVyKGRpc2gpIHtcbiAgICAgICAgLy9NYWtlIGFsbCB0aGUgcGllY2VzOlxuICAgICAgICB2YXIgY291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgc3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHZhciBjb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIC8vQWRkIGNsYXNzZXMgYW5kIElEczpcbiAgICAgICAgY291bnRlci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnY291bnRlcicpO1xuICAgICAgICBzdWIuY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2NvdW50LWVsZW1lbnQnKTtcbiAgICAgICAgYWRkLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdjb3VudC1lbGVtZW50Jyk7XG4gICAgICAgIGNvdW50LmNsYXNzTGlzdC5hZGQoJ2NvdW50LWVsZW1lbnQnKTtcbiAgICAgICAgYWRkLmlkID0gXCJhZGRcIjtcbiAgICAgICAgc3ViLmlkID0gXCJzdWJcIjtcbiAgICAgICAgY291bnQuaWQgPSBcImNvdW50XCI7XG4gICAgICAgIC8vYWRkIHRleHRcbiAgICAgICAgdmFyIG9yZGVyTnVtYmVyID0gMDtcbiAgICAgICAgY291bnQudGV4dENvbnRlbnQgPSBvcmRlck51bWJlci50b1N0cmluZygpO1xuICAgICAgICBzdWIudGV4dENvbnRlbnQgPSAnLSc7XG4gICAgICAgIGFkZC50ZXh0Q29udGVudCA9ICcrJztcbiAgICAgICAgLy9BZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGNoYW5nZSBvcmRlciBudW1iZXI6XG4gICAgICAgIHN1Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9yZGVyTnVtYmVyID4gMCA/XG4gICAgICAgICAgICAgICAgb3JkZXJOdW1iZXItLSA6XG4gICAgICAgICAgICAgICAgb3JkZXJOdW1iZXIgPSAwO1xuICAgICAgICAgICAgY291bnQudGV4dENvbnRlbnQgPSBvcmRlck51bWJlci50b1N0cmluZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb3JkZXJOdW1iZXIrKztcbiAgICAgICAgICAgIGNvdW50LnRleHRDb250ZW50ID0gb3JkZXJOdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vUHV0IGl0IGFsbCB0b2dldGhlciBhbmQgcmV0dXJuIGl0OlxuICAgICAgICBjb3VudGVyLmFwcGVuZENoaWxkKHN1Yik7XG4gICAgICAgIGNvdW50ZXIuYXBwZW5kQ2hpbGQoY291bnQpO1xuICAgICAgICBjb3VudGVyLmFwcGVuZENoaWxkKGFkZCk7XG4gICAgICAgIHJldHVybiBjb3VudGVyO1xuICAgIH1cbn1cbmV4cG9ydHMuT3JkZXIgPSBPcmRlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=