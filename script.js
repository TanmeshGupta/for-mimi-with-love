
/* ==========================================
   FOR MIMI, WITH LOVE 💗
   Photos, videos, letters and surprises
   ========================================== */

function getAssetPath(filename) {
    return "./" + encodeURIComponent(filename);
}

/* YOUR PHOTOS 💗 */

const photos = [
    { file: "WhatsApp Image 2026-10-15 at 11.12.07 PM (1).jpeg", caption: "A special memory 💗" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.07 PM.jpeg", caption: "One of my favourite moments 🥹" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.08 PM (1).jpeg", caption: "My favourite person 💕" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.08 PM (2).jpeg", caption: "A memory to keep forever 🌷" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.08 PM.jpeg", caption: "You make everything special 💗" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.09 PM (1).jpeg", caption: "Us, always 🫶" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.09 PM (2).jpeg", caption: "A little piece of happiness 💞" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.09 PM.jpeg", caption: "My pretty girl 🌸" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.10 PM (1).jpeg", caption: "A moment worth remembering ✨" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.10 PM (2).jpeg", caption: "Forever one of my favourites 💗" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.10 PM.jpeg", caption: "My happiness 🥹" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.11 PM (1).jpeg", caption: "Little moments, big feelings 💕" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.11 PM.jpeg", caption: "A memory close to my heart ❤️" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.12 PM (1).jpeg", caption: "My favourite kind of day 🌷" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.12 PM (2).jpeg", caption: "You make me smile 💗" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.12 PM.jpeg", caption: "A little forever memory 🫶" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.13 PM (1).jpeg", caption: "My girl, my favourite person 💞" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.13 PM.jpeg", caption: "A moment I'll treasure ✨" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.14 PM.jpeg", caption: "More beautiful memories ahead 💗" }
];

/* YOUR VIDEOS 🎥 */

const videos = [
    { file: "WhatsApp Video 2026-10-15 at 11.09.17 PM (1).mp4", caption: "A little moment together 💗" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.17 PM.mp4", caption: "One for the memories 🥹" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.18 PM.mp4", caption: "A moment worth keeping 💕" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.19 PM (1).mp4", caption: "Our little memory 🌷" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.19 PM.mp4", caption: "A happy little moment 💗" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.20 PM.mp4", caption: "Something I'll always remember 🫶" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.21 PM.mp4", caption: "A memory just for us 💞" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.22 PM.mp4", caption: "Little moments, forever ✨" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.23 PM.mp4", caption: "One of those special moments 💗" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.24 PM (1).mp4", caption: "A memory to smile about 🥹" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.24 PM (2).mp4", caption: "My favourite memories 💕" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.24 PM.mp4", caption: "A little piece of us 💗" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.25 PM (1).mp4", caption: "Moments that mean everything 🌸" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.25 PM.mp4", caption: "Another memory to treasure 💞" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.26 PM (1).mp4", caption: "A special little memory ✨" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.26 PM.mp4", caption: "To many more memories 💗" }
];

/* CREATE A BUTTON */

function makeButton(label, action, className = "") {
    const button = document.createElement("button");
    button.textContent = label;

    if (className) {
        button.className = className;
    }

    button.addEventListener("click", action);
    return button;
}

/* BACK BUTTON */

function addBackButton(container) {
    const back = makeButton(
        "← Back to Our Little World",
        () => {
            container.innerHTML = "";
            container.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        },
        "back-button"
    );

    container.appendChild(back);
}

/* PHOTO GALLERY */

function showPhotos(container) {
    container.innerHTML = `
        <h3>Our Memories 📸</h3>
        <p>Every little moment with you is special. 💗</p>
    `;

    const gallery = document.createElement("div");
    gallery.className = "memory-gallery";

    photos.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "photo-card";

        const img = document.createElement("img");
        img.src = getAssetPath(item.file);
        img.alt = `Memory ${index + 1}`;
        img.loading = "lazy";

        const caption = document.createElement("p");
        caption.className = "photo-caption";
        caption.textContent = item.caption;

        img.addEventListener("error", () => {
            card.classList.add("media-error");
            img.alt = "Photo could not be loaded";
        });

        card.append(img, caption);
        gallery.appendChild(card);
    });

    container.appendChild(gallery);

    const videoButton = makeButton(
        "🎥 Watch Our Videos",
        () => showVideos(container),
        "section-action"
    );

    container.appendChild(videoButton);
    addBackButton(container);
}

/* VIDEO GALLERY */

