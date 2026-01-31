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

// Include Mission & Vision Section
fetch('components/mission_section.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('mission_vision_section').innerHTML = data;
    });

// Include Growth Section
fetch('components/growth_section.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('growth_section').innerHTML = data;
    })

// Include How It Works Section
fetch('components/howitworks.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('how_it_works_section').innerHTML = data;
    })

// Include Case Study Section
fetch('components/case_study_section.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('case_study_section').innerHTML = data;
    })

// Include Business Strategy Section
fetch('components/business_strategy.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('business_strategy_section').innerHTML = data;
    });
