// Include Header
fetch('components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header_section').innerHTML = data;
    });

// Include Footer
fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer_section').innerHTML = data;
    })


// Include Banner
fetch('components/hero-banner.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('hero_section').innerHTML = data;
    })