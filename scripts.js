document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show'); // Переключение класса show
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
                            <li> Описание для первого контента.</li>
                            <li> Еще информация, которая важна для первого контента.</li>
                            <li> Дополнительные детали, которые стоит учесть.</li>
                        </ul>
                    </div>
                    <img src="https://via.placeholder.com/300" alt="Картинка 1" class="content-image">
                </div>
                <p>Добавьте сюда дополнительный текст или информацию, если это необходимо.</p>
            `;
        } else if (contentId === 'content2') {
            contentDisplay.innerHTML = `
                <div class="content-container">
                    <div class="content-text">
                        <ul>
                            <li> Описание для второго контента.</li>
                            <li> Дополнительная информация для второго контента.</li>
                            <li> Дополнительные детали и особенности.</li>
                        </ul>
                    </div>
                    <img src="https://via.placeholder.com/300" alt="Картинка 2" class="content-image">
                </div>
                <p>Добавьте сюда дополнительный текст или информацию, если это необходимо.</p>
            `;
        }
    }
    updateContent('content1');
});
