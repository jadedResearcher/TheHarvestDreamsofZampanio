let ele;

let how_long_well_let_them_explore = 500;


const intersects = (ele1, ele2) => {
  const rect1 = ele1.getBoundingClientRect();
  const rect2 = ele2.getBoundingClientRect();

  if (rect1.bottom > rect2.top
    && rect1.right > rect2.left
    && rect1.top < rect2.bottom
    && rect1.left < rect2.right) {
    return true;
  }

}

const distance = (x1, y1, x2, y2) => {
  const first = (x1 - x2) ** 2;
  const second = (y1 - y2) ** 2;
  return (first + second) ** 0.5
}


//from view-source:https://www.yyyyyyy.info/
function animateTitle(i, functionToCheckIfStop) {
  var message = [
    '▁▂▃▄▅▆▇ `^^^^^~ ░ ui▀┳╲ ☺ .info ▓',
    '▂▁▂▃▄▅▆` ^^^^^~ ░ ui▀┳╲ ☺ .info ▓',
    '▃▂▁▂▃▄▅ `^^^^^~ ░ ui▀┳╲ ☻ .info ▓',
    '▄▃▂▁▂▃▄` ^^^^^~ ░ ui▀┳╲ ☻ .info ▓',
    '▅▄▃▂▁▂▃ `^^^^^~ ░ ui▀┳╲ ☺ .info ▓',
    '▆▅▄▃▂▁▂` ^^^^^~ ░ ui▀┳╲ ☺ .info ▓',
    '▇▆▅▄▃▂▁ `^^^^^~ ░ ui▀┳╲ ☻ .info ▓',
    '▆▇▆▅▄▃▂` ^^^^^~ ░ ui▀┳╲ ☻ .info ▓',
    '▅▆▇▆▅▄▃ `^^^^^~ ░ ui▀┳╲ ☺ .info ▓',
    '▄▅▆▇▆▅▄` ^^^^^~ ░ ui▀┳╲ ☺ .info ▓',
    '▃▄▅▆▇▆▅ `^^^^^~ ░ ui▀┳╲ ☻ .info ▓',
    '▂▃▄▅▆▇▆` ^^^^^~ ░ ui▀┳╲ ☻ .info ▓'
  ]

  const stopOrGo = () => {
    if (functionToCheckIfStop && functionToCheckIfStop()) {
      return;
    } else {
      return setTimeout(() => { animateTitle(i + 1) }, 200);
    }
  }

  i >= message.length - 1 ? (i = 0) : i++,
    (document.title = message[i]),
    stopOrGo()
}

//modified from jackElope/lavinraca/lavinraca
//animps comes from parent, decides if it spawns animating or not
turnImageIntoGrid = async (parent, imagesrc, gridSize, animation_name) => {
  let fucked_up_image_holder = createElementWithClassAndParent("div", parent, "holder");

  fucked_up_image_holder.style.background = "black";
  const size = gridSize;
  let index = 0;
  for (let y = 0; y < 475; y += size) {
    for (let x = 0; x < 475; x += size) {
      index ++;
      //https://www.youtube.com/watch?v=7KTzcPmVZSY
      let box = createElementWithClassAndParent("div", fucked_up_image_holder, "box");
      box.style.pointerEvents = "none";
      box.style.position = "absolute";
      box.style.top = y + "px";
      box.style.left = x + "px";
      box.style.opacity = Math.random();
      box.style.backgroundPositionY = 475 - y + "px";
      box.style.backgroundPositionX = 475 - x + "px";
      box.style.backgroundImage = `url('${imagesrc}')`;
      box.style.width = size + "px";
      box.style.height = size + "px";
      box.style.setProperty("--animdel", `${index * Math.random()}ms`);
      box.style.animation = `${animation_name} ${30*Math.random()}s infinite linear var(--animdel, 0s)`;
      box.style.animationPlayState  = " var(--animps, paused)"
    }

  }
  return fucked_up_image_holder;
}



