const BigBook = () => {
  const body = document.querySelector("body");
  body.style.cssText = `background: #ffffff; color: black; filter: grayscale(1);`;
  body.innerHTML = `<h2 id="page-title">In Her Library at Lavinraca The Harvest Waits Dreaming:
  A Zampanio Anthology</h2>`;

  //list of title/source array pairs
  const content = [];

  const count = 113;

  for (let i = 0; i < count; i++) {
    //unlike regular, no rhyme or reason, no consistency
    //the regular has things change by shelf
    //this does not
    const book1 = pickFrom(all_stories);
    const book2 = pickFrom(all_stories);
    const book3 = pickFrom(all_stories);
    const book4 = pickFrom(all_stories);
    const book5 = pickFrom(all_stories);

    content.push(new StorySource(`Book ${all_stories.indexOf(book1)}, ${all_stories.indexOf(book2)}, ${all_stories.indexOf(book3)},${all_stories.indexOf(book4)},${all_stories.indexOf(book5)}`, [book1, book2, book3, book4, book5]));
  }

  for (let item of content) {
    const ele = createElementWithClassAndParent("div", body, "story");
    ele.innerHTML = `<h3><u>The Harvest Dreams of ${item.title}</u></h3>    <div style="width:100%; margin-top:0px;" class="story">${item.text.replaceAll("\n", "<br>")}</div>`
  }
  body.innerHTML = body.innerHTML.replaceAll(/<img[^>]*src="([^"]+)"[^>]*>/g, "<br><i style='text-align:center;'>[IMAGE NOT FOUND]</i><br><br>")
  //if theres still any left
  body.innerHTML = body.innerHTML.replaceAll(/<img>/g, "<br><i style='text-align:center;'>[IMAGE NOT FOUND]</i><br><br>")

}//Plato's Cave may find he was missed dearly.


