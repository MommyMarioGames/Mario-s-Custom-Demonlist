// level.js
window.gameData = {
    // =========================
    // MAIN LIST LEVELS
    // =========================
    main: [
        {
            id: 1,
            title: "1. RobTimBo",
            creator: "BowlOfJelly",
            thumbnail: "images/96455699.webp",
            video: "-LpHxwAR8iA",
            points: 250,
            position: 1,
            difficulty: "Hard Demon",
            tags: ["Limbo Inspired"],
            description: `Is this what Limbo would look like if RobTop made it? | My last level for 2.1, enjoy! | OG from Muplan's video: "What if RobTop made Limbo".`
        },
        {
            id: 2,
            title: "2. Ruta del Sol",
            creator: "TroxxP1",
            thumbnail: "images/83323273.webp",
            video: "X9EDM90XBFI",
            points: 200,
            position: 2,
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
            title: "Extended Level 1",
            creator: "X",
            thumbnail: "images/extended1.webp",
            video: "abcd1234",
            points: 150,
            position: 1,
            difficulty: "Medium",
            tags: ["Extended"],
            description: "An extended level example."
        }
    ],

    // =========================
    // LEGACY LEVELS
    // =========================
    legacy: [
        {
            id: 201,
            title: "Legacy Level 1",
            creator: "Old",
            thumbnail: "images/legacy1.webp",
            video: "efgh5678",
            points: 100,
            position: 1,
            difficulty: "Easy",
            tags: ["Legacy"],
            description: "An old legacy level example."
        }
    ],

    // =========================
    // LEADERBOARD USERS
    // =========================
    leaderboard: [
        {
            username: "PlayerOne",
            points: 500,
            rank: 1,
            youtube: "yt link here",
            verifications: ["insert verifiaction", "top 67 player"],
            mainCompletions: [1, 2],
            extendedCompletions: [101],
            legacyCompletions: [201]
        },
        {
            username: "PlayerTwo",
            points: 420,
            rank: 2,
            youtube: "https://youtube.com/PlayerTwo",
            verifications: ["Verified ✅"],
            mainCompletions: [2],
            extendedCompletions: [],
            legacyCompletions: []
        },
        {
            username: "PlayerThree",
            points: 390,
            rank: 3,
            youtube: "https://youtube.com/PlayerThree",
            verifications: [""],
            mainCompletions: [],
            extendedCompletions: [101],
            legacyCompletions: []
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
        const sorted = this.leaderboard.sort((a, b) => b.points - a.points);
        return topN ? sorted.slice(0, topN) : sorted;
    }
};