function showVideos(container) {
    container.innerHTML = `
        <h3>Our Videos 🎥</h3>
        <p>Little moments I want to keep forever. 💗</p>
    `;

    const gallery = document.createElement("div");
    gallery.className = "memory-gallery";

    videos.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "photo-card video-card";

        const video = document.createElement("video");
        video.src = getAssetPath(item.file);
        video.controls = true;
        video.preload = "metadata";
        video.playsInline = true;
        video.setAttribute("aria-label", `Memory video ${index + 1}`);

        const caption = document.createElement("p");
        caption.className = "photo-caption";
        caption.textContent = item.caption;

        video.addEventListener("error", () => {
            card.classList.add("media-error");
        });

        card.append(video, caption);
        gallery.appendChild(card);
    });

    container.appendChild(gallery);

    const photoButton = makeButton(
        "📸 Back to Photos",
        () => showPhotos(container),
        "section-action"
    );

    container.appendChild(photoButton);
    addBackButton(container);
}

/* OPEN WHEN LETTER CARDS 💌 */

function showOpenWhenCards(container) {
    container.innerHTML = `
        <h3>Open When... 💌</h3>
        <p>Little letters for the moments when you need them, Mimi. 💗</p>
    `;

    const cards = [
        {
            title: "🌸 Open when you need a smile",
            message: "Mimi, I hope this reminds you that you are loved more than you know. Even on your hardest days, you deserve softness, peace, and a reason to smile. I’m always cheering for you. 💗"
        },
        {
            title: "🧸 Open when you miss me",
            message: "Close your eyes and imagine the biggest hug from me. Distance or a busy day can never change how much you mean to me. You’re my favourite person, my comfort, and my little home. 🫶"
        },
        {
            title: "🎂 Open on your birthday",
            birthday: true
        }
    ];

    cards.forEach((item) => {
        const card = document.createElement("article");
        card.className = "letter-card";

        const heading = document.createElement("h4");
        heading.textContent = item.title;

        const button = makeButton("Open Letter 💗", () => {
            if (item.birthday) {
                showBirthdayLetter(container);
            } else {
                showShortLetter(container, item.title, item.message);
            }
        });

        card.append(heading, button);
        container.appendChild(card);
    });

    addBackButton(container);
}

/* SHORT LETTERS */

