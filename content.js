
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/coronavirus/g, 'puppies').replace(/Coronavirus/g, 'Puppies').replace(/COVID/gi, 'a CAT').replace(/virus|infection/gi, 'kitten').replace(/lockdown/gi, 'hibernation').replace(/isolation/gi,'relaxing alone time').replace(/pandemic/gi, 'flowers').replace(/quarantine/gi, 'chilling');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
