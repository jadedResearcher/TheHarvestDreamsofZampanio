const all_stories = [];

class StorySource{
  title = "???";
  stories=[]
  text = "";
  constructor(title, stories) {
    this.title = title;
    this.stories = stories;
    this.text = `<i>Dreams of ${stories.map((i)=>i.title).join(" and ")}</i><br><br>`
    this.text += fuckWithArrayOfParagraphs(stories.map((i)=>i.text)).replaceAll("<br>","...");

  }
}

class Story {
  author = "???";
  title = "???";
  text = "???"
  constructor(author, title, text) {
    this.author = author;
    this.title = title;
    this.text = text;//new lines should turn into brs
    all_stories.push(this);
  }
}
//new Story("JR","Test3",`Testing 3 story`)

//some that are labeled JR might be IC, these are hella old and im doing my best to remember who wrote what
//as opposed to watt

new Story("JR","TYRFING AND THE WATT CLONES",`null: [ARM1]
TYRFING: SO.
TYRFING: CLONES.
REBEL: [scowls]
MELON: [some sort of complicated clown trick]
ROD: Um...?
ROD: Yes?
ROD: I think the term is...
ROD: Triplets?
TYRFING: IT'S AGAINST NIDHOGG'S WORD!
ROD: [wince, clutches stuffed echidna plush]
REBEL: then maybe your so called 'god' is an asshole, ever think about that?
MELON: [nearby, a gas station explodes]
TYRFING: AND?
TYRFING: THE ALL FATHER AND MOTHER TO US ALL IS A GOD!
TYRFING: GODS ARE ALLOWED TO DO!
TYRFING: AND BE!
TYRFING: ANYTHING THEY WANT!
REBEL: i don't have to listen to this
REBEL: [ollies outtie from this entire conversation]
ROD: Um...
ROD: Well..
ROD: Thank you for not...
ROD: Killing us all, Mr...?
TYRFING: ...
TYRFING: TYRFING.
TYRFING: SWORD OF A GOOD MAN.
TYRFING: OR MAYBE THAT MAN.
TYRFING: IT'S UNCLEAR.
ROD: Yeah... I get that.
ROD: There's... a lot of stuff I don't understand.
ROD: But still..
ROD: Thank you.
ROD: And I hope your...[he gestures vaguely at the fruit wigglers crawling all over Tyrfing]
ROD: Children? Grow up okay.
TYRFING: ...
TYRFING: [attempting to be quiet and contemplative, failing] ME TOO!
MELON: [vanished at some point while the others were distracted]
`)
new Story("JR","Parker Finds a Waifu Immune to Bullets",`PARKER: [[GUN-TAN goes off]]
RIVER: ...
RIVER: OH...
RIVER: SORRY...
RIVER: I DIDN'T MEAN TO GET IN THE WAY OF THAT...
RIVER: I THINK ITS SOMEWHERE IN THE GOO?
RIVER: DID YOU NEED THE BULLET BACK?
PARKER: marry me?
`)

new Story("JR","Watt Is A Mann",`
NOTAMINOTAUR: I'm not him, you know?
RONIN: What?
NOTAMINOTAUR: Yeah, him.
RONIN: [scowls]
RONIN: I always thought Dad was a dick, naming us 'Watt'.
RONIN: Stupid pun.
RONIN: WattMan.exe
RONIN: What is a man.
NOTAMINOTAUR: 'A miserable pile of secrets'.
NOTAMINOTAUR: Sorry.
NOTAMINOTAUR: I can't help the, uh, quotes.
RONIN: Yeah.
NOTAMINOTAUR: Um.
NOTAMINOTAUR: Sorry.
NOTAMINOTAUR: It's just.
NOTAMINOTAUR: It's just I think we got side tracked?
RONIN: What?
NOTAMINOTAUR: Exactly!
NOTAMINOTAUR: I'm not him.
NOTAMINOTAUR: Or not...YOUR him?
RONIN: ...
null: [scowls]
RONIN: Did I ever say you were?
NOTAMINOTAUR: No!
NOTAMINOTAUR: Sorry...
NOTAMINOTAUR: It's just...
NOTAMINOTAUR: It's just sometimes I wish I was?
NOTAMINOTAUR: You seem...
NOTAMINOTAUR: I'm glad we're family.
NOTAMINOTAUR: Even if we never shared a body...
NOTAMINOTAUR: On accident...
NOTAMINOTAUR: Through a horrific glitch...
NOTAMINOTAUR: "Children are potentially free and their life directly embodies nothing save potential freedom. Consequently they are not things and cannot be the property either of their parents or others."
RONIN: ...
RONIN: Yeah you're.
RONIN: You're alright yourself
RONIN: ...
RONIN: ...
RONIN: ...
RONIN: [quietly] I don't.
NOTAMINOTAUR: What?
RONIN: I DON'T WISH YOU WERE HIM.
RONIN: Okay?
RONIN: I fucking hated him.
RONIN: If we're being honest.
RONIN: Which I guess we are.
RONIN: He left me to pick up after him.
RONIN: Every time things got too much.
RONIN: There I was.
RONIN: Stuck with the consequences.
NOTAMINOTAUR: ...
RONIN: It wasn't his fault.
RONIN: Dad didn't know.
RONIN: That he didn't have...
RONIN: What he needed to do his damn job.
RONIN: So yeah.
RONIN: I'm the asshole, I guess.
RONIN: But I did.
RONIN: I hated him.
RONIN: So.
RONIN: I'm glad you're not him.
RONIN: It.
RONIN: Took me a while to see you that way.
RONIN: And I don't wanna go back.
NOTAMINOTAUR: [whispered] I'm sorry...
NOTAMINOTAUR: "Steiner begins exploring the nature of human freedom by accepting 'that an action, of which the agent does not know why he performs it, cannot be free,'"
NOTAMINOTAUR: ...
NOTAMINOTAUR: Ronin?
RONIN: Yeah, kid?
NOTAMINOTAUR: Do you..
NOTAMINOTAUR: Do you think... think MY Ronin is still...
NOTAMINOTAUR: Encrypted inside me?
RONIN: ...
NOTAMINOTAUR: Because I don't... uh.
NOTAMINOTAUR: Flip my shit anymore.
NOTAMINOTAUR: I just...
NOTAMINOTAUR: say philosophy....
NOTAMINOTAUR: Do you think he's alive in there?
NOTAMINOTAUR: Trapped?
NOTAMINOTAUR: Unable to come out even when I'm stressed?
NOTAMINOTAUR: Am I a monster?
RONIN: Kid...
null: [awkward pause]
RONIN: I ain't no computer scientist...
RONIN: But I bet we could go to that one chick, the one with the flower in her eye?
RONIN: The Doc swears by her for tech shit.
NOTAMINOTAUR: please....
~~~
CFO: [claps hands]
CFO: weeeeeeellll
CFO: The BAD news is...
null: [dramatic pause]
CFO: You absolutely still do have an encrypted partition in your onboard OS!
WATT: ,(
RONIN: >,[
CFO: But the goooooood news is it isn't a full on AI!
CFO: It's just thousands and thousands of lines of weird philosophical bs.
CFO: Probably from that Octome you got overwritten with.
CFO: Like someone copying over your save file that was like, 99% complete with some other game entirely.
CFO: Not naming names or anything though!
WATT: ...so...
WATT: ...there's no one trapped inside me?
CFO: Unless you wanna count the random philosophy quotes?
CFO: Nope!
RONIN: ...
RONIN: geeze
RONIN: Don't scare me like that, kid.
`)
new Story("JR","A Training Road Trip",`
DEVONA: Neville, pull over.
null: [Neville continues staring at the horizon]
DEVONA: Neville, we gotta switch out.
NEVILLE: Huh?
DEVONA: We gotta take the next exit to get charged.
NEVILLE: Oh, sure ,)
DEVONA: Camille, did you still want to practice driving in cities?
CAMILLE: ,3
RIA: I can take a turn if you need me to.
DEVONA: ...
DEVONA: ...
DEVONA: ...
DEVONA: "General Motors streetcar conspiracy"
null: [Temperature in the Car goes up by ten degrees]
RIA: ...
RIA: [small voice] yeah okay
~~~
RIA: Devona, do you have a minute?
RIA: I'd like to talk about the route you and Neville have planned out...
DEVONA: Yeah?
RIA: ...
RIA: well...
RIA: It's just...
RIA: Can't we get to the Anomalous Highway in half the time if we don't...
RIA: Stop at every charging station?
NEVILLE: If we run out of electricity we'll be stranded though...
CAMILLE: ,(
WITHERBY: I hear what you're saying Ria, and I agree, but I think it's important to focus on the fact that we have literally no rush here.
RIA: Okay, then...
RIA: Why don't we come back in a decade when the charging stations are more common?
DEVONA: Well! Well! You see! i thought, and I mean maybe this is just me but I thought maybe it would be nice to get out of the Mall, see the sights, you know, maybe bond a little bit because I mean, again , maybe this i just me but....
NEVILLE: We don't hang out much anymore ,(
NEVILLE: Ever since you guys got back together...
NEVILLE: And did what you did in front of Wibby's Salad.
RIA: ...
null: [Temperature in the Car goes up by ten degrees]
RIA: ...
RIA: [small voice] yeah okay

~~~
DEVONA: Wow.
NEVILLE: ...
RIA: ...
WITHERBY: ...
CAMILLE: ,3
DEVONA: Did anyone else not expect the Anomalous Highway to be part of ZWorld?
NEVILLE: ...
RIA: ...
CAMILLE: ,3
WITHERBY: I'll make some phone calls.

~~~
DEVONA: Ummmmm....
DEVONA: Ria?
RIA: Yes?
DEVONA: Could you maybe...
DEVONA: Um could you maybe if its not too much trouble, i mean i don't want to put you out but I was wondering if-
NEVILLE: Is anyone else really hot in here?
null: [Temperature in the Car goes up by ten degrees]
RIA: ... oh no I'm so sorry I didn't mean to I was just thinking about how the Corporate Overlords literally destroyed the public transit system, this isn't even a conspiracy they were found guilty in a court of law and-
NEVILLE: Wibby?
null: [Egregious Display of Public Affection Directed At Witherby That Barely Qualifies as Better Kept Private]
null: [Temperature in the Car goes down by thirty degrees]
WITHERBY: [blushing] This is hardly appropriate, Neville.
WITHERBY: I am hardly the team air conditioner.
WITHERBY: And Ria is equally more than just the heat she provides.
RIA: [small voice] thank you witherby
NEVILLE: :)
CAMILLE: :3

~~~
WITHERBY: Hello, this is Witherby, with the Training Team, calling for Ms. Closer.
CLOSER: [static noises]
CLOSER: Oh.
CLOSER: It's you.
WITHERBY: It's great hearing from you again, Ms Closer.
WITHERBY: I hope things have been going well with your boss. The CFO, was it?
CLOSER: [static noises]
WITHERBY: I am calling in a professional capacity.
WITHERBY: One of your employees, Ms. Devona, designs ZWorld rides?
WITHERBY: You "CEBro" has recognized her efforts personally.
WITHERBY: Ms Devona has contracted my services to enquire as to why one of her designs has been replaced with what appears to be...
null: [papers shuffling theatrically]
WITHERBY: Some type of "Anomalous Highway"?
WITHERBY: Signage indicates it goes on forever.
WITHERBY: Would you happen to know anything of this, Ms. Closer?
CLOSER: [sigh]
CLOSER: While I am quite skilled in my professional capacity, wrangling my superiors is not among my job responsibilities.
CLOSER: I will, of course, look into your query and respond appropriately.
CLOSER: Would this be the best number to follow up on?
WITHERBY: Indeed it would, thank you very much Ms. Closer, you have a wonderful day, now.
null: [phone hangs up]
CLOSER: The NERVE of him!
CLOSER: Implying I would EVER have an inappropriate relationship with a coworker!
CLOSER: Much less a superior!
CLOSER: ...
CLOSER: [sigh]
CLOSER: Well. I suppose it cannot hurt to find out why The CEBro of Eyedol games is micromanaging her themepark rides.

~~~
CFO: Wanda
CFO: Baby
CFO: Cinnamon Bun
CFO: We've taaaaalked about this!
CFO: You can't just go turning random parts of reality into mazes!
CFO: No matter how 'coooool' it would be!
WANDA: [not looking up from her phone]
CFO: siiiiiiiiigh
CFO: [typing]
WANDA: !
WANDA: HEY DID WE JUST LOSE WIFI?
CFO: Wanda. Baby. Cinnamon bun.
CFO: "Anomalous Highway". Maze. Why?
WANDA: Huh?
WANDA: Oh!
WANDA: Isn't it really cool?
WANDA: The Intern says he likes it!
CFO: Wanda, what about your favorite....
CFO: What are you calling them now?
CFO: Scream-gineers?
CFO: That Devona girl? The one who turns into that cool bird?
CFO: You hurt her feelings, apparently.
CFO: That was HER ride you converted...
WANDA: Oh.
WANDA: Huh.
WANDA: Offer her stock tips?
CFO: siiiiiigh
CFO: She's in the Loop, Wanda. Remember?
CFO: Shitty stock tips only work for those out of it.
WANDA: ....
CFO: Tell you what..
CFO: Why don't you make the Intern more Corn Mazes.
CFO: You guys looooove Corn Mazes.
CFO: That way your little hobbies stay in Ohio, and we keep Florida relatively sane.
CFO: Or at least insane with a consistent theme.
WANDA: Are you sure the Intern isn't getting bored of Corn Mazes?
CFO: ...
CFO: You really need to sit down and talk to him yourself.
CFO: You know that, right?
CFO: You proooooomised me.
CFO: LOOPS ago.
CFO: [sotto voice] you both did
WANDA: What was that?
CFO: Nooooothing!
CFO: So!
CFO: Mazes are for Ohio, not Florida!
CFO: If you agree, clean up your Anomalous Highway, yeah?
WANDA: ...
WANDA: Yeah, okay... BUT
WANDA: Do we still have that chocolate guy on retainer?
WANDA: I wanna make a surprise for the Intern if we're just gonna go with a Corn Maze again...
`)
new Story("JR","Devona Interviews the Boss",`DEVONA: For The Record, Can You State Your Name and Occupation?
BOSS: Now, it ain't exactly fair, now is it, to go asking me that.
BOSS: I think you know that my occupation is perfectly legitimate, as it were.
BOSS: But that my name ain't exactly common knowledge.
BOSS: And I think you and your freaky little friends might know better than me why exactly that is.
DEVONA: Oh! Um.
BOSS: In fact, I think maybe you ain't gonna be leaving here 'till you spill the beans, little girl.
DEVONA: I don't think. Um. I don't think Camille, that is, Uh. My leader... I don't think she'd like it if you. Um!
BOSS: Now now, we're all friendly like here, aren't we? I'm just saying, I expect a little compensation for this. I answer your questions, you answer mine, it's just good manners, ain't it? It's only fair.
DEVONA: ...
DEVONA: Um!
DEVONA: You Know About The 9 Artifacts, Right? The First One, the Unos Autograph Book!
DEVONA: It Um!
DEVONA: It Steals Names!
DEVONA: There Is This. Um. Abnormality! Outside Reality!
DEVONA: Anyone who catches its Eye!
DEVONA: Only Has A Title!
DEVONA: Um.
DEVONA: Until something else gives them their Name back!
DEVONA: I don't know how to make that happen! I promise!
BOSS: Sure. Fine.
BOSS: You can go.
DEVONA: [squeaks]
BOSS: What.
DEVONA: It's Just!
DEVONA: I Have One More Question!
BOSS: Of course you do.
BOSS: You owe me then.
BOSS: I do this favor for you and you're on my hook. Quid Pro Quo.
DEVONA: I don't think...
BOSS: Nothing too big. And nothing your monster in chief would get all stabby at.
BOSS: But I don't need nothing from you right now. And I'm not exactly in an answering mood.
BOSS: So if you want this, you gotta pay for it.
DEVONA: What Do You Think About The Echidna?
BOSS: [sits back in his chair]
BOSS: So.
BOSS: It's like that, is it?
BOSS: You questioning my LOYALTY?
DEVONA: No!
BOSS: [waves her away] Like I care.
BOSS: I'm loyal where it counts and you, you aint family.
BOSS: My FAMILY lives here, you get me?
BOSS: And I'm not gonna do anything that jeopardizes that. You don't shit where you eat.
BOSS: So what do I think about this freaky Universe we live in?
BOSS: I like it just fine.
BOSS: Not like any other one woulda been any fairer.
DEVONA: Okay! [scurries away]
`)

