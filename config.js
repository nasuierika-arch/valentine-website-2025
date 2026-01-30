// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "gazule",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "vrei sa fii valentina mea?? ",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '​🧡​', '​💛​', '💚', '​🩵​', '​💜​'],  // Heart emojis
        bears: ['🦖​', '​❤️‍🩹​']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "ma mai iubesti?​🫶​",                                    // First interaction
            yesBtn: "da!",                                             // Text for "Yes" button
            noBtn: "nu",                                               // Text for "No" button
            secretAnswer: "eu te iubesc mai tare​😽​​😽​"           // Secret hover message
        },
        second: {
            text: "cat de mult ma iubesti?",                          // For the love meter
            startText: "tare tare ca pe iubita mea",                                   // Text before the percentage
            nextBtn: "mai dai❤️"                                         // Text for the next button
        },
        third: {
            text: "vrei sa fii, nu ca n ai fii deja, valentina mea pe cat ne vedem noi nu 14 feb?:)) 🌹", // The big question!
            yesBtn: "daa",                                             // Text for "Yes" button
            noBtn: "gurl wtf"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "chiar asa tare ma iubesti? ​🙈​🙈​",  // Shows when they go past 5000%
        high: "tare taree",              // Shows when they go past 1000%
        normal: "ca pe iubita mea​🥰​"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "sunt cea mai norocoasa ca te am​🥰​​🥰​",
        message: "si cadoul tau acum este...o pupa maaaare mare cand ne vedem",
        emojis: "​🫶​🦖​❤️‍🩹​❤️‍🩹​❤️‍🩹​"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dk5sylljo/video/upload/v1769792496/Coldplay_-_Sparks_aofjho.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
