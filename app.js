// ARRAYS
var adjective = ["decentralized", "performant", "synergistic",  "fast", "blockchain-derived", "global", "globalized", "optimzed", "growth optimized", "holistic", "carbon-neutral", "cross-platform", "user-optimized", "discrete", "unconstrained"]
var verb = ["craft", 'create', "build", "generate", "inspire", "forge", "leverage", "increase"];
var noun = ["brands", "businesses", "NGOs", "web applications", "entrepeneurs", "digital-first businesses", "complex infrastructures"]
var solutions = ["solutions", "innovations", "disruptions", "growth strategies", "impacts", "actions", "connections", "competencies", "results"]
var speciality = ["decentrilized scripting", "peer-to-peer video streaming", "big data", "content", "growth hacking", "SAAS", "block-chain food delivery", "AI-created content", "therapy for AIs", "advertainment", "product development", "brand development", "leads", "app-development", "conversions", "mobile-first development", "hyperautomation", "connected retail", "UI/UX", "user interface design", "IoT", "Internet of Things", "objected-oriented ontologies", "artifical intelligence", "blockchain", "quantum computing", "computer vision", "social impact", "bespoke deals", "uncanny valley", "big data analysis", "chatbots", "cognitive computing", "computational art", "mobile analytics", "graph analysis", "complexity scaling", "systems scaling", "natural language processesing", "data fabric", "automated data wrangling", "augmented reality", "virtual reality", "augmented analytics", "retina display", "high pixel density display", "nano-second performance", "real time graphics", "RTX", "algorythmic analysis", "predictive analytics", "prescriptive scripting", "server-side logic", "server-side secripting", "script fetching", "integrated growth", "funnels", "conversion-oriented optimizations", "user-integrations", "speech-to-text", "enunciated spatial recogization", "3d mapping", "peer-to-peer IP logging", "articulated data logs"]
var service = ["engineers", "marketing specialists", "digital entrepenuers", "forward-thinkers", "creative visionaries", "specialists", "digital-specialists", "movers and shakers", "enthuisasts", "developers", "intergenerational savants", "CTOs", "cryptologists", "cyber-security experts", "experts", "CEOs", "artists", "digital artists", "analysts", "cyber-tech enthusiasts", "team players"]
var CTA = ["Learn what we can do for your today.", "How can we help your business?", "Growth is our motto.", "We grow faster, better and stronger.", "Ready to take action?", "See what we can do for you.", "What <em>don't</em> we do?", "Growth starts now.", "Inspiring solutions and innovations is our bread and butter.", "Organized, efficient and holistic: our logistics inspire growth.", "We support enterprises."]

// FA ICON ARRAY
var icon = ["fa-user-circle-o", "fa-battery-full", "fa-file-archive-o", "fa-edit", "fa-envelope", "fa-exclamation-circle", "fa-file-audio-o", "fa-diamond", "fa-cubes", "fa-home", "fa-hourglass-start", "fa-info", "fa-industry", "fa-heart-o","fa-heartbeat","fa-history","fa-home","fa-hotel","fa-hourglass","fa-hourglass-1","fa-hourglass-2","fa-hourglass-3","fa-hourglass-end","fa-hourglass-half","fa-hourglass-o","fa-hourglass-start","fa-i-cursor","fa-id-badge","fa-id-card","fa-id-card-o","fa-image","fa-inbox","fa-industry","fa-info","fa-info-circle","fa-institution","fa-key","fa-keyboard-o","fa-language","fa-laptop","fa-leaf","fa-legal","fa-lemon-o","fa-level-down","fa-level-up","fa-life-bouy","fa-life-buoy","fa-life-ring","fa-life-saver","fa-lightbulb-o","fa-line-chart","fa-location-arrow","fa-lock","fa-low-vision","fa-magic","fa-magnet","fa-mail-forward","fa-mail-reply","fa-mail-reply-all","fa-male","fa-map","fa-map-marker","fa-map-o","fa-map-pin","fa-map-signs","fa-meh-o","fa-microchip","fa-microphone","fa-microphone-slash","fa-minus","fa-minus-circle","fa-minus-square","fa-minus-square-o","fa-mobile","fa-mobile-phone","fa-money","fa-moon-o","fa-mortar-board","fa-motorcycle","fa-mouse-pointer","fa-music","fa-navicon","fa-newspaper-o","fa-object-group","fa-object-ungroup","fa-paint-brush","fa-paper-plane","fa-paper-plane-o","fa-paw","fa-pencil","fa-pencil-square","fa-pencil-square-o","fa-percent","fa-phone","fa-phone-square","fa-photo","fa-picture-o","fa-pie-chart","fa-plane","fa-plug","fa-plus","fa-plus-circle","fa-plus-square","fa-plus-square-o","fa-podcast","fa-power-f","fa-print","fa-puzzle-piece","fa-qrcode","fa-question","fa-question-circle","fa-question-circle-o","fa-quote-left","fa-quote-right","fa-random","fa-recycle","fa-refresh","fa-registered","fa-remove","fa-reorder","fa-reply","fa-reply-all","fa-retweet","fa-road","fa-rocket","fa-rss","fa-rss-square","fa-s15","fa-search","fa-search-minus","fa-search-plus","fa-send","fa-send-o","fa-server","fa-share","fa-share-alt","fa-share-alt-square","fa-share-square","fa-share-square-o","fa-shield","fa-ship","fa-shopping-bag","fa-shopping-basket","fa-shopping-cart","fa-shower","fa-sign-in","fa-sign-language","fa-sign-out","fa-signal","fa-signing","fa-sitemap","fa-sliders","fa-smile-o","fa-snowflake-o","fa-soccer-ball-o","fa-sort","fa-sort-alpha-asc","fa-sort-alpha-desc","fa-sort-amount-asc","fa-sort-amount-desc","fa-sort-asc","fa-sort-desc","fa-sort-down","fa-sort-numeric-asc","fa-sort-numeric-desc","fa-sort-up","fa-space-shuttle","fa-spinner","fa-spoon","fa-square","fa-square-o","fa-star","fa-star-half","fa-star-half-empty","fa-star-half-full","fa-star-half-o","fa-star-o","fa-sticky-note","fa-sticky-note-o","fa-street-view","fa-suitcase","fa-sun-o","fa-support","fa-tablet","fa-tachometer","fa-tag","fa-tags","fa-tasks","fa-taxi","fa-television","fa-terminal","fa-thermometer"];
var story = ["story", "vision", "goal", "mission statement", "guiding principle"]


// RANDOM NUMBER FUNCTION
function randNumber(num) {
  return Math.floor((Math.random() * num))
}

// GET WORD FROM ARRAY
function generateWord(array) {
  // GET ARRAY LENGTH
  var arrayLength = array.length
  // GENERATE INDEX NUMBER TO ACCESS ARRAY
  var indexNum = randNumber(arrayLength);
  return array[indexNum];
};

// GENERATE BRAND NAME
function brandName() {
  var brandString = generateWord(solutions);
  var brand = brandString.replace(/a/gi, "x");
  var brand = brand.replace(/u/gi, "v");
  $(navBrand).html(brand);
}