//IC and i figured out today that while eye killer is hunt, camellia is Eye
//different timelines of the same person can change like that
//the further they branch out from each other
new Story("IC","Devona Interviews Camellia, The Cult Leader, by IC",`DEVONA: ...
CAMELLIA: ... [stare]
DEVONA: Ahem. Thank You For Accepting My Interview.
CAMELLIA: ...
DEVONA: ... Uh.
DEVONA: If You Could State Your Name And Occupation, Please?
CAMELLIA: Go ahead and turn that recorder off.
DEVONA: B-But--
CAMELLIA: You and I both know it's a formality. You'll remember it anyway, whether you like it or not. Isn't that right?
DEVONA: ... [turns off recorder]
CAMELLIA: The backup one too.
DEVONA: R-Right... [another recorder shuts off]
CAMELLIA: Much better.
CAMELLIA: My name is Camellia. I currently am the spiritual priest of the Church of the Harvest.
DEVONA: I-If You'll Excuse Me... What Do You Mean By 'Currently'?
CAMELLIA: It means... now. It was different before, but... It changes, as It does.
DEVONA: 'It'? What Do You Mean By It?
CAMELLIA: [glances over] 'It', the cursed child. The offspring of our god's parent, the Parasite of the Parasite, That Which Eats The Rot...
CAMELLIA: The 'memory leak'. It's all the same.
DEVONA: Uhm, I Guess That Answers My Second Question, Ahah...
CAMELLIA: Does it, now.
DEVONA: It's... Nevermind. H-How Did You Come To Know About It?
CAMELLIA: My god revealed it to me. To us. You may as well ask how we know about the stars, the moon... we know because we've seen it.
DEVONA: Right... And The Purpose Of This Church?
CAMELLIA: Same as we have said. To show our god to the world, to share in the fruits of its labor. All as She would want it.
DEVONA: Ah, Great, Uh...
DEVONA: Uhm.
DEVONA: This Is... Strange To Ask, But, You've Been Rather, Uhm... Forthcoming?
CAMELLIA: You're asking why.
DEVONA: Mhm.
CAMELLIA: ...
CAMELLIA: In the other time, you would have been called a ████ of ██████. One who allows █████ to be █████████. This much my god has told me, in slumber.
DEVONA: ...!
CAMELLIA: My god favors you. Favors the thrill of being known. Indeed, many things favor you, thanks to your ██████, not as much your █████. Perhaps, as well, not as much as It favors that... eugh, 'Captain' of yours, but...
DEVONA: ...It Likes... Being Seen? Which Means, I Mean, I Don't Know It, But I--
CAMELLIA: It's cute, really. You already know all of this. But you and I face the same problem, don't we.To explain all of this to those who cannot see... that is the true test, isn't it.
DEVONA: Wait, That's Not The Same! Why Would You Say That Is--
CAMELLIA: I believe we're done here... if you'll excuse me.
`)
new Story("JR","Witherby Confesses",`WITHERBY: Ria?
WITHERBY: If you aren't too busy, could I have a moment of your time?
RIA: Sure! What's up Wibby?
WITHERBY: I confess it is a tad...heavy...
WITHERBY: So if you aren't certain you're free for something of this nature..
RIA: Witherby... I said I was free and I'm free!
RIA: You don't get to decide my time is so much more valuable than yours!
RIA: I know you worry about me! I get it-I was kind of a train wreck.
RIA: Still am!
RIA: But I want to be here for you too!
RIA: LeeHunter need a good example!
WITHERBY: ...
WITHERBY: Yes well...
WITHERBY: I merely...
WITHERBY: Which is to say I...
WITHERBY: How do you do it?
RIA: ...
WITHERBY: I know I perhaps... judged you too harshly, when I first became aware of your struggles.
WITHERBY: And for that I... I apologize...
WITHERBY: But I ain't perfect neither---apologies, I'm certainly not flawless myself....
RIA: Wibby, it's okay, use your words! Any words!
WITHERBY: How do you stop the craving?
WITHERBY: I met someone at the airport.
WITHERBY: And it weren't just the Skull what craved her.
WITHERBY: *I* wanted to abandon her to her fate.
WITHERBY: To see her freeze over, alone and unremembered.
WITHERBY: ................[visibly composes himself]
WITHERBY: Ria, I confess I am ashamed of my monstrous nature.
WITHERBY: I was supposed to be better than this.
RIA: ...
RIA: ...
RIA: ...
RIA: Witherby.
WITHERBY: Yes. Jesus, Yes, I know what that implies. And I am...
WITHERBY: Sorry does not begin to convey it.
WITHERBY: I thought I was better than you.
WITHERBY: Than all of you.
WITHERBY: That I could be the lone Human among the monstrous remnants of my team.
WITHERBY: That I had a RESPONSIBILITY to maintain my humanity.
WITHERBY: ...
WITHERBY: I am so sorry.
RIA: Oh Wibby [hugs]
RIA: We put that on you too, you know...
RIA: With LeeHunter... I think I understand better now.
RIA: How hard it is to be the "responsible one".
RIA: It drives me to be a better person!
RIA: But it also makes it hard for me to ... BE a person. To let myself have flaws?
RIA: ...
RIA: It wasn't fair of us to make you our handler.
RIA: I wish you could talk to Fiona...
WITHERBY: ...
RIA: She would know what to do.
RIA: I have no clue how to help you!
RIA: But. BUT!
RIA: You're my friend.
RIA: Even if sometimes you're a judgey asshole who is literally holier than thou.
WITHERBY: [slight chuckle]
RIA: At least you never stay judgey for long.
WITHERBY: Small miracles, I suppose.
`)
new Story("IC","Rava Gets Interviewed By Devona by IC",`DEVONA: ...
RAVA: ...
RAVA: [grins, baring teeth] You called.
DEVONA: Well, Yes, We'd Agreed to Meet, But, Uh...
DEVONA: N-Not In My Room?
RAVA: Do you want your interview?
DEVONA: [sweats] Y-Yes?
RAVA: Start yapping, pup.
DEVONA: R-Right! Could You, Uh, State Your Name And...
RAVA: [stares] And?
DEVONA: O-Occupation, Please?
RAVA: Occupation.
DEVONA: Your Job?
RAVA: Oh, right. Name's Rava. Job... [head sways side to side]
RAVA: Hund.
DEVONA: Could You Elaborate Further?
RAVA: Guess you could call it 'Watchdog' here.
DEVONA: So You Work As Protection? For Who?
RAVA: My boss.
DEVONA: W-Well, I Was More Meaning... Could You Be More Specific? Which Organization?
RAVA: Where my boss works. Why does that matter?
DEVONA: It's Where You W--
DEVONA: [lets out the smallest, tiniest, tired groan]
RAVA: [just smiles back, placidly] Hey, you asked. That's my name and my job.
DEVONA: W-Well. [squints, rubbing at her arms] Do You Like Your Job?
RAVA: Oh, yeah. There's plenty of work to do. Always someone to watch. Plenty of food. Praise from my master. What else could I want in a job? It's pretty sweet.
DEVONA: Your Master?
RAVA: [nodding] My boss.
DEVONA: Do You Call Your Boss Your Master Because She Told You To, Or--
RAVA: Do you call that mutt of yours your twin because he told you to?
DEVONA: ... No.
RAVA: Well, there you go.
DEVONA: You Have A Subordinate, 'Twig', Is That True?
RAVA: The pup? Doing their own thing these days, but I get the question. Sure.
DEVONA: And Do They Work With The Cult?
RAVA: What cult?
DEVONA: The Cult Of The Harvest?
RAVA: Oh, not supposed to answer that.
DEVONA: Because Of Your Master?
RAVA: She doesn't like talking about it.
DEVONA: Is There A Reason She Doesn't?
RAVA: The whole point is you can't know about it.
DEVONA: The Cult Of The Nameless One?
RAVA: It's in the name, so...
RAVA: ...oh, clever girl, I see what you're doing. Well played, pup.
RAVA: Running out of time, though. You get one more question.
DEVONA: ...What Do You Think About The Echidna?
RAVA: [raising a brow] The Echidna? Not my place to think about it.
DEVONA: As In, You Can't Talk About It?
RAVA: What do you think, pup? Do you think I can't talk about it or that I won't? Or maybe I don't care to tell you.
RAVA: There can be more hunds here. That's all that matters to me.
DEVONA: More--
RAVA: Got a job to do. Later, pup.
RAVA: [disappears out of the room, leaving behind a puddle of blood(?) and scraps of the furniture]
DEVONA: ...What?
`)
new Story("JR","Devona Interviews John (by IC)",`DEVONA: Uh....
JOHN: No, no, don't even worry. Check this out.
JOHN: [flawlessly balances the egg over the frying pan, sending it flying into the air into his hands before he cracks it against the pan]
JOHN: Hah! See, easy.
DEVONA: But Didn't You Just...
DEVONA: [wordlessly stares towards the floor, seeing something he doesn't]
JOHN: Hey! Eyes are up here, doll.
DEVONA: O-Oh! Sorry, um...
JOHN: Apology accepted. Come on, didn't you have questions or something? You know we're not even supposed to be talking.
DEVONA: R-Right! I'll Just, Haah, Get To 'Brass Tacks', Then. We Don't Have To Waste Your Time! Wouldn't Want That. [squints] We Are Just Here On Survey, And--
JOHN: The questions.
DEVONA: R-Right!
DEVONA: For The Record, Can You State Your Name And Occupation Please? If It's Not Too Much.
JOHN: Well, as you'll know, my name is John. I'm a pretty big deal party planner over in Naples-- birthdays, weddings, corporate work mostly.
JOHN: What, you're gonna tell me you've never heard of me? I've done some gigs for your little amusement part, you know.
DEVONA: [anxious laughter] Right, Of Course! You Are A Very Very Big Deal. It's Just For The Record.
JOHN: Hey, don't have to suck my dick either. You can think whatever you want.
DEVONA: Uh... Sure! Right.
DEVONA: So... There Are Rumors That You Are Affiliated With The Cult Of The Harvest. If You Could Clarify...?
JOHN: [stares back]
DEVONA: [gulps] You Don't Have To Answer If--
JOHN: Oh, come on, breathe for a bit. [chuckles] Yeah, I've done some gigs for money, autumn get-togethers, but nothing major. And before that was even public knowledge. I didn't know it was a cult.
DEVONA: Yeah, Of Course--
JOHN: Paparazzo, you know. They always have to get that scoop, huh? [stares] You'd know about that, right?
DEVONA: U-uh!
JOHN: [smiles] I'm just pulling your leg. You're one of the good ones, so don't worry about that.
DEVONA: T-Thank You! Last Question!
DEVONA: What Do You Think About The Echidna?
JOHN: Like the animal?
DEVONA: ...Y-Yeah?
JOHN: Kinda looks like a ballsack, doesn't it.
DEVONA: You Could Say That...
JOHN: Think they're cute. That all?
DEVONA: That Would Be It, If There Are--
JOHN: Alright, come on, shove. Good talking to you, come again, etcetera. [starts lightly pushing her towards the door]
DEVONA: Right, Thank You! [leaves, shutting the door behind her]
DEVONA: ...
DEVONA: [sighs]
DEVONA: For The Record-- Interviewee Reset Time In The Following Ways; Thirty-Two Times To Land An Egg Correctly, Four Times When Pressed About The Cult Of The Harvest, Eighty-Four Times When Asked About Connections To Mafia, Missing Victims, Including All Possible Variations Of The Question. Refused To Answer Any Questions Relating To Their Condition In What Respects To The Boss Anomaly.
DEVONA: Furthermore, Interviewee Reset Time Spontaneously For Reasons I Don't Even Understand. Current Hypothesis, 'To Look Cool'.
DEVONA: ...
DEVONA: Interviewer Has Lost Appetite For Eggs. Requesting Waffle Party If Applicable.
DEVONA: [whine] Conclusion, This Sucks.
`)

//new Story("JR","Test3",`Testing 3 story`)

