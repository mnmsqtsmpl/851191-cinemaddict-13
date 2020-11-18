import {createProfileTemplate} from "./view/profile.js";
import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createSortTemplate} from "./view/sort.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
import {createFilmsCountTemplate} from "./view/films-count.js";

const CARDS_COUNT = 5;

const render = (container, template, position) => container.insertAdjacentHTML(position, template);

const siteBodyElement = document.querySelector(`body`);
const siteHeaderElement = siteBodyElement.querySelector(`.header`);
const siteMainElement = siteBodyElement.querySelector(`.main`);
const siteFooterElement = siteBodyElement.querySelector(`.footer`);

render(siteHeaderElement, createProfileTemplate(), `beforeend`);
render(siteMainElement, createSiteMenuTemplate(), `afterbegin`);
render(siteMainElement, createSortTemplate(), `beforeend`);

for (let i = 0; i < CARDS_COUNT; i++) {
  render(siteMainElement, createFilmCardTemplate(), `beforeend`);
}

render(siteMainElement, createShowMoreButtonTemplate(), `beforeend`);
render(siteFooterElement, createFilmsCountTemplate(), `beforeend`);

