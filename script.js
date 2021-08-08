
// const accordionHeader = document.querySelectorAll('.accordion__header');
// accordionHeader.forEach(accordion => {
//     accordion.addEventListener('click', ()=> {

//         // Toggle Event
//         accordion.classList.toggle('active');

//         // Next Element
//         const accordionItem = accordion.nextElementSibling;

//         // check active class inside the accordionHeader class
//         if (accordion.classList.contains('active')) {
//             accordionItem.style.maxHeight = accordionItem.scrollHeight + 'px';
//         }else{
//             accordionItem.style.maxHeight = 0;
//         }
//     })
// })



// Get all Accordion and Panel
let accHeading = document.querySelectorAll(".accordion__header");
let accPanel = document.querySelectorAll(".accordion__body");

for (let i = 0; i < accHeading.length; i++) {
    // Execute whenever an accordion is clicked 
    accHeading[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight) {
           hidePanels();     // Hide All open Panels 
        } else {
           showPanel(this);  // Show the panel
        } 
    };
}

// Function to Show a Panel
function showPanel(elem) {
  hidePanels();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
}

// Function to Hide all shown Panels
function hidePanels() {
  for (let i = 0; i < accPanel.length; i++) {
      accPanel[i].style.maxHeight = null;
      accHeading[i].classList.remove("active");
  }
}