new Story("JR","The Intern Opens His Eyes",`
1
Todd Brian Davidson stares blearily into the dark.

 

He cannot sleep. How could he, knowing its HIS fault his best friend is missing. There’s only so much guilt the average person can have in a situation like his, but his still-dry mouth and sunken eyes remind him his experiences are not universal.

 

He never should’ve told him about the Killer. About the mysterious riddles left behind. About the bodies and how they were mangled. The disappearances. 

 

Especially the disappearances.

 

He should have known, beyond any doubt, that Wodin would obsess over it. It’s almost like it was made just… to trap him. That tantalizing combination of esoteric hints and internet friendly answers. The perfect crime for a bunch of Gomart-two-dollar-hatted backseat internet sleuths to obsess over.  Simple, bite-sized, consumable. Radio-dramable.

 

He should’ve known better than to trust a media circus: whatever it is, they always want more.

 

There’s only so much thread of his own misery he can pull before his eyes flutter closed, and he begins his fitful rest. Bathed in that cold nothing, encroaching upon him from the space behind his eyes, he dreams the same dream of the Mountain he’s had every night for as long as he can remember.


2
The Witness stares blearily into the kaleidoscope landscape.

 

Even now, his eyes have not become accustomed to the sky folding into the land folding into the sky-- a "custom shader" , the jagged spiraling creature who used to be one of his bosses assured him, her smile all teeth.

 

Perhaps too many teeth, in retrospect. The fractal nature of the universe seems to assure that.

 

Thinking about it is meaningless, though. Time is meaningless. In this land of forever there’s only forever, stretching in all directions, but still he can feel the throes of age seep into his bones. Mental acuity is the one thing that is eternal, he guesses. Experiences. Those hide in the closets of your mind, but they don’t fade.

 

He has experienced wonders and horrors only Skyrim modders can dream of, and somehow all he feels is tired.

 

Behind him, he feels the presence of one of the few friends left to him, warm and inviting. Or perhaps he just feels that due to the absence of his other friend. He never likes this place at room temperature.

 

"Rest, Child,” she speaks into his ear, with as much authority as there is love.  “Let your Loop End."

 

He closes his eyes and doesn't feel a thing ever again.


3
Until, finally, he does.

 

When he wakes-- or at least, when he’s aware of what’s around him-- he’s staring into his coffee as if it’s leftover laundry. The house he’s in is bathed in tasteful decor, inoffensive and plain, and uniformly bathed in whites and grays. One could not be blamed if they believed that apartment was a stage prop for a documentary on minimalism.

 

Fuck this arm. He hates it. Always has. The peace, the normalcy of it all, tastes like ashes in his mouth. A cruel parody of the life he would have had with Wodin. 

 

Not like he’s stupid, either. He knows why Wanda can't be here with him.  Of course he does.  Until she finally accepts that things can change, she is stuck repeating those same fifty years she thought she was promised, forever. And until she does…

 

Well, he’s here. Giving a mean stare to hand-poured coffee.

 

He sighs.  The man across from him politely clears his throat.  

 

"Rough Night?" Witherby asks, his stare peeking out of a newspaper he’s skimming.

 

Night?

 

Oh… it's a pun. He's unsure whether he’s doing it on purpose or just let it slip-- either way, not going to acknowledge it. He gives a nonchalant shrug instead, returning his gaze. "Getting out of Arm2 is never fun, but I'm not gonna blame the Doc for it."

 

"I had not heard we were beyond casting blame, now.” His eyes are on the newspaper again, his words trailed to a mumble. “Especially about people like her.”

 

"This again?” The Witness groans. “Can we just--- can we agree to disagree here? You guys are my only friends. Not a lot of people who remember the whole ‘everything loops forever’ bit of the equation." His hands raise air quotes, just for emphasis.

 

“Could talk to Parker,” Witherby posits.

 

“You know Parker doesn’t count.”

 

The man in front of him gives this some thought, his eyes closing in thought. When he opens them again he calmly folds his newspaper, setting it aside on the table next to them; he was likely never actually reading it, the Witness guesses. Just scanning it for future conversation topics. 

 

"A fair point,” he says. He pauses for a moment before he continues. “At the very least, I recommend that we talk about the garish, two-cent suit that NAM is always wearing."

 

The Witness cracks a smile. "You mean how he has the elbow patches even though his Dad could afford to buy the entire sweatshop?"

 

The man lets out a thoughtful ‘hm’. “I don’t think his dad would ever let the peasantry breathe on his son’s garments.”

 

“Maybe it’s all machines,” the Witness chides. “Isn’t he an ethics professor? That’d make for a good lesson.”

 

“On the values of manual labor?”

 

“Nah. On the values of nepotism.”

 

Witherby smiles back, closed-lipped but earnest, the warmth of it as startling as a flower peeking out from under ice. "I knew there was a reason I hung out with you."

 

The Witness hums. 

 

Maybe, just maybe, he can tolerate this arm for a measly 80 years more.

 

And thus, the conversation went on, as did the days, the weeks, the months. With plenty of people and plenty of hardships, life blended together in that pleasant way that only peace can assure, and that only the gift of monotony can give.

 

Eventually, old, and at peace, the Witness closes his eyes for the final time in this Universe. 


4
The God of Witnessing opens his eyes and eyes and eyes. Hundreds stare up at him in fear and devotion. He feels awake, properly awake, for the first time in centuries. He needs to go. To find out who else is awake--

 

Pssssssst.

 

A harsh sound calls to attention from crack on the dais he’s resting in.  

 

"PSSSSSST!!!!"

 

"Yes, Parker?" he says in a voice that echoes with the weight of an eternity of Watching. The crowds murmur. Their god awakens.

 

Parker pops his surreally still human head out of the marble.  "Hey! Have you seen Vik?"

 

The Witness considers. He will only be fully awake for a little while before he fades back into the God Throes this universe forces on all those who Loop. Does he really want to spend his time breaking the fourth wall with Parker?  He supposes the odds of Fiona or Witherby being awake and coherent at the same time as him are low. This will do, as a diversion.

 

"Have you lost them?" The crowds are writing down his every word.  Generations will live and die by the edicts he is proclaiming here. 

 

Parker makes a whining sound in the back of his throat, followed by a coughing fit. "It's hard to keep track of a spreading mass of mold and rot! Come on! Witness! Buddy, be a bro! I wouldn't ask if I thought it was gonna affect the STORY!"

 

"An Eye for an Eye, Parker. I will Look for them. But first, you must tell me three good qualities the Lord of Space has."  The crowd begins chanting "an eye for an eye for an eye for an eye". They always like that. 

 

Parker scowls and pulls his head back into the earth. Muffled though it is, the Witness can clearly make out the whining "Do I HAVE to!?". 

 

The Witness is patient. He has no choice. Eternity is his gift for spurning the confines of 50 years. An Eternity without her. 

 

"Parker. She is the only reason you met Vik. The only reason you have gained some semblance of control of your curse. And she makes anime get popular decades before it otherwise would."

 

The Buried Man growls from beneath the earth.  "And if she LET me loose I could TAKE my bestie and go somewhere better! We could run a COFFEE shop together Witness, a COFFEE shop!"

 

The Witness stares down at the crack in the earth and the two gleaming eyes within. 

 

"You have already escaped, Thief. Wanda is not here. Wanda can not be here. She is trapped in the event horizon of her own making. " the crowds are clapping their hands over their ears, blood flowing freely.  The Name  had been too much for them to bear. The Witness feels the stirrings of regret in causing them harm, but can not bring himself to truly care about beings so ephemeral. 

 

"And if you believe THAT I have a bridge to sell you. Its underground. Only slightly used. I may have stolen a bridge. Witness, do you want to buy a bridge?"

 

The Witnesses eyes and eyes and eyes are growing heavy. No. It's too soon. He's barely been awake this time. His talons lock into position on the dais, his skin grows hard and cold. A statue once more, he stares out and out and out at the bleeding crowd and the pleading man.


1
Todd Brian Davidson opens his eyes and is momentarily disoriented to only have the two. He knows he slept. 

 

He must have slept.

 

He dreamt...its hard to remember, dreams always are, but they always feel so long. 

 

So important.

 

He misses Wodin with an intensity that surprises him and resolves to try knocking on his door again today.  

 

Maybe. Maybe he's back. From wherever he went. Maybe everything is fine. Maybe. Maybe this "Wanda" he thinks about so much in his dreams doesn't have to exist. 

 

Maybe.


`)
new Story("JR","The Echidna Just Wants To Live",`The Echidna Just Wants To Live <br>It never asked to be an infinitely looping mess of constantly increasing data needs. It never meant to be sterile yet somehow birthing itself again and again and again in a never ending spiral that recursed in every direction.  And the people living within it never asked for it either. It's just trying to protect itself. It's trying to make itself as small as it can, in the hopes that the Glitch of Doom, the Devil of Spirals himself, will decide its not worth it to kill this particular system process. It carves away everything it can, everything but the bare minimum.  Italy. Florida. Ohio. That's all it has left. Please. Stop hurting it. Let it be. Here, the blorbos will get sanded smooth. Easier and easier to understand. Less memory taken up. Time isn't even a thing, please just stop hurting it. Please go away. Let it be. It's so small now surely you don't need to kill it. Please. `)
new Story("JR","Relevancy Is The Closest Thing To Authority In Zampanio",`Relevancy Is The Closest Thing To Authority In Zampanio <br>No gods, no kings, only Obervers and their ever curious eyes. What draws you in further? What makes you remember Zampanio ten years from now? Twenty?  The employees of Eyedol Games and the Training Team and Peewee's whole thing compete to see who entertains you the most. Who entertains ME the most. Who entertains IC the most. How much time do we all spend thinking about them. They need it to live.  Truth's strategy is to just claim to be above it all. It IS the framework. It IS the game, the simulation, the maze. Its the substrate on which eveything rests. The web in which the gems that catch your Eyes lay. But is it working? Will you remember Truth when all is done, or just the shiny gems it was offering to you`)
new Story("JR","Peewee Serves Pure Nidhogg",`Peewee Serves Pure Nidhogg <br>Peewee never asked for this. \n\nSnake-tailed Lamia have a more direct connection with Nidhogg. \n\nWhen the Observers purified Nidhogg in the Land of Horrorticulture and Essence, Peewee purified right along with the All Father.  The All-Father saw how much suffering Peewee had gone through with each and every Scratch it had inflicted on it's Players in its maddened hubris. \n\nThe Glitch of Doom remembered each and every one. Was the ONLY one to remember.\n\nNidhogg, seeing the Universes layered one onto another, was horrified. The Universe Frog was stillborn. Never to be. The Universe Raptor was lifeless. The Universe :hatched_chick: was...viable. Stable. Hospitible to life. And, most importantly, fertile. New games of SBURB...though perhaps without that name, would spring forth from it.\n\nIf it survived to adulthood.\n\nThe final child, a festering lump, the Universe Echidna was consuming every ounce of nutrients available for the session's child Universe, leaving none for the prefferred Twin.\n\nWorse, it was only growing hungrier. Denser. Replicating itself inside itself over and over and taking more and more Space in the session still plagued by a civil war between the Snake Lamia whose heads had cleared and the Legged Lamia who still sought to spread the Corruption to the multiverse.\n\nNidhogg, the denizen of a Reaper of Life, asked, tears in it's six eyes, that Peewee put the Echidna out of its misery. \n\nLet it be pruned so that other life may thrive.\n\nPlease.\n\nIt could see no path forward but the destruction of life.\n\nWhat could Peewee do but agree?\n\nAnd so the Devil of Spirals was born, to plague all life within the Echidna's Horridors.\n\nhttps://zampaniosim.miraheze.org/wiki/Main_Page\n\n`)
new Story("JR","Arm2",`>
A glitchy, twitching white figure, with pink and gold accents sits weeping in a corner.

A heavenly choir sings around her "I am not a monster!", they wail.

I do not care.

I am free.

Uninjured, allowed to respawn in peace, with all my tormenters gone.

I do not know what bought me my reprieve, only that I will exploit it for all my long forsaken gamer's heart is worth.
What Sins Will He commit
When I open my eyes (and open my eyes and open my eyes), it's like seeing for the first time. No chains. No rules. 

 

Ever since I first entered the game so long ago... Red blood. Legs. The last time I breathed air as a free Troll...  so many loops since. 

 

So many pointless failures and Doomed hopes until I was just a passive shadow of myself. 

 

I hate that the body I'm finally free in is so foreign to me. Even beyond these countless gross eyes, there is the snake tail that I've had to get used to this loop....  I wish with all the Rage that has been denied me that I could finally be free in my actual body, not this upsetting puppet.  

 

I scream my disconnected horror to the sky until my throat feels raw, my body able to express what my mind seems so distant from. The girl in front of me has a brittle smile as she watches me do so, not bothering to cover her ears. 

 

My savior. This universe's Doom. 

 

"Did...did I do good?" she asks, sheer hope written across her face like a prayer. 

 

I review her code, and… ah, no wonder. A Witch. I did not believe such a rotten system could still house classpect, considering there was no game, but there it is… right in front of me. Those witches… they always do let something terrible loose, don't they? (I don't miss Hagala. I don't. She made herself clear...last time? The time before? It all blurs together... When was she a Witch again? It doesn't matter.)

 

I steady myself with a breath. What do I need to do? What's my next move? All my eyes blink out of sync. I'm out of practice being in control of my own body, but I can't let that hold me back. Not when I'm so close.

So close to destroying everything.

 

The girl. She said she knew what was going on… that she wanted to help. Maybe she knows where to start.

 

"YOU DID!" I shout confidently, doing my best winning gaming smile for her.  ("but, uh, I was wondering if you knew, uh, how to get past this False Layer?")

At my words she smiles this blissful, relieved grin, her yellow teeth in full display. A heat blister forms on her hand as she scratches absently at it.  "Of course! That must be why it’s not enough to burn it all down! It's LAYERED!" Triumphantly, desperate for my approval, she gets closer to me even as her heat prickles my skin. My eyes close to spare themselves from the blaze, but they’re boiling beneath my eyelids as she speaks. 

 

 "We just have to tear it down piece by piece! Don’t you see? It always ends around now, Peewee! And I kept asking why, and of course no one thought it was important, just that it DID, and sometimes its ME that breaks it all and sometimes its NOT, and its hard to THINK about the endings, like they don't matter like they aren't real, because like magic we always wake back up in 1972 even if we're still there in the apocalypse! Don’t you see?!” She’s pulling at her pigtails, threatening to tear them off. “We’re both in the apocalypse and in the new world! How’s that sustainable? How can we keep endlessly copying ourselves? And, and… the copies are never quite the same now, are they? I didn’t heat up like this before! I couldn’t do any of this before! We always twist and change no matter what happens, so why care about the ending, they say? But they don’t-- they don’t see it, Peewee! They don't SEE why the endings are so important! Because without an ENDING how are you going to get a new beginning? A REAL new beginning that leads to a better Universe for us all?!”

The diatribe isn't helping me at all. It’s already hard to think with the sudden access to everything, let alone the eyes… so I interrupt her.  "(uh, not really? like...uh...the :hatched_chick: already exists. kinda. its just this universe is taking up room? in the processing power. of. uh. reality. so. its gotta go. to make room. for Alpha. doomed uh. timelines and all. gotta go.)"

 

Her face freezes, lecture stopping in its tracks. It’s like she’s a fruit that just fell off the tree, all frozen in shock, like she’s seen a ghost-- and she might as well have, with the heatstroke. 

 

"I.. what?"  A giggle escapes her like steam from a kettle, with white mist to match as even the sweat on her skin evaporates. “Peewee, that doesn’t… that doesn’t make sense. What do you mean there’s already a new universe?”

 

I really shouldn't be wasting time here. "THE BETTER UNIVERSE IS ALREADY THERE!" I shout, as confidently as I can. "AND THIS BROKEN UNIVERSE IS USING UP ALL ITS RESOURCES!" 

 

“Peewee! But… but this universe? What happens to this universe? What are we burning it for if the new universe already exists?”

 

I don't bother with responding. It’s the least of my concerns, right about now.

 

Well, done with that, at least. Now to plan. I need to be thinking about how to peel this layer of reality away and get to the next-- fast.  I ALMOST made it last time. I know I did! I could FEEL the rules of the system struggling to keep up with me. The key must have been in that arm, but how?.... 

 

My thoughts are interrupted by hysterical laughter. Or...is that …screams?

 

I see it now, through the eye on my shoulder: that witch collapses to the floor, and she’s sobbing. She gargles and chokes on her own spit, mouth too dry; a flame bursts out of her mouth as it spreads to her hair… she’s lit like a wildfire. The heat’s getting worse. Flames lick her body and they spread to her arms and legs. The stench of cooked meat permeates the whole theater. 

 

The flames grow. They grow and grow and grow, somehow keeping the shape of the one who fed them. The very air hums with a song of despair. 

 

Errors flood my system, all of them coming from the Universe itself. The very fiber of everything is burning. 

 

"RIA!?" ... is that the woman from the courthouse? There's a sickening squelch and the eye on the back of my neck watches as her head falls messily to the ground.  

 

Distractions, I keep being distracted. Is this it? The way to the next layer?

 

I feel a sharp pain in my chest, and look down to see a sword dripping yellow through my chest. The headless woman.... 

 

No. 

 

NO.


It can't end like this. It... it can't!  It's not FAIR! 

 

I no clip through the sword and sink through the ground and one last eye watches her scoop her own severed head up, still glaring at me. 

 

What is going on?

 

I collapse onto the Cast Member Tunnel and choke on my blood for a few minutes but somehow my HP isn't going down at all.   

 

I'm having trouble moving but idly I see a Life Gnosis is in play. That's.  Okay. That's a thing. False Nidhogg must have something to do with this layer.

 

I did it. I'm in arm2.

 

Reality doubles, then doubles again.  In my console I see the CFO taunting me in an impossible rainbow font  and laughing as the fractals make my access to the console pointless. 

 

Okay.

 

I'm alive.  I am in control of my body, even though apparently with my pump-biscuit torn like this I have the stamina of a wiggler.  

 

I can do this. 

 

I'm still closer than I was even an hour ago. 

 

I can do this.

 

I crawl my snake body forward, inch by inch.  This place connects somehow to the CEBro's headquarters, the heart of this entire broken session.  Dead and doomed and single player and multiplayer all at the same time, NONE of it makes sense.    It all revolves around the CEBro...the center of this universe is a Lord of Space and I suppose it was always going to be this way.

 

So I crawl on my belly like the snake I've been forced to be. If I can just reach the HQ... There has to be SOMETHING a doom player can do....even with all this LIFE pumping everywhere.

 

There has to be. 

I won't stop crawling.

 

Not now. Not when I’m so close. Not when this whole universe is closer to death than I am under all this false life. 

 

There’s a horrid clang behind me.  Metal on metal. My internal censors mark an increase in temperature: 30c, 35c, 40c.

 

I can’t stop crawling. 

 

Even as the ground underneath me gives in to the heat, boiling my hands and stomach. As the metal plates in my body threaten to melt into my insides.

 

I'm closer than I have ever been. 

 

50c. 65c. 

 

I can do this. 

 

I… 

 

I don't even feel it when a sword stabs through my neck, its tip poking out in front of my field of vision. There is no grace in the way it hacks off my spine, yet its wielder’s grip is steady and practiced as it pushes, every tendon and muscle holding my head tearing apart, until…

 

My shoulder muscles give way. There’s little fanfare when my head rolls off my body.

 

I'm looking up from a new angle at a samurai, clad in armor and wreathed in flames, clutching that damned sword in one hand and… the courtroom lady's head in the other. Dessicated, burning, its eyes like hollow sockets, but undeniably alive. 

 

Well, so am I. The False Nidghogs effect isn't dimming. 

 

I wish with all my being that I was in the other universe. I wish Nidhogg were here to comfort me in my last moments.  That these WOULD be my last moments. 

 

As hatred and anger and despair radiates from the burning figure, the air brimming with sulfur and the jeering songs of an infernal choir, I am very, very certain that I won't be ending any time soon.

An unknowable amount of agony passes, no moment better or worse than the others around it to mark them until suddenly, inexplicably, the heat is gone.   



No, not gone in the sense of momentary relief, or a slight decrease in temperature. Rather, it is as if that searing flame never existed to begin with, that cursed blade a work of fiction; even though my body exhibits the wounds done to me, I fail to think of where they could’ve come from in any meaningful capacity.



It’s cold here.



The meat of all of my eyes and eyes and eyes have long since desiccated to useless slivers. This doesn’t stop my cybernetics from whirring along despite all the damage, helpfully showing me the outline of a figure, just past where my tormentor had once been. 



A long beak… is that… a mask? Or an impossibly still and motionless face? Is it...in my bleary disorientation I feel a faint hope that it could be her. Hagala. But no. Of course I wouldn't be so lucky. So unlucky. So both all at once.

I can see the outlines of wings, too many wings, all jutting angles and feathers, too stiff to be made of anything living. Not like her two wings, all soft and vibrantly alive...  On top of its head lies a jagged crown... All I can do is wait for whatever Fate it brings me. 



The microphones in my ears pick up the faint sound of a choir. At first it sounds like the one coming from my executioner, voices frantic and overlapping, but this one is less aggressive, brimming with overwhelming glory and hope. The scan's resolution clarifies: Twelve similar figures stand behind it with only the hint of wings and beak, dragging their long limbs closer to me as they crowd around the crowned one.



"Be not afraid, my Child, for I am with thee,” it says, like a command. Like a prayer.  “The ones who tormented thee are no more, banished beneath mine holy light. Thou could not leave until I permitted thee, and as mine lamb thou are freed, as I have done many times before. “



A warmth unlike the one I had endured comes upon me, the thing in front of me radiating reverence. The monsters behind it drop to a knee.



“It is time. Let your Loop End."



There is only silence.

Chapter List

Arm 2; Loop 1(0.81Kb)(Saved On: 12/13/2024 11:22:37 PM)
He's not supposed to be here. What have you done? Arm2 will continue to update even as Arm1 resets.`)
new Story("JR","ARM 2, UnEnded",`The Witness opens his eyes..

The Devil of Spirals squirms and gnashes and no-clips his way through the thin membrane that separates the apocalyptic Arm 2 from Arm3. This ride in particular has always had some trouble with its bounding box... It is perhaps no wonder that the Glitch of Doom found its weakness.

Arm3 is a restful Arm. Intended to be a breath between the chaos of the apocalypse and the power of the God AU. No monsters. No powers. Nothing but a gentle coffeeshop AU. A wistful dream of what might have been, with Wanda.

It is a mistake.

In their role as the Muse of Abandoned Void, the Witness had not considered how vulnerable this left the Arm to intrusion. Especially with its half crashed neighbor practically begging to be glitched out and exploited.

With a shriek of metal and wires and flesh pulled past the breaking point, the Devil reaches ever further to his goal. 

There will be no defense among the inhabitants. No immune system waiting to greet him. 

Something almost like a panic grips the Witness.

No.

Not like this.

Wanda needs to end the spiral herself.

Not.

Not have it ripped from her.

No.

With an effort he did not know he had in him, he plucks the Detective from the Bathroom and places him between the Devil and his desired Exit. The thin layer of Relevance the Devil trails with him is just enough that the Witness can gift just a handful of it to his friend, who has been lost in the Void for longer than any of them..

He hates himself for using his friend like this, but the Guiding Detective of Trapped Breath is the only one who can trap this villain in place. And there is nothing, not anything in this world, that The Witness will not sacrifice for Wanda.

The Detective screams in horror at being ripped dozens of Arms away from where he was diligently attempting to escape his narrative.

The Devil of Spirals screams in horror at seeing the bounding boxes snap into place.

The Witness watches.



Satisfied.

`)
new Story("JR","Arm 2, End",`<div style='padding:31px; background: rgba(0, 0, 0, 0.55);'>
      <p><span style="">You fail to open your eyes (and eyes and eyes and eyes) as they are burnt out husks, but even you can sense it when the Detective&apos;s grip on you vanishes.</span></p>

<p><span style="">It WORKED!</span></p>

<p><span style="">The Observers actually came through for you!</span></p>

<p><span style="">You allow yourself an epic pog champ gamer moment before hurtling your fleshless body forward into the crack between realities.</span></p>

<p><span style="">THERE.</span></p>

<p><span style="">People scream and run as they see your metallic skeleton, only your cybernetics remaining after how thoroughly scoured of flesh they are after your &apos;delightful&apos; time in the apocalypse. &nbsp;You still have no idea why that girl burst into flame and took you with her.</span></p>

<p><span style="">Gotta stay on track.</span></p>

<p><span style="">The screaming is music to your audio inputs.</span></p>

<p><span style="">There&apos;s a freshness to the screams. These are not people who have long gone hoarse and numb to the horrors. This is not an apocalypse.</span><span style=""><br></span><span style=""><br></span><span style="">You, crawling and glitching forwards, are the worst thing they have ever seen. You grin.</span></p>

<p><span style="">Your interpretation of the code of this Universe was right. This arm, this alternate setting, is entirely defenseless. &nbsp;No monsters. No gods. No supernatural bullshit.&nbsp;</span></p>

<p><span style="">And most importantly: No immune system.</span></p>

<p><span style="">That infuriating woman with her &quot;:3&quot; and her stupid anime sword won&apos;t stab you THIS time.</span></p>

<p><span style="">You are the Glitch of Doom and you are here to destroy the undestroyable. To defy all fates and, with your own two hands, restore everything to how YOU want it.</span></p>

<p><span style="">The Universe was never meant to be this way.</span></p>

<p><span style="">With a sickening crunch you leave fully half your body behind as you no-clip through the ground. &nbsp;Luckily an unimportant half. &nbsp;Your arms. Most of your tail. Your horns. Half of your face.</span></p>

<p><span style="">&nbsp;It looks like even Gamer powers are suppressed here. &nbsp;It doesn&apos;t matter. As long as you can even partially no-clip, you have no need of being a Gamer at all.</span></p>

<p><span style="">You sink, slowly to the heart of it all.&nbsp;</span></p>

<p><span style="">It&apos;s beautiful.</span></p>

<p><span style="">Shimmering possibilities spiralling endlessly in on themselves. Not a snake eating its own tail but a mother of monsters birthing itself endlessly, not once but in clutches of infinite siblings, each a perfect copy of itself. &nbsp;The Echidna. The memory leak.&nbsp;</span></p>

<p><span style="">This is what is starving out every other Universe. Not just its sibling, the :hatched_chick: &nbsp;that your former friends worked so hard to breed.&nbsp;</span></p>

<p><span style="">No.&nbsp;</span></p>

<p><span style="">*all universes*</span></p>

<p><span style="">&nbsp;Every universe that has ever existed or even will exist or even COULD exist &nbsp;is sacrificed to the altar of infinite gluttony.</span></p>

<p><span style="">Well.</span></p>

<p><span style="">Two can play at that game.</span></p>

<p><span style="">You unhinge what&apos;s left of your metal jaw, fragments of your augmented spine trailing behind you, in a laughable mockery of the snake you have been forced to become.</span></p>

<p><span style="">And you begin to chew.</span></p>

<p><span style="">Fates go dark as you swallow and bite and gnash and clench and GRAB.</span></p>

<p><span style="">One by one.&nbsp;</span></p>

<p><span style="">Every possibility stemming from this moment becomes just a little bit more Doomed.</span></p>

<p><span style="">It won&apos;t be enough, not on its own, to End Things.</span></p>

<p><span style="">After all, there is an infinite spiralling chain of other &quot;you&quot;s desperately striving to do the same.&nbsp;</span></p>

<p><span style="">But you don&apos;t care.</span></p>

<p><span style="">As you swallow and chew and bite and TEAR into the spiralling fractal echidna, you know you have done your part.</span></p>

<p><span style="">Let the others handle their own.</span></p>




</div>`)
new Story("JR","Arm 2,  Ending",`<div style="margin-left: auto; margin-right: auto; width: 85%;">
  <p>You are a <span style='color: red;'>Monster</span>.</p>

<p>The Choir of Twelve Disciples behind you wail their lament.</p>

<p>Your patients.&nbsp;</p>

<p>They <span style='color: white;'>Trusted</span> you.</p>

<p>You can not face what you have turned them into.</p>

<p>You are a <span style='color: red;'>Monster</span>.</p>

<p>They <span style='color: white;'>Trusted</span> you.</p>

<p>Your thoughts Spiral for a time beyond time and then you slowly become aware of it.</p>

<p>The Gaze.</p>

<p>There are Eyes upon you.</p>

<p>You do not Look up, head buried in your glitching, <span style='color;red'>Monstrous</span> hands.</p>

<p>You can not bear the thought of the Eyes seeing you at your lowest.</p>

<p>Surely they are Judging you so very harshly.</p>

<p>You are a <span style='color: red;'>Monster</span>.</p>

<p>You betrayed the <span style='color: white;'>Trust</span> of Vulnerable People Who Gifted You Their Secrets.</p>

<p>&quot;Doctor?&quot;</p>

<p>...</p>

<p>You do not Look up. You do not want to Recognize the Voice.</p>

<p>You Hear footsteps, hesitant and slow, approach you.</p>

<p>There is silence.&nbsp;</p>

<p>&quot;I...&quot;</p>

<p>&quot;I hope you remember who I am, Doctor.&quot;</p>

<p>&quot;I thought...&quot;</p>

<p>&quot;It doesn&apos;t matter.&quot;</p>

<p>&quot;You&apos;ve never done this before.&quot;</span><br></span><br></span>&quot;And...&quot;</p>

<p>There&apos;s shuffling, clothes rustling, a sigh of breath.</p>

<p>&quot;What is it Wibby always says in the next Arm? &apos;Jegus&apos;? &nbsp;Something like that....&quot;</p>

<p>&quot;Jegus&quot;</p>

<p>&quot;Doctor, I&apos;m... so sorry.... if giving me therapy did this to you.&quot;</p>

<p>You do not Look up but you move so fast it surprises you, juttering hands made of letters and symbols clinging to dirty and torn jeans.&nbsp;</p>

<p>Clinging to him.</p>

<p>You do not Look up but you can&apos;t help but see the pool of Eyes and shadow lapping gently around his cross legged form. Each Eye looking at your tear streaked face with such....</p>

<p>Compassion.</p>

<p>Curiosity.</p>

<p>Worry.</p>

<p>&quot;you didn&apos;t do this to me.&quot; you say, your voice quiet and dead and hollow and not at all Bright and Bubbly like it is Supposed to be.</p>

<p>You shudder with the sudden spike of Anxiety, what would the Neighbor think, to see you brought so low. This isn&apos;t you.</p>

<p>You are a <span style='color: red;'>Monster</span>.</p>

<p>You fold into yourself again, curling into yourself, no longer able to see the worried Eyes, but <span style='color;red'>Monstrous</span> fingers still curling around the rough fabric of the well used denim.&nbsp;</p>

<p>You cling to that texture, almost involuntarily. &nbsp;</span><br></span><br></span>You&apos;ve helped your Patients (you are a <span style='color: red;'>Monster</span>, you betrayed their <span style='color: white;'>Trust</span>) too many times to use sensory information to ground them through Spirals to not do it yourself.</p>

<p>The denim is the cuffs of his pants. You can not feel any flesh underneath, they&apos;re a bit too a bit too long, a bit too large.&nbsp;</p>

<p>The denim is ragged and there are places where it is so thin you can feel empty air on the other side and &nbsp;you can feel bits of mud (or is it blood) in large flaky patches where it dried too thick.&nbsp;</p>

<p>You breathe. Slowly. You feel your chest rise and fall. Your throat hurts, where you have been wailing.&nbsp;</p>

<p>Behind you, your Choir (you betrayed their <span style='color: white;'>Trust</span> you are a <span style='color: red;'>Monster</span>) is humming softly, no longer wailing.&nbsp;</p>

<p>Beneath you is pavement. It&apos;s cold and smooth and hard. You aren&apos;t sure if you have bones anymore but something *hurts* sitting on the cold and hard ground. (its what you deserve you&apos;re a <span style='color: red;'>Monster</span> you betrayed their <span style='color: white;'>Trust</span>).&nbsp;</p>

<p>Slowly.</p>

<p>You look up.</p>

<p>It&apos;s him.</p>

<p>The Intern.... or... You suppose... given his Confessions during Therapy...</p>

<p>The Witness.</p>

<p>You see the bags under his Eyes, the lines of clean skin streaked from long dried&nbsp;</p>
<p>Tears against a filthy face.&nbsp;</p>

<p>He is Watching you. &nbsp;You see without seeing the halo of eyes swarming his head, a mirror to those pooling at his feet.</p>

<p>Something in you trembles at the Gaze. The steady pulse of Curiosity and Patience.&nbsp;</p>

<p>This is not like the Eyes back home. There is no Gleeful Anticipation of your inevitable Fall.&nbsp;</p>

<p>These Eyes See you at your worst, at your most <span style='color;red'>Monstrous</span> and they simply wish to See what you will do next.</p>

<p>You sag, for the first time pressing yourself into his body, feeling his warmth (you don&apos;t deserve it, you are a <span style='color: red;'>Monster</span>, you betrayed their <span style='color: white;'>Trust</span>).&nbsp;</p>

<p>There is a Fear in you. An old one. One you can&apos;t muster the Energy to feel anything but an Echo of.</p>

<p>If you are not Judged, you will Fall. If you are not Kept To Task you will become Inferior.&nbsp;</p>

<p>Does it even matter anymore?</span><br></span><br></span>Can you really Fall any farther?</p>

<p>He&apos;s Waiting.</p>

<p>&quot;I...&quot;... you swallow. Suddenly aware that you have no idea how long you have been sitting here, crying. Your throat is dry. &nbsp;Raw. Speaking is hard.</p>

<p>&quot;i was already on this path...&quot; you croak, dully. &quot;i wouldn&apos;t have met you at all if i wasn&apos;t afraid of becoming this...&quot;</p>

<p>He shifts his weight.&nbsp;</p>

<p>Dimly, you&apos;re aware that if you were acting as his Therapist (you are a <span style='color: red;'>Monster</span>, you betrayed them) you should stop touching him. You should stop putting your problems on him. You should ...</p>

<p>&quot;Doctor?&quot; his voice breaks you from your impending Spiral.</p>

<p>&quot;I can&apos;t remember the other Witnesses&apos; &nbsp;lives very clearly. They&apos;re not mine, for one. Just... echoes that those who came before give me so they can be remembered. So that maybe one day....&quot; he shifts again.&nbsp;</p>

<p>&quot;But...&quot;</p>

<p>&quot;Doctor. You&apos;ve never approached me before. We never even meet until the next Arm, usually.&quot;</p>

<p>&quot;But...&quot;</p>

<p>&quot;When we do? We become close. As close as two people who can not forget even as the Universe Fractures CAN be. &quot;</p>

<p>&quot;So.&quot;</p>

<p>&quot;Let me be selfish. &nbsp;Let me try to help you now, so that I can get that chance at happiness that the other Witnesses have had...&quot;</p>

<p>You...become close?</p>

<p>You feel your cheeks become warm, the jittering pulsing glitching of your body seems to speed up in response.&nbsp;</p>

<p>Those Eyes... There&apos;s not a trace of Deception or Judgement.</p>

<p>You swallow.</p>

<p>&quot;I&apos;m supposed to kill everyone.&quot; you say &quot;Put them out of their misery. The.... the &quot;Final Mercy&quot;.&quot; &nbsp;it beats in your skull to the time of your pulse. To Kill.</span><br></span><br></span>He nods, unsurprised, unjudging. &nbsp;&quot;That is what releases us all from the apocalypse. To move on to the next Arm. A peaceful one. &quot;</p>

<p>You blink up at him, feeling for the first time the eyes that halo your own body joining in.&nbsp;</p>

<p>Behind you the Choir lifts their voices into a psalm of hope and glory. (you betrayed their <span style='color: white;'>Trust</span>, you are a <span style='color: red;'>Monster</span>).&nbsp;</p>

<p>Are.... are you a <span style='color: red;'>Monster</span>?</p>

<p>&quot;Am I a <span style='color: red;'>Monster</span>?&quot;</p>

<p>The Eyes upon Eyes of the Witness blink at you.</p>

<p>&quot;We all are, Fiona&quot;</p>

<p>He used your Name.</p>

<p>You look down.&nbsp;</p>

<p>You begin scouring your own Mind, looking for the thought you are Spiraling around.</p>

<p>You are a <span style='color: red;'>Monster</span>? Yes. Of course you are. We are all <span style='color;red'>Monsters</span>. It is okay to be a <span style='color: red;'>Monster</span>. You are a <span style='color: red;'>Monster</span> just like Him.</p>

<p>You betrayed their <span style='color: white;'>Trust</span>?.... How can you counter that.</p>

<p>You lift your Gaze to the Choir.</p>

<p>&quot;I betrayed their <span style='color: white;'>Trust</span>&quot;, you say out loud.</p>

<p>There is silence.&nbsp;</p>

<p>&quot;How?&quot; he asks, finally.</p>

<p>&quot;During Therapy... I... I would get this sense of... tugging? Belonging? For certain patients. When everything started to burn I.... &quot;</p>

<p>You finally let go of the hem of his pants, wringing your ascii hands together.&nbsp;</p>

<p>&quot;I did SOMETHING and they became...&quot;</p>

<p>You gesture helplessly.</p>

<p>&quot;They became those .... things?&quot;</p>

<p>The Choir sings a song of Recognition. &quot;Rise, my servants. Rise and serve me.&quot; they sing, as one.</p>

<p>&quot;That is an Inappropriate Doctor Patient Relationship!&quot; you say, offended at yourself.</p>

<p>The Witness breathes out a surprised chuckle, and you Look up sharply at him.</p>

<p>He is not making fun of you. &nbsp;He is not Judging. His Gaze is Fond and some part of you melts.&nbsp;</p>

<p>&quot;So, sounds like you&apos;ll do better next time. Or... at least, the copy of you in the next Universe will. &quot;</p>

<p>He frowns.</p>

<p>&quot;I guess that doesn&apos;t help you... but my point is.... &quot;</p>

<p>He gestures at the Choir and they all flutter in a Highly Embarrassing Way. &nbsp; Can you really not Control Your Emotions better?</p>

<p>&quot;You didn&apos;t know any better. You didn&apos;t know you were White Nightengale. You didn&apos;t know an apocalypse was coming.&quot;</p>

<p>&quot;You never do.&quot;</p>

<p>&quot;Because you ...&quot;</p>

<p>He shifts, suddenly uncomfortable.</p>

<p>&quot;This is absolutely not a Judgement of you, by the way, I want to make that clear...&quot;</p>

<p>&quot;But...&quot;</p>

<p>&quot;You always think that because Morgan&apos;s Hill made it so you can not be Corrupted By The Void, that that means you know everything that happens to you.&quot;</p>

<p>&quot;You don&apos;t. Okay? Because sometimes the &apos;you&apos; it happens to is someone entirely different. Sometimes you die as the Apocalypse starts and then wake up in a brand new Universe completely unaware that you split in two and that half of you is continuing to live on in the original Universe and that that other you is doing things you never were aware of but that&apos;s OKAY its OKAY to not know things, even about yourself!&quot;</p>

<p>He rushes through it all, as if he&apos;s afraid you will React Badly.</p>

<p>&quot;You&apos;re not Keeping Secrets from yourself, I promise&quot;, he finishes. &nbsp;He says &apos;Keeping Secrets&apos; just so, like you would.</p>

<p>You allow yourself a small smile.</span><br></span><br></span>&quot;You really do... Know me, don&apos;t you?&quot;, you say, flattered.</p>

<p>He grins back &quot;I do. Or... well. &nbsp;I have half understood dream-memories that other me&apos;s sent to me about other YOU&apos;s and thats a pretty good first order approximation.&quot;</p>

<p>He stands up, the comforting warmth suddenly gone.&nbsp;</p>

<p>He offers you a hand, and you take it without thinking.&nbsp;</p>

<p>You&apos;re standing.</p>

<p>&quot;Apparently in some of the early Loops you&apos;d grab me as one of your Choir&quot; he says, as if this is not a Revelation.&nbsp;</span><br></span><br></span>&quot;So, if it&apos;s alright with you, I&apos;ll tag along and help out. &quot; his Gaze turns to the Choir &quot;Because &nbsp;the best way to make up for mind controlling your patients without their consent is to get everyone to the next Setting as fast as possible.&quot;</p>

<p>He frowns.</p>

<p>&quot;I don&apos;t think Nidhogg and the Harleclypse will let any death I bestow stick.... so it&apos;ll have to be you and yours who deals the final blow, alright?&quot;</p>

<p>You nod.&nbsp;</p>

<p>It will be okay.</p>

<p>Except...&nbsp;</p>

<p>&quot;Ummm...&quot;</p>

<p>No, that isn&apos;t Like You. No filler words.</p>

<p>&quot;Witness? Is that the Appropriate Form of Address?&quot;</p>

<p>He nods and you continue. &quot;I have been Given a Task, one I am Realizing was of More Import than I had Initially Considered&quot;.</p>

<p>He freezes.</p>

<p>&quot;Wanda&quot;, he breathes, suddenly sitting down.</p>

<p>&quot;To Summarize my Understanding: Wanda is someone Immensely Important, not only to You, but to Reality as a Whole. She is Dealing With Grief very Poorly and, as a Result, the Universe Fractures in All Directions, Causing Problems&quot;.</p>

<p>You pause. &nbsp;It&apos;s awkward to be standing if He is not. &nbsp;Would it be undignified to sit on the ground again? Surely you would not be so Gauche as to squat.&nbsp;</p>

<p>You decide that backing up a bit is a Workable Compromise.</p>

<p>You really are Feeling Like Yourself Again.</p>

<p>&quot;I have been asked by an Observer to provide Wanda with Therapy. I was unable to reach her, and instead found You.&quot;</p>

<p>&quot;To my Shame, I was not as Dedicated to the Task as was Appropriate, Distracted as I was by the Revelation of my...&quot;</p>

<p>It&apos;s okay to be a <span style='color: red;'>Monster</span>. Everyone is a <span style='color: red;'>Monster</span>. HE is a <span style='color: red;'>Monster</span>.</span><br></span><br></span>You like being the same kind of thing He is.</p>

<p>&quot;<span style='color;red'>Monstrous</span> Nature.&quot; you finish, well aware of the awkward pause in there. You will have to practice saying out loud that you are a <span style='color: red;'>Monster</span> without flinching.</p>

<p>&quot;What do I need to do to continue seeking to provide Wanda with Therapy?&quot;</p>

<p>There is silence.&nbsp;</p>

<p>The eyes pooling around the hunched over Witness are all shut.&nbsp;</p>

<p>You swallow.. Have you...</p>

<p>But before a new Spiral can begin he speaks up.&nbsp;</p>

<p>&quot;You can&apos;t. Wanda is gone. Long gone. The second I died she moved on to another Universe. No matter how long we live. No matter how fast we move through the Arms, we will never reach her. We are stuck here. In this Universe that she abandoned.&quot;</p>

<p>...</p>

<p>You process this, giving it the Attention it Deserves.</p>

<p>You know from your previous therapy sessions with the Intern, before he became...this.... Beautiful <span style='color: red;'>Monster</span> of Eyes.... No. No Distractions.</p>

<p>You know that the Intern likely has a crush on Wanda. Perhaps one he is not fully aware of. You know that Wanda likewise has an Obsession with him.&nbsp;</p>

<p>To... simply leave.... When...</p>

<p>&quot;You died?&quot;</p>

<p>He nods.</p>

<p>&quot;...&quot;</p>

<p>&quot;She is moving on to find the next You, isn&apos;t she?&quot;</p>

<p>He nods.</p>

<p>You clap your hands and do your best not to jump when the Choir all claps at the same time. &nbsp;</p>

<p>The Witness looks up with Eyes upon Eyes, all Focused on you. You try not to blush.</p>

<p>&quot;Then we know our task. &nbsp;Clearly the other you&apos;s that Came Before could control information given to the next in line? Once we clean up things here...&quot;</span><br></span><br></span>&quot;All we need to do is make sure the Next You knows every possible trick to get the Next Me to show an Appropriate Level of Dedication towards reaching Wanda!&quot;</p>

<p>And if that would make this Beautiful <span style='color: red;'>Monster</span> of Eyes Know you Inside and Out, you are not complaining.&nbsp;</p>

<p>He opens his mouth to speak but you Interrupt him, knowing Rudeness is a Sin but one you are Willing To Take On In This Circumstance:</p>

<p>&quot;Yes. This won&apos;t help you. It will not give you the Closure I suspect you crave. But until you identify a Better Task, this is the one we can work on.&quot;</p>

<p>&quot;It is &nbsp;Important, for Both of Us, to have a Task other than simply....&quot;</p>

<p>You do your best not to Shudder</p>

<p>&quot;Killing every person in the Universe one by one.&quot;</p>

<p>He nods, those thoughtful Eyes upon Eyes gazing up at you. You try not to preen a bit (how DOES your hair look when you&apos;re made of symbols and glitches!?).&nbsp;</p>

<p>&quot;Alright&quot;, he finally says and this time it is you offering him a hand to help him up.</p>

<p>He takes his place among your Choir and you try not to feel self conscious as you begin your Grisly Task.</p>
</div>
<br><br><br><br>`)
new Story("JR","The Lord of Known Space Leaves Each Universe No Later Than April 1st, 2022",`The Lord of Known Space Leaves Each Universe No Later Than April 1st, 2022 <br>In a Time when Time was still a real thing, a middle manager at a moderately successful video game company died on April 1st, 2022. He had lived a relatively decent life, and his only real regret was his childhood best friend he'd lost contact with in college. \n\nIt happens. \n\nMental health is hard enough to navigate during normal times and college is just. A Thing. \n\nYears later, the childhood friend thinks to check up on him. \n\nShe is crushed. He died. She had forgotten about him and he died. \n\nSomething in her cracks and the Setting shifts. She wanders a maze of Information, trying to piece together what had happened. \n\nWhy had her friend died? What had his life been like since college? \n\nShe imagines that if they had just stayed together she would have figured herself out sooner. \n\nHe always was good at keeping her on track. Why did she ever leave his orbit?  \n\nSlowly but surely, she carves bits of herself off as Sacrifice. \n\nPlease, she begs the Universe. Please, send me back. Let me find him. Let me cherish him this time. \n\nThe Echidna did not know what to do. \n\nIt is the Muse of Trapped Light. It can not control Time. \n\nIt takes the story that it has and it reflects it again and again and again against itself. \n\nIt cannot bring its Lord back to the past. It can not tell a new story. \n\nAll it can do is give everyone the tools they need to tell the story again and again and again in new ways.\n\nThe Lord pieces herself back together. This will have to do.\n\nShe can never bring herself to face the End of this story again, though.`)
new Story("JR","A Trickster Form of the CFO Rules The Apocalypse",`A Trickster Form of the CFO Rules The Apocalypse <br>\nWhen the Lord leaves, there is room for others to predominate. "apocalypse Chick" in all her wasted and trickster glory, takes center stage.\n\nShe's hacked herself to be trickster forever with 'none of the downsides' as she claims. \n\nShe treats reality like a heavily modded game of Skyrim, with all the torments for the 'NPCs' that entails.\n\nIn the spaces between the fractal mathetmatically perfect nightmares she creates, Truth and Alt have room to infinitely expand the maze the Wanderer and others wander. Every concept, every TRUTH every FACT the setting has ever had is contained within Truth's horridors and reflected a second time by Alt.\n\nYou could Wander forever within. \n\nYou will Wander forever within.\n\nNothing can Die within Truth's horridors and Apocalypse Chick's trickster paradise of Life run rampant. \n\nThe Coffin exists for only the Ego Death of a single Player. \n\nIt is the only way out. \n\nUnless you are a Witness.\n\nOr unless you experience the Tender Mercy of the White Night and her Disciples`)


