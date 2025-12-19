// Page Loading
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);
});

// Scroll Progress Bar
window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollProgress').style.width = scrolled + '%';

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Back to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let currentLanguage = 'marathi';

const translations = {
    marathi: {
        'hero-title': 'नगरसेवकपदासाठी जनतेचा विश्वास असलेला उमेदवार',
        'hero-tagline': 'प्रत्येक नागरिकासाठी जबाबदारीने आणि प्रामाणिकपणे सेवा',
        'about-title': 'माहिती',
        'candidate-name': 'रामदास एकनाथ मेदगे',
        'bio-text': 'मी या वॉर्डमध्ये पिढ्यान्‌पिढ्या वास्तव्यास असलेला तुमच्याच घरातील एक सामान्य माणूस आहे. इथेच वाढलो, इथेच शिकत गेलो आणि इथल्याच लोकांसोबत रोजचे सुख-दुःख, अडचणी आणि आनंद अनुभवत आलो आहे. त्यामुळे या वॉर्डच्या समस्या मला सांगाव्या लागत नाहीत — त्या मला स्वतःच्या वाटतात. समाजासाठी काहीतरी करण्याची भावना ही माझ्यासाठी पदाची अपेक्षा नसून, मनातून आलेली जबाबदारी आहे. शिक्षण, आरोग्य, रस्ते आणि मूलभूत नागरी सुविधा यांसारख्या गरजांकडे मी नेहमीच सेवाभावाने, प्रामाणिकपणे आणि सातत्याने पाहण्याचा प्रयत्न केला आहे. गाजावाजा किंवा मोठ्या शब्दांपेक्षा, शांतपणे काम करून लोकांच्या विश्वासाला पात्र ठरणे हीच माझी खरी ओळख राहिली आहे. तुमच्या पाठिंब्याने आणि मार्गदर्शनाने, वॉर्डच्या भल्यासाठी प्रामाणिक प्रयत्न करत राहण्याची माझी नम्र इच्छा आहे.',
        'experience-text': '<strong>अनुभव : </strong> व्यवसाय व्यवस्थापन, सामाजिक कार्य, समुदाय विकास',
        'commitment-text': '<strong>प्रतिबद्धता : </strong> वार्डाचा विकास, पारदर्शकता, सर्वांची सेवा',
        'vision-title': 'आमचा दृष्टिकोन',
        'vision1-title': '🌳 स्वच्छ व हरित वार्ड',
        'vision1-desc': 'कचरा व्यवस्थापन, रस्ते स्वच्छता, वृक्षारोपण कार्यक्रम',
        'vision2-title': '🛣️ उत्तम रस्ते व पायाभूत सुविधा',
        'vision2-desc': 'खड्ड्यांची दुरुस्ती, गल्ली विकास, नाले व जलनिकास सुधार',
        'vision3-title': '💧 पाण्याची व्यवस्था',
        'vision3-desc': 'पाणी पुरवठा सुधार, पाणी नुकसान कमी करणे, टाकी निर्माण',
        'vision4-title': '🏥 आरोग्य सेवा',
        'vision4-desc': 'प्राथमिक आरोग्य केंद्र सुधार, महिला आरोग्य शिबीर',
        'vision5-title': '📚 शिक्षण',
        'vision5-desc': 'शाळा बांधकाम, अभ्यास सामग्री, शिष्यवृत्ती योजना',
        'vision6-title': '👨‍👩‍👧 महिला व बाल कल्याण',
        'vision6-desc': 'आंगणवाडी सुधार, महिला सुरक्षा, क्रीडा मैदान विकास',
        'issues-title': 'वार्डातील समस्या व उपाय',
        'issue1': '🚗 वाहतूक',
        'issue1-sol': 'पार्किंग सुविधा, रस्ते रुंदीकरण',
        'issue2': '🌊 पूर नियंत्रण',
        'issue2-sol': 'जलनिकास सुधार, महानगरपालिका समन्वय',
        'issue3': '💡 विजेची व्यवस्था',
        'issue3-sol': 'रस्त्यावरील दिवे, वीज तूट कमी',
        'issue4': '🏬 बाजार विकास',
        'issue4-sol': 'व्यापारी सुविधा, स्वच्छता मोहीम',
        'achievements-title': 'आमच्या उपलब्धी',
        'ach1': 'सामाजिक कार्यक्रम',
        'ach2': 'हजार व्यक्ती सेवा',
        'ach3': 'वर्षांचा अनुभव',
        'ach4': 'समर्पण',
        'events-title': 'आगामी कार्यक्रम',
        'event1': 'सार्वजनिक सभा',
        'event1-loc': 'वार्ड कार्यालय, सकाळी १०:०० वाजे',
        'event2': 'दरवाजे-दरवाजे मोहिम',
        'event2-loc': 'संपूर्ण वार्ड, सकाळी ९:०० ते संध्याकाळ ६:००',
        'event3': 'युवा संवाद कार्यक्रम',
        'event3-loc': 'सामाजिक केंद्र, संध्याकाळी ५:०० वाजे',
        'gallery-title': 'फोटो गॅलरी',
        'manifesto-title': 'घोषणापत्र (संकल्प)',
        'testimonials-title': 'विश्वास व समर्थन',
        'volunteer-title': 'स्वयंसेवक बना — वार्डाच्या विकासात सहभाग नोंदवा',
        'grievance-title': 'आपली समस्या / तक्रार नोंदवा',
        'footer-text': '© २०२६ नगरसेवक मोहीम. सर्व हक्क राखीव.',
        'footer-subtext': 'भारतीय जनता पार्टी - तुमच्या विश्वासावर आमची प्रतिबद्धता'
    },
    english: {
        'hero-title': 'A Candidate Trusted by the People for the Post of Corporator',
        'hero-tagline': 'Serving every citizen with responsibility and integrity',
        'about-title': 'About Us',
        'candidate-name': 'Ramdas Eknath Medge',
        'bio-text': 'I am a simple resident of this ward, living here for generations, deeply connected to the people and the community. I have grown up here, shared everyday joys and challenges, and closely understood the needs and concerns of our neighborhood. For me, the issues of this ward are not distant problems — they are personal and close to my heart.Serving the community has never been about position or recognition, but about a genuine sense of responsibility and care. I have always tried to approach areas such as education, healthcare, road development, and basic civic facilities with honesty, dedication, and a service-oriented mindset.Rather than making promises or creating noise, I believe in quiet, consistent work and earning people’s trust through action. With your guidance and support, I sincerely wish to continue working for the well-being and progress of our ward.',
        'education-text': '<strong>Education:</strong> Engineering, Corporate Management',
        'experience-text': '<strong>Experience:</strong> Business Management, Social Work, Community Development',
        'commitment-text': '<strong>Commitment:</strong> Ward Development, Transparency, Service to All',
        'vision-title': 'Our Vision',
        'vision1-title': '🌳 Clean & Green Ward',
        'vision1-desc': 'Waste management, street cleanliness, tree plantation programs',
        'vision2-title': '🛣️ Better Roads & Infrastructure',
        'vision2-desc': 'Pothole repairs, lane development, drainage improvements',
        'vision3-title': '💧 Water Management',
        'vision3-desc': 'Improved water supply, reduce water wastage, tank construction',
        'vision4-title': '🏥 Healthcare Services',
        'vision4-desc': 'Primary health center improvements, women\'s health camps',
        'vision5-title': '📚 Education',
        'vision5-desc': 'School construction, study materials, scholarship schemes',
        'vision6-title': '👨‍👩‍👧 Women & Child Welfare',
        'vision6-desc': 'Anganwadi improvements, women\'s safety, sports ground development',
        'issues-title': 'Ward Issues & Solutions',
        'issue1': '🚗 Transportation',
        'issue1-sol': 'Parking facilities, road widening',
        'issue2': '🌊 Flood Control',
        'issue2-sol': 'Drainage improvements, Municipal coordination',
        'issue3': '💡 Electricity Management',
        'issue3-sol': 'Street lights, reduce power cuts',
        'issue4': '🏬 Market Development',
        'issue4-sol': 'Trader facilities, cleanliness campaigns',
        'achievements-title': 'Our Achievements',
        'ach1': 'Social Programs',
        'ach2': 'Thousand+ People Served',
        'ach3': 'Years of Experience',
        'ach4': 'Dedication',
        'events-title': 'Upcoming Events',
        'event1': 'Public Meeting',
        'event1-loc': 'Ward Office, 10:00 AM',
        'event2': 'Door-to-Door Campaign',
        'event2-loc': 'Entire Ward, 9:00 AM to 6:00 PM',
        'event3': 'Youth Dialogue Program',
        'event3-loc': 'Community Center, 5:00 PM',
        'gallery-title': 'Photo Gallery',
        'manifesto-title': 'Manifesto (Sankalp)',
        'testimonials-title': 'Trust & Testimonials',
        'volunteer-title': 'Become a Volunteer — Join Ward Development',
        'grievance-title': 'Submit Your Problem / Grievance',
        'footer-text': '© २०२६ Nagarsevak Campaign. All rights reserved.',
        'footer-subtext': 'Bharatiya Janata Party - Committed to Your Trust'
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'marathi' ? 'english' : 'marathi';
    updateLanguage();
    document.querySelector('.lang-toggle').textContent = currentLanguage === 'marathi' ? 'English' : 'मराठी';
}

function updateLanguage() {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(el => {
        if (translations[currentLanguage][el.id]) {
            el.innerHTML = translations[currentLanguage][el.id];
        }
    });
}

// Animated Counter Function
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Progress Bar Animation
function animateProgressBar(element) {
    const progress = element.getAttribute('data-progress');
    setTimeout(() => {
        element.style.width = progress + '%';
    }, 200);
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    let isValid = true;

    // Name validation
    const name = document.getElementById('name');
    const nameGroup = document.getElementById('nameGroup');
    if (name.value.trim().length < 2) {
        nameGroup.classList.add('error');
        nameGroup.classList.remove('success');
        isValid = false;
    } else {
        nameGroup.classList.remove('error');
        nameGroup.classList.add('success');
    }

    // Phone validation
    const phone = document.getElementById('phone');
    const phoneGroup = document.getElementById('phoneGroup');
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.value)) {
        phoneGroup.classList.add('error');
        phoneGroup.classList.remove('success');
        isValid = false;
    } else {
        phoneGroup.classList.remove('error');
        phoneGroup.classList.add('success');
    }

    // Email validation
    const email = document.getElementById('email');
    const emailGroup = document.getElementById('emailGroup');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailGroup.classList.add('error');
        emailGroup.classList.remove('success');
        isValid = false;
    } else {
        emailGroup.classList.remove('error');
        emailGroup.classList.add('success');
    }

    // Message validation
    const message = document.getElementById('message');
    const messageGroup = document.getElementById('messageGroup');
    if (message.value.trim().length < 10) {
        messageGroup.classList.add('error');
        messageGroup.classList.remove('success');
        isValid = false;
    } else {
        messageGroup.classList.remove('error');
        messageGroup.classList.add('success');
    }

    return isValid;
}