function showShortLetter(container, title, message) {
    container.innerHTML = "";

    const card = document.createElement("article");
    card.className = "birthday-letter";

    const heading = document.createElement("h2");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.className = "letter-paragraph";
    paragraph.textContent = message;

    card.append(heading, paragraph);
    container.appendChild(card);
    addBackButton(container);

    card.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* SPECIAL GIFT 🎁 */

function showGift(container) {
    container.innerHTML = "<h3>Your Special Gift 🎁</h3>";

    const card = document.createElement("article");
    card.className = "gift-card";

    const paragraph = document.createElement("p");
    paragraph.textContent =
        "Your gift is this little corner of the internet, made with all my love. Explore our memories and open your birthday letter whenever you want a reminder of how special you are. 💗";

    card.appendChild(paragraph);
    container.appendChild(card);
    addBackButton(container);
}

/* YOUR COMPLETE BIRTHDAY LETTER 💗
   Original Hinglish wording preserved.
*/

function showBirthdayLetter(container) {
    container.innerHTML = "";

    const letter = document.createElement("article");
    letter.className = "birthday-letter";

    const heading = document.createElement("h2");
    heading.textContent = "A Letter From My Heart 💌";

    const subtitle = document.createElement("p");
    subtitle.className = "letter-subtitle";
    subtitle.textContent = "For my Mimi, my jaan, my 3000 💗";

    const paragraphs = [
`Happy Birthday my lovelyyyizitzkhxjldupcm I loveee youu soo muchhh my jaan A veryy veryy veryyy happy birthday to youu chittii the most special people in my life who always has my back no matter what aaj aur kal is all about you chitti I'm just soo soo grateful to God that usne tuze meri life mai bheja as faal of all the good things I have done truly speaking you're the Devi of my life just can't tell you chitti how muchh grateful I'm just by having you whenever I see you all my stress just vanish away tere chote chote masti majak se mere normal day bhi ekdam special home lag jata hai the way you make me laugh by your sily jokes the way to make me smile with all your love the way you make me blush by kissing my face and the way you make me cry by biting and squeezing my boobs for no reason all that is the reason for me being Happy`,

`mai pahile aise nhi tha itna Masti karna kushh rehna yea loving life was not my part but after meeting you chitti 😭 i got a reason to not just love you to love my life too you're the reason why I have started living why I have started caring Abt me you're the only reason why I have become a better person chitti and yess I agree that sometimes I doo fight with you I might be angry on you or I'll be so annoying but the most important thing happened that you always stayed no matter ham kitna laad rhe hai kitan jagda kar rhe hai you always choose uss over everything else that's wht make you the best person in the world`,

`you might be saying that you're not good and all and all stuff but sachh bolu agar possible hota tho mai tuze khud ko apne pov se dhekne bolta then you'll realise tu kitni special pretty aur perfect hai jaan chittti and bby idk kyu tu bolti hai ki you don't look good have you every looked at yourself the way I look ??? your pretty brown eye ik ye toda movie type sound karega but sachi i feel like mai bas unko dhekte hi rhau whenever I see you smiling mere mood ekdam se kush ho jata hai and the way you laugh jabhi ham gadi pe hota aww that's soo fucking cute chitti`,

`and have you looked at yourself jab tu dress up hoti hai like daam gurll you're just looking like miss universe i just feel ke mujhe pura time bas adore karte rahu the time should pause for me and I'll just keep adoring you and tbh I haven't loved you by your looks it's your personality your kindness your heart your care towards me all the lilll things you do to make me smile and feel loved that's what makes you more beautiful and trust your face cut is always prefect for me it's the way I want my girl to bee`,

`and bby your body your body is the tea i don't want to put dirty things in this love letter but you're just veryyy veryyy hott kabhi kabhi tho i just ki tuze khaa jauu itna itna itna love duu tuze ki tu khud bole ki abb bass hua bby just trust me pahile jisne bhi tuze bola hoga you don't look good they don't love you but I doo and bby you'll always be a flex for me not just bcozz of your looks pe your body but by the way you understand me care abt me support me and the most important the way you make feel loved and imp is the best thing chitti no one ever has done this too me and yk that right ??`,

`Maine kabhi expect nhi kiya tha ki i deserve love coz whenever I had a relationship it has always broken me but with you there's something very very very positive energy that tells me that this is going to work there birthday pe I just wish that you get happiness, success, peace, good health, and everything your heart wishes for because genuinely chittti you deserve everything more than you wish for for my sweetheart and dw I'm always there for you darling I'll always love you more than anyone else will I'll always take care of you like a lill cute bby I'll be there to Support you to cheer you up for everything you love to dooo make you smile and laugh and always to irritate you alot`,

`and yess I doo cross my limits something but it's just that I'm really very very comfortable with youu dusro ke sath baat karte time I think doo bar but not with you tere sath rhne pe my heart speaks without using Brain joo dil mai aya bas bol deta hu and kabhi kabhi tho itna jealous hota hu ki i just make you feel bad but I'm just scared to loose you sweety i don't want ki my happy place my real homie goes away from me mujhe mere life ka har moment har ek sec no matter vho achaa hai yea bura i just want to spend it with you I just want ki tu mere sath rhe har pal (pal pal Dil ke pas)`,

`i promise you my lovee that you'll always be my frist priority my frist call whenever I'm happy or sad I just thank God to bring you to earth and not in any other universe trust I'm her to stay not to leave you bby coz I loveee youu in every universe my 3000 Once again happiest birthday to my beautiful girl my favourite person and my biggest happiness and the reason of my smile I hope this year bring all your wishes come true and give you more than you deserve bby I'll always be here Support you cheering for you as loud as i can and always irritating your loving and making you smile every single sec I love youuu my 3000 I lovee you today, tomorrow, and every day after that mwaaaaaahhh 💋 💋 💋`
    ];

    paragraphs.forEach((text) => {
        const paragraph = document.createElement("p");
        paragraph.className = "letter-paragraph";
        paragraph.textContent = text;
        letter.appendChild(paragraph);
    });

    const ending = document.createElement("p");
    ending.className = "letter-ending";
    ending.textContent = "Forever your 3000 💗💋";

    letter.prepend(subtitle);
    letter.prepend(heading);
    letter.appendChild(ending);

    container.appendChild(letter);

    addBackButton(container);

    letter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* MAIN WEBSITE BUTTONS */

document.addEventListener("DOMContentLoaded", () => {
    const openGift = document.getElementById("openGift");
    const surprise = document.getElementById("surpriseMessage");
    const container = document.getElementById("contentArea");

    if (openGift && surprise) {
        openGift.addEventListener("click", () => {
            surprise.hidden = false;
            openGift.setAttribute("aria-expanded", "true");
            openGift.textContent = "Your Little World Is Open 💗";
            openGift.disabled = true;

            surprise.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    document.querySelectorAll(".menu-button").forEach(button => {
        button.addEventListener("click", () => {
            const section = button.dataset.section;

            if (section === "memories") {
                showPhotos(container);
            } else if (section === "letters") {
                showOpenWhenCards(container);
            } else if (section === "gift") {
                showGift(container);
            }

            container.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
});
