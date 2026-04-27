function checkPalindrome() {
    let rawInput = document.getElementById("userInput").value;
    
    // Create a variable to store the 'cleaned' version of the string
    let lowerInput = rawInput.toLowerCase();
    let cleanupInput = lowerInput.replace(/\s+/g, '');
    
    // Create a variable to store the reversed version of the cleaned string
    // Logic hint: Convert string to array -> reverse the array -> join back to string
    
    // Identify the display area in the HTML (the div/span for results)
    
    // Check if the input is empty or just spaces
    // If empty, update innerHTML with a validation error message
    
    // Compare the cleaned string to the reversed string
    // Use an if/else statement
    
        // If they match:
        // Update innerHTML with a success message (e.g., "It is a palindrome!")
        
        // If they don't match:
        // Update innerHTML with a failure message (e.g., "Not a palindrome.")

    // This is CRITICAL: Return false to prevent the form from refreshing the page
    return false;
}