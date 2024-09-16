//----------------------------Level Constants-------------------------------//
export const LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
export const TOP_LEVEL = 11;
export const LEVEL_DATA = {
    1: {
        name: 'INK Vial',
        point: 0,
        energy: 1000,
        pointPerClick: 1
    },
    2: {
        name: 'Baby',
        point: 5000,
        energy: 1500,
        pointPerClick: 2
    },
    3: {
        name: 'Toddler',
        point: 25000,
        energy: 2000,
        pointPerClick: 3
    },
    4: {
        name: 'Youth',
        point: 100000,
        energy: 2500,
        pointPerClick: 4
    },
    5: {
        name: 'Teen',
        point: 1000000,
        energy: 3000,
        pointPerClick: 5
    },
    6: {
        name: 'Graduate',
        point: 2000000,
        energy: 3500,
        pointPerClick: 6
    },
    7: {
        name: 'Worker',
        point: 10000000,
        energy: 4000,
        pointPerClick: 7
    },
    8: {
        name: 'Employee of the Month',
        point: 50000000,
        energy: 4500,
        pointPerClick: 8
    },
    9: {
        name: 'Supervisor',
        point: 100000000,
        energy: 5000,
        pointPerClick: 9
    },
    10: {
        name: '?',
        point: 1000000000,
        energy: 5500,
        pointPerClick: 10
    },
    11: {
        name: 'Boss',
        point: 18000000000,
        energy: 6000,
        pointPerClick: 11
    },
}

//----------------------------Exchange Constants-------------------------------//

export const EXCHANGES = {
    SOL_SNIPER: {
        name: 'Sol Sniper'
    },
    MAGIC_EDEN: {
        name: 'Magic Eden'
    },
    TENSOR: {
        name: 'Tensor'
    }, 
    VTOPIA: {
        name: 'Vtopia'
    }
}

//----------------------------Interval Constants-------------------------------//
export const ENERGY_SPEED = 3;
export const ENERGY_INTERVAL = 1000;
export const MINUS_CLICK_INTERVAL = 1000;
export const UPDATE_USER_INTERVAL = 5000;

//----------------------------Number Constants-------------------------------//

export const FULL_ENERGY = 6;

//----------------------------Mine Constants-------------------------------//

export const MINT_CATEGORIES = {
    PR_TEAM: 'Master Grok',
    MARKETS: 'Frenz',
    LEGAL: 'Marketplace',
    WEB3: 'Crypto Twitter',
};

export const COMBO_SIDE = {
    POSITIVE: "positive",
    NEGATIVE: 'negative'
}

//----------------------------TASK Constants-------------------------------//

export const TASK_CATEGORIES = {
    YOUTUBE: 'Hamster Youtube',
    DAILY: 'Daily tasks',
    LIST: 'Tasks list',
};


//----------------------------API Constants-------------------------------//

export const BACKEND_URL = process.env.IS_PRODUCTION == "true" ? "https://monster-kombat-backend.onrender.com" : "http://localhost:8080";
export const FRONTEND_URL = process.env.IS_PRODUCTION = "true" ? 'https://monster-kombat-frontend.onrender.com' : 'http://localhost:5173';
export const FRONTEND_DOMAIN = process.env.IS_PRODUCTION = "true" ? 'monster-kombat-frontend.onrender.com' : 'localhost:5173';
export const GIVEAWAY_LINK = 'https://gleam.io/XwuZb/win-100000-join-the-doge-kombat-giveaway-100-winners';
// export const BACKEND_URL = "http://localhost:8080";

//----------------------------ENERGY LIMIT Constants-------------------------------//

export const ENERGY_LIMIT_POINT = 2000;
export const ENERGY_LIMIT_INCREASE = 500;

//----------------------------Cipher Constants-------------------------------//

export const CIPHER_TABLE =    {
    'A': '01',
    'B': '1000',
    'C': '1010',
    'D': '100',
    'E': '0',
    'F': '0010',
    'G': '110',
    'H': '0000',
    'I': '00',
    'J': '0111',
    'K': '101',
    'L': '0100',
    'M': '11',
    'N': '10',
    'O': '111',
    'P': '0110',
    'Q': '1101',
    'R': '010',
    'S': '000',
    'T': '1',
    'U': '001',
    'V': '0001',
    'W': '011',
    'X': '1001',
    'Y': '1011',
    'Z': '1100',
    '0': '11111',
    '1': '01111',
    '2': '00111',
    '3': '00011',
    '4': '00001',
    '5': '00000',
    '6': '10000',
    '7': '11000',
    '8': '11100',
    '9': '11110',    
}

//----------------------------Cipher Constants-------------------------------//

export const DAILY_REWARD_LIST = [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000];

//----------------------------TG Constants-------------------------------//

export const SITE_URL = "https://dogekombat.io";
export const TG_CHANNEL = "https://t.me/dogekombatgame_chat";
export const YOUTUBE_CHANNEL = "https://www.youtube.com/channel/sdfsdf_a";
export const X_CHANNEL_LINK = "https://x.com/DogeKombatGame";
export const INSTAGRAM_CHANNEL_LINK = "https://instagram.com/dogekombat";

//----------------------------Task Constants-------------------------------//

export const DAILY_TASK_NAME = 'daily-task';
export const TG_CHANNEL_TASK_NAME = 'tg-channel';
export const INVITE_TASK_NAME = 'invite-task';
export const EXCHANGE_TASK_NAME = 'exchange-task';
export const X_CHANNEL_TASK_NAME = 'x-channel';
export const AIRDROP_TASK_NAME = 'airdrop-task';

//----------------------------Wallet Constants-------------------------------//

export const MAINNET_RPC_ENDPOINT = 'https://rpc.shyft.to?api_key=PxS3KZVzhndyCMWb';

//----------------------------Skins Constants-------------------------------//

export const SKINS = ['Aardvark', 'Bot', 'Candie', 'Choc', 'Coffee', 'Coney', 'Diablo', 'Dianne', 'Flaymee', 'Fuzzie', 'Gary', 'Gator', 'Gay', 'Goldie', 'Karen', 'Lollie', 'Pimplez', 'Pupil Angelo', 'Snot', 'Stoney', 'Zeebz'];

export const SKIN_DATA = {
    Aardvark: {
        url: "/images/skins/skin1.png",
        description: "Your league's default skin",
        points: 0,
        level: 0
    },
    Bot: {
        url: "/images/skins/skin2.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Candie: {
        url: "/images/skins/skin3.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Choc: {
        url: "/images/skins/skin4.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Coffee: {
        url: "/images/skins/skin5.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Coney: {
        url: "/images/skins/skin6.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Diablo: {
        url: "/images/skins/skin7.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Dianne: {
        url: "/images/skins/skin8.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Flaymee: {
        url: "/images/skins/skin9.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Fuzzie: {
        url: "/images/skins/skin10.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Gary: {
        url: "/images/skins/skin11.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Gator: {
        url: "/images/skins/skin12.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Gay: {
        url: "/images/skins/skin13.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Goldie: {
        url: "/images/skins/skin14.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Karen: {
        url: "/images/skins/skin15.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Lollie: {
        url: "/images/skins/skin16.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Pimplez: {
        url: "/images/skins/skin17.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Pupil_Angelo: {
        url: "/images/skins/skin18.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Snot: {
        url: "/images/skins/skin19.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Stoney: {
        url: "/images/skins/skin20.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
    Zeebz: {
        url: "/images/skins/skin21.png",
        description: "Trainee is the kind=hearted Doge who loves helping oher and always has a warm smile for everyone",
        points: 100,
        level: 0
    },
}

//----------------------------multitap Constants-------------------------------//

export const MULTI_TAPS = {
    1: {
        point: 500,
        increase: 1
    },
    2: {
        point: 2000,
        increase: 1
    },
    3: {
        point: 10000,
        increase: 2
    },
    4: {
        point: 50000,
        increase: 3
    },
    5: {
        point: 5000000,
        increase: 4
    },
}

//----------------------------Energy Limit Level Constants-------------------------------//

export const ENERGY_LIMITS = {
    1: {
        point: 2000,
        increase: 500
    },
    2: {
        point: 10000,
        increase: 1000
    },
    3: {
        point: 50000,
        increase: 1500
    },
    4: {
        point: 100000,
        increase: 2000
    },
    5: {
        point: 500000,
        increase: 2500
    },
}

//----------------------------Turbo Constants-------------------------------//

export const TURBO_INTERVAL = 600000