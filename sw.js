self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Просто пустой обработчик, чтобы Chrome был доволен
});