const fuckShitUPAnimation = (ele) => {
  const mildAmount = getRandomNumberBetween(1, 15 * 5);
  const extremeAmount = getRandomNumberBetween(1, 5);
  const normalWidth = parseInt(ele.style.width);
  const normalHeight = parseInt(ele.style.height);
  const extremeOptions = [`background-position-y: ${getRandomNumberBetween(0, normalHeight)}`,
  `background-position-x: ${getRandomNumberBetween(0, normalWidth)}`,
  `transform: rotate(${Math.random()}turn);`,
  `opacity: ${0.5 + Math.random() * 2}`,
    `filter: grayscale(1);`,
    `filter: sepia(0.2);`,
  `filter: blur(${getRandomNumberBetween(1, 3)}px);`,
  `filter: blur(${getRandomNumberBetween(1, 3)}px);`,

    `filter: brightness(.75);`, `filter: brightness(1.15);`,
    `filter: hue-rotate(180);`, `width: ${normalWidth + mildAmount}px;`,
  `height: ${normalHeight + mildAmount}px;`,
  `height: ${normalHeight - mildAmount}px;`,
  `width: ${normalHeight - mildAmount}px;`,
  `translate(${mildAmount}px, ${mildAmount}px);`,
  `translate(${mildAmount}px);`, `translate(0px, ${mildAmount}px);`];
  const options = extremeOptions;
  const animation_name = "no" + getRandomNumberBetween(0, 999999);
  const inadvisable_hacked_css_keyframe = `
 @keyframes ${animation_name} {
  0% { ${pickFrom(options)} }
  50% { ${pickFrom(options)} }
  100% { ${pickFrom(options)} }

 `
  ele.innerHTML = "";
  const absolute_bullshit = createElementWithClassAndParent("style", ele);
  absolute_bullshit.textContent = inadvisable_hacked_css_keyframe;
  const timing_functions = ["ease", "ease-in", "ease-out", "ease-in-out", "linear", "step-start", "step-end"];
  const animation = `${animation_name} ${getRandomNumberBetween(1, 10) * Math.random()}s ${pickFrom(timing_functions)} ${Math.random() * getRandomNumberBetween(1, 10)}s infinite`;
  ele.style.animation = animation;
}

