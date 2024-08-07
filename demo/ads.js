// Copyright 2013 Google Inc. All Rights Reserved.
// You may study, modify, and use this example for any purpose.
// Note that this example is provided "as is", WITHOUT WARRANTY
// of any kind either expressed or implied.

let adsManager;
let adsLoader;
let adDisplayContainer;
let intervalTimer;
let isAdPlaying;
let isContentFinished;
let playButton;
let videoContent;

/**
 * Initializes IMA setup.
 */
// function init() {
//   console.log('Ad fn init');
//   videoContent = document.getElementById('contentElement');
//   playButton = document.getElementById('playButton');
//   playButton.addEventListener('click', playAds);
//   setUpIMA();
// }

function init() {
  console.log('defalut Ad fn init');
  videoContent = document.getElementById('contentElement');
  playButton = document.getElementById('playButton');
  playButton.addEventListener('click', re_play);
  
}

function re_play() {
  console.log('fn re_play');
  // console.log('fn re_play :adsManager',adsManager);
  // console.log('fn re_play :adsLoader',adsLoader);
  // console.log('fn re_play :adDisplayContainer',adDisplayContainer);
  // console.log('fn re_play :intervalTimer',intervalTimer);
  // console.log('fn re_play :isAdPlaying',isAdPlaying);
  // console.log('fn re_play :isContentFinished',isContentFinished);
  // console.log('fn re_play :playButton',playButton);
  // console.log('fn re_play :videoContent',videoContent);


  adsManager?.destroy();
  adsLoader?.destroy();
  adDisplayContainer?.destroy();

  setUpIMA();
}

/**
 * Sets up IMA ad display container, ads loader, and makes an ad request.
 */
function setUpIMA() {
  console.log('Ad fn setUpIMA');
  // Create the ad display container.
  createAdDisplayContainer();
  // Create ads loader.
  adsLoader = new google.ima.AdsLoader(adDisplayContainer);
  // Listen and respond to ads loaded and error events.
  adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      on_adloader_loaded, false);
  adsLoader.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR, on_adloader_error, false);

  // An event listener to tell the SDK that our content video
  // is completed so the SDK can play any post-roll ads.
  const contentEndedListener = function() {
    // An ad might have been playing in the content element, in which case the
    // content has not actually ended.
    if (isAdPlaying) return;
    isContentFinished = true;
    adsLoader.contentComplete();
  };
  videoContent.onended = contentEndedListener;

  // Request video ads.
  const adsRequest = new google.ima.AdsRequest();
  //  adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/23001303080/sequone.com/sequone.com-reward-072302&description_url=http%3A%2F%2Fsequone.com&tfcd=0&npa=0&sz=300x250%7C400x300%7C640x480&gdfp_req=1&unviewed_position_start=1&output=vast&env=vp&impl=s&correlator=';
  // adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/23001303080/sequone.com/sequone.com-reward-072301&description_url=http%3A%2F%2Fsequone.com&tfcd=0&npa=0&sz=300x250%7C400x300%7C640x480&gdfp_req=1&unviewed_position_start=1&output=vast&env=vp&impl=s&correlator=';
   
    adsRequest.adTagUrl = 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar=premidpostpod&deployment=gmf-js&cmsid=496&vid=short_onecue&correlator=';
 
  // Specify the linear and nonlinear slot sizes. This helps the SDK to
  // select the correct creative if multiple are returned.
  adsRequest.linearAdSlotWidth = 640;
  adsRequest.linearAdSlotHeight = 400;

  adsRequest.nonLinearAdSlotWidth = 640;
  adsRequest.nonLinearAdSlotHeight = 150;

  adsLoader.requestAds(adsRequest);
  // console.log("adsLoader>>>>",adsLoader);
}

/**
 * Sets the 'adContainer' div as the IMA ad display container.
 */
function createAdDisplayContainer() {
  console.log('创建 adDisplayContainer');
  // We assume the adContainer is the DOM id of the element that will house
  // the ads.
  adDisplayContainer = new google.ima.AdDisplayContainer(
      document.getElementById('adContainer'), videoContent);
}

/**
 * Loads the video content and initializes IMA ad playback.
 */
function playAds() {
  // console.log('播放广告');
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
    console.log('播放广告 1');
  } catch (adError) {
    console.log('播放广告 2 err:',adError);
    // An error may be thrown if there was a problem with the VAST response.
    videoContent.play();
  }
}

/**
 * Handles ad errors.
 * @param {!google.ima.AdErrorEvent} adErrorEvent
 */
function on_adloader_error(adErrorEvent) {
  console.log('加载url 错误',adErrorEvent);
  // Handle the error logging.
  // console.log(adErrorEvent.getError());
  adsManager?.destroy();
}

