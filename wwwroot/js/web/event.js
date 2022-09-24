
let navbar = document.querySelector(".navbar");
let background_blur = document.querySelector(".background_blur");

//EventHandler => Takes charge of adding and removing classes to and from elements
function eventHandler(eventElement, showElement, event="mouseover", action="show", repeat="once", background="none") {
    if (repeat == "multiple") {
        for (let i = 0; i < eventElement.length; i++) {
            events(eventElement[i], showElement[i], event, action, background);
        }
    }
    else if (repeat == "once") {
        events(eventElement, showElement, event, action, background);
    } else {
        console.log("");
    }
}


//Base Function for EventHandler
function events(eventElement, showElement, event, action, background) {
    try {
        eventElement.addEventListener(event, () => {

            if (event == "mouseover" && showElement == 0) {
                eventElement.classList.add("show");
            }
            else if (event == "mouseleave" && showElement == 0) {
                eventElement.classList.remove("show"); 
            }
            else if (action == "add") {
                showElement.classList.add("show");
                if (background == "blur") {
                    background_blur.classList.add("show");
                    document.body.style.overflow = "hidden";
                }
            }
            else if (action == "hide") {
                showElement.classList.remove("show");
                if (background == "blur") {
                    background_blur.classList.remove("show");
                    document.body.style.overflow = "scroll";
                }
            }
            else if (action == "window") {
                showElement.classList.toggle("scroll");
                eventElement.classList.toggle("scroll");
                if (showElement.classList.contains("scroll")) {
                    document.body.style.overflow = "hidden";
                    navbar.style.height = "80px";
                } else {
                    document.body.style.overflow = "scroll";
                    if (!background_blur.classList.contains("show")) {
                        document.body.style.overflow = "scroll";
                        navbar.style.height = "80px";
                    }
                }
            }
            else if (event == "click" || event == "mouseover") {
                eventElement.classList.toggle("show");
                showElement.classList.toggle("show");
            }
            else if (event == "scroll") {
                showElement.classList.toggle("scroll", window.scrollY > 0);
            }
        })
    } catch(err) {
        console.log("Error: " + err + eventElement + "' (event=" + event + "), " + "(action=" + action + ")");
    }
}






// //Changes Hamburger to X and Backc
// function hamburgerChange(hamburger) {
//     const line1 = document.querySelector('.hamburger1 :nth-child(1)');
//     const line2 = document.querySelector('.hamburger1 :nth-child(2)');
//     const line3 = document.querySelector('.hamburger1 :nth-child(3)');

//     line1.classList.toggle("hamburger_line_active1");
// }