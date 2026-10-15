
const openGiftButton = document.getElementById("openGift");
const surpriseMessage = document.getElementById("surpriseMessage");
const contentArea = document.getElementById("contentArea");

// ========================================
// ALL 19 PHOTOS
// Keep these files inside the photos folder.
// ========================================

const photos = [
    { file: "WhatsApp Image 2026-10-15 at 11.12.07 PM (1).jpeg", caption: "A little moment, a forever memory 💗" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.07 PM.jpeg", caption: "One of my favourite memories 🎀" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.08 PM (1).jpeg", caption: "A moment that makes me smile 🌷" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.08 PM (2).jpeg", caption: "My favourite kind of happiness 💕" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.08 PM.jpeg", caption: "A memory worth keeping forever ✨" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.09 PM (1).jpeg", caption: "Our little scrapbook 💌" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.09 PM (2).jpeg", caption: "A moment just for us 🧸" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.09 PM.jpeg", caption: "A piece of our story 💗" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.10 PM (1).jpeg", caption: "Another reason to smile 🌸" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.10 PM (2).jpeg", caption: "One of our special moments 🎀" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.10 PM.jpeg", caption: "Memories to keep close 💕" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.11 PM (1).jpeg", caption: "A little happiness captured 📸" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.11 PM.jpeg", caption: "Our story, one moment at a time 💌" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.12 PM (1).jpeg", caption: "A memory that feels like sunshine ☀️" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.12 PM (2).jpeg", caption: "Many more memories to come 💗" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.12 PM.jpeg", caption: "Another page in our story 🌷" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.13 PM (1).jpeg", caption: "A moment I'll treasure 🎀" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.13 PM.jpeg", caption: "A little forever memory 💗" },
    { file: "WhatsApp Image 2026-10-15 at 11.12.14 PM.jpeg", caption: "And our story continues 💕" }
];

// ========================================
// ALL 16 VIDEOS
// Keep these files inside the videos folder.
// ========================================

const videos = [
    { file: "WhatsApp Video 2026-10-15 at 11.09.17 PM (1).mp4", caption: "A little moment in motion 🎬" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.17 PM.mp4", caption: "One to watch and smile at 💗" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.18 PM.mp4", caption: "A memory worth replaying 🎀" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.19 PM (1).mp4", caption: "A little piece of our story 💌" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.19 PM.mp4", caption: "Another favourite moment 🌷" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.20 PM.mp4", caption: "Press play and smile 💕" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.21 PM.mp4", caption: "A moment captured forever 📹" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.22 PM.mp4", caption: "Our memories in motion 💗" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.23 PM.mp4", caption: "A little reason to smile 🎀" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.24 PM (1).mp4", caption: "One more memory to keep 🌸" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.24 PM (2).mp4", caption: "A special little moment 💌" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.24 PM.mp4", caption: "A memory to replay ✨" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.25 PM (1).mp4", caption: "Another piece of our story 💕" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.25 PM.mp4", caption: "Little moments, big memories 🎬" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.26 PM (1).mp4", caption: "Saved with love 💗" },
    { file: "WhatsApp Video 2026-10-15 at 11.09.26 PM.mp4", caption: "More memories to come 🎀" }
];

// ========================================
// OPEN THE SURPRISE
// ========================================

openGiftButton.addEventListener("click", function () {
    surpriseMessage.hidden = false;

    openGiftButton.textContent = "Your Little World Is Open 💗";
    openGiftButton.setAttribute("aria-expanded", "true");
    openGiftButton.disabled = true;

    surpriseMessage.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// ========================================
// MIX PHOTOS AND VIDEOS TOGETHER
// ========================================

const mixedMemories = [];
const maxItems = Math.max(photos.length, videos.length);

for (let i = 0; i < maxItems; i++) {
    if (photos[i]) {
        mixedMemories.push({
            ...photos[i],
            type: "photo"
        });
    }

    if (videos[i]) {
        mixedMemories.push({
            ...videos[i],
            type: "video"
        });
    }
}

// ========================================
// CREATE A PHOTO OR VIDEO CARD
// ========================================

function createMemoryCard(item, index) {
    const card = document.createElement("article");
    card.className = "photo-card";

    if (item.type === "video") {
        const video = document.createElement("video");
        video.controls = true;
        video.preload = "metadata";
        video.playsInline = true;
        video.setAttribute("aria-label", item.caption);

        const source = document.createElement("source");
        source.src = "videos/" + item.file;
        source.type = "video/mp4";

        video.appendChild(source);

        video.addEventListener("error", function () {
            card.classList.add("media-error");
        });

        card.appendChild(video);
    } else {
        const img = document.createElement("img");
        img.src = "photos/" + item.file;
        img.alt = "Memory " + (index + 1);
        img.loading = "lazy";

        img.addEventListener("error", function () {
            card.classList.add("media-error");
        });

        card.appendChild(img);
    }

    const caption = document.createElement("p");
    caption.className = "photo-caption";
    caption.textContent = item.caption;
    card.appendChild(caption);

    const errorMessage = document.createElement("p");
    errorMessage.className = "media-error-message";
    errorMessage.textContent =
        "Couldn't load " + item.file +
        ". Check its filename and folder.";
    card.appendChild(errorMessage);

    return card;
}

// ========================================
// MAIN WEBSITE SECTIONS
// ========================================

const sections = {
    memories: `
        <h3>Our Little Memories 📸🎬</h3>

        <p class="gallery-intro">
            Pictures, little videos, and moments I want you to keep. 💗
        </p>

        <div class="memory-gallery" id="memoryGallery"></div>

        <button class="back-button" onclick="showHome()">
            Back to Our Little World
        </button>
    `,

    letters: `
        <h3>Open When... 💌</h3>

        <div class="letter-card">
            <p>🌸 Open when you need a smile</p>
            <button onclick="showLetter('smile')">
                Open Letter 💗
            </button>
        </div>

        <div class="letter-card">
            <p>🧸 Open when you miss me</p>
            <button onclick="showLetter('miss')">
                Open Letter 💗
            </button>
        </div>

        <div class="letter-card">
            <p>🎂 Open on your birthday</p>
            <button onclick="showLetter('birthday')">
                Open Letter 💗
            </button>
        </div>

        <button class="back-button" onclick="showHome()">
            Back to Our Little World
        </button>
    `,

    gift: `
        <h3>A Little Gift for You 🎁</h3>

        <div class="gift-card">
            <div style="font-size: 65px;">🎀</div>
            <p>A little surprise, made especially for you.</p>
            <button onclick="openFinalGift()">
                Open Your Gift 💝
            </button>
        </div>

        <button class="back-button" onclick="showHome()">
            Back to Our Little World
        </button>
    `
};

// ========================================
// PERSONAL LETTERS FOR MIMI
// ========================================

const letters = {
    smile: "Mimi, I hope something makes you smile today. You deserve peaceful days, happy moments, and all the little things that make your heart feel lighter. Never forget how special you are. 💗",

    miss: "If you miss me, remember all the little moments we've shared and the beautiful memories still waiting for us. I hope this little letter makes you feel loved. 💌",

    birthday: "Happy Birthday, Mimi! 🎂💗 I wish you a life filled with peace, laughter, love, and beautiful surprises. You deserve so many wonderful things. This little website is one small way of reminding you how special you are. I hope this new year of your life brings you so many reasons to smile. 🎀"
};

// ========================================
// SHOW A SECTION
// ========================================

function showSection(name) {
    if (!sections[name]) {
        return;
    }

    // Stop videos before changing sections.
    contentArea.querySelectorAll("video").forEach(function (video) {
        video.pause();
    });

    contentArea.innerHTML = sections[name];

    if (name === "memories") {
        const gallery = document.getElementById("memoryGallery");
        const fragment = document.createDocumentFragment();

        mixedMemories.forEach(function (item, index) {
            fragment.appendChild(createMemoryCard(item, index));
        });

        gallery.appendChild(fragment);
    }

    scrollToContent();
}

// ========================================
// OPEN A LETTER
// ========================================

function showLetter(type) {
    if (!letters[type]) {
        return;
    }

    contentArea.querySelectorAll("video").forEach(function (video) {
        video.pause();
    });

    contentArea.innerHTML = `
        <div class="letter-card">
            <h3>A Letter for Mimi 💌</h3>
            <p id="letterMessage"></p>

            <button class="back-button" onclick="showSection('letters')">
                Back to Letters
            </button>
        </div>
    `;

    document.getElementById("letterMessage").textContent = letters[type];

    scrollToContent();
}

// ========================================
// OPEN THE FINAL GIFT
// ========================================

function openFinalGift() {
    contentArea.querySelectorAll("video").forEach(function (video) {
        video.pause();
    });

    contentArea.innerHTML = `
        <div class="gift-card">
            <div style="font-size: 75px;">💝</div>

            <h3>Happy Birthday, Mimi!</h3>

            <p>
                Out of all the things I could give you,
                I hope this reminds you that someone is
                wishing you the happiest life possible.
            </p>

            <p>
                May your days be filled with peace, laughter,
                happiness, and lots and lots of love. 💗
            </p>

            <p>Made especially for you, with love. 🎀</p>

            <button class="back-button" onclick="showSection('gift')">
                Open the Gift Again 🎁
            </button>
        </div>
    `;

    scrollToContent();
}

// ========================================
// GO BACK TO THE LITTLE WORLD
// ========================================

function showHome() {
    contentArea.querySelectorAll("video").forEach(function (video) {
        video.pause();
    });

    contentArea.innerHTML = "";
    scrollToContent();
}

// ========================================
// SCROLL TO CONTENT
// ========================================

function scrollToContent() {
    contentArea.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

// ========================================
// CONNECT MENU BUTTONS
// ========================================

document.querySelectorAll(".menu-button").forEach(function (button) {
    button.addEventListener("click", function () {
        showSection(button.dataset.section);
    });
});
