// 這個 service worker 不快取任何檔案（每次都拿最新版的單字與程式），只是讓網站可以「加入主畫面」當 App 使用
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
