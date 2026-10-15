
const openGiftButton = document.getElementById("openGift");
const surpriseMessage = document.getElementById("surpriseMessage");
const contentArea = document.getElementById("contentArea");

// All 19 photos are stored in the repository root.
const photos = [
    "WhatsApp Image 2026-10-15 at 11.12.07 PM (1).jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.07 PM.jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.08 PM (1).jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.08 PM (2).jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.08 PM.jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.09 PM (1).jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.09 PM (2).jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.09 PM.jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.10 PM (1).jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.10 PM (2).jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.10 PM.jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.11 PM (1).jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.11 PM.jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.12 PM (1).jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.12 PM (2).jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.12 PM.jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.13 PM (1).jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.13 PM.jpeg",
    "WhatsApp Image 2026-10-15 at 11.12.14 PM.jpeg"
];

// All 16 videos are stored in the repository root.
const videos = [
    "WhatsApp Video 2026-10-15 at 11.09.17 PM (1).mp4",
    "WhatsApp Video 2026-10-15 at 11.09.17 PM.mp4",
    "WhatsApp Video 2026-10-15 at 11.09.18 PM.mp4",
    "WhatsApp Video 2026-10-15 at 11.09.19 PM (1).mp4",
    "WhatsApp Video 2026-10-15 at 11.09.19 PM.mp4",
    "WhatsApp Video 2026-10-15 at 11.09.20 PM.mp4",
    "WhatsApp Video 2026-10-15 at 11.09.21 PM.mp4",
    "WhatsApp Video 2026-10-15 at 11.09.22 PM.mp4",
    "WhatsApp Video 2026-10-15 at 11.09.23 PM.mp4",
    "WhatsApp Video 2026-10-15 at 11.09.24 PM (1).mp4",
    "WhatsApp Video 2026-10-15 at 11.09.24 PM (2).mp4",
    "WhatsApp Video 2026-10-15 at 11.09.24 PM.mp4",
    "WhatsApp Video 2026-10-15 at 11.09.25 PM (1).mp4",
    "WhatsApp Video 2026-10-15 at 11.09.25 PM.mp4",
    "WhatsApp Video 2026-10-15 at 11.09.26 PM (1).mp4",
    "WhatsApp Video 2026-10-15 at 11.09.26 PM.mp4"
];

const photoCaptions = [
    "A little moment, a forever memory 💗",
    "One of my favourite memories 🎀",
    "A moment that makes me smile 🌷",
    "My favourite kind of happiness 💕",
    "A memory worth keeping forever ✨",
    "Our little scrapbook 💌",
    "A moment just for us 🧸",
    "A piece of our story 💗",
    "Another reason to smile 🌸",
    "One of our special moments 🎀",
    "Memories to keep close 💕",
    "A little happiness captured 📸",
    "Our story, one moment at a time 💌",
    "A memory that feels like sunshine ☀️",
    "Many more memories to come 💗",
    "Another page in our story 🌷",
    "A moment I'll treasure 🎀",
    "A little forever memory 💗",
    "And our story continues 💕"
];

const videoCaptions = [
    "A little moment in motion 🎬",
    "One to watch and smile at 💗",
    "A memory worth replaying 🎀",
    "A little piece of our story 💌",
    "Another favourite moment 🌷",
    "Press play and smile 💕",
    "A moment captured forever 📹",
    "Our memories in motion 💗",
    "A little reason to smile 🎀",
    "One more memory to keep 🌸",
    "A special little moment 💌",
    "A memory to replay ✨",
    "Another piece of our story 💕",
    "Little moments, big memories 🎬",
    "Saved with love 💗",
    "More memories to come 🎀"
];

// Open the birthday surprise.
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

// Mix photos and videos together in scrapbook order.
const mixedMemories = [];
const maxItems = Math.max(photos.length, videos.length);

for (let i = 0; i < maxItems; i++) {
    if (photos[i]) {
        mixedMemories.push({
            file: photos[i],
            caption: photoCaptions[i],
            type: "photo"
        });
    }

    if (videos[i]) {
        mixedMemories.push({
            file: videos[i],
            caption: videoCaptions[i],
            type: "video"
        });
    }
}

