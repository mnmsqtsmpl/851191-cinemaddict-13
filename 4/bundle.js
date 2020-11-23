/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/profile */ "./src/view/profile.js");
/* harmony import */ var _view_site_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/site-menu */ "./src/view/site-menu.js");
/* harmony import */ var _view_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/sort */ "./src/view/sort.js");
/* harmony import */ var _view_show_more_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/show-more-button */ "./src/view/show-more-button.js");
/* harmony import */ var _view_films_count__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/films-count */ "./src/view/films-count.js");
/* harmony import */ var _view_films__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/films */ "./src/view/films.js");
/* harmony import */ var _view_film_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/film-card */ "./src/view/film-card.js");
/* harmony import */ var _view_film_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/film-popup */ "./src/view/film-popup.js");
/* harmony import */ var _view_close_popup_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/close-popup-button */ "./src/view/close-popup-button.js");
/* harmony import */ var _view_film_popup_info_wrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/film-popup-info-wrap */ "./src/view/film-popup-info-wrap.js");
/* harmony import */ var _view_film_popup_poster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/film-popup-poster */ "./src/view/film-popup-poster.js");
/* harmony import */ var _view_film_popup_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/film-popup-info */ "./src/view/film-popup-info.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _mock_film_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mock/film-card */ "./src/mock/film-card.js");















const CARDS_COUNT = 5;

const ELEMENTS_TO_SHOW_POPUP = [
  `film-card__poster`,
  `film-card__title`,
  `film-card__comments`
];

const render = (container, template, position) => container.insertAdjacentHTML(position, template);

const siteBodyElement = document.querySelector(`body`);
const siteHeaderElement = siteBodyElement.querySelector(`.header`);
const siteMainElement = siteBodyElement.querySelector(`.main`);
const siteFooterElement = siteBodyElement.querySelector(`.footer`);

render(siteHeaderElement, Object(_view_profile__WEBPACK_IMPORTED_MODULE_0__["createProfileTemplate"])(), `beforeend`);
render(siteMainElement, Object(_view_site_menu__WEBPACK_IMPORTED_MODULE_1__["createSiteMenuTemplate"])(), `afterbegin`);
render(siteMainElement, Object(_view_sort__WEBPACK_IMPORTED_MODULE_2__["createSortTemplate"])(), `beforeend`);
render(siteMainElement, Object(_view_films__WEBPACK_IMPORTED_MODULE_5__["createFilmsTemplate"])(), `beforeend`);

const filmsSection = siteMainElement.querySelector(`.films-list`);
const filmListContainer = filmsSection.querySelector(`.films-list__container`);

for (let i = 0; i < CARDS_COUNT; i++) {
  render(filmListContainer, Object(_view_film_card__WEBPACK_IMPORTED_MODULE_6__["createFilmCardTemplate"])(Object(_mock_film_card__WEBPACK_IMPORTED_MODULE_13__["generateFilmCard"])()), `beforeend`);
}

render(filmsSection, Object(_view_show_more_button__WEBPACK_IMPORTED_MODULE_3__["createShowMoreButtonTemplate"])(), `beforeend`);

render(siteFooterElement, Object(_view_films_count__WEBPACK_IMPORTED_MODULE_4__["createFilmsCountTemplate"])(), `beforeend`);

