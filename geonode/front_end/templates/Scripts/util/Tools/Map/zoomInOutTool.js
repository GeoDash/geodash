mapModule.factory('ZoomInOutTool', [
    function() {
        return function ZoomToLayerTool(olView) {
            this.zoomIn = function() {
                olView.setZoom(olView.getZoom() + 1);
            };
            this.zoomOut = function() {
                olView.setZoom(olView.getZoom() - 1);
            };
        };
    }
]);