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

// Include About Section
fetch('components/about_section.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('about_section').innerHTML = data;
    });

// Include Service Area Section
fetch('components/service_area_section.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('service_area_section').innerHTML = data;
    });