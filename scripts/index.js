(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        estimote.startListening('Telerik');
        document.addEventListener('beaconsReceived', this.onBeaconsReceived, false);

    };

    function onBeaconsReceived(result) {
        alert('algo')
        if (result.beacons && result.beacons.length > 0) {
            var msg = "Beacons found: " + result.beacons.length + "<br/>";
            for (var i = 0; i < result.beacons.length; i++) {
                var beacon = result.beacons[i];
                msg += "<br/>";
                if (beacon.color !== undefined) {
                    msg += "Color: " + beacon.color + "<br/>";
                }
                if (beacon.macAddress !== undefined) {
                    msg += "Mac Address: " + beacon.macAddress + "<br/>";
                }
                msg += "Distance: " + beacon.distance + " m<br/>";
                msg += "Major / Minor: " + beacon.major + " / " + beacon.minor + "<br/>";
                msg += "Rssi: " + beacon.rssi + "<br/>";
            }
            document.getElementById('log').innerHTML = msg;
        }
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();