//she dreams of all the stories sacrificed to her, and draws new inspiration from changing them
//she loves how everyone gives her so many things and to her self care is lots of books
//in the library she was gifted as well
//she is not afraid to go to sleep again this year, not anymore
//she is loved and fed
GodOfDreams = (parentBook) => {
  document.title = "Harvest of Dreams"
  harvestIsIn = false;
  const queryString = window.location.search;
  console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  console.log("JR NOTE: ")

  if (urlParams.get("mode") === "bigbook") {
    BigBook();
    return;
  }
  const body = document.querySelector("body");
  body.innerHTML = "";
  const holder = createElementWithClassAndParent("div", body, "sleeping-holder");

  const shelves = createElementWithClassAndParent("div", body, "shelves");
  const gurlHolder = createElementWithClassAndParent("div", holder);

  const sleeping_gurl = createElementWithClassAndParent("img", gurlHolder, "sleeping-gurl");
  sleeping_gurl.src = "images/source_images/sleepingharvest.gif"

  const random = createElementWithClassAndParent("button", gurlHolder);
  random.innerText = "Read Random Book?"
  random.onclick = () => {
    pickFrom(all_books).click();
  }

  const display = createElementWithClassAndParent("div", holder, "sleeping-display");



  display.innerHTML = `<h3>The Harvest Dreams</h3><i style="font-size: 11px;
  letter-spacing: 3px;
  font-family: Courier New;
  font-weight: lighter;
  color: white;">Shifting, ebbing, flowing, always Changing but ever so indulgent, the Harvest dreams of the Inspiration you have Served her in an infinite, ever Changing Library. Will you be Inspired anew by the Changed dreams she happily consumes?</i><br><br>
  <div style="width:100%; margin-top:0px;" class="story">${`

The Harvest stirs in her sleep.

Something slots into place, inside her, or perhaps she slots into it.

The Cult of the Nameless One is Nameless no longer.

The Cult of the Harvest rises in its place.

The Harvest, with her cycle of renewel, of Change and Service and Inspiration, has joined the Loop.

She is not awake, it is not yet her Season. 

But still she Dreams.

And in her Dreams she comes to know many things of Zampanio and all those Beholden by it.
`.replaceAll("\n", "<br>")}</div>`
  //items is EITHER a list of strings or a list of stories because i am sinning on purpose tonight
  const renderBookCase = (items, bookCallback) => {
    const ret = []; //all books
    shelves.innerHTML = "";

    const chunkSize = 42;
    for (let i = 0; i < items.length; i += chunkSize) {
      const chunk = items.slice(i, i + chunkSize);
      const shelf = createElementWithClassAndParent("div", shelves, "sleeping-shelf");
      const allowedColors = ["#4c560d", "#677221", "#a1b234", "#d5f40a", "#7a843d", "#9db211"];
      for (let item of chunk) {
        const book = createElementWithClassAndParent("div", shelf, "book");
        book.innerText = item.title ? item.title : item; //either string or object with author title text
        if (item.isSubDirectory) {
          book.innerText = "*" + book.innerText;
        }
        const padding = getRandomNumberBetween(3, 13);
        book.style.cssText = `padding-left: ${padding}px;
        padding-right: ${padding}px;
        font-size: ${getRandomNumberBetween(10, 14)}px;
        font-family: ${pickFrom(["Times New Roman", "Georgia", "Garamond", "serif"])};
        background-color: ${pickFrom(allowedColors)};
        height: ${getRandomNumberBetween(75, 150)}px`;
        ret.push(book);
        book.onclick = () => {
          bookCallback(item);
          personalFeelings[HAPPY] += 13; //she's so happy she's inspiring you
          personalFeelings[PRIDEFUL] += 13; //she's so proud that theres so much art of her
          savePersonalFeelingsToStorage();
        }
      }
    }
    return ret;
  }

  //list of title/source array pairs
  //clicking one calls this with a parent book and all derived books have at least one source array in common
  const content = [];

  for (let i = 0; i < 10; i++) {
    const book1 = pickFrom(all_stories);
    for (let j = 0; j < 10; j++) {
      const book2 = pickFrom(all_stories);

      for (let k = 0; k < 10; k++) {
        const book3 = pickFrom(all_stories);
        content.push(new StorySource(`Book ${all_stories.indexOf(book1)}, ${all_stories.indexOf(book2)}, ${all_stories.indexOf(book3)}`, [book1, book2, book3]));
      }
    }
  }

  const all_books = renderBookCase(content, (item) => {
    //her domains are Change, Inspiration, Being Served and Libraries.
    display.innerHTML = `<h3>The Harvest Dreams of ${item.title}</h3><i style="font-size: 11px;
    letter-spacing: 3px;
    font-family: Courier New;
    font-weight: lighter;
    color: white;">Shifting, ebbing, flowing, always Changing but ever so indulgent, the Harvest dreams of the Inspiration you have Served her in an infinite, ever Changing Library. Will you be Inspired anew by the Changed dreams she happily consumes?</i><br><br>
    <div style="width:100%; margin-top:0px;" class="story">${item.text.replaceAll("\n", "<br>")}</div>`
  });

  //pickFrom(all_books).click();
}




/*
do you remember last years rambles about identity, dear Guest?

the Harvest is experimenting with her own.

what aspects of her self are useful to her?

and how does one even define use?

does she ENJOY being the god of being served?

does she GROW as it?

or does she rot into place.

the same is true for you, dear Guest.


You can try on identities and roles and selves and keep what works for you and discard the rest like an illfitting suit.

"you" are a collection of decisions you've made about habits to build up
*/


/*
i think its so funny that everyone (not just in zampanio)
 hates camellia on sight but the HARVEST is loved

i think the key is that eustace's more passive demeneor
 is more palatable to people than camellias desire to take charge and tell ppl what to do

 plus camellias inner monologue wasn't really known while the Harvest's is


*/

//http://eyedolgames.com/GenderForLurker/