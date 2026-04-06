// level.js
window.gameData = {
    // =========================
    // MAIN LIST LEVELS
    // =========================
    main: [
        {
            id: 51616869,
            title: "1. Nostalgic Travel",
            creator: "TeamThrowback",
            thumbnail: "images/51616869.webp",
            video: "y-_ZC5_PXvY",
            points: 250,
            position: 1,
            difficulty: "Easy Demon",
            tags: ["uhhhhhhhhhhhh"],
            description: `Team Throwback's third official level! This is a 1.0 themed travel level, which features 22 unique different creators! Enjoy! :D`
        },
        {
            id: 90475473,
            title: "2. Change of Scene",
            creator: "bli",
            thumbnail: "images/90475473.webp",
            video: "alafxkFTprU",
            points: 200,
            position: 2,
            difficulty: "Easy Demon",
            tags: ["Must Play - List Mods"],
            description: `Discord Gauntlet Contest entry, enjoy. You can find the full showcase with all coins on my yt channel. (2/2024 updated to fix various bugs related to 2.2)`
        },
        {
            id: 96455699,
            title: "3. RobTimBo",
            creator: "BowlOfJelly",
            thumbnail: "images/96455699.webp",
            video: "-LpHxwAR8iA",
            points: 150,
            position: 3,
            difficulty: "Hard Demon",
            tags: ["Limbo Inspired"],
            description: `Is this what Limbo would look like if RobTop made it? | My last level for 2.1, enjoy! | OG from Muplan's video: "What if RobTop made Limbo"`
        },
        {
            id: 83323273,
            title: "4. Ruta del Sol",
            creator: "TroxxP1",
            thumbnail: "images/83323273.webp",
            video: "X9EDM90XBFI",
            points: 100,
            position: 4,
            difficulty: "Easy Demon",
            tags: ["Mario Can't See"],
            description: `[Peruvian WGC entry - 1st place] - [creators: TroxxP1, iThunder12, PlantPoint, Aquaerum & Polli]`
        }
    ],

    // =========================
    // EXTENDED LEVELS
    // =========================
    extended: [
        {
            id: 101,
            title: "skeltion (placeholder)",
            creator: "travis scot",
            thumbnail: "images/extended1.webp",
            video: "glfUnq0rXso",
            points: 150,
            position: 1,
            difficulty: "Medium",
            tags: ["Extended"],
            description: "hey wait a minute kanye go away you fucking bum"
        }
    ],

    // =========================
    // LEGACY LEVELS
    // =========================
    legacy: [
        {
            id: 201,
            title: "wow its a legacy level",
            creator: "kanye??",
            thumbnail: "images/legacy1.webp",
            video: "zDjpcmvZbTM",
            points: 100,
            position: 1,
            difficulty: "ye",
            tags: ["Legacy"],
            description: "kanye go away i already listened to your album bud"
        }
    ],

    // =========================
    // LEADERBOARD USERS
    // =========================
    leaderboard: [
        {
            username: "MarioGames",
            pfp: "https://cdn.discordapp.com/avatars/651976169759047700/947a48b24f21dc90ee86fb5299543121.webp?size=64",
            points: 450,
            rank: 2,
            youtube: "https://www.youtube.com/@MarioGaming27401",
            verifications: ["dih"],
            mainCompletions: [90475473, 96455699, 83323273],
            extendedCompletions: [],
            legacyCompletions: [],
            countryCode: "US",
            country: "United States",
            completionVideos: {
                90475473: "https://www.youtube.com/watch?v=WT5Ti-GBhsU"
            }
        },
        {
            username: "Duxo",
            pfp: "https://cdn.discordapp.com/avatars/747615038528815276/547987ef3e4a79f92ce4596486a860a1.webp?size=64",
            points: 600,
            rank: 1,
            youtube: "https://www.youtube.com/@Duxo._.W",
            verifications: ["No Verifications."],
            mainCompletions: [51616869, 90475473, 96455699],
            extendedCompletions: [],
            legacyCompletions: [],
            countryCode: "GB",
            country: "United Kingdom",
            completionVideos: {
                1: "https://www.youtube.com/watch?v=WT5Ti-GBhsU",
            }
        },
        {
            username: "placeholder",
            pfp: "",
            points: 0,
            rank: 3,
            youtube: "",
            verifications: [],
            mainCompletions: [],
            extendedCompletions: [],
            legacyCompletions: [],
            countryCode: "UMI",
            country: "United States Minor Outlying Islands",
            completionVideos: {}
        }
    ],

    // =========================
    // HELPER FUNCTIONS
    // =========================
    getLevelById: function(id) {
        const categories = ["main", "extended", "legacy"];
        for (const cat of categories) {
            const level = this[cat].find(l => l.id === id);
            if (level) return level;
        }
        return null;
    },

    getLevelsByCategory: function(category) {
        return this[category] || [];
    },

    getLeaderboard: function(topN = null) {
        const sorted = [...this.leaderboard].sort((a, b) => b.points - a.points);
        return topN ? sorted.slice(0, topN) : sorted;
    },

    setPlayerCountry: function(username, countryCode, countryName) {
        const player = this.leaderboard.find(p => p.username === username);
        if (player) {
            player.countryCode = countryCode.toUpperCase();
            player.country = countryName;
        }
    }
};