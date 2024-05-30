const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = contactForm.querySelector('#name').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    console.log(name, message);

    const body = `Hello,
    I hope this email finds you well.
    
    I recently visited your portfolio and I'm interested in connecting with you. Please find my message below:
    
    ${message}
    
    Looking forward to hearing from you soon.
    
    Best regards,
    ${name}`;

    const link = `mailto:gauravmishra2401@gmail.com?subject=${encodeURIComponent(`Interest in Connecting: Portfolio Inquiry`)}&body=${body}`;
  
    window.location.href = link;
});