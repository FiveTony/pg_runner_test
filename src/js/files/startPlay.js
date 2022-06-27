import {startGame} from "./game.js"

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('[data-render-scene]')) {
        const btns = document.querySelectorAll('[data-start-play]');
        const wrapperScene = document.querySelector('[data-render-scene]');
        const startSceneSectionHtml = `
            <section class="section-start">
                <div class="section-start__container">
                    <div class="section-start__content">
                        <h1 class="h1 section-start__title">
                            Бежим за кэшбэком
                        </h1>
                        <p class="description">
                            Времени мало – нужно срочно навести порядок!
                        </p>
                        <p class="description">
                            Собирайте монетки и наши продукты на пути к чистоте и уюту, но&nbsp;остерегайтесь препятствий. У вас три попытки ❤️
                        </p>
                    </div>
                    <button class="btn yellow-bg section-start__btn" data-start-game>Выбрать персонажа!</button>
                </div>
            </section>
        `;
        btns.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                wrapperScene.innerHTML = startSceneSectionHtml;
                initGame();
                // startGame(e);
            })
        })
        function initGame() {
            const btnStartGame = document.querySelector('[data-start-game]');
            btnStartGame.addEventListener('click', function(e) {
                document.querySelector(".wrapper").classList.add("hidden")
                    startGame(e);
            })
        }
    }
})