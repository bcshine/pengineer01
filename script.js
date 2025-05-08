// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.padding = '0';
    }
});

// 부드러운 스크롤 기능
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // 헤더 높이 고려
                behavior: 'smooth'
            });
        }
    });
});

// 페이지 로드 시 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const fadeInElements = function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 초기 스타일 설정
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // 초기 실행 및 스크롤 이벤트 등록
    fadeInElements();
    window.addEventListener('scroll', fadeInElements);
});

// 현재 연도 표시
document.addEventListener('DOMContentLoaded', function() {
    const footerYear = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2023', currentYear);
}); 