const closePopup = () => {
  const filmPopup = siteBodyElement.querySelector(`.film-details`);
  const closePopupButton = filmPopup.querySelector(`.film-details__close-btn`);

  filmPopup.remove();

  closePopupButton.removeEventListener(`click`, closePopup);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

const onPopupEscPress = (evt) => {
  Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isEscEvent"])(evt, closePopup);
};

const renderPopup = () => {
  render(siteBodyElement, Object(_view_film_popup__WEBPACK_IMPORTED_MODULE_7__["generateFilmPopupTemplate"])(), `beforeend`);

  const poupForm = siteBodyElement.querySelector(`.film-details__inner`);
  const popupTopContainer = poupForm.querySelector(`.film-details__top-container`);

  render(popupTopContainer, Object(_view_close_popup_button__WEBPACK_IMPORTED_MODULE_8__["generateClosePopupButtonTemaplte"])(), `beforeend`);
  render(popupTopContainer, Object(_view_film_popup_info_wrap__WEBPACK_IMPORTED_MODULE_9__["generateFilmPopupInfoWrap"])(), `beforeend`);

  const closePopupButton = popupTopContainer.querySelector(`.film-details__close-btn`);
  const popupInfoWrap = popupTopContainer.querySelector(`.film-details__info-wrap`);

  render(popupInfoWrap, Object(_view_film_popup_poster__WEBPACK_IMPORTED_MODULE_10__["generateFilmPopupPoster"])(Object(_mock_film_card__WEBPACK_IMPORTED_MODULE_13__["generateFilmCard"])()), `beforeend`);
  render(popupInfoWrap, Object(_view_film_popup_info__WEBPACK_IMPORTED_MODULE_11__["generateFilmPopupInfoTemplate"])(Object(_mock_film_card__WEBPACK_IMPORTED_MODULE_13__["generateFilmCard"])()), `beforeend`);


  closePopupButton.addEventListener(`click`, closePopup);
};

const onFilmCardClick = (evt) => {
  if (ELEMENTS_TO_SHOW_POPUP.some((val) => val === evt.target.className)) {
    evt.preventDefault();

    renderPopup();

    document.addEventListener(`keydown`, onPopupEscPress);
  }
};

filmListContainer.addEventListener(`click`, onFilmCardClick);



/***/ }),

/***/ "./src/mock/film-card.js":
/*!*******************************!*\
  !*** ./src/mock/film-card.js ***!
  \*******************************/
