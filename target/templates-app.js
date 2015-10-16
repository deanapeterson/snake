angular.module('templates-app', ['home/home.view.html', 'play/play.view.html', 'snake-game/game-board/game-board.view.html']);

angular.module("home/home.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.view.html",
    "<h1>Home</h1>\n" +
    "\n" +
    "<div snake-game demo-mode>\n" +
    "	Game demo goes here.\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"columns small-4 small-offset-4\">\n" +
    "		<button ng-click='' class='button expand round'>Play</button>\n" +
    "	</div>\n" +
    "	<div class=\"small-4 columns\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("play/play.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("play/play.view.html",
    "<h1>Play</h1>\n" +
    "\n" +
    "<div snake-game>\n" +
    "	Game Goes Here:\n" +
    "</div>");
}]);

angular.module("snake-game/game-board/game-board.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("snake-game/game-board/game-board.view.html",
    "<div class=\"wrapper\" ng-class=\"sbc.state.crashed ? 'crashed' : ''\">\n" +
    "    <div gameboard>\n" +
    "        <barriers></barriers>\n" +
    "        <food></food>\n" +
    "        <render-segment ng-repeat=\"segment in sbc.segments\" ng-class='(segment[2] + \" \" + segment[3])'></render-segment>\n" +
    "    </div>\n" +
    "\n" +
    "    <br>\n" +
    "    <div style=\"margin:auto;text-align:center;\">\n" +
    "        <button ng-click='sbc.start()'>Start</button>\n" +
    "        <button ng-click='sbc.stop()'>Stop</button>\n" +
    "    </div>\n" +
    "    <br>\n" +
    "</div>\n" +
    "");
}]);