// Encode filenames so spaces and brackets work in web addresses.
function fileURL(filename) {
    return encodeURIComponent(filename);
}

// Build each scrapbook card.
function createMemoryCard(item, index) {
    if (item.type === "video") {
        return `
            <article class="photo-card video-card">
                <video
                    controls
                    preload="metadata"
                    playsinline
                    aria-label="${item.caption}"
                >
                    <source
                        src="${fileURL(item.file)}"
                        type="video/mp4"
                    >
                    Your browser does not support this video.
                </video>

                <p class="photo-caption">${item.caption}</p>
            </article>
        `;
    }

    return `
        <article class="photo-card">
            <img
                src="${fileURL(item.file)}"
                alt="Memory ${index + 1}"
                loading="lazy"
            >

            <p class="photo-caption">${item.caption}</p>
        </article>
    `;
}

const sections = {
    memories: `
        <h3>Our Little Memories 📸🎬</h3>

        <p class="gallery-intro">
            Pictures, little videos, and moments I want you to keep. 💗
        </p>

        <div class="memory-gallery">
            ${mixedMemories.map(createMemoryCard).join("")}
        </div>

        <button class="back-button" onclick="showHome()">
            Back to Our Little World
        </button>
    `,

    letters: `
        <h3>Open When... 💌</h3>

        <div class="letter-card">
            <p>🌸 Open when you need a smile</p>
            <button onclick="showLetter('smile')">Open Letter 💗</button>
        </div>

        <div class="letter-card">
            <p>🧸 Open when you miss me</p>
            <button onclick="showLetter('miss')">Open Letter 💗</button>
        </div>

        <div class="letter-card">
            <p>🎂 Open on your birthday</p>
            <button onclick="showLetter('birthday')">Open Letter 💗</button>
        </div>

        <button class="back-button" onclick="showHome()">
            Back to Our Little World
        </button>
    `,

    gift: `
        <h3>A Little Gift for You 🎁</h3>

        <div class="gift-card" style="text-align:center">
            <div style="font-size:65px">🎀</div>
            <p>A little surprise, made especially for you.</p>
            <button onclick="openFinalGift()">Open Your Gift 💝</button>
        </div>

        <button class="back-button" onclick="showHome()">
            Back to Our Little World
        </button>
    `
};

const letters = {
    smile: "Mimi, I hope something makes you smile today. You deserve peaceful days, happy moments, and all the little things that make your heart feel lighter. Never forget how special you are. 💗",

    miss: "If you miss me, remember all the little moments we've shared and the beautiful memories still waiting for us. I hope this little letter makes you feel loved. 💌",

    birthday: "Happy Birthday, Mimi! 🎂💗 I wish you a life filled with peace, laughter, love, and beautiful surprises. You deserve so many wonderful things. This little website is one small way of reminding you how special you are."
};

function showSection(name) {
    contentArea.innerHTML = sections[name] || "";
    scrollToContent();
}

function showLetter(type) {
    if (!letters[type]) return;

    contentArea.innerHTML = `
        <div class="letter-card">
            <h3>A Letter for Mimi 💌</h3>
            <p>${letters[type]}</p>

            <button class="back-button" onclick="showSection('letters')">
                Back to Letters
            </button>
        </div>
    `;

    scrollToContent();
}

function openFinalGift() {
    contentArea.innerHTML = `
        <div class="gift-card" style="text-align:center">
            <div style="font-size:75px">💝</div>
            <h3>Happy Birthday, Mimi!</h3>

            <p>
                Out of all the things I could give you,
                I hope this reminds you that someone is
                wishing you the happiest life possible.
            </p>

            <p>Made especially for you, with love. 💗</p>

            <button class="back-button" onclick="showSection('gift')">
                Open the Gift Again 🎁
            </button>
        </div>
    `;

    scrollToContent();
}

function showHome() {
    contentArea.querySelectorAll("video").forEach(video => video.pause());
    contentArea.innerHTML = "";
    scrollToContent();
}

function scrollToContent() {
    contentArea.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

document.querySelectorAll(".menu-button").forEach(function (button) {
    button.addEventListener("click", function () {
        showSection(button.dataset.section);
    });
});
