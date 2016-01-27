"use strict";
(function() {
    function addButton() {
        var el = document.getElementById("app");
        var button = document.createElement("button");
        button.textContent = "create button";
        el.appendChild(button);
        button.onclick = function() {
            var table = document.createElement("table");
            for (var j = 0; j < 10; j++) {
                var tr = document.createElement("tr");
                for (var i = 0; i < 10; i++) {
                    var td = document.createElement("td");
                    td.style.border = "1px solid black";
                    td.textContent = "1";
                    tr.appendChild(td);
                    table.appendChild(tr);
                    el.appendChild(table);
                }
            }
            var buttonLeft = document.createElement("button");
            buttonLeft.textContent = "Move Left";
            var buttonRight = document.createElement("button");
            buttonRight.textContent = "Move Right";
            el.appendChild(buttonLeft);
            el.appendChild(buttonRight);
            buttonRight.onclick = function() {
                table.style.marginLeft = "100px";
            };
            buttonLeft.onclick = function() {
                table.style.marginLeft = "0px";
            };
        };
    }
    addButton();
})();