/*! exports provided: generateFilmCard, generateFilmCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmCard", function() { return generateFilmCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmCards", function() { return generateFilmCards; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
//import {nanoid} from "C:/Users/boris/Desktop/HtmlAcademy/851191-cinemaddict-13/src/vendor/nanoid";


const CARD_AMOUNT_TO_GENERATE = 20;

const MINUTES_IN_HOUR = 60;

const MIN_YEAR = 1950;
const MAX_YEAR = 2008;

const MIN_RATING = 1;
const MAX_RATING = 10;

const MIN_AGE_RATING = 6;
const MAX_AGE_RATING = 18;

const MIN_DURATION = 70;
const MAX_DURATION = 134;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 100;

const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;
const DESCRIPTION_SHORT_LENGTH = 139;

const POSTERS_PATH = `././images/posters/`;
const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const MIN_GENERS_AMOUNT = 1;
const MAX_GENRES_AMOUNT = 3;

const GENRES = [
  `Fantasy`,
  `Thriller`,
  `Mystery`,
  `Romance`,
  `Comedy`,
  `Western`
];

const DIRECTORS = [
  `Frank Darabont`,
  `Francis Ford Coppola`,
  `Christopher Nolan`,
  `Sidney Lumet`,
  `Steven Spielberg`
];

const SCREENWRITERS_PER_FILM = 2;

const SCREENWRITERS = [
  `Stephen King`,
  `Frank Darabont`,
  `Mario Puzo`,
  `Francis Ford Coppola`,
  `Jonathan Nolan`,
  `Christopher Nolan`,
  `Reginald Rose`,
  `Thomas Keneally`,
  `Steven Zaillian`
];

const ACTORS_PER_FILM = 3;

const ACTORS = [
  `Tim Robbins`,
  `Morgan Freeman`,
  `Bob Gunton`,
  `Marlon Brando`,
  `Al Pacino`,
  `James Caan`,
  `Christian Bale`,
  `Heath Ledger`,
  `Aaron Eckhart`,
  `Henry Fonda`,
  `Lee J. Cobb`,
  `Martin Balsam`,
  `Liam Neeson`,
  `Ralph Fiennes`,
  `Ben Kingsley`
];

const COUNTRIES = [
  `USA`,
  `Russia`,
  `Italy`,
  `Spain`,
  `Germany`,
  `United Kingdom`,
  `China`,
  `Japan`
];

const titles = {
  [`Побег из Шоушенка`]: `The Shawshank Redemption`,
  [`Крестный отец`]: `The Godfather`,
  [`Тёмный рыцарь`]: `The Dark Knight`,
  [`12 Разгеванных мужчин`]: `12 Angry Men`,
  [`Список Шиндлера`]: `Schindler's List`
};

const getRandomInt = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomRating = (max, min) => {
  const raiting = getRandomInt(max, min);
  return raiting === max ? raiting : `${raiting}.${getRandomInt(max - 1, min)}`;
};

const getRandomValuesFromArray = (size, source) => Array(size).fill().map(() => source[getRandomInt(source.length - 1)]);

const getRandomPoster = () => POSTERS_PATH + POSTERS[getRandomInt(POSTERS.length - 1)];

let originalTitle = ``;

const getRandomTitle = () => {
  const arr = Object.keys(titles);
  const title = arr[getRandomInt(arr.length - 1)];
  originalTitle = titles[title];
  return title;
};

const getRandonGenres = () => getRandomValuesFromArray(getRandomInt(MAX_GENRES_AMOUNT, MIN_GENERS_AMOUNT), GENRES);

const getShortDescription = () => `${DESCRIPTION.substring(0, DESCRIPTION_SHORT_LENGTH)}...`;

const getRandomDuration = (max, min) => {
  const duration = getRandomInt(max, min);

  if (duration > MINUTES_IN_HOUR) {
    if (duration % MINUTES_IN_HOUR > 0) {
      return `${Math.floor(duration / MINUTES_IN_HOUR)}h ${duration % MINUTES_IN_HOUR}m`;
    } else {
      return `${Math.floor(duration / MINUTES_IN_HOUR)}h`;
    }
  } else {
    return `${duration}m`;
  }
};

const getRandomDirector = () => DIRECTORS[getRandomInt(DIRECTORS.length - 1)];

const getRandomWriters = () => getRandomValuesFromArray(SCREENWRITERS_PER_FILM, SCREENWRITERS).join(`, `);

const getRandomActors = () => getRandomValuesFromArray(ACTORS_PER_FILM, ACTORS).join(`, `);

const getRandomCountry = () => COUNTRIES[getRandomInt(COUNTRIES.length - 1)];

const getRandomAgeRating = () => `${getRandomInt(MIN_AGE_RATING, MAX_AGE_RATING)}+`;

const getRandomReleaseDate = (startYear, endYear) => {
  const date = new Date(new Date(startYear, 0, 1).getTime() + Math.random() * (new Date(endYear, 0, 1).getTime() - new Date(startYear, 0, 1).getTime()));
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('DD MMMM YYYY');
};

const generateFilmCard = () => {
  return {
    id: `123`, //nanoid(8),
    poster: getRandomPoster(),
    title: getRandomTitle(),
    rating: getRandomRating(MAX_RATING, MIN_RATING),
    year: getRandomInt(MIN_YEAR, MAX_YEAR),
    duration: getRandomDuration(MAX_DURATION, MIN_DURATION),
    genres: getRandonGenres(),
    descriptionShort: getShortDescription(),
    description: DESCRIPTION,
    commentsCount: getRandomInt(MIN_COMMENTS, MAX_COMMENTS),
    titleOriginal: originalTitle,
    director: getRandomDirector(),
    screenwriters: getRandomWriters(),
    actors: getRandomActors(),
    releaseDate: getRandomReleaseDate(MIN_YEAR, MAX_YEAR),
    country: getRandomCountry(),
    ageRating: getRandomAgeRating()
  };
};

const generateFilmCards = () => Array(CARD_AMOUNT_TO_GENERATE).fill().map(() => generateFilmCard());


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: isEscEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEscEvent", function() { return isEscEvent; });
const KeyCode = {
  ESC_CODE: `Escape`
};

const isEscEvent = (evt, action) => {
  if (evt.key === KeyCode.ESC_CODE) {
    action();
  }
};



/***/ }),

/***/ "./src/view/close-popup-button.js":
/*!****************************************!*\
  !*** ./src/view/close-popup-button.js ***!
  \****************************************/
/*! exports provided: generateClosePopupButtonTemaplte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateClosePopupButtonTemaplte", function() { return generateClosePopupButtonTemaplte; });
const generateClosePopupButtonTemaplte = () => {
  return `<div class="film-details__close">
    <button class="film-details__close-btn" type="button">close</button>
  </div>`;
};


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: createFilmCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmCardTemplate", function() { return createFilmCardTemplate; });
const createFilmCardTemplate = ({id, title, rating, year, duration, genres, poster, description, commentsCount}) => {
  const [genre] = genres;
  return `<article class="film-card" data-id=${id}>
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${commentsCount} comments</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>`;
};


/***/ }),

/***/ "./src/view/film-popup-info-wrap.js":
/*!******************************************!*\
  !*** ./src/view/film-popup-info-wrap.js ***!
  \******************************************/