//from info token reader!
const getBullshitCSS = (allowFilters) => {
  let css = "";
  const filters = ["contrast(2)", "contrast(1.5)", "hue-rotate(45deg)", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(270deg)", "blur(1px)", "blur(5px)", "blur(10px)", "blur(15px)", "blur(25px)", "blur(20px)", "blur(30px)", "blur(35px)", "blur(40px)"];

  for (let i = 0; i < 13; i++) {
    filters.push(`contrast(${i / 5})`);
    filters.push(`hue-rotate(${i * 10}deg)`);

  }

  var terribleCSSOptions = [["text-align", "center"], ["text-align", "right"], ["text-align", "left"], ["text-align", "justify"], ["position: ", "fixed"], ["float: ", "left"], ["float: ", "right"], ["width: ", "????"], ["height: ", "????"]];
  var reallyRand = getRandomNumberBetween(1, 10);
  const chosenFilters = [];
  for (var i = 0; i < reallyRand; i++) {
    var indexOfTerribleCSS = getRandomNumberBetween(0, terribleCSSOptions.length - 1)
    if (Math.random() > 0.5) {
      allowFilters && chosenFilters.push(pickFrom(filters));
    }
    var tin = terribleCSSOptions[indexOfTerribleCSS]
    if (tin[1] == "????") {
      tin[1] = getRandomNumberBetween(1, 100) + "%";
    }
    css += tin[0] + tin[1] + ";";
  }
  css += "min-width: 60px; min-height:60px; font-size: " + getRandomNumberBetween(10, 28) + "px;";
  css += `position: absolute; bottom: ${getRandomNumberBetween(1, 100)}vh; right: ${getRandomNumberBetween(1, 100)}vw;`;

  if (chosenFilters.length) {
    css += `filter: ${chosenFilters.join(" ")};`
  } else {
    if (Math.random() > 0.75) {
      css += `background-color: rgb(${getRandomNumberBetween(0, 255)},${getRandomNumberBetween(0, 255)},${getRandomNumberBetween(0, 255)});color:rgb( ${getRandomNumberBetween(0, 255)},${getRandomNumberBetween(0, 255)},${getRandomNumberBetween(0, 255)})`;
    } else {
      css += "background: none";
    }
  }
  return css;
}

const createElementWithClass = (eleName, className) => {
  const ele = document.createElement(eleName);

  if (className) {
    ele.className = className;
  }
  return ele;

}

const titleCase = (input) => {
  const pieces = input.split(" ");
  const ret = [];
  for (let piece of pieces) {
    if (piece[0]) {
      ret.push(replaceStringAt(piece, 0, piece[0].toUpperCase()));
    }
  }
  return ret.join(" ");
}

function replaceStringAt(str, index, character) {
  return str.substr(0, index) + character + str.substr(index + character.length);
}

const sentenceCase = (input) => {
  if (!input.length) {
    return input;
  }
  return replaceStringAt(input, 0, input[0].toUpperCase());
};

const getRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pickFrom = (array) => {
  return array[getRandomNumberBetween(0, array.length - 1)];
}



const createElementWithClassAndParent = (eleName, parent, className) => {
  const ele = createElementWithClass(eleName, className);
  parent.append(ele);
  return ele;
}

function stringtoseed(seed) {
  var output = 0;
  for (var i = 0, len = seed.length; i < len; i++) {
    output += seed[i].charCodeAt(0)
  }
  return output
}

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

//https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const uniq = (a) => { return a.filter(onlyUnique) };

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//HELLO WORLD trimmed to four would give you ORLD (useful for running text that can't get bigger than a certai size)
const trimToLengthReverse = (string, length) => {
  return string.split("").reverse().join('').slice(0, length).split("").reverse().join("")
}

const incrementLocalStorageByOne = (KEY) => {
  let current = localStorage.getItem(KEY);
  if (!current) {
    current = 0;
  }
  console.log("JR NOTE:", KEY, " was " + current)

  localStorage.setItem(KEY, parseInt(current) + 1)

}


//if you give it new values for existing params it layers them on
const updateURLParams = (params) => {

  //if we're not overwriting we want it to handle 
  const queryString = window.location.search;
  const currentParams = new URLSearchParams(queryString);
  const newParams = new URLSearchParams(params);

  //overwrites original, adds new
  for (let [key, value] of newParams) {
    currentParams.set(key, value);
  }

  //params += `&${urlParams.toString()}`;
  var pageUrl = '?' + `${currentParams.toString()}`;
  window.history.pushState('', '', pageUrl);
}

//key, value status
const cachedImages = {}
//key, value status
const cachedAudio = {}
//key, value status
const cachedVideo = {}

const imageExtendsions = [
  "png",
  "PNG",
  "gif",
  "jpg",
  "jpeg"
];
const filePattern = new RegExp('<a href="([^?]*?)">', 'g');

const extensionPattern = new RegExp(`\\\.(${imageExtendsions.join("|")})\$`);

const audioExtensions = [
  "wav","mp3"
];
const filePatternAudio = new RegExp('<a href="([^?]*?)">', 'g');

const extensionPatternAudio = new RegExp(`\\\.(${audioExtensions.join("|")})\$`);


const videoExtensions = [
  "mp4",
];
const filePatternVideo = new RegExp('<a href="([^?]*?)">', 'g');

const extensionPatternVideo = new RegExp(`\\\.(${videoExtensions.join("|")})\$`);

let base_location = window.location.href.includes("index")? window.location.href.split("index.html")[0] : window.location.href.split("?")[0];




//finds subdirectories and files in an apache server
const findEverythingInDirectory = async(url)=>{
  const data = await getGopherData(url);
  return data;
}


//finds subdirectories in an apache server
const findAllExitsFromGopherHoleLocation = async(url)=>{
  const data = await getGopherData(url);
  let ret = [];
  for(let d of data){
    if(d.size && d.size.trim() ==="-"){
      ret.push(url + d.href.replaceAll(base_location,''))
    }
  } 
  return ret;
}

//if you give it an index file from the apache server it parses it out
const getGopherData = async (url) => {
  const rawText = await httpGetAsync(url);
  const virtualDom = document.createElement("div");
  virtualDom.innerHTML = rawText;
  const rows = virtualDom.querySelectorAll("tr");
  let ret = [];
  let index = 0;
  for (let row of rows) {
    const cells = row.querySelectorAll("td");
    if (cells && cells.length) {
      const href = url +cells[1].querySelector("a").href;
      if (href) {
        const size = cells[3].innerText;
        ret[index] = { href, size };
        index++;
      }
    }

  }
  return ret;

}

function getTimeString(date) {
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  return h + ":" + m + ":" + s;
}

//https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const addImageProcess = (src) => {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

const getVideo = async (url) => {
  if (cachedVideo[url]) {
    return cachedVideo[url];
  }

  let promise = new Promise(async (resolve, reject) => {
    try {
      const rawText = await httpGetAsync(url);

      let files = [];
      const match = rawText.matchAll(filePatternVideo);
      const matches = Array.from(match, (res) => res);
      for (let m of matches) {
        const item = m[1];
        if (item.match(extensionPatternVideo)) {
          files.push(item);
        }
      }
      cachedVideo[url] = files;
      //console.log("JR NOTE: returned from network for", url)
      resolve(files);
    } catch (e) {
      console.log("JR NOTE: error", e)
      reject();
      return [];
    }
  })
  cachedVideo[url] = promise;
  return promise;
}

const getAudio = async (url) => {
  console.log("JR NOTE: getting audio")
  if (cachedAudio[url]) {
    console.log("JR NOTE: its cached")
    return cachedAudio[url];
  }

  let promise = new Promise(async (resolve, reject) => {
    try {
      const rawText = await httpGetAsync(url);
      console.log("JR NOTE: raw text is", rawText)

      let files = [];
      console.log("JR NOTE: filePatternAudio is",filePatternAudio)
      const match = rawText.matchAll(filePatternAudio);
      const matches = Array.from(match, (res) => res);
      console.log("JR NOTE: matches is", matches)
      for (let m of matches) {
        const item = m[1];
        if (item.match(extensionPatternAudio)) {
          files.push(item);
        }
      }
      console.log("JR NOTE: files is", files)
      cachedAudio[url] = files;
      //console.log("JR NOTE: returned from network for", url)
      resolve(files);
    } catch (e) {
      console.log("JR NOTE: error", e)
      reject();
      return [];
    }
  })
  cachedAudio[url] = promise;
  return promise;
}



//returns a promise which resolves with the content, prevents network spam
const getImages = async (url) => {
  if (cachedImages[url]) {
    return cachedImages[url];
  }

  let promise = new Promise(async (resolve, reject) => {
    try {
      const rawText = await httpGetAsync(url);

      let files = [];
      const match = rawText.matchAll(filePattern);
      const matches = Array.from(match, (res) => res);
      for (let m of matches) {
        const item = m[1];
        if (item.match(extensionPattern)) {
          files.push(item);
        }
      }
      cachedImages[url] = files;
      //console.log("JR NOTE: returned from network for", url)
      resolve(files);
    } catch (e) {
      console.log("JR NOTE: error", e)
      reject();
      return [];
    }
  })
  cachedImages[url] = promise;
  return promise;
}

const getImagesOld = async (url) => {
  console.log("JR NOTE: trying to get images: ", url);

  try {
    const rawText = await httpGetAsync(url);

    let files = [];
    const match = rawText.matchAll(filePattern);
    const matches = Array.from(match, (res) => res);
    for (let m of matches) {
      const item = m[1];
      if (item.match(extensionPattern)) {
        files.push(item);
      }
    }
    cachedImages[url] = files;
    console.log("JR NOTE: returned from network for", url)
    return files;
  } catch (e) {
    console.log("JR NOTE: error", e)
    return [];
  }
}

//async, you'll want to await this.
//since using this will mean you don't have anything on screen yet, you'll want some kinda placeholder
const httpGetAsync = async (theUrl) => {
  return new Promise(function (resolve, reject) {

    let xhr = new XMLHttpRequest();
    try {
      xhr.open("get", theUrl);

      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          //window.alert("AN UNKNOWN NETWORK ERROR HAS OCCURED")
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        //window.alert("AN UNKNOWN NETWORK ERROR HAS OCCURED")
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send();
    } catch (e) {
      console.error(e);
      //window.alert("AN UNKNOWN NETWORK ERROR HAS OCCURED")
      return `[]`;
    }
  });
}




//https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use

//https://longesttextever.neocities.org/
class SeededRandom {
  internal_seed;
  initial_seed;

  constructor(seed) {
    this.initial_seed = seed;
    this.internal_seed = seed;
  }

  //default is zero and one, type is inferred to be a number from this
  nextDouble = (min = 0, max = 1) => {
    this.internal_seed = (this.internal_seed * 1664525 + 1013904223) % 4294967296;
    const rnd = this.internal_seed / 4294967296;
    return min + rnd * (max - min);
  }

  getRandomNumberBetween = (min, max) => {
    return Math.floor(this.nextDouble() * (max - min + 1)) + min;
  }

  pickFrom = (array) => {
    return array[this.getRandomNumberBetween(0, array.length - 1)];
  }

  //if you have say, a string "hello world my name is"
  //and you have a chunk size of 3, you'd get something like
  //"worhel na islo " etc
  shuffleInChunks = (array, chunkSize) => {
    const chunks = chunkUpArray(array, chunkSize);
    this.shuffle(chunks);
    return chunks.flat();
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(this.nextDouble() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}


const fuckShitUpVikStyle = () => {
  const body = document.querySelector("body");
  globalBGMusic.src = "audio/music/sometimes_you_have_fun.mp3";
  globalBGMusic.play();
  for(let i = 0; i<31; i++){
    const censorship = createElementWithClassAndParent("div", body, "vik");
    censorship.innerText = "THE CENSORSHIP WAS FOR YOUR PROTECTION";
  }

  const divs = document.querySelectorAll("div");


  const paragraphs = document.querySelectorAll("p");
  const spans = document.querySelectorAll("span");
  for (let p of paragraphs) {
    const css = getBullshitCSS();
    p.setAttribute("style", css);
    p.classList.add("visible");
    p.classList.add("glitch");
    p.title = p.innerText;
  }

  for (let p of spans) {
    const css = getBullshitCSS();
    p.setAttribute("style", css);
    p.classList.add("visible");
    p.classList.add("glitch");
    p.title = p.innerText;
  }

  
  for (let p of divs) {
    const css = getBullshitCSS();
    p.setAttribute("style", css);
    p.classList.add("visible");
    p.classList.add("glitch");
    p.title = p.innerText;
  }

}
