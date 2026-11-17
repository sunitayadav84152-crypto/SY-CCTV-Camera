document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("userName").value;
    const type = document.getElementById("cameraType").value;
    const messageBox = document.getElementById("formMessage");

    messageBox.textContent = `Thank you, ${name}! Our team will call you soon regarding ${type} CCTV setup.`;
    
    this.reset();
});