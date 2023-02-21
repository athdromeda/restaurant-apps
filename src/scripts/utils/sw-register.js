const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker registeredd succesfully!');
  } catch (err) {
    console.log('Failed to register service worker', err);
  }
};

export default swRegister;
