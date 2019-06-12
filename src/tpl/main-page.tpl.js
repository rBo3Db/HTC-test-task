var mainPage = `
    <section>
        <figure>
            <img src="pics/ava1.jpg">
        </figure>
        <button class="main-conteiner__add-to-friends">Добавить в Друзья</button>
    </section>
    <section class="main-conteiner__right-block">
        <div>
            <h1 class="main-conteiner__name-on-personal-page">
                <a id="name">
                    <%= user[i].name %>
                </a>
            </h1>
            <input id='nameInput'class="main-conteiner__change-input--hide">
            <br>
            <h2 class="main-conteiner__location"><%= user[i].location %></h2>
        </div>
        <div class="main-conteiner__advanced-information-container">
            <div class="main-conteiner__row-of-advanced-information">
                <h3 class="main-conteiner__information-headers">Семейное положение</h3>
                <p class="main-conteiner__information"><%= user[i].famalyStatus %></p>
            </div>
            <div class="main-conteiner__row-of-advanced-information">
                <h3 class="main-conteiner__information-headers">Телефон</h3>
                <p class="main-conteiner__information">
                    <a id='phone'>
                        <%= user[i].phone %>
                    </a>
                </p>
                <input id='phoneInput' class="main-conteiner__change-input main-conteiner__change-input--hide" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                <br>
            </div>
            <div class="main-conteiner__row-of-advanced-information">
                <h3 class="main-conteiner__information-headers">E-mail</h3>
                <p class="main-conteiner__information">
                    <a id='email'>
                        <%= user[i].email %>
                    </a>
                </p>
                <input id="emailInput" class="main-conteiner__change-input main-conteiner__change-input--hide">
            </div>
            <div class="main-conteiner__buttons-line">
                <h3 class="main-conteiner__information-headers">Интересы</h3>
                <button id='createNewInterest' class="main-conteiner__buttons">Добавить</button>
                <div id="inputBlockOfInterests" class="change-block change-block--hide">
                    <input id="interestsInput" class="change-block__input">
                    <button id="interestsButton" class="main-conteiner__buttons">Добавить интерес</button>
                    <br>
                </div>
                <div id="interests" class="main-conteiner__interests-line"> 
                <% user[i].interests.forEach(function(item) { %>
                    <button class="main-conteiner__buttons"><%-item%></button>
                <% }); %>
                </div>
            </div>
        </div>
    </section>`;
export default mainPage;