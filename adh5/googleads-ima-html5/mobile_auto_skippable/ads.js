// Copyright 2013 Google Inc. All Rights Reserved.
// You may study, modify, and use this example for any purpose.
// Note that this example is provided "as is", WITHOUT WARRANTY
// of any kind either expressed or implied.

let adsManager;
let adsLoader;
let adDisplayContainer;
let intervalTimer;
let videoContent;

/**
 * Initializes IMA setup.
 */
function init() {
  console.log("init ");
  videoContent = document.getElementById('contentElement');
  setUpIMA();
}

/**
 * Sets up IMA ad display container, ads loader, and makes an ad request.
 */
function setUpIMA() {
  console.log("setUpIMA start");
  google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
  // Create the ad display container.
  createAdDisplayContainer();
  // Create ads loader.
  adsLoader = new google.ima.AdsLoader(adDisplayContainer);
  // Listen and respond to ads loaded and error events.
  adsLoader.addEventListener(
    google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
    onAdsManagerLoaded, false);
  adsLoader.addEventListener(
    google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);

  // An event listener to tell the SDK that our content video
  // is completed so the SDK can play any post-roll ads.
  const contentEndedListener = function () {
    adsLoader.contentComplete();
  };
  videoContent.onended = contentEndedListener;

  // Request video ads.
  const adsRequest = new google.ima.AdsRequest();
  // adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?' +
  //     'iu=/21775744923/external/single_preroll_skippable&sz=640x480&' +
  //     'ciu_szs=300x250%2C728x90&gdfp_req=1&' +
  //     'output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';

  adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/23001303080/sequone.com/sequone.com-reward-072301&description_url=http%3A%2F%2Fsequone.com&tfcd=0&npa=0&sz=300x250%7C400x300%7C640x480&gdfp_req=1&unviewed_position_start=1&output=vast&env=vp&impl=s&correlator=';

  // Specify the linear and nonlinear slot sizes. This helps the SDK to
  // select the correct creative if multiple are returned.
  adsRequest.linearAdSlotWidth = 640;
  adsRequest.linearAdSlotHeight = 400;

  adsRequest.nonLinearAdSlotWidth = 640;
  adsRequest.nonLinearAdSlotHeight = 150;

  adsLoader.requestAds(adsRequest);

  console.log("setUpIMA end");
}

/**
 * Sets the 'adContainer' div as the IMA ad display container.
 */
function createAdDisplayContainer() {
  console.log("fn createAdDisplayContainer  ");
  // We assume the adContainer is the DOM id of the element that will house
  // the ads.
  adDisplayContainer = new google.ima.AdDisplayContainer(
    document.getElementById('adContainer'), videoContent);
}

/**
 * Loads the video content and initializes IMA ad playback.
 */
function playAds() {
  console.log("fn playAds  ");
  // Initialize the container. Must be done through a user action on mobile
  // devices.
  videoContent.load();
  adDisplayContainer.initialize();

  try {
    // Initialize the ads manager. Ad rules playlist will start at this time.
    adsManager.init(640, 360, google.ima.ViewMode.NORMAL);
    // Call play to start showing the ad. Single video and overlay ads will
    // start at this time; the call will be ignored for ad rules.
    adsManager.start();
  } catch (adError) {
    // An error may be thrown if there was a problem with the VAST response.
    videoContent.play();
  }
}

/**
 * Handles the ad manager loading and sets ad event listeners.
 * @param {!google.ima.AdsManagerLoadedEvent} adsManagerLoadedEvent
 */
function onAdsManagerLoaded(adsManagerLoadedEvent) {
  console.log("fn onAdsManagerLoaded");
  // Get the ads manager.
  const adsRenderingSettings = new google.ima.AdsRenderingSettings();
  adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
  // videoContent should be set to the content video element.
  adsManager =
    adsManagerLoadedEvent.getAdsManager(videoContent, adsRenderingSettings);

  // Add listeners to the required events.
  adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
  adsManager.addEventListener(
    google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested);
  adsManager.addEventListener(
    google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
    onContentResumeRequested);
  adsManager.addEventListener(
    google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAdEvent);

  // Listen to any additional events, if necessary.
  adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdEvent);
  adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, onAdEvent);
  adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdEvent);

  playAds();
}

/**
 * Handles actions taken in response to ad events.
 * @param {!google.ima.AdEvent} adEvent
 */
function onAdEvent(adEvent) {
  console.log("fn onAdEvent",adEvent.type);
  // Retrieve the ad from the event. Some events (for example,
  // ALL_ADS_COMPLETED) don't have ad object associated.
  const ad = adEvent.getAd();
  switch (adEvent.type) {
    case google.ima.AdEvent.Type.LOADED:
      // This is the first event sent for an ad - it is possible to
      // determine whether the ad is a video ad or an overlay.
      if (!ad.isLinear()) {
        // Position AdDisplayContainer correctly for overlay.
        // Use ad.width and ad.height.
        videoContent.play();
        console.log("fn onAdEvent >> play ");
      }
      break;
    case google.ima.AdEvent.Type.STARTED:
      // This event indicates the ad has started - the video player
      // can adjust the UI, for example display a pause button and
      // remaining time.
      // if (ad.isLinear()) {
        console.log("fn onAdEvent >> isLinear ");
        // For a linear ad, a timer can be started to poll for
        // the remaining time.
        intervalTimer = setInterval(
          function () {
            // Example: const remainingTime = adsManager.getRemainingTime();
            const remainingTime = adsManager.getRemainingTime();
            console.log("remainingTime>>>>>>>>",remainingTime);
          },
          300);  // every 300ms
      // }
      break;
    case google.ima.AdEvent.Type.COMPLETE:
      console.log("fn onAdEvent >> COMPLETE ");
      // This event indicates the ad has finished - the video player
      // can perform appropriate UI actions, such as removing the timer for
      // remaining time detection.
      if (ad.isLinear()) {
        clearInterval(intervalTimer);
      }
      break;
  }
}

/**
 * Handles ad errors.
 * @param {!google.ima.AdErrorEvent} adErrorEvent
 */
function onAdError(adErrorEvent) {
  console.log("fn onAdError  ", adErrorEvent);
  // Handle the error logging.
  console.log(adErrorEvent.getError());
  adsManager.destroy();
}

/**
 * Pauses video content and sets up ad UI.
 */
function onContentPauseRequested() {
  console.log("fn onContentPauseRequested  ");
  videoContent.pause();
  // This function is where you should setup UI for showing ads (for example,
  // display ad timer countdown, disable seeking and more.)
  // setupUIForAds();
}

/**
 * Resumes video content and removes ad UI.
 */
function onContentResumeRequested() {
  console.log("fn onContentResumeRequested  ");
  videoContent.play();
  // This function is where you should ensure that your UI is ready
  // to play content. It is the responsibility of the Publisher to
  // implement this function when necessary.
  // setupUIForContent();
}

// Wire UI element references and UI event listeners.
init();
