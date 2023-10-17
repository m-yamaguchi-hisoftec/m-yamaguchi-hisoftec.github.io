window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(async function(OneSignal) {
    OneSignal.init({
        appId: "21e490aa-9fa9-4431-8ad9-de9f1f5863a3",
        notifyButton: {
            enable: true,
        },
    });

    function permissionChangeListener(permission) {
        var flagShowWhenPermision = (permission) ? "block" : "none";
        var flagHideWhenPermision = (permission) ? "none" : "block";
        var divTutorial = document.getElementById("confirm-notification-tutorial");
        var divJumpToPg = document.getElementById("jump-to-page");
        divTutorial.style.display = flagHideWhenPermision;
        divJumpToPg.style.display = flagShowWhenPermision;
        console.log("permissionChangeListener: permission=" + permission + " / flag1=" + flagShowWhenPermision + " / flag2=" + flagHideWhenPermision);
    }

    OneSignal.Notifications.addEventListener("permissionChange", permissionChangeListener);
    permissionChangeListener(await OneSignal.Notifications.permission);
});

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('OneSignalSDKWorker.js')
                .then(function() { console.log("Service Worker Registered"); })
                .catch(function() { console.log("Service Worker Not Registered"); });
    });
}
