    const buttonTop = document.getElementById('buttonTop');
    if (buttonTop) {
        buttonTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        console.log('Кнопка "Наверх" инициализирована');
    } else {
        console.log('Кнопка с ID="buttonTop" не найдена');
    }