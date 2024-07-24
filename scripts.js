document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    const buttons = document.querySelectorAll('.content-btn');
    const contentDisplay = document.getElementById('content-display');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const contentId = this.getAttribute('data-content');
            updateContent(contentId);
        });
    });

    function updateContent(contentId) {
        const contentDisplay = document.getElementById('content-display');
        if (contentId === 'content1') {
            contentDisplay.innerHTML = `
                <div class="content-container">
                    <div class="content-text">
                        <ul>
                            <li>
                                <h3>Эффективная система</h3>
                                Полностью рабочая система, которая поможет достичь желаемого результата при помощи эффективности и уменьшения трудозатратности.
                            </li>
                            <li>
                                <h3>Обучение персонала</h3>
                                Наша команда предоставит вам подробные обучающие семинары для вашего персонала, чтобы в будущем на рабочий процесс не влияли посторонние проблемы. Также вам будет предоставлен доступ с подробной информацией и часто задаваемыми вопросами.
                            </li>
                            <li>
                                <h3>Контроль и обратная связь</h3>
                                Отслеживание выполнения задач, времени выполнения работ и соответствия стандартам качества. Предоставление конструктивной обратной связи сотрудникам для улучшения их навыков и повышения производительности.
                            </li>
                        </ul>
                    </div>
                    <img src="images/juridical_person.png" alt="image1" class="content-image">
                </div>
            `;
        } else if (contentId === 'content2') {
            contentDisplay.innerHTML = `
                <div class="content-container">
                    <div class="content-text">
                        <ul>
                            <li>
                                <h3>История ремонтов</h3>
                                Вы можете легко просматривать историю всех выполненных ремонтов и технического обслуживания вашего автомобиля. Получайте полные отчеты о проведенных работах, включая даты, описание выполненных услуг, использованные запчасти и затраченные средства.
                            </li>
                            <li>
                                <h3>Уведомления</h3>
                                Мы отправляем вам автоматические уведомления по SMS и электронной почте, как только ваше транспортное средство будет готово.
                            </li>
                            <li>
                                <h3>Прозрачность процессов</h3>
                                Максимальная прозрачность каждого из процессов. Все этапы ремонта и технического обслуживания фиксируются и доступны для просмотра в реальном времени. Полные отчеты с детальным описанием проведенных услуг, используемых запчастей и материалов.
                            </li>
                        </ul>
                    </div>
                    <img src="images/single_applicant.png" alt="image2" class="content-image">
                </div>
            `;
        }
    }
    
    // Вызов функции для отображения начального контента
    updateContent('content1');
    
});
const header = document.querySelector('header');


const initialPadding = 10; 
const reducedPadding = 3;  
const initialFontSize = 1.5; 
const reducedFontSize = 0.9; 

function onScroll() {
    const scrollY = window.scrollY;

    const padding = Math.max(reducedPadding, initialPadding - scrollY / 20); // 20 - коэффициент для изменения отступов
    const fontSize = Math.max(reducedFontSize, initialFontSize - scrollY / 200); // 200 - коэффициент для изменения размера шрифта

    header.style.padding = `${padding}px 0`;
    header.style.fontSize = `${fontSize}em`;
}

window.addEventListener('scroll', onScroll);

let currentIndex = 0;
const images = document.querySelectorAll('.slideshow-container img');

function showImage(index) {
    images[currentIndex].classList.remove('active');
    currentIndex = index;
    images[currentIndex].classList.add('active');
}

function showNextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
}

function showPreviousImage() {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(previousIndex);
}

document.querySelector('.left-arrow').addEventListener('click', showPreviousImage);
document.querySelector('.right-arrow').addEventListener('click', showNextImage);
