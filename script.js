function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    
    console.log("New recommendation added");
    showPopup(true);

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    
    // IMPROVEMENT: Use the element's explicit ID for selection instead of a placeholder selector
    let nameInput = document.getElementById('recommendation_name');
    let name = nameInput.value.trim() || "Anonymous";

    element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span><br><br>- ${name}`;
    
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea and name input
    recommendation.value = "";
    nameInput.value = "";
  }
}

function showPopup(bool) {
  const popup = document.getElementById('popup');
  if (bool) {
    popup.style.visibility = 'visible';
    popup.style.opacity = '1'; // Added opacity transition in CSS for smooth fade
  } else {
    popup.style.visibility = 'hidden';
    popup.style.opacity = '0';
  }
}
