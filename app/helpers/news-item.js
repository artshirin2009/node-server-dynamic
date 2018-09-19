module.exports = function(items, options) {
    var out = "<ul>";

    for (var i = 0, l = items.length; i < l; i++) {
        out = out + "<li>" + items[i].name + " " + items[i].age + "</li>";
    }

    return out + "</ul>";
}