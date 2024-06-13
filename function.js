function getElementIdsByClass(className) {
  // Get all elements with the specified class name
  const elements = document.getElementsByClassName(className);
  
  // Map the elements to their IDs
  const ids = Array.from(elements).map(element => element.id);
  
  // Return the array of IDs
  return ids;
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const classIDs = getElementIdsByClass('className');
        element.innerHTML = classIDs;
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const classIDs = getElementIdsByClass('className');
        element.innerHTML = classIDs;
    }
});

*/