/*! exports provided: generateFilmPopupInfoWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmPopupInfoWrap", function() { return generateFilmPopupInfoWrap; });
const generateFilmPopupInfoWrap = () => {
  return `<div class="film-details__info-wrap">
    </div>`;
};


/***/ }),

/***/ "./src/view/film-popup-info.js":
/*!*************************************!*\
  !*** ./src/view/film-popup-info.js ***!
  \*************************************/
/*! exports provided: generateFilmPopupInfoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmPopupInfoTemplate", function() { return generateFilmPopupInfoTemplate; });
const generateGenresTemplate = (genres) => {
  return genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(``);
};

const generateFilmPopupInfoTemplate = ({title, originalTitle, rating, director, screenwriters, actors, releaseDate, duration, country, genres, description}) => {
  return `<div class="film-details__info">
    <div class="film-details__info-head">
      <div class="film-details__title-wrap">
        <h3 class="film-details__title">${title}</h3>
        <p class="film-details__title-original">Original: ${originalTitle}</p>
      </div>

      <div class="film-details__rating">
        <p class="film-details__total-rating">${rating}</p>
      </div>
    </div>

    <table class="film-details__table">
      <tr class="film-details__row">
        <td class="film-details__term">Director</td>
        <td class="film-details__cell">${director}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Writers</td>
        <td class="film-details__cell">${screenwriters}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Actors</td>
        <td class="film-details__cell">${actors}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Release Date</td>
        <td class="film-details__cell">${releaseDate}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Runtime</td>
        <td class="film-details__cell">${duration}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Country</td>
        <td class="film-details__cell">${country}</td>
      </tr>
      <tr class="film-details__row">
        <td class="film-details__term">Genres</td>
        <td class="film-details__cell">${generateGenresTemplate(genres)}</td>
      </tr>
    </table>

    <p class="film-details__film-description">
      ${description}
    </p>
  </div>`;
};


/***/ }),

/***/ "./src/view/film-popup-poster.js":
/*!***************************************!*\
  !*** ./src/view/film-popup-poster.js ***!
  \***************************************/
/*! exports provided: generateFilmPopupPoster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmPopupPoster", function() { return generateFilmPopupPoster; });
const generateFilmPopupPoster = ({ageRating}) => {
  return `<div class="film-details__poster">
    <img class="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt="">
    <p class="film-details__age">${ageRating}</p>
  </div>`;
};


/***/ }),

/***/ "./src/view/film-popup.js":
/*!********************************!*\
  !*** ./src/view/film-popup.js ***!
  \********************************/
/*! exports provided: generateFilmPopupTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmPopupTemplate", function() { return generateFilmPopupTemplate; });
const generateFilmPopupTemplate = () => {
  return `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
      </div>
      <div class="film-details__bottom-container">
      </div>
    </form>
  </section>`;
};


/***/ }),

/***/ "./src/view/films-count.js":
/*!*********************************!*\
  !*** ./src/view/films-count.js ***!
  \*********************************/
/*! exports provided: createFilmsCountTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsCountTemplate", function() { return createFilmsCountTemplate; });
const createFilmsCountTemplate = () => {
  return `<section class="footer__statistics">
    <p>130 291 movies inside</p>
  </section>`;
};


/***/ }),

/***/ "./src/view/films.js":
/*!***************************!*\
  !*** ./src/view/films.js ***!
  \***************************/
/*! exports provided: createFilmsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilmsTemplate", function() { return createFilmsTemplate; });
const createFilmsTemplate = () => {
  return `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container">
      </div>
    </section>
  </section>`;
};


/***/ }),

/***/ "./src/view/profile.js":
/*!*****************************!*\
  !*** ./src/view/profile.js ***!
  \*****************************/
/*! exports provided: createProfileTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfileTemplate", function() { return createProfileTemplate; });
const createProfileTemplate = () => {
  return `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: createShowMoreButtonTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShowMoreButtonTemplate", function() { return createShowMoreButtonTemplate; });
const createShowMoreButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};


/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/*! exports provided: createSiteMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSiteMenuTemplate", function() { return createSiteMenuTemplate; });
const createSiteMenuTemplate = () => {
  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: createSortTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSortTemplate", function() { return createSortTemplate; });
const createSortTemplate = () => {
  return `<ul class="sort">
    <li><a href="#" class="sort__button">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button sort__button--active">Sort by rating</a></li>
  </ul>`;
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map