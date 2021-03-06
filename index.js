var adjs = [
  "autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark",
  "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter",
  "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue",
  "billowing", "broken", "cold", "damp", "falling", "frosty", "green",
  "long", "late", "lingering", "bold", "little", "morning", "muddy", "old",
  "red", "rough", "still", "small", "sparkling", "throbbing", "shy",
  "wandering", "withered", "wild", "black", "young", "holy", "solitary",
  "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine",
  "polished", "ancient", "purple", "lively", "nameless", "lucky", "odd", "tiny",
  "free", "dry", "yellow", "orange", "gentle", "tight", "super", "royal", "broad",
  "steep", "flat", "square", "round", "mute", "noisy", "hushy", "raspy", "soft",
  "shrill", "rapid", "sweet", "curly", "calm", "jolly", "fancy", "plain", "shinny"
];
var nouns = [
  "waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning",
  "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter",
  "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook",
  "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly",
  "feather", "grass", "haze", "mountain", "night", "pond", "darkness",
  "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder",
  "violet", "water", "wildflower", "wave", "water", "resonance", "sun",
  "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper",
  "frog", "smoke", "star", "atom", "band", "bar", "base", "block", "boat",
  "term", "credit", "art", "fashion", "truth", "disk", "math", "unit", "cell",
  "scene", "heart", "recipe", "union", "limit", "bread", "toast", "bonus",
  "lab", "mud", "mode", "poetry", "tooth", "hall", "king", "queen", "lion", "tiger",
  "penguin", "kiwi", "cake", "mouse", "rice", "coke", "hola", "salad", "hat"
];

function extend(obj) {
  Array.prototype.slice.call(arguments, 1).forEach(function (source) {
    var prop;
    if (source) {
      for (prop in source) {
        if (source[prop].constructor === Object) {
          if (!obj[prop] || obj[prop].constructor === Object) {
            obj[prop] = obj[prop] || {};
            extend(obj[prop], source[prop]);
          } else {
            obj[prop] = source[prop];
          }
        } else {
          obj[prop] = source[prop];
        }
      }
    }
  });
  return obj;
}

var haikunator = function (opt) {
  var i, adj, noun, sections, defaults, token = "";

  defaults = {
    delimiter: "-",
    tokenLength: 4,
    tokenHex: false,
    tokenChars: "0123456789"
  };

  opt = extend(defaults, opt);

  if (opt.tokenHex === true) {
    opt.tokenChars = "0123456789abcdef";
  }

  adj = adjs[Math.floor(Math.random() * adjs.length)];
  noun = nouns[Math.floor(Math.random() * nouns.length)];

  for (i = 0; i < opt.tokenLength; i++) {
    token += opt.tokenChars.charAt(Math.floor(Math.random() * opt.tokenChars.length));
  }

  sections = [adj, noun, token];
  return sections.filter(function (e) { return e === 0 || e; }).join(opt.delimiter);
};

module.exports = haikunator;