/**
 * Handles ad errors.
 * @param {!google.ima.AdErrorEvent} adErrorEvent
 */
function on_ad_Error(adErrorEvent) {
  console.log("fn on_ad_Error  ", adErrorEvent);
  // Handle the error logging.
  adsManager.destroy();
}


/**
 * Handles the ad manager loading and sets ad event listeners.
 * @param {!google.ima.AdsManagerLoadedEvent} adsManagerLoadedEvent
 */
function on_adloader_loaded(adsManagerLoadedEvent) {
  console.log(' 加载url 数据完成');
  // Get the ads manager.
  const adsRenderingSettings = new google.ima.AdsRenderingSettings();
  adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
  // videoContent should be set to the content video element.
  adsManager = adsManagerLoadedEvent.getAdsManager(videoContent, adsRenderingSettings);

  // Add listeners to the required events.
  adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, on_ad_Error);
  adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, on_ad_Pause);
  adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,on_ad_Resume);

  adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, on_ad_event_all_complete);
  // Listen to any additional events, if necessary.
  adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, on_ad_event_loaded);
  adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, on_ad_event_started);
  adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, on_ad_event_complete);

  playAds();
}

function on_ad_event_loaded(adEvent) {
  console.log('on_ad_event_loaded: loaded');
}
function on_ad_event_started(adEvent) {
  console.log('on_ad_event_started: started');
  const ad = adEvent.getAd();

  if (ad.isLinear()) {
    console.log("fn onAdEvent >> isLinear ");
    // For a linear ad, a timer can be started to poll for
    // the remaining time.
    intervalTimer = setInterval(
      function () {
        // Example: const remainingTime = adsManager.getRemainingTime();
        remainingTime = adsManager.getRemainingTime();
        console.log("remainingTime>>>>>>>>",remainingTime);
      },
      300);  // every 300ms
  }
}

function on_ad_event_complete(adEvent) {
  const ad = adEvent.getAd();
  console.log('on_ad_event_complete: completed');
  if (ad.isLinear()) {
    clearInterval(intervalTimer);
  }
}

function on_ad_event_all_complete(adEvent) {
  console.log('on_ad_event_all_complete: all completed');
}

/**
 * Handles actions taken in response to ad events.
 * @param {!google.ima.AdEvent} adEvent
 */
function on_ad_event(adEvent) {
  console.log('广告播放的事件 ',adEvent.type);
  // Retrieve the ad from the event. Some events (for example,
  // ALL_ADS_COMPLETED) don't have ad object associated.
  const ad = adEvent.getAd();
  switch (adEvent.type) {
    case google.ima.AdEvent.Type.LOADED:
        console.log('Ad event: loaded');
      // This is the first event sent for an ad - it is possible to
      // determine whether the ad is a video ad or an overlay.
      if (!ad.isLinear()) {
        // Position AdDisplayContainer correctly for overlay.
        // Use ad.width and ad.height.
        videoContent.play();
      }
      break;
    case google.ima.AdEvent.Type.STARTED:
      // This event indicates the ad has started - the video player
      // can adjust the UI, for example display a pause button and
      // remaining time.
      if (ad.isLinear()) {
        // For a linear ad, a timer can be started to poll for
        // the remaining time.
        intervalTimer = setInterval(
            function() {
              // Example: const remainingTime = adsManager.getRemainingTime();
            },
            300);  // every 300ms
         
      }
      console.log('Ad event: start 视频广告正常开始');
      break;
    case google.ima.AdEvent.Type.COMPLETE:
      // This event indicates the ad has finished - the video player
      // can perform appropriate UI actions, such as removing the timer for
      // remaining time detection.
      if (ad.isLinear()) {
        clearInterval(intervalTimer);
      }
      console.log('Ad event: complete');
      break;
  }
}


/**
 * Pauses video content and sets up ad UI.
 */
function on_ad_Pause() {
  console.log('Ad fn on_ad_Pause 暂停');
  isAdPlaying = true;
  videoContent.pause();
  // This function is where you should setup UI for showing ads (for example,
  // display ad timer countdown, disable seeking and more.)
  // setupUIForAds();
}

/**
 * Resumes video content and removes ad UI.
 */
function on_ad_Resume() {
  console.log('Ad fn on_ad_Resume 恢复');
  isAdPlaying = false;
  if (!isContentFinished) {
    videoContent.play();
  }
  // This function is where you should ensure that your UI is ready
  // to play content. It is the responsibility of the Publisher to
  // implement this function when necessary.
  // setupUIForContent();
}

// Wire UI element references and UI event listeners.
init();
