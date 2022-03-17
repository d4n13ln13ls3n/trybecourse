// window.addEventListener("DOMContentLoaded", () => {
  let preferences = {};
  const paragraph = document.querySelector("p");
  const inputs = document.querySelectorAll(".preferences");
  const savedPreferences = localStorage.getItem("preferencesFile");

  function retrieveText(event) {
    let retrievedText = event.target.value;
    return retrievedText;
  }

  function storeText(event) {
    const nameId = event.target.id;
    preferences[nameId] = retrievedText(event);
    // how do we update the paragraph style with the new preferences?
    applyChanges();
    localStorage.setItem("preferencesFile", JSON.stringify(preferences));
  }

  function applyChanges() {
    // use .backgroundColor because it was generated dynamically by line 11;
    console.log(preferences);
    paragraph.style.backgroundColor = preferences.backgroundColor;
    paragraph.style.fontSize = preferences.fontSize;
    paragraph.style.lineHeight = preferences.lineSpacing;
    paragraph.style.fontFamily = preferences.fontFamily;
    paragraph.style.color = preferences.fontColor;
  }

  /* for(let i =0; i < inputs.length; i += 1) {
      const input = inputs[i];
      input.addEventListener('change', storeText);
  } */

  inputs.forEach((input) => {
    input.addEventListener("change", storeText);
  });

  /*if (savedPreferences !== undefined) {
    preferences = JSON.parse(savedPreferences);
    applyChanges();
  } */
// }); 

//connect store Text to the inputs
// load preferences from local storage
//input.addEventListener('input', replaceText);

// - save the user's preferences in local storage variables, so they can be used to alter page's attributes and also be available the next time they log in
//sync savedPreferences with the paragraphy styles
