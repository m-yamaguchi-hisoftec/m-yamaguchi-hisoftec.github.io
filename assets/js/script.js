window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(function(OneSignal) {
    OneSignal.init({
        appId: "21e490aa-9fa9-4431-8ad9-de9f1f5863a3",
        notifyButton: {
            enable: true,
        },
    });
    //デフォルト起動URL
    OneSignal.Notifications.setDefaultUrl("http://www.hisoftec.co.jp/php/index.php");
    
    OneSignal.Notifications.addEventListener("foregroundWillDisplay", (event) => {
        console.log(`notification will display: ${event}`);
    });

});
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('OneSignalSDKWorker.js')
                .then(function() { console.log("Service Worker Registered"); })
                .catch(function() { console.log("Service Worker Not Registered"); });
    });
}