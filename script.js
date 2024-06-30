document.getElementById('show-values').addEventListener('click', function(event) {
    event.preventDefault();
    var valuesBox = document.getElementById('values-box');

    // Show the values box
    valuesBox.style.display = 'block';
});

document.getElementById('close-btn').addEventListener('click', function() {
    var valuesBox = document.getElementById('values-box');
    
    // Hide the values box
    valuesBox.style.display = 'none';
});