// GENERATE THE WHOLE PAGE
function generateDOM() {

  changeColor();
  $("h1").addClass(".svg-animate");
  brandName();
  let oneInFour = randNumber(4);
  // landingTitle
  if (oneInFour == 1) {
    $(landingTitle).html("Turning <span class=\"highlight\">" + generateWord(solutions) + "</span> into " + generateWord(solutions) + ".");
  } else if (oneInFour == 2) {
    $(landingTitle).html("We are " + generateWord(service) + " who " + generateWord(verb) + " <span class=\"highlight\">" + generateWord(adjective) + "</span> " + generateWord(noun) + ".");
  } else if (oneInFour == 3) {
    $(landingTitle).html("We help " + generateWord(noun) + " <span class=\"highlight\">" + generateWord(verb) + "</span> new leads.");
  } else {
    $(landingTitle).html("Our " + generateWord(solutions) + " " + generateWord(verb) + " <span class=\"highlight\">" + generateWord(solutions) + "</span> for " + generateWord(noun));
  }
  // landingSubtitle
  $(landingSubtitle).html(generateWord(CTA));

  // SERVICE SECTION
  $(serviceSectionTitle).html("Our " + generateWord(solutions));
  $(serviceSectionSubtitle).html("You know about " + generateWord(noun) + ". We know about " + generateWord(noun) + ".");
  // Individual Services Title
  $(".serviceTitle").each(function() {
    for (i = 0; i < 3; i++) {
      var uncapitalized = generateWord(speciality);
      var capitalized = uncapitalized.substr(0,1).toUpperCase()+uncapitalized.substr(1);
      var randNum4 = randNumber(4);
      if (randNum4 == 0) {
        $(this).html(capitalized + '<p style="font-size: 1rem">The introduction of '+uncapitalized+' has allowed our '+generateWord(noun)+' to exceed expectations.</p>')
      } else if (randNum4 == 1) {
        $(this).html(capitalized + '<p style="font-size: 1rem">Our work with '+uncapitalized+' has been pivotal for our '+generateWord(noun)+'.</p>')
      } else if (randNum4 == 2) {
        $(this).html(capitalized + '<p style="font-size: 1rem">Our leading '+ generateWord(speciality) + ' ' + generateWord(service) + ' attest to the continued growth of ' +uncapitalized+'.</p>')
      } else {
        $(this).html(capitalized + '<p style="font-size: 1rem">'+capitalized+' has been of crucial importance to our '+generateWord(noun)+'.</p>')
      }
    }
  });
  // Service Icons Font Awesome
  $(icon).each(function() {
    for (i = 0; i < icon.length; i++) {
      icon[i];
    }
  })
  $(".fa").each(function() {
    for (i = 0; i < 3; i++) {
      $(this).removeClass(icon);
      $(this).addClass(generateWord(icon))
    }
  });

  // ABOUT US SECTION
  $(aboutTitle).html("Our " + generateWord(story));
  $(aboutSubtitle).html("We persuade " + generateWord(noun) + " to engage with " + generateWord(noun) + ".")
  $(aboutParagraph).html("We believe in " + generateWord(noun)+ ". That's why it is part of our " + generateWord(story) + " to " + generateWord(verb) + " the power of " + generateWord(noun) + ".")
}

var colorArray = ["#F9A826", "#00BFA6", "#2e73ce", "#9f63ff", "#F50057", "#3587A4", "#C1DFF0", "#ABC4AB", "#F28F3B", "#00CC99", "#FCA17D", "#DA627D", "#FCA17D", "#A7ADC6", "#9067C6", "#43bf51", "#FFBE86", "#FFB5C2", "#D8973C", "#BD632F", "#EA638C", "#558B6E", "#88A09E", "#6BBAEC", "#94B9AF", "#F17300"]
function changeColor(){
  var number = Math.floor((Math.random() * colorArray.length));
  var color = colorArray[number];
  var secondaryColor = colorArray[number];
  $("body").get(0).style.setProperty("--accent-color", color);
  $(".accent-path").attr("fill", color);
  $(".lines").attr("stroke", color);
  $("body").get(0).style.setProperty("--accent-color2", secondaryColor + "33");
  // $("body").get(0).style.setProperty("--light-color", secondaryColor + "11");
  $(".cls-2").attr("fill", secondaryColor + "11");


  // var gradient = "linear-gradient(0deg, " + color + "cc 0%, " + color + "20 100%)";
  // $("body").get(0).style.setProperty("--gradient", gradient);
  // console.log(gradient);
}


// ON LOAD GENERATE
$(document).ready(generateDOM());
// ON ENTER RETURN
$(document).keypress(function(e) {
  var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
      generateDOM();
    }
})

// "started using HTML before I learned to read"







// DARK MODE

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        // $("body").get(0).style.setProperty("--bg-color", "#00000");
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// ANIMATED HAMBURGER MENU
$(document).ready(function () {
  $('.hamburger-bun').on('click', function () {
    $('.hamburger-menu').toggleClass('open');
  });
});

window.addEventListener('scroll', function(e) {
  const target = document.querySelector(".slide");

  var scrolled = window.pageYOffset;
  var rateMultiplier = target.getAttribute('data-slide-speed');
  var rate = 0 - (scrolled * rateMultiplier);
  var rateMove = rate * 3;
  var opacityRate = 1.0 - (scrolled * 0.000749);

  console.log("Rate: " + rate)
  
  target.style.transform = "rotate(" + rate + "deg) translateX(" + rateMove + "px)";
  target.style.opacity = opacityRate;
  console.log(opacityRate)
})


// BUTTON HOVER

$(function() {  
  $('.btn-6')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
  $('[href=#]').click(function(){return false});
});

// Count Function

function testScroll(ev){
  if(window.pageYOffset==1400)
  
  
  $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
}
window.onscroll=testScroll