document.querySelector('.add-btn').addEventListener('click', function() {
    alert('Add to Library functionality coming soon!');
});

const actionButtons = document.querySelectorAll('.action-btn');

actionButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert(`${button.textContent} functionality coming soon!`);
    });
});

// Language switch
document.querySelector('.language-btn').addEventListener('click', function() {
    alert('Language switch functionality coming soon!');
});
