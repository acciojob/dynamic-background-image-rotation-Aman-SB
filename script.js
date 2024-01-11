//your JS code here. If required.
function setBackgroundImage() {
    const portraitImageURL = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';
    const landscapeImageURL = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg';
    const body = document.body;

    if (window.innerWidth > window.innerHeight) {
      // Landscape mode
      body.style.backgroundImage = `url('${landscapeImageURL}')`;
    } else {
      // Portrait mode
      body.style.backgroundImage = `url('${portraitImageURL}')`;
    }
  }

  // Initial call to set the background image based on the initial screen size
  setBackgroundImage();

  // Add event listener for orientation change
  window.addEventListener('orientationchange', () => {
    // Reset the background image on orientation change
    setBackgroundImage();
  });