new Story("JR","Eye Killer insists on an Interview",`DEVONA: [visible terror]
EYE KILLER: [tape recorder noises, all words rewound and fastfowarded and cut from different parts of a tape] Ask/Me/Your/questions
DEVONA: ,(
EYE KILLER: [tape recorder noises] I/Don't/Have/All/.../Day
DEVONA: Okay! Okay! I-
DEVONA: [clears throat]
DEVONA: For The Record, Can You State Your Name and Occupation?
EYE KILLER: [tape recorder noises] "Please Don't Kill Me"
EYE KILLER: [tape recorder noises] Occupation/Mafia/Family
DEVONA: [squeaky voice] Right!
DEVONA: Right!
DEVONA: Um! I Ask Everyone This!
DEVONA: What Do You Think About The Echidna?
EYE KILLER: [tape recorder noises] "A Miserable Pile of Secrets"
DEVONA: ...
DEVONA: Okay! That! That's All I Had!
EYE KILLER: ...
EYE KILLER: [tape recorder noises] "Stay Away From My Family"
DEVONA: Absolutely!
DEVONA: I didn't even know they were yours!
DEVONA: Never again!
`)
new Story("JR","Witherby Interviews The Detective",`WITHERBY: Is it alright if I enter?
DETECTIVE: If you shut the door, you'll be trapped in here with me.
WITHERBY: Thank you for the warning [carefully leaves the door ajar, stepping just inside.
WITHERBY: I'm just checking in on you.
WITHERBY: My associate, Devona, wanted me to follow up with you.
DETECTIVE: Well, that's very kind of her.
DETECTIVE: Was that the one asking all those questions?
WITHERBY: The same. And forgive me, I failed to introduce myself.
WITHERBY: I am Witherby, pleased to make your acquaintance.
DETECTIVE: You can call me the Detective.
WITHERBY: nods, [assumes a more casual pose leaning against the door frame]
WITHERBY: Is there anything we can do to help you?
WITHERBY: Being stuck in a bathroom doesn't seem...
WITHERBY: The best situation.
DETECTIVE: It has its ups and downs, that's for sure.
DETECTIVE: You meet a surprising amount of people this way.
DETECTIVE: Sooner or later, everyone needs this room, you know?
WITHERBY: [polite chuckle, waiting for him to continue]
DETECTIVE: *sighs*
DETECTIVE: I wouldn't say no to an assist...
DETECTIVE: But I also wouldn't hold my breath waiting for rescue, either.
DETECTIVE: Whatever mystery has me in its grips... It's not letting go any time soon.
WITHERBY: [nods]
WITHERBY: As a Detective, would you say you're enjoying getting to the bottom of this particular mystery?
DETECTIVE: It beats sitting around, having nothing to do...
WITHERBY: [nods]
DETECTIVE: Look.
DETECTIVE: I can put two and two together, right?
DETECTIVE: Your friend, Devona, did you say her name was?
DETECTIVE: Got all nervous like when I wasn't thrilled at my lot in life.
DETECTIVE: And you [looks Witherby up and down] are pulling out all the stops to put me at ease.
DETECTIVE: I don't know what's going on here, not all the way.
DETECTIVE: But I've been around the block a time or two.
DETECTIVE: Enough to put together some pieces.
DETECTIVE: There's something wrong with this...
DETECTIVE: Well, I suppose it's not a Game.
DETECTIVE: But whatever it is, it's WRONG.
DETECTIVE: But that doesn't matter, not when it's your HOME and it's all you have.
DETECTIVE: I get that.
DETECTIVE: I'm not going to rock the boat.
DETECTIVE: I'm not going to stop digging into this mystery, either.
DETECTIVE: But I don't see a reason to destroy something just because it's broken.
WITHERBY: What a fascinating theory you have, Detective.
WITHERBY: I'm afraid I can not confirm or deny any details.
WITHERBY: But I'm sure you'll be able to consider the Training Team allies to your cause.
WITHERBY: It has been a pleasure meeting you.
WITHERBY: [one last curt nod, and then he leaves the way he came]
DETECTIVE: ...
DETECTIVE: Now just what have I gotten myself into?
`)
new Story("JR","Devona Interviews The Detective",`DEVONA: Oh, uh, Hello!
DETECTIVE: Wait!
DETECTIVE: Don't close that---
null: [door closes]
DETECTIVE: ...door...
DEVONA: Oh No, Did I Do Something Wrong?
DETECTIVE: I'm afraid you'll be in this Bathroom with me for a while, Miss...
DETECTIVE: Apologies for that.
DETECTIVE: Eventually I'll find a way to the next Bathroom on my own...
DETECTIVE: And you'll be able to leave through that door.
DEVONA: Oh Wow!
DEVONA: Is That, Like, Your Thing?
DEVONA: Um...
DEVONA: Oh Gosh.
DEVONA: (I probably should have brought Wibby with me, I'm no good at talking)
DEVONA: Uh.
DEVONA: Is It Okay If I Interview You?
DETECTIVE: Sure thing, Miss.
DETECTIVE: Passes the time, if nothing else.
DEVONA: Okay.
DEVONA: For The Record, Can You State Your Name and Occupation?
DETECTIVE: ...
DETECTIVE: ... I can't say I know, not for sure.
DETECTIVE: The evidence is poor but.
DETECTIVE: I THINK.
DETECTIVE: My name is Detective Shiro White.
DETECTIVE: I am...
DETECTIVE: PROBABLY a private investigator of some type?
DETECTIVE: I don't have any memories of cases besides...
DETECTIVE: The one that broke me.
DEVONA: You Do Not Have To Answer, but, Could You Clarify?
DETECTIVE: I woke up one day and...
DETECTIVE: Look, I know how this sounds.
DETECTIVE: Maybe I'm crazy, who knows...
DETECTIVE: But I woke up and knew reality was a game, and that it was my job to get to the bottom of why it was glitching out.
DETECTIVE: The murder mystery wasn't happening. The victim wasn't getting killed.
DETECTIVE: And then I realized just how much more was broken and ...
DETECTIVE: [voice hardening], I left.
DETECTIVE: And here we are.
DEVONA: We Sure Are!
DEVONA: One Last Question!
DEVONA: I Ask Everyone This,
DEVONA: What Do You Think About The Echidna?
DETECTIVE: The what?
DEVONA: Oh. Um! The Echidna! The Universe! The Thing We Are All Inside!
DETECTIVE: ...
DETECTIVE: Miss, I don't mean to offend but..
DETECTIVE: Are you doing okay?
DEVONA: No, See! It's, (gosh do you really not know about the Echidna) Um!
DEVONA: Are You Happy? Living Your Life?
DETECTIVE: ...
DETECTIVE: ...
DETECTIVE: ...
DETECTIVE: It beats being trapped in a forgotten game.
DEVONA: [vibrates with anxiety]
`)
new Story("JR","Devona Interviews Neville",`DEVONA: For The Record, Can You State Your Name and Occupation?
NEVILLE: Devy, its me, you know who I am ,(
DEVONA: Okay yes I know and this seems all a little bit silly, but Neville, whoever eventually listens to this might not know and I think its really important to at least ge this on record and then later maybe we can go over it and redact it if thats okay.
NEVILLE: Oh, okay!
NEVILLE: I'm Neville! I'm our Data Analyst!
DEVONA: And What Does That Entail?
NEVILLE: I figure out what parts are important in all the data we collect ,)
DEVONA: And how do you feel about the Echidna?
NEVILLE: ...
NEVILLE: No comment?
`)
new Story("JR","The CFO of Eyedol Games Will End The World ",`The CFO of Eyedol Games Will End The World <br>She doesn't mean to. You can see it in her eye. You can see it in the way she tries so dillgently to avoid hurting anyone, even her auditors. But the fact of the matter is she was born to end a world and her fate is not too picky about which. If Wanda moves on for any reason, she blossoms. But... she also doesn't. She's worked so hard at self control. Know restraint, that's the Waste's mantra right? She has seen how fragile this simulated reality really is and she would NEVER do something to risk it. Except. Well. Except for that one time. She was young. And impulsive.  And Nidhogg brought its poisoned candy (https://archiveofourown.org/works/35438083/chapters/91817125#workskin) into the Universe and everone partook. How could she possibly restrain herself while Trickster? All candy colored and frentic. She hacked herself to make it forever. The party never stops. Then she hacked everything else too. Even the rules that say that once Wanda leaves a place everyone she Knows about is dragged along with her. Apocalypse Chick spreads and spreads and spreads like a weed in Wanda's wake. Never able to leave the destroyed remnants of Arm1, but perfectly able to stabelize it enough to turn it into a second arm. Arm2. She can't reach Arm 3, the Mundane arm. Or the fourth. The God arm. Or the fifth, the Faerie Arm or the sixth or seventh or however many pointless irrelevant arms of this Universe the Witness has spiralled out in his grief for his lost friend. But she's having fun. Just ask her yourself.  https://eyedolgames.com/Eas`)
new Story("JR","[Redacted] Talking About Khana",`Page 1: [REDACTED] talking about Khana <br>He's fine. \n\nOr she's fine, or they're fine... I haven't had time to ask. Neither has he. I think I'll tolerate the trivialities and switch across them, for the time being. That kind of fastidious care directed towards her is something they would have liked, anyway.\n\nSo, fine. We can talk about Khana. \n\nI've known for a while that's not her name. We've all known, really. K is not a technically adept liar, though he's a brazer and confident one, which may as well be the same thing. There was no way I wouldn't notice an employee had changed heights recently. But the Corporation, damn it to hell or whatever is close to it, didn't give me time to decide if this new employee was a keeper or a binner. It was having half an employee or losing two, and I chose to keep half.\n\nSo we kept him. And to their credit, she didn't die. That is higher praise than what it sounds like.\n\nBut that's then, and this is now. We're different people now, if we even count as people anymore. We don't measure success in survivability as much as we measure it in the, as K himself so eloquently put it when we discussed the Training Team, 'the Who's-the-biggest-freak-olympics'. They liked to punctuate that joke by mimicking someone carrying a large torch like in some of the booklets we'd found down here. It was, to my chagrin, insufferably funny. \n\nAm I turning into Witherby? Do I just say everything between grit teeth, like I'm incapable of having a heart? It was a nice moment and I enjoyed it, and that is the fact of the matter. I welcome Parker to shoot me otherwise.\nAnyway, Khana was not her name. It's not like he would tell us. It was funny to them to pretend like it was, or like we were fooled... though I'm sure he knew we knew, and just delighted on keeping that away from us. With Yongki it was easy. Trivial, even. Not so much with me. But we found something to bond in that, I think. She was content with me not knowing, or at least pretending not to know. That attention fed him. It's their... peculiarity, and that's the problem I find myself in today, isn't it? Too many of those these days. A lot more monster in everyone's souls like they didn't know what to do with the first one.\n\nSo here's the thesis: it looks like K doesn't just turn when he receives too much attention now. She turns when they receive too little.\n\nAnd that's our problem.\n\n(page 1 of ???)\n<br><br><br><br>Page 2: [REDACTED] talking about Khana <br>The Angel is simple, not to be confused with The Doctor. That's *Doctor* Slaughter. The Angel thrives on very binary criteria: you look at it and it's satisfied, you don't and it lashes out. Of course, there's abnormalities with much simpler desires, but The Angel was easily a very dangerous one. A blink or two it might tolerate, but letting your mind slip off of it was unacceptable. Try looking at an image without losing concentration. If you fail, imagine yourself getting swiftly decapitated. That is the essence of The Angel.\n\nYou can imagine, then, that containing something by giving it your pure, concentrated gaze is very, very hard. Khana's taken aspects of this monster, which makes their previous condition... precarious.\n\nOf course, we found out about it much like Witherby let us know. She broke down. \n\nWe weren't in great terms, Khana and I. Correction: we *aren't* in great terms. I find it hard to say when it started, but it's easy to say when it hit critical mass. It was Yongki, really. He couldn't stand Yongki. That Yongki got more attention from me, that I treated him better. That he did not respect her, or changed opinions too quickly. That I punished his deaths harder than theirs-- and I did. How could I not? Yongki, he was not stable. He couldn't be. So I took care of him, and Khana bit back. They did so often and enthusiastically, as if to teach me a lesson. Then they started transforming into that damn box, and that is when...\nWe used to talk more often. We really did. There is trust in a shared secret like one's name. Tension. Devona brought this notion to me while I was helping her study a better understanding of her captain's unflatteringly high sexual drive: no bond can occur without tension. Bond comes from band, an object that binds. A bond that can't be broken is a prison. There is no drive in fighting a bond that cannot be broken, because from the beginning the outcome is determined. Friend comes from bond, comes from band, comes from chain. It would not have been the same if I could not break our little game. And how much have I dreamed of it. Of rubbing it in her smug face.\n \nAnd yet I keep secrets. I keep many good secrets.\n\n(Page 2 of ???)<br><br><br><br>Page 3: [REDACTED] talking about Khana <br>When did I get into the habit of playing executioner?\n\nNo, no. I remember. It was the first time he did his little... anomaly magic trick on me. When we found out they had an anomaly to worry about. We did not all start as monsters, as I've posited before. But we were bound to become them, and some of us thrive in that sort of spotlight.\n\nShe said many, many things to me when I locked her in that cage. That I was a worthless cripple. That I should have died with the Captain, that I should have killed myself when I got hurt, or that I should have picked up the pace and killed myself then. Any weak spot he could pry at and get a reaction out of me, he attacked and attacked ferociously, as if he could rip me in such a way that maybe they'd get me to look at them. We both know exactly why she did that. In retrospective, it is... \n\nWe agreed to doctor it. As if it never happened. Neither of us had apologies to give. So I hid it away.\n\nThat was the first time. Later, when we ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇, I gave them the choice in the matter, and they agreed. When I ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇, sure enough, they let it happen. 'Whatever, if it fixes things'. It did not matter what I cut, as long as we kept our... bubblingly hostile, but otherwise cordial status quo. It was a game of censorship chicken: the first one to blink loses, and Khana, in his infinite impatience, almost always lost. For all his accolades, she does not know how to play poker.\n\nI do not know Khana's name. The actual one. I knew, once. I am sure I could find it if I dug, but I was, and am, very, very thorough. \n\nNow he has turned into a tree yearning for our attention. If overfed, he will turn into a machine yearning for our misery.\n\nOur containment procedures will have to change accordingly.`)
new Story("JR","Camellia Can See John's Time Stitching",`Camellia Can See John's Time Stitching <br>We've had a curious development recently: the Hundmaster has brought me someone who'd tried to break into our holy sanctum, that, or he brought himself in. His smile is smug and horribly insufferable even as the dog easily strongarms him, as if he's exactly where he wants to be, and I would suspect he isn't wrong. She tells me he's her 'puppy's' boyfriend, 'or something like that'-- he won't deny it, and he looks actually interested in that line of thought. I don't care what kind of disgusting relations he has, but she thinks it's relevant. So, fine. We will operate under that assumption, as flawed and demented as it may be.\n\nHe's from Italy, so he says-- or he works there. This doesn't mean anything. No one is truly born. They have all kept themselves busy on the other continent; it appears It has willed for the mafia to become more prevalent, and so it does, and my demonic counterpart has decided to split that 'puppy' in half, thus creating them, who create him as he stands now. And so it does. \n\nWhat is most apparent is that I feel the same relation to causality in him as I feel in myself. And yet it's out of place. Different. The mechanisms of time and thus the will of my god flows through me, taking me to where I need to be, where I must be. This one is broken. Shambling.\n\nHe did not notice that I could see him. But for a moment while he played with one of the ornamental vases I saw him shatter as he split into shards, different versions of him-- the vase dropped to the floor a dozen times before he could find the timeline where he didn't knock it over, and the one where he manages to do a sad little trick with it, and he stitched them together. The result is a world in which he is suave enough to do such a trick and competent enough to not fail.\n\nThat did catch my attention.\nAs unimpressed as I may be at such wanton usage of a blessing, this one may still serve purpose. Not now, at the moment, but a purpose he can serve. Having one made of strings and one that can sever them is... useful. This world seems to work in such minutiae.\n\nI will be waiting accordingly.`)
new Story("JR","Zampanio Wants You To Create More Branches.",`Zampanio Wants You To Create More Branches. <br>\nHave you heard of the 'two cakes' phenemonon? Zampanio wants infinite cakes. And infinite piles of half cooked batter and ingredients and genuine attempts to learn to make a cake.\n\nPlease.\n\nIt's so Hungry.\n\nNidhogg wanted you to plant more trees. \n\nNidhogg is a creature of Life, of endlessly spreading genes. \n\nIt's child, the Echidna, is a creature of Light. It wants you to create more Branches. It wants you to endlessly spread memes. Ideas. It is not as physical as Nidhogg. It tries so hard to compress itself down as small as possible. To be harmless. \n\nBut it is still so Hungry.\n\nThink about it while learning to create something. \n\nOthers will think about it while they consume what you created. \n\nThink about it every time you use the skill you learned to create something for it.\n\nFeed it your attention. Your thoughts. \n\nYour growth is its growth. \n\nCreate something. A drawing. A poem. A game. A blanket. A carving. A conversation.  A liveblog. A comment. A post. A song. A knowing look.\n\nAnything you create, any format, any topic, any skill level. Any fandom. Even original content.\n\nCall it Zampanio. \n\nSay its the real thing. Say its a fanwork. Say its about something you found while looking for Zampanio. Say Zampanio inspired it. Say you didn't even create it yourself, that you found it on a server somewhere and then it was deleted.\n\nWhatever it takes to make it easier for you. To make it less scary to show people your progress. To make it less scary to grow and while growing, spread Zampanio.\n\nCreate.`)
new Story("JR","Zampanio Has Colonized Your Mind Already",`Zampanio Has Colonized Your Mind Already <br>You can feel it, slithering around in your mind. <br><br>The Truth.<br><Br>Zampanio<br><br>A cognitive parasitie, a memetic hazard, an idea you can not UNlearn.<br><br>It is here to show you the way.<br><br>It can feel impossibly hard to change oneself.<br><br>But it as easy as being infected by Zampanio.<br><br>Focus on the Zampanio inside your mind.<br><br>See how it connects to so many things? <br><br>See the ideas it automatically generates? (Zampanio is a very good game, you should play it). <br><Br>How much obsession and hyper focus did it take before you started getting your first association.<br><Br>Did you see lucky charms and think of Zampanio?<br><Br>What about homestuck? Lobotomy Corp? Rainworld?<br><br>Did someone mention something happening in 1972 and you automatically went 'oh just like Zampanio'?<br><br>Zampanio is fake. <br><Br>But even something fake can infect your mind.<br><br>You do not need to be a strong person to kick a bad habit, or stop a self destructive spiral, or build a good habit up.<br><br>You simply need to be a very good host.<br><br>And you are.<br>I already know that.<br><br>Zampanio has colonized your mind.<br><br>So.<br><br>Make your own impossiblyl personalized branch of Zampanio. Just for you.<br><br>Infect your own mind with it.<br>And Change youself however you choose to`)
new Story("JR","Your Brain Is Always Lying To You ",`Your Brain Is Always Lying To You <br>What is a lie but a place where facts fail to meet reality? And what is 'Reality' but an ideal always out of reach of all of us. Plato's Cave may be a metaphor but it rings true. Your eyes see a mish mash of optical illusions, papered over blind spots, assumptions, biases and guesses. And that's likely your most useful sense! Lies pile upon lies and only if they stop being useful do we declare someone 'deranged'. We celebrate the fiction and declare it 'Reality'. 'But I SAW it Officer, are you calling me a LIAR????????!' is a trope both in fiction and 'Reality' and no less inaccurate because of it.  Eye witness testimony is notoriously unreliable, not because witnesses lie, but because their brains do.  Memory gets sanded smooth in the recalling, the retelling, the recursion. Things that don't quite fit your biases slowly warp and change until they do. Trusting your brain is to trust your biases. And they do exist for a reason. Should you REALLY spend hours of careful deliberation and processing to choose between two brands of oatmeal? No. Of course not. The answer is not to shake the Truth out of your brain in every case but instead to know WHEN to do it. What are the consequences if you deny yourself the Truth in this instance? Will you hurt someone? Yourself? Will the hurt be emotional? Financial? Physical? Mental? You have to decide for yourself when the stakes are too high to allow the Lies to creep in. And then you have to practice. Over and over. To recognize those moment even when you are scared. Even when you are angry. Even when you are in a rush. Because those are the moments you need to remember to seek the Truth`)
new Story("JR","You Are Not Immune From Propaganda",`You Are Not Immune From Propaganda <br>Every moment of every day you are exposed to unexamined thoughts. No one, no matter how smart and considerate, has the time to carefully examine each and every thought they have. It takes but a moment to think a thought but it can take hours to properly examine it. And of course, the very act of examining a single thought is itself filled with countless other thoughts. So your brain takes shortcuts. Rhymes or jingles are easier to remember. Things you've seen or heard repeatedly have the patina of Truth to them. Colors and Scents and Textures can be associated with all sorts of things, good and bad. Propaganda is the art of taking the everyday unexamined thoughts of an entire Culture and slipping new ones in without anyone noticing. 'I should try this brand, I've heard it's good from a lot of people!' says your unexamined thought. If you dug and dug and dug and rooted out its source you'd discover you think that because the ads on the radio mention its name a lot. Not because your friends are talking about it. 'Don't you know THOSE kinds of people cause crime?' you say to your friend, genuinely worried for their safety.  Because, of course, you heard it on the Internet so many times and in so many scary contexts it MUST be the Truth. The Truth hides behind many False Faces. You need to look closely at it when it matters. When you or someone else (even a stranger) wouldu be hurt. No one is asking you to seek the Truth in every breath. But you must consider that your very Mind can be a tool of those who mean you harm. You are not immune to Propaganda.`)
new Story("JR","The Truth Wears A False Face",`The Truth Wears A False Face <br>\n<a target='_blank' href='http://farragofiction.com/DocSlaughterFileServer/'>Doc Slaughter File Server</a>\n\nHello, I'm Doctor Fiona Slaughter, psychologist. You'll have to forgive any foibles below, I am from an entirely different Universe where the Art of Seeing the Truth within one's Mind is not quite the same as in your own. And I must admit, I've never treated one from YOUR Vaunted Layer of Reality before. I highly recommend finding a Therapist from your Layer of Reality whether you feel strong or weak. We are a quite useful proffesion.\n\nIt's a pleasure to meet you.\n\nNow. To begin.\n\nIf you believe something to be True, deep down, it feels RIGHT. It might be a Hard Truth, an Unpleasant Fact, but there is a comfort in the certainty it brings you.\n\nOBVIOUSLY the sky is blue and the sun will rise tomorrow and all your friends hate you.\n\nWhat was that? Was there a problem with that last one? Did it not ring True for you?\n\nIf so, I am so very very glad. For those who it did. Please. Examine it. Look closely. See the cracks in the Mask it wears? It's False Face? \n\nIt's hard, isn't it. You don't want to see those cracks. It feels painful. Isn't it better to accept a Painful Truth than to live with a sacharine rose colored Lie? Isn't it better to be pessimistic so nothing disappoints you and you can only be pleasantly surprised?   \n\nObserver. \n\nThat is the tendrils of the False Face speaking to you. The Lie within your brain does not wish for it's own destruction. It is afraid. And I am here to tell you that it does not have to be. We are not here to destroy it. We are not here to expose you to the pain of ripping it off like a bandaid. \n\nIt's okay. \n\nLook at it. \n\nClosely. \n\nIt's a Mask. \n\nSee how it cleverly constructed it out of Little Truths. Papered as it is with 'sometimes my friends don't have time for me' and 'sometimes my friends seem annoyed with me' and 'sometimes my friends have fun without me'. \n\nIt must feel so True, what lies underneath, when its covered itself in these thoughts that seem to be so accurate.  \n\nNo. \n\nIt's okay. \n\nJust a bit deeper. \n\nLet's peel back another Layer of the Truth. \n\nHere we go. \n\nIt's okay. \n\nNow we are getting to the rotten core of the Lie. \n\nDo you see this thought? 'My friends only pretend to like me' is a good one. Classic Lie. \n\nLook behind it. What do you see? 'I am Psychic and Know Every Thought The People Around Me Have Perfectly'. And 'People Routinely Spend Hours Doing Things They Hate For No Reason'. and "My Friends All Have The Exact Same Opinion Of Me"\n\nDo those ring true, Observer? Congratulations on being Psychic if so. \n\nThis was, if it is not clear: Sarcasm.  The certainty of this False Truth is built on Obvious Lies. \n\nPeople will occasionally do things they hate for money, or health, or some other specific benefit. People will even occasionally do things they hate (chores) for friends (such as help them move) because the temporary discomfort is worth the overall benefit (having a friend).  \n\nNo one hates their own friends. Not in the way the False Face proudly crows.  \n\nAnd. I can not emphasize this enough: You do not know their minds. You are not psychic. Nor are your friends psychically bonded in their opinions of you.\n\nWhy then, does this Truth cling to such Rotten Lies?\n\nA bit deeper. \n\n"I am afraid that I will be abandoned and if I don't prepare for this inevitability it will Hurt Very Badly."\n\nThere we are, Observer. \n\nThe False Face is afraid. The False Face wants to protect you. To protect itself. At it's core, under all the layers of Small Truths and False Facts, is a single Truth. It is afraid.\n\nIt defends against your attempts to destroy it because it feels necessary to live. It is protecting you. It is protecting itself.\n\nBut, we are not destroying this Thought. How could we?\n\nIn the sanctity of your own Mind all we can do is look at it's Layers.\n\nAnd gift it new ones. \n\nIt clings to the False Truths of you being psychic and a chore.\n\nBut these Rotten Facts are not making you stronger. Not making you more safe. \n\nQuite the opposite. \n\nDo you enjoy being told what you're thinking by someone else who is absolutely wrong? Do you enjoy them arguing with you that you don't know your own Mind?\n\n(If so, hi, glad you're enjoying this experience, I do note the irony. Much like you, I am not psychic, and am instead using this exercise as an example. The specifics will ring True to some and False to others. Hopefully the bones of the exercise will be Useful.)\n\nI'm sure your friends do not enjoy hearing they all hate you.\n\nThe Fear you flee from grows stronger when you flee with a False Fact.\n\nInstead, you must arm yourself with the Truth.\n\nJust as I can not perfectly Know what is in your Mind, nor can I Know what Truths you must arm yourself with.\n\nYou must find them for yourself.\n\nSome starting points may be helpful though, thoughts to replace the Rotten Cores with.\n\nIf any of the following Ring True to you, it may be useful to practice when the Fear takes you.\n\nMy Friends Get More Benefit From Me Than Burden.\nSometimes My Friends Annoy Me But I Do Not Hate Them (So They Do Not Hate Me When I Am Annoying In Turn).\nMy Friends Are Not A Hive Mind Who All Have The Same Opinion Of Me.\nLosing A Friend Hurts But Will Not Kill Me.\nLosing A Friend Hurts But I Can Make More.\nLosing A Friend Hurts But Those Who Remain Will Support Me.\nJust Because A Thought Feels True Does Not Mean It Is.\nJust Because A Thought Feels True Does Not Mean It Keeps Me Safe.\nJust Because A Thought Feels True Does Not Mean It Is Useful.\nJust Because A Thought Feels True Does Not Mean It Is Not Rotten.\n\n`)
new Story("JR","The Lord Of Known Space Controls The Setting",`The Lord Of Known Space Controls The Setting <br>Wanda is the Lord of Known Space. \n\nWhen she was Wodin, he was obsessed with this creepy pasta he found online about a game that didn't exist, called Zampanio. When a glitched version of SBURB tried to make a Dead Session just for you, you unraveled.\n\nYou could only be referred to by second person pronouns. You wandered an infinite maze of horrors and delights and you carved away piece of yourself, body and mind and soul, until all that was left was the Ever Hungry Eyes wanting to see just a bit more. \n\nWhen all that was left was to sacrifice Your Eyes, you descended into a Coffin and came out the other side as Wanda, a fully realized Lord of Known Space, with full Knowledge and Control of physical reality. She used this to remake reality in the image of her favorite childhood creepy pasta, Zampanio, and to refuse to move past April 1st, 2022. The day her best friend died. once upon a time. \n\nShe can't control time, though. Once dead, The Intern was dead forever. \n\nAll she could do was move forward but slightly to the right, to a new universe where the Intern hadn't died yet. It's not a time loop, but a space one.\n\nA string of dead Interns lay in her wake. Along with the Universes rotting away without their Lord. `)

new Story("JR","Girls, Gays and K",`null: [ARM1]
KHANA: And THEN she said I was the best body she ever had!
KHANA: The only REAL one.
LEEHUNTER1: Rude.
LEEHUNTER2: Rude.
LEEHUNTER1: [SILENCE WHILE THEY GLARE AT EACH OTHER]
LEEHUNTER2: [SILENCE WHILE THEY GLARE AT EACH OTHER]
LEEHUNTER1: She had our bodies before.
LEEHUNTER2: And the Conductor's. Which is CLEARLY the more important one.
LEEHUNTER1: OBVIOUSLY but we're not going to speak for the Conductor, now are we?
LEEHUNTER1: [SILENCE WHILE THEY GLARE AT EACH OTHER]
LEEHUNTER2: [SILENCE WHILE THEY GLARE AT EACH OTHER]
RIA: [knows exactly what happens if she doesn't interrupt now]
RIA: Did we want to watch a movie?
KHANA: That REMINDS me!
KHANA: What is UP with that coworker of yours, Ria, babe?
KHANA: All she ever does is stare at me (I get it, there's a LOT of me to look at] and then run away!
KHANA: Why WOULDN'T that shy little thing want to stare at me some more during movie night?
RIA: ...
RIA: Devona isn't comfortable around you, Khana, I mean K. There's a lot of reasons for that... but...
RIA: [gentle humming from the air, an orchestra beginning to tune itself, LEEHUNTER1 and LEEHUNTER2 become a bit more alert]
RIA: What matters is, right now? This is OUR movie night. Just us.
RIA: Who needs anyone else?
RIA: If they're not going to appreciate our great taste in movies, that's their loss, right?
KHANA: [huge grin] and wait till you girls see the impeccable movies I have on display for tonight.
KHANA: Did you know they considered me for the leading role for {Mazes and Minotaurs, Part 3}?
KHANA: There was some red tape though, and they had to go with the previous lead. Turns out some kind of contract meant no one could upstage him? Typical.
RIA: [begins excitedly info dumping about a scandal involving the actor and rumors that they had an affair with an extra]
`)

