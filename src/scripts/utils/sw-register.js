import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported');
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
    // await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker registeredd succesfully!');
  } catch (err) {
    console.log('Failed to register service worker', err);
  }
};

export default swRegister;
