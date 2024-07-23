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
        if (contentId === 'content1') {
            contentDisplay.innerHTML = `
                <div class="content-container">
                    <div class="content-text">
                        <ul>
                            <li> Полностью рабочая система, которая поможет достичь желаемого результата при помощи эфективности и уменьшение трудозатратности.</li>
                            <li> Наша команда предоставит вам подробные обучающие семинары для вашего персонала, что бы в будущем на рабочий процесс не влияли постороние проблемы. А так же вам будет предоставлен доступ с подробной информацией и часто задаваемыми вопросами.</li>
                            <li> Отслеживание выполнения задач, времени выполнения работ и соответствия стандартам качества.  Предоставление конструктивной обратной связи сотрудникам для улучшения их навыков и повышения производительности.</li>
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
                            <li> Вы можете легко просматривать историю всех выполненных ремонтов и технического обслуживания вашего автомобиля. Получайте полные отчеты о проведенных работах, включая даты, описание выполненных услуг, использованные запчасти и затраченные средства.</li>
                            <li> Мы отправляем вам автоматические уведомления по SMS и электронной почте, как только ваше транспортное средство будет готово.</li>
                            <li> Максимальная прозрачность каждого из процессов. Все этапы ремонта и технического обслуживания фиксируются и доступны для просмотра в реальном времени. Полные отчеты с детальным описанием проведенных услуг, используемых запчастей и материалов.</li>
                        </ul>
                    </div>
                    <img src="images/single_applicant.png" alt="image2" class="content-image">
                </div>
            `;
        }
    }
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