function handleSubmit(event) {
    event.preventDefault();
    
    if (!validateForm('contactForm')) {
        return false;
    }

    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submitText');
    
    // Add loading state
    submitBtn.classList.add('btn-loading');
    submitBtn.disabled = true;
    submitText.textContent = currentLanguage === 'marathi' ? 'पाठवत आहे...' : 'Sending...';

    // Simulate form submission
    setTimeout(() => {
        const name = document.getElementById('name').value;
        
        submitBtn.classList.remove('btn-loading');
        submitBtn.disabled = false;
        submitText.textContent = currentLanguage === 'marathi' ? 'पाठवा' : 'Send';

        alert(currentLanguage === 'marathi' ? 
            `धन्यवाद ${name}! तुमच्या संदेशाला आमचा प्रतिसाद लवकरच मिळेल।` :
            `Thank you ${name}! We will get back to you soon.`
        );

        document.getElementById('contactForm').reset();
        // Remove validation classes
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error', 'success');
        });
    }, 2000);

    return false;
}

// Real-time validation
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateForm('contactForm');
        });
    });
});

// Initialize
window.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    
    // Animated counters when visible
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    if (!counter.classList.contains('counted')) {
                        counter.classList.add('counted', 'counting');
                        animateCounter(counter);
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.achievements').forEach(section => {
        counterObserver.observe(section);
    });

    // Progress bar animations
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFills = entry.target.querySelectorAll('.progress-fill');
                progressFills.forEach(fill => {
                    if (!fill.classList.contains('animated')) {
                        fill.classList.add('animated');
                        animateProgressBar(fill);
                    }
                });
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.progress-container').forEach(container => {
        progressObserver.observe(container);
    });

    // Add entrance animations
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);

    // Gallery lightbox initialization
    function openLightbox(src, alt, caption) {
        const lb = document.getElementById('lightbox');
        const lbImg = document.getElementById('lightbox-img');
        const lbCaption = document.getElementById('lightbox-caption');
        lbImg.src = src;
        lbImg.alt = alt || '';
        lbCaption.textContent = caption || '';
        lb.classList.add('active');
        lb.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox(event) {
        // allow calling with an event or with a synthetic object { target: element }
        const target = event && event.target ? event.target : null;
        if (!target) return;
        if (target.id === 'lightbox' || target.classList.contains('lightbox-close')) {
            const lb = document.getElementById('lightbox');
            const lbImg = document.getElementById('lightbox-img');
            lb.classList.remove('active');
            lb.setAttribute('aria-hidden', 'true');
            lbImg.src = '';
        }
    }

    document.querySelectorAll('.gallery-item img').forEach(img => {
        // Open lightbox on click (if image loaded)
        img.addEventListener('click', (e) => {
            const src = e.target.getAttribute('src');
            if (!src) return;
            const caption = e.target.closest('.gallery-item')?.querySelector('.caption-below')?.textContent || '';
            openLightbox(src, e.target.alt, caption);
        });

        // If image fails to load, hide it and mark the card so caption is centered
        img.addEventListener('error', () => {
            img.style.display = 'none';
            const card = img.closest('.gallery-item');
            if (card) card.classList.add('no-image');
        });

        // On successful load ensure card is not in no-image state
        img.addEventListener('load', () => {
            img.style.display = 'block';
            const card = img.closest('.gallery-item');
            if (card) card.classList.remove('no-image');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const lb = document.getElementById('lightbox');
            if (lb && lb.classList.contains('active')) {
                closeLightbox({ target: lb });
            }
        }
    });

    // Attach UI event listeners
    const menuToggleBtn = document.getElementById('menuToggle');
    if (menuToggleBtn) menuToggleBtn.addEventListener('click', toggleMenu);

    document.querySelectorAll('[data-scroll]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const target = el.getAttribute('data-scroll');
            if (target) scrollToSection(target);
        });
    });

    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.addEventListener('click', toggleLanguage);

    const contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('submit', handleSubmit);

    const backToTop = document.getElementById('backToTop');
    if (backToTop) backToTop.addEventListener('click', scrollToTop);

    const lbEl = document.getElementById('lightbox');
    if (lbEl) {
        lbEl.addEventListener('click', closeLightbox);
        const lbClose = lbEl.querySelector('.lightbox-close');
        if (lbClose) lbClose.addEventListener('click', closeLightbox);
    }

});