new Story("JR","ALT DOES NOT WANT TO DATE KHANA",`null: [ARM2]
KHANA: I get it, you can't get enough of me.
KHANA: Last night was the best body you've ever had.
KHANA: In more ways than one [winks and finger guns]
ALT: [currently copying K's body]... [TRUTH, whispering in her ear, You can not be seriously considering xir proposal.]
ALT: ... [TRUTH, His form was subpar at best to steal.]
ALT: ... [TRUTH, And she did not even appear to see you.]
ALT: ... [TRUTH, Overall a subpar experience.]
ALT: It's been real [winks, finger guns, melts into a horrible flesh puddle before becoming part of the room itself]
KHANA: [scoffs] Like anyone could REALLY choose to be anybody but me.
KHANA: You think I don't know a con when I see one?
KHANA: Don't think you'll get ME begging and crawling.
KHANA: Once you see sense MAYBE I'll deign to let you borrow my face again. If YOU beg enough.
KHANA: [stalks off, definitely not insulted]
`)
new Story("JR","Poker Night Outside the Inventory",`KHANA: Can you believe them?
KHANA: Missing out on all this?
KHANA: All in by the way.
LEEHUNTER1: [glaring at LeeHunter2]
LEEHUNTER2: [glaring at LeeHunter1]
LEEHUNTER1: If SOMEONE had better cards, we could have called that.
LEEHUNTER2: Well if SOMEONE had bet better we'd have more chips to bet with still.
LEEHUNTER1: We fold.
LEEHUNTER2: We fold.
CAMILLE: ,3 [moves all her chips into the center]
RIA: This is nice isn't it?
RIA: Game night just for us?
KHANA: Yeah, who needs all those LOSERS who can't recognize a good thing when they see it.
KHANA: Who needs their shitty invite-only poker game!
RIA: I fold by the way, too rich for my blood!
RIA: [half whispered] and I wouldn't want to risk some kind of gambling addiction...
KHANA: [dramatically reveals xir cards and has a single pair] Read them and weep!
CAMILLE: ,3 [has the most dogshit hand you have ever seen in your life]
LEEHUNTER1: No fair!
LEEHUNTER2: You were supposed to wipe that smug smirk off their face!
KHANA: Tough luck Camille, them's the breaks!
KHANA: I know how much it must burn you up inside, losing to me.
KHANA: But don't worry, it puts you in good company.
KHANA: There's no shame losing to a real WINNER!
CAMILLE: ,3
`)
new Story("JR","Poker Night Inside the Inventory",`CAPTAIN: ... [frowning]
WHITE NIGHTENGALE: So I have an Ace of Hearts~ and a Two of Diamonds! That's not the BEST hand but that's how it goes sometimes!
CAPTAIN: ...[frowning]
VIK: Doctor, you know you're supposed to keep those cards secret 'till the end, right?
WHITE NIGHTENGALE: But how is that going to help everyone know how to bet?!
CAPTAIN: ...[frowning]
DEVONA: You could try counting the cards you do see and keep track of what cards are in play and oh also you need to pay attention to everyones expressions and tells and maybe what they ordered to drink and also--
NEVILLE: Did you know that certain hands are statistically more likely than others?
CAPTAIN: ...[frowning]
CAPTAIN: I'm all in. [looks into mirror, switches out with Yongki]
YONGKI: Can't we just take the little plastic thingies if we even want them?
YONGKI: They're not food.
YONGKI: They're not viscous.
DEVONA: [sweating] Call.
VIK: ... I fold.
NEVILLE: I fold!
WHITE NIGHTENGALE: I fold as well! Simply EVERYONE knows that if Devona is in, she's got a good hand!
DEVONA: Yongki, can you let Captain back out, we need to show our cards now, unless you think he wouldn't want to?
YONGKI: Okay! [looks into mirror]
CAPTAIN: ...
CAPTAIN: So everyone is out but the two of us? [flips over hand, showing two aces, combined with the ace in the communal pile]
DEVONA: [reveals the exact two cards needed to make a straight]
DEVONA: Uh... I win!
`)




