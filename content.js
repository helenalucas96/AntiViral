
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/coronavirus/g, 'Boris Johnson').replace(/Coronavirus/g, 'Boris').replace(/COVID/gi, 'Cummings').replace(/virus|infection/gi, 'Brexit').replace(/lockdown/gi, 'sexytime').replace(/isolation/gi,'alone sexytime').replace(/pandemic/gi, 'game');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
