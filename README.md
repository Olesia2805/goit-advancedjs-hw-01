# This hw was considered:

- what are the specifics of the JSON format
- using the JSON object method
- web storage and local storage
- installed node.js and using NPM (node ​​package manager)
- the concept of code modularity
- using ECMAScript Modules syntax
- installing and removing packages and using them in code

## Task 1. Image gallery

- The live page displays a gallery of images from the images array
- The image gallery is styled according to the layout
- The data for the gallery is generated dynamically in JS
- There are no custom listeners
- Linked SimpleLightbox library using npm
- The library instance is initialized after the gallery elements are added to
  the DOM and outside of any functions
- When you click on a gallery element, a modal window of the connected library
  opens, which contains an enlarged version of the clicked image. All the basic
  functionality of the library works
- 250 milliseconds after opening the modal, the content of the alt attribute
  appears at the bottom as an image caption

## Task 2. Feedback form

- The live page displays a form with two form elements and a submit button
- The form is stylized according to the layout
- Input and submit events are listened to on the form
- When entering data into any element of the form, it is written to the local
  storage under the key "feedback-form-state", the saved data does not contain
  spaces around the edges
- Entering data into one form field does not delete data in storage for another
- When updating the page, data from the local storage is substituted into the
  form elements, there are no undefined in the form fields
- When submitting the form, there is a check that both elements of the form are
  filled out
- During form submission, if both form elements are filled out, an object with
  the email, message fields and their current values ​​is output to the console,
  and the storage and form fields are also cleared
- If you enter data into any element of the form after submitting the form, the
  data from the previous submission does not appear in the local storage
