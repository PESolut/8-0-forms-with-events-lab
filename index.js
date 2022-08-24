console.log("Code your solution!")
// we have to grab our form
const form = document.querySelector('form')
console.log(form)

// adding input functionality
// listen to the form

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log('Form has been submitted')
})

// next step is to target our forms via event 
// ex: name = event.target.name.value if the form name was 'name'




// on form submission: call a function
    // store data into a variable
    // create a new li element
    // text content is added to our ul, to which is retrieved from our variable that stores input data to end of ul
    // this dynamically created element is now appeneded to our ul

// adding the crossout functionality
// populate post input functioanlity completion



// log: form listening functionality completed