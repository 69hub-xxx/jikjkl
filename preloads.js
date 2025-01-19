(function() {
    var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.Bvnj2aN0.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.DRUF6ZWh.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods.BMX-XPcP.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.f88GgmXS.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal.BioTmSRJ.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/AmazonPayPCIButton.KEaYNXIE.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayCaptcha.DG1TOs1b.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/CheckoutAsGuest.BOpe8iUn.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useRefEffect.FWtQWIHW.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo.BvsyAgpR.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks.CVvtVsbA.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField.UQWf2ACC.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin.BnnPYUpv.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup._c8p5lSE.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShopPayRequiresVerification.D7H5X50C.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section.BOZxkNBk.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/GooglePayPCIButton.DXlrezOB.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.ComOpKBJ.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture.BNpu-pfE.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useInstallmentsErrorHandler.Bz1qcDfD.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.-5UeflV-.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions.D6aUWQZ-.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown.BXzgCW_l.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact.CAN9Rua5.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList.C59WYH2b.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGetBuyWithPrimeCheckoutSessionId.CE7lOUFR.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.GGtH_uzV.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.BtDbFeTa.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/LegacyVaultedShippingMethods.Bp61D3vS.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DcFEH8PJ.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayCaptcha.CUoq2pCx.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/CheckoutAsGuest.C0wRU6wV.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayLogo.D_HPU8Dh.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/LocalizationExtensionField.BO3829nT.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Rollup.mj3hAev9.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/Section.BzDw6wmZ.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/PayButtonSection.DF7trkKf.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/RageClickCapture.DnkQ4tsk.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DutyOptions.Bd1Z60K2.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/SubscriptionPriceBreakdown.Bqs0s4oM.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useAmazonContact.D-Ox6Dnf.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StockProblemsLineItemList.CxdIQKjw.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useGetBuyWithPrimeCheckoutSessionId.DVQdwG9J.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0558/1134/2530/files/Coolberg_logo_x320.gif?v=1626620320"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();