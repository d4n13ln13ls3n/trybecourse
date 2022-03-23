window.addEventListener("DOMContentLoaded", () => {
  let preferences = {};
  const paragraph = document.querySelector("p");
  const inputs = document.querySelectorAll(".preference");
  const savedPreferences = localStorage.getItem("preferencesFile");

  function retrieveText(event) {
    let retrievedText = event.target.value;
    return retrievedText;
  }

  function storeText(event) {
    const nameId = event.target.id;
    preferences[nameId] = retrieveText(event);
    // how do we update the paragraph style with the new preferences?
    applyChanges();
    localStorage.setItem("preferencesFile", JSON.stringify(preferences));
  }

  function applyChanges() {
    // use .backgroundColor because it was generated dynamically by line 11;
    paragraph.style.backgroundColor = preferences.backgroundColor;
    paragraph.style.fontSize = `${preferences.fontSize}pt`;
    paragraph.style.lineHeight = preferences.lineSpacing;
    paragraph.style.fontFamily = preferences.fontFamily;
    paragraph.style.color = preferences.fontColor;
  }

   inputs.forEach((input) => {
    input.addEventListener("change", storeText);
  });

  if (savedPreferences !== null) {
    preferences = JSON.parse(savedPreferences);
    applyChanges();
  }
}); 