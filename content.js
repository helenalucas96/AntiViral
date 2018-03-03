
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/valentine/g, 'doom').replace(/Valentine/g, 'Doom').replace(/love/gi, 'hate').replace(/present|gift/gi, 'crappy item').replace(/friend|partner/g, 'antagonist').replace(/Friend/g, 'Antagonist').replace(/romantic|lovely|cute/gi, 'disgusting').replace(/card/gi, 'insincere piece of writing').replace(/\brose/gi, 'smelly onion').replace(/flower/gi, 'unwanted shrub').replace(/\bheart/gi, 'empty crust of a previously vibrant heart').replace(/chocolate/gi, 'dirt mousse').replace(/dating/gi, 'unwanted socialising').replace(/candle/gi, 'fire-hazard').replace(/couple/g, 'emotionally codependent twosome').replace(/Couple/g, 'Emotionally codependent twosome').replace(/relationship/gi, 'crippling emotional codependency').replace(/single/gi, 'single (YASS!)').replace(/romance/gi, 'bullshit');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

