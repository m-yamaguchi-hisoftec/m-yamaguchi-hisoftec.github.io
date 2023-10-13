if ("serviceWorker" in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register("/sw.js").then((reg) => {
            console.log("Service worker registered.", reg);
        });
    });
}
  
// プッシュ通知の設定
window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
    OneSignal.init({
        appId: "21e490aa-9fa9-4431-8ad9-de9f1f5863a3",
    });
});