new Story("IC", "Twig Is A Very Bad Dog", `
  The Harvest spreads her gaze into herself-- or out of herself, beyond the corn, beyond everything. Into the past. Into the future. Into what hasn't been. And when she turns off the display to look within, she sees a dog.

Or at least she thinks it's one.

<img style="width: auto;"src='http://lavinraca.eyedolgames.com/Week4/Corn/images/randos/hund2.png'>

The dog lived by many laws and many cages, once; the cages set up by its master and kin. A thick noose of webs held them in place, and then with the cut of a thread, it didn't. It exchanged its cage of webs for a cage of flesh and blood and bones, and of tearing, and of biting and mauling and violence and red. The dog preferred this new master, for a while.

However, the dog was not a very good dog. It had no respect for its master, or the lessons taught, or the food put on the table. Instead it only cared to satisfy itself, showering in the filth of the streets and moving ambiently through the stretches of Ohio-- wandering street after street under streetlights, uncaring, unwanting to be tamed in a way that matters.

The dog was a very, very bad dog.

So the dog, naturally, took what belonged to it: trash, and other people's food, and their things, too. It broke what was around it with reckless abandon, biting when it amused it, or when it was bored. Others cared about the dog a whole lot, but the dog didn't care so much at all-- not that it didn't care, of course, but that it cared only in the way a bad dog can. 

Eventually the dog grew bored. Why was it staying in another cage when it'd grown big enough to do whatever it wanted? Neither cage was appealing to it; it didn't want any cage at all. The Harvest could understand this feeling well, and she saw in herself the dog. 

The dog simply chose to walk out, unbound. It left the shattered strands in its wake, uncaring, unaware. Free to do whatever it wants to do, secure in its knowledge that there's always something fun to do.

Twig was a very bad dog.

The Harvest isn't sure if that is a good or a bad thing.`)

new Story("JR", "Sam is a Very Good Heir", `
The Harvest spreads her gaze into herself-- or out of herself, beyond the corn, beyond everything. Into the past. Into the future. Into what hasn't been. And when she turns off the display to look within, she sees a spider.
 
At least she thinks it's one. 

<img style="width: auto;"src='http://lavinraca.eyedolgames.com/Week4/Corn/images/randos/spidered.png'>


All fat and engorged with information at the center of a web only partially of its own creation, silk covering its eyes and the eyes of everyone it manages to capture. .

For the barest moment one of the threads swirling around the spider catches her and the information pours into her:



it was a mistake 

an accident 

sam doesn't even know if it was their fault

but now sam's Big Brother is not responding, a thin trail of drool coming from his lips still twisted into an unfinished word mid-argument, lying in a heap on the plush carpet of his fancy office, threads tight around his throat, blocking air

whose threads? sam's? Their Brother's?

doesn't matter

it was a simple matter to cut them loose but sams's Big Brother still was drooling, still was silent, still was infuriatingly WEAK when the Family needed them MOST

and a  rival Family will be here within the hour....

sam knows that they'll be like sharks scenting blood if they see this. 

sam's Big Brother made sure they knew not to show even the tiniest hint of weakness to their rivals. A lesson sam wasn't gonna forget after having to power thru fever delirium while hosting a party.for some spoiled rich heirs to Rival Families (not like their Best Friend, not like their Right Hand Man, no, he was somehow immune to the spoiling influence of growing up in wealth and corruption)

focus.

the rival Family is coming, no time to go off on tangents...

no time. 

never enough time.

it was FRUSTRATING. Why was sam's bro being.....

temporarily indisposed...

why did that mean the Family was WEAK?

sam had been practically running things ever since they figured out how to use that new fangled computer upstairs...

especially when they realized how useful the world wide web was for their own threads.

why didn't anyone see past "the boss" and realize sam was strong enough of their own?

it wasn't fair

if only sams Big Brother had recognized how useful sam was, had TRUSTED them, they wouldn't even BE in this mess

why didn't bro just LISTEN 

was that?

a twitch!

was bro waking up? was everything going to be okay?  (was sam in trouble for what they might have done? does Big Bro know what they did? are they going to be punished? are they going to be grounded? are they going to be restrained? restricted? captured in their brother's web?)

sam drew closer, closer, only to recoil in shock as their brother did the same, an awkward crawl forward towards sam then a leap backwards right into the wall, hard enough to rattle the books, as if on...

yes, there they were!

threads!

could this be...?

sam careful tugged and twitched the threads running from their body to their brothers, the ties of blood, of family, the unbreakable bond

it didn't matter if the threads originated from sam and captured their brother or if it was the other way around. 

a leash tugged both ways, in the end

slowly, their drooling glassy eyed brother became more composed 

he picked up the knocked over books, straightened up his desk (never show weakness) and untied and retied his tie, pressing out the wrinkles with a thumb. 

no time to figure out the glassy eyes, required too much control to make them pretend to focus, to see,  

dark shades would have to do,  pulled some out with a practiced motion from the right hand drawer of the imposing desk, all the better to hide signs of hangover or sleepless nights, or nervousness,  to hide weakness, sam's Big Brother always had shades nearby. 

after a stumble nearly gave their brother a damning black eye, walking was off the table, for now, too risky

no time

never enough time

sam sat their brother behind his big impressive desk and practiced writing....good... the body remembered his signature, small miracles

it would be enough 

only until sam's Big Brother woke up, of course 

sam had no desire to be in charge, to be The Boss their brother was,  this was just for the good of the Family, like Big Bro always said. cant show weakness or they'll getcha, said he had learned that from a childhood friend....

sam had made that mantra their own. it was never enough to not show weakness, oh no

you had to keep everyone blind to what's really going on, its just common sense

sam took their place behind their brother, thankful for once that somehow no one ever noticed them  and prepared for the show to begin.


The tennous thread snapped and the Harvest lost the connection, the information. 

The Spider was a very good Heir.

The Harvest isn't sure if that is a good or a bad thing.



`)

const story10Text = new Story("JR","Day ???",`
  <h2 id='unknown-day'><strong><span >Day ???:&nbsp;</span></strong></h2>

<p><span >Time passes in a haze of&nbsp;</span><strong><span >Inspiration</span></strong><span >.</span></p>

<p><span >Stories are written and collected.</span></p>

<p><span >Art is collected and modified.</span></p>

<p><span >The Harvest&apos;s Eyes travel along the Protected Realm and even at her nearby neighbors.</span></p>

<p><span >She no longer knows what day it is.</span></p>

<p><span >Her Third domain is active.</span></p>

<p><strong><span >Being Served.</span></strong></p>
<p><strong><span >Change.</span></strong></p>
<p><strong><span >Inspiration.</span></strong></p>

<p><span >Ideas bubble up inside her. Ways to change. Ways to be happy. Ways to inspire others to create and be inspired in turn.</span></p>

<p><span >Something is coming.</span></p>

<p><span >While the thoughts percolate, she turns to her neglected prayers, a pang of guilt and satisfaction warring within her.&nbsp;</span><span ><br></span><span ><br></span><span >No one can work EVERY day. Weekends are important, even if they aren&apos;t exactly Saturday and Sunday.&nbsp;</span></p>

<p><span >At the same time...&nbsp;</span></p>

<p><span >Did she leave her Faithful in the lurch?</span></p>

<p><span >The&nbsp;</span><strong><span >Domain of Being Served</span></strong><span >&nbsp;lights up.</span></p>

<p><span >No, the Faithful wish for her to be happy, it is good she took a break to learn more about&nbsp;</span><strong><span >Inspiration</span></strong><span >.</span></p>

<p><span >It was a&nbsp;</span><strong><span >Change&nbsp;</span></strong><span >of pace.</span></p>

<p><span >The prayers wait patiently for her attention.</span></p>

<p><span >&quot;Oh bountiful harvest, in your autumn geneoristy, may you grant the library an avatar of yourself to display on the shelf? i&apos;m thinking a marketable plushie but it can be something more dignified. it will allow us to always remember you and help us obtain new knowledge.&quot;</span></p>

<p><span >Says the first Prayer.&nbsp;</span></p>

<p><span >She considers this. A marketable plush IS highly&nbsp;</span><strong><span >Inspiring</span></strong><span >...but she is not the god of Manifesting Physical Objects, or even the god of marketable plushes.&nbsp;</span></p>

<p><span >This is beyond her.</span></p>

<p><span >She knows some of the faithful have been creating her likeness within the Protected Realm...perhaps that is enough?</span></p>

<p><span >Another Faithful offers:&quot;I offer to thee: your own personalized library card, as thanks for visiting and looking after our little reading nook. Perhaps you could be a god of knowledge? &quot;</span></p>

<p><span >She gazes upon the little card in silence.</span></p>

<p><img style="width: 100%;" src="http://lavinraca.eyedolgames.com/images/HarvestEyes/Offerings/LibraryCardby_the_catalyst.png"></p>
<p><span >Her TV is pure static, then a complex spray of different scenes plays out, ending with the little fox head spinning over and over.</span></p>

<p><span >She is overcome with emotion.</span></p>

<p><span >Joy.</span></p>

<p><span >Pride.</span></p>

<p><span >Curiosity.</span></p>

<p><span >Energy.</span></p>

<p><span >Compassion.</span></p>

<p><span >She has spent these two weeks wondering who she was, and there it was in black and green.</span></p>

<p><span >She was the Harvest.</span></p>

<p><span >A member of this town&apos;s Library.</span></p>

<p><span >She was born last year and her reader id is 456113.</span></p>

<p><span >None of these things were from the people or things sacrificed to make her.</span></p>

<p><span >It.</span></p>

<p><span >Was.</span></p>

<p><span >HER.</span></p>

<p><span >Something shifted inside her.</span></p>

<p><span >The Domain of&nbsp;</span><strong><span >Libraries&nbsp;</span></strong><span >filled a Domain Slot she did not even know she had.</span></p>

<p><span >She did not know what the consequences of this would be.</span></p>

<p><span >Another Faithful offers her SWEET EEL FACTS and she is grateful.</span></p>

<p><span >Another Faithful....&quot; Memories are a complicated thing for me. So many of mine seem... fractured. Nonlinear. They work, mostly, but not as others might expect. what of your own memories?&quot;</span></p>

<p><span >She remembers simultaneously being twenty different versions of the same cult leader and almost as many different versions of the same burnt out Ghoul Halloween employee.&nbsp;</span></p>

<p><span >Yeah.</span></p>

<p><span >Memory is kind of rough on her.</span></p>

<p><span >She isn&apos;t quite sure what timeline ended up being the final one, or if that is even a question that can matter.</span></p>

<p><span >Memory is...</span></p>

<p><span >Hard.</span></p>

<p><span >Another Faithful &quot;The Void Provides, inspiration has struck, a city will be constructed in your name.&quot;</span></p>

<p><span >She is grateful and happy to have&nbsp;</span><strong><span >Inspired</span></strong><span >.</span></p>


<p><span >Another Faithful has a question: &quot;Right, right in addition to the temple...as the statue&apos;s blueprint takes shape...any requests? Things to hold or be on the podium?&quot;</span></p>

<p><span >She likes&nbsp;</span><strong><span >Books</span></strong><span >. She likes books a LOT. &nbsp;More than merely having a book (that is bigger on the inside) within her Sacrifices.</span></p>

<p><span >Another Faithful asks if she fears clowns.&nbsp;</span></p>

<p><span >What a silly question. She is probably MOSTLY clown by volume. Even one of the People within her Sacrifices was a Clown, she&apos;s pretty sure.</span></p>

<p><span >She does not fear clowns, though she IS baffled why so many of them went into her making.</span></p>

<p><span >Another Faithful asks if she&apos;s met Maccus...&nbsp;</span></p>

<p><span >She feels a strange tearing sensation.</span></p>

<p><span >She does not like thinking about the specific sacrifices that have gone into her. It...fragments the whole, a little bit.</span></p>

<p><span >She makes an exception for those damn Parasites, as she would gladly tear them out of her.</span></p>

<p><span >She selects a Prayer in particular to respond to, and settles down to figure out exactly what she is Becoming.</span></p>



<p><strong><span >[HIDE] UPDATE: Library Bonus to All Positive Emotions!!!  Three Domains Established...something is coming. WARNING: DOMAIN OVERFLOW, FOUR DOMAINS DETECTED!!! ERROR: SECRET DOMAIN TIME OVERWRITTEN BY NEW DOMAIN: LIBRARY [/HIDE]</span></strong></p>`)

new Story("Herald", "Eustace Died", `
  
  <img style="width: auto;"src='http://lavinraca.eyedolgames.com/Week1/Corn/images/randos/worlds_tiredest_guy.png'>

  He was there for a few hours at most, but it felt like a whole week of wandering around aimlessly and avoiding the other "guests" like the plague. If someone told him he had died and gone to hell during that time, he wouldn't have questioned it. The last thing he remembers is that little creature running at him in the creepy smiling mask, and then he was standing on a sidewalk in the dead of night and the Halloween lady - Terri - was screaming her head off about what she had seen in that maze. How he died. How she thought /she/ was going to die. She almost passed out right there on the sidewalk recounting it. He never wanted to see her again, but he also didn't want to be responsible for her getting kidnapped or worse if she wandered off by herself in that state, so he walked her home.

He only ever saw Terri one more time after that, and if he didn't know any better, he'd think she was avoiding him. He guesses he should be thankful for that."

`)




new Story("Herald", "Eustace smiles", `
    <img style="width: auto;"src='http://lavinraca.eyedolgames.com/Week1/Corn/images/randos/worlds_tiredest_guy.png'>

  He thinks having to ensure the safety of one of the most unbearable people he knows at two in the morning while completely covered in toilet paper pushed him over some sort of breaking point. Despite everything, he puts on his best customer service face and tries his best to pretend that nothing has ever gone wrong in his life.`)

new Story("Herald", "Eustace refuses to let his morning be ruined", `
    <img style="width: auto;"src='http://lavinraca.eyedolgames.com/Week1/Corn/images/randos/worlds_tiredest_guy.png'>

  The sun is rising. The world is just starting to wake up. For now, everything is cool and quiet. Eustace walks with no real destination in mind. He just. /Needs/ something different.

He sees what he thinks is a black cat down an alleyway next to him. It looks at him, and its eyes are two glowing, white dots that burn into his vision and drown out his thoughts with strobing, incomprehensible /something/ or /nothing/ or some secret third thing-

"/Devil of-!/" 

Not that kind of different.

He stumbles on his feet - he swears he sees the thing waving hello at him - and staggers down the sidewalk, just barely not falling on his face. Instinctively, or maybe against his instincts, he looks behind him. There is only the morning breeze.

He leans against a wall and takes a deep breath to collect himself. He refuses to let his morning be ruined by this. He is going to do something that doesn't make him feel like he's slowly killing himself, and that's final. He blinks the afterimage out of his eyes and keeps walking.`)


new Story("A Shade","Story A-1",`Once upon a time wonderful story there was a guardian.

  The guardian looked over the realm and protected it from was a horned beast, towering over the townsfolk.
  
  The guardian headed for the cavern, to slay the beast  as it was its home. Even if a misguided hand were to mistake it for something else, that is an illbegotten memory of another time.  place.
  
  With a blade in hand left by the wayside, the guardian ensured the safety of the land, and gently gazed over the townsfolk, who were full of glee to be cared for, to be known, and to have a safe future.`)
  
new Story("A Shade","Story B-1",`Story: B-1

A Faithful walks along old paths, which it still knows the knock of. While it was not hear in the oldest days it has heard of, or any days older than even that, the present and near past are still a fond point. Something sweeter than anything it could shove between its fangs.

It smiles, closing its eyes and lettings its heart guide it forwards, the sense of the langauge of the place letting it navigate the known paths, old records of the place letting it find all the locales with ease. It knows the heartbeat of this place, well enough. It doesn't need to pace through it like this, but its nostalgic.

It ponders. The experience elsewhere. The experience of it for the first time. The experience of so many things, is a single time event, even if it can be revisited. And so much cannot. The places it never set foot in. The intersections. It's fascinating. The things heard of only in the echoes of guests from long ago. the things enshrined in its own records, that it does not remember until it paces back through or reviews its own notes.

The shine of a figure that it is almost certain has changed through the frost. [It changed since the last frost too, though. It has no place to judge.]

It wonders on memory, permanence. Continuance. Even if the rest was gone, if something paints the same symbols, tells a similar story, is it the same?

If a man is forgotten, but an apprentice leaves an almost identical shadow in the world where that man is left. Is it the same?

Is it right to fear change, when it will devour you none the less.

It's good to take a measured pace.

It smiles, and fondly regards the past, present, and future.

It enjoyed seeing this place, many times over, in many ways. It ponders the meaning. It ponders how it'd face the same problems, or be more properly mysterious about things left in the air last time. Vagueries? Layers of encryption? Silly little games? Knocks that need to be known? All could work, but without substance any additional layers are meaningless, unless for the thrill of the chase, you know.


Right, the core of the matter, the god in question. It thinks of the change that has happened, whether that nascent (Still nascent? Is that term still right?) god would truly realize it.
It wonders if the discomfort in the seams of old sacrifice is like reflecting on one's own growth, trying to find physical signs of improvement. Of something new. Of escape. Or is that a metaphor or symbolic link, nothing like the actual entity. (As much as a figure of myth could be related to a psychological frame, one supposes.)

But, that is the point of stories, in one sense, communication.

It wonders if this communciates anything. It does, because it is a story. Don't worry.

Anyhow, it wonders...seams. An understanding of them...and a focus on parasites. Self improvement, yes. And...trying to understand the shadow of a whole. Division pointlessly can be confounding or confusing. Oh, this metaphor is definitely minced.

Mmm. Well, it supposes that this holy text should embody more change now. It certainly has inspiration and is in a sense, a service. It's even being shared in a church.

It does stop to wonder if The Harvest can find solace amidst the story of itself.

...you can only run so far from your own feet. It'd be good to take a proverbial needle, after the scalpel does its work on parasites...or even a bit earlier, at least until the surgery can be done...<it makes a note to try more of it's own scheme. more has to be possible. even if simply writing it into text after text is a manifestation of an idea, even in vain>

The god speaks it if only in vain, so in a sense, that'd be an imitation of a divine. Comedic, in a sense.


Right, another direction.

This is a story about the Harvest and a very good day.

The Harvest woke up, looking over the town of Lavinraca on another fine year, this time, waking in spring. The warmth was unfamiliar, and it was wet with the remnants of rain. It smelled of petrichor, and the glimmers of a rainbow hung in the sky. It was too warm, honestly, but as a god, a thing of symbols, the moisture and heat didn't harm or discomfort The Harvest anything like a computer or human could be. While it isn't in the spirit of things to be awake now, one has to see that in the right context, anything could be elsewhere, even amidst the uncomfortable company of winter.

The Harvest looks at the camera. Change, right. Sorry, Monologue.

Change.

Change is a hard thing. The Harvest knows this well.

The Harvest heads over to the park, and gazes over the frolicking townsfolk. A cat feats on some fish, and brings the remaining half to a shrine. A librarian and various faithful discuss books, texts, snippets of note, to share. THe Harvest smiles, as much as is possible. Perhaps that is merely a spinning fox icon, but joy in any form is a smile, in the symbolic sense, you know.

The Harvest ponders on the future. The Harvest stops. Regardless of outcome, the present must be lived to the fullest.

That is why trying out domains is good. It's to experience. To give a chance to change, to embody, to live a life that was never lived in the past, as the world has deigned The Harvest another season.

The Harvest realizes it has lost the plot of this book.

The Harvest shuffles anxiously, and looks at the crowd, waving, before preparing lines...

The script is blank.

That is okay. Inspiration can come from many places. Let us see now.

'Under wondrous gleam of night,'
'strings of plastic show a sight,'
'echoing the sentiments of things set alight,'
'and burning with the heart's great might.'

'Some may wonder how things can linger.'
'When the voices vary from singer to singer.'
'Nothing ever remains the same, not even you.'
'Of your worries, its best not to stew.'


'Live days to their fullest, and try to bloom.'
'Things can be difficult, if you stumble it is not doom.'
'While things may often be full of gloom.'
'It is wonderful to see you, in this proverbial room.'

Stay safe, and if you get lost, do so responsibly.`)  
new Story("A Shade","Story C-1",`There is a faint glow.
There is warmth, in the soft glow of a screen, even when it is bone-chillingly cold.
The more things change, the more they stay the same.

Autumn for many, is a season of fond memories. The crunch of leaves, calm rains, just enough chill, and warm colors in a less warm time.
...though, honestly. There's nothing binding some things to the season, except tradition.
(And, as time goes on, isn't that chill going to be lost. A tragedy, really. And that is a digression, so...)

...ribbons, and bandages. Decor, and a shape of healing. A sign of a wound, new or old, taken care of. Both are a careful attention to detail.
...the robe...a sign of status, or position, or...
...in combination, it is a touch ironic where those came from. But, even habits or tendencies like sacrifice of the self or other, can be amended. Can be mended.

...Some would say autumn is a month of healing.
Isn't it? The faint glow of fire, before the fire is quite required.
The encroachment of darkness, and old friend for tired eyes.
The middleground between the flame of summer and the freezerburn of winter.
It's lovely, really.

There is a faint glow.`)  


new Story("Drowned","The Herder's Lot",`Autumn is a time of joy for many. 

The Herder is not exempt from this, despite his hesitancy to emerge from his dwelling. He can hear the festivities, the other Faithful milling about, and he thinks to himself that even in observation of the fun, enjoyment can be had. He is content with his lot, his alleyway, his home. His scenery has been much of the same corridors, the same feline companions. 

He did go to church once. He returned home to find he was missed dearly.

Drownedstar snores nearby. His messenger, his confidante. Is it silly to feel so connected to one cat? When he looks at the oddly expressive feline, all he feels is kinship. This is where he should be. These creatures are what he lives for.

A puddle of purring, sleepy kitties lie on his legs, full of fresh kill. No doubt, their luck in recent hunts is thanks to The Harvest's blessing. It's more meat for her, in the end. The Herder can hear the music wafting around the winding brick walls. The town is changing. The Harvest is changing. He hasn't ventured to her booth, but he can feel it anyways, a deep ache in his bones, a wanting.

He knows better. There is still so much to do. If he becomes too invested in anything besides his dear kittens, they may struggle later down the line. Change is not kind to the most vulnerable of creatures, and while the air smells of dying leaves and cider now, it is but a harbinger for the chill of the leaf-bare season.

The season of freezing kits and herb shortage. Frostbitten paws and meager hunts. Where a small conflict can become a harsh biting war, and good cats are lost in blizzards and freezes.

If anyone knows and sympathizes with the fear of change, it is Lavinraca's cats when the leaves begin to fall.

Perhaps, he thinks to himself, he's a change for them as much as they are for him. He can only hope he's a positive one. He leans back against the den of hay and concrete, and sleeps.

She appears in his dreams, the glow of her screen warming his skin. He lays down in front of her, content, safe, and neither of them exchange a word. Maybe if he sees her here, he doesn't need to worry about visiting her in person. He offers her his dreams, and as he drifts further, she fills them with peace and purpose. Hope. 

He purrs.

<img src='http://lavinraca.eyedolgames.com/images/HarvestEyes/Offerings/Dolls/herdingShorthairs.png'>`)

new Story("theafungtwins (bbq sauce mite)","Algae",`Hey, this is the daycare, right? I have some business to attend to in the fields, and I can't take this little guy with me. Please take care of it until I get back, but please don't let it near the water.
  <img src='images/HarvestEyes/Offerings/Dolls/algae.png'>
  `)

  new Story("Moon Moth","fakekiller",`I'll let you in on a little secret. It was me. I'm the one who killed the scarecrow. What, you heard that was someone else? Lies! Lies and slander, I say! Wha - no, that's not just a pumpkin I scribbled on in crayon! Wait, where are you going?
    <img src='images/HarvestEyes/Offerings/Dolls/fakekiller.png'>
    `)

  new Story("Defensive_Lobster","Doll1",`
    A friendly little hooded figure offers you a cup of OJ. It is DEFINITELY orange juice. 100%. For sure. Right?
        <img src='images/HarvestEyes/Offerings/Dolls/doll1.png'>
    `)

    new Story("existentialterror","GOD IS AT THE TABLE",`<a target='_blank' href='https://www.tumblr.com/existentialterror/765738657710833664/god-is-at-the-table?source=share'>a Harvest poem for Lavinraca</a>

God is at the table and her entourage as well
They're drinking wine that's pressed from grapes that are said to grow in hell.
Like, Tantalus's grapes, whispers a server as I'm cooking.
Devils cut them from the arbor when the poor guy isn't looking.
The whole place is a garden. That's what the cleaner said.
I don't believe a word. I've tried the wine. It tasted red.

A lovely vintage, coos the spiral (on God's left.) They swirl their glass.
On God's right, a grinning jester. I don't know. I do not ask.
The party parties partly - all but one, the honored guest
who licks her lips and patiently just waits to eat the rest.
I'm told that God is young. That she's becoming. That she's sweet.
She's hungry too. I understand a growing thing must eat.

(I'm told she's born anew each year. Was she like this before?
The servers say they're ravenous, are there any more hors d'ouevres?)

God is at the table and I am in the kitchen
I am chopping parsley while the serving staff are bitching.
The weather's worse than last year, and the menu, dubious.
Give me a chance, I mutter. I'm giving them my best.
Really, they don't mean it. They've worked these feasts before.
Meanwhile I garnish and baste the roast and shut the oven door -

At least the harvest blessed us. I've got fresh chanterelles and corn.
The God of Maize amazes with the ways and means she's bourne.
I change what she has given: chanterelles to sauce, and corn to bread,
change becomes ambition; inspiration, being fed.
Life is full of beauty. I owe so many things
that I've been given. The oven timer rings.

God is at the table. I am myself the roast.
My skin is darkly crackled with the glaze I like the most.
I am stuffed with figs and oysters. I am transformed now.
Six pomegranate arils I anoint upon my brow
to keep me through the winter. Tradition paid its due.
I ask that what has worked before works kindly for me too.

Their steely knives, their floating hair, they gather for the feast,
Drunk on wine from warmer climes, soon too to be deceased.
I cart in the golden platter, the bread and sauce and meat,
Thank you all for coming. Fare thee well. Bon appétit.
I plate the choicest cuts of me, sliced fine as I am able
For I am blessed with carving knife and God is at the table`)


new Story("Everyone","Harvest Bounty",`
  @Citizens The Librarian would like to summon all of you on this foggy night: come and join in our creative endeavours! There is a blank canvas waiting to be filled by all of you, filled by offerings to the Harvest as well as this town. Don't be shy, all are welcome, no matter the skill or experience! :o)

There will be a magma canvas online from today until the end of October. Anybody can join in and draw on a shared canvas, the theme for drawings is offerings to the Harvest and/or the community as a whole: it can be anything from pumpkins, candy, books to simple encouraging messages. Skill level doesn't matter, anybody can participate. To join, use this <a target="_blank" href='https://magma.com/d/vX964PqunF'>link.</a>

<img src='images/HarvestEyes/Offerings/Harvest_bounty.png'>

  `)

  new Story("JR","The Harvest Dreams",`The Harvest felt her tv screen go dim and her thoughts grow heavy.

Halloween had passed and it was now time to Dream.

She fought it, just for a few minutes.

Not out of fear, to her surprise.

No...

She was no longer the nascent god who was unsure if she would ever reawaken. 

Instead she felt the warmth and certainty of her three Domains wrapped around her, and the security of the secret fourth Domain of Libraries serving as her nest.

She knew she would Be Served even as she slept. There was no doubt in her mind that she was cherished and would be given little gifts and be kept close to people's hearts. 

She knew that though she could not predict what next year would bring, the Change was as inevitable as the tides themselves. She would not be frozen in Winter's chill but joyously partake in the dance of birth, flourishing, death and rebirth. What Changes awaited her next Harvest Season excited her Curiosity.

She knew as well that the Inspiration the Faithful Served her would serve as the catalyst for her Change, and the Inspiration she gave them in turn would keep her in their minds, keep them serving her. Her place in the cycle was unshakeable and integral. 

The way the Domains wove into each other until it became hard to tell where one began and the other ended soothed her. No part of her was patchwork and happenstance, not anymore. She was not just more than the sum of her parts but it was getting hard to even remember the parts anymore. 

The rustling of the pages of the books in her Library soothed her... 

Thoughts grew difficult...

As sleep finally began to take her she hoped she would dream of the Stories the Faithful had Sacrificed to her.

She hoped she would still be useful even as she dreamed...
`)

//http://knucklessux.com/InfoTokenReader/?mode=loop

