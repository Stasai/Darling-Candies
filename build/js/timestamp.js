function addTimestamp() {
    // Get the current timestamp
    var timestamp = new Date().toISOString();

    // Set the timestamp value to the hidden input field
    document.getElementById('Timestamp').value = timestamp;
    
    // Optionally, log the timestamp to the console for debugging
    console.log("Timestamp added:", timestamp);
    
    // Continue with the form submission
    return true;
  }