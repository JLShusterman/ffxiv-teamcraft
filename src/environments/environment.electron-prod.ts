import {version} from './version';

export const environment = {
    production: true,
    version: version,
    electron: true,
    firebase: {
        apiKey: 'AIzaSyDZPSJj-nXHLIATOz3IBESUTFk8zvFaUc0',
        authDomain: 'ffxivteamcraft.firebaseapp.com',
        databaseURL: 'https://ffxivteamcraft.firebaseio.com',
        projectId: 'ffxivteamcraft',
        storageBucket: 'ffxivteamcraft.appspot.com',
        messagingSenderId: '1082504004791'
    }
};
