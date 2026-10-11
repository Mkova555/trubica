// Osnovni Service Worker za ispunjavanje PWA standarda
​self.addEventListener('install', (e) => {
console.log('Service Worker: Instaliran');
self.skipWaiting();
});
​self.addEventListener('activate', (e) => {
console.log('Service Worker: Aktiviran');
});
​self.addEventListener('fetch', (e) => {
// PWA standard zahtijeva fetch event listener kako bi preglednik
// prepoznao stranicu kao aplikaciju koja se može instalirati.
// Trenutno samo propuštamo zahtjeve bez keširanja.
});