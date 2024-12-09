document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', {
            name: form.elements[0].value,
            email: form.elements[1].value,
            message: form.elements[2].value
        });
        
        // Clear the form after submission
        form.reset();
    });
});
