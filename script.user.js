// ==UserScript==
// @name         RobinNest
// @namespace    simpcraft.com
// @version      1.2.4.2
// @description  a bot
// @author       /u/haykam821
// @match        https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==

function sendMessage(message){
    $("#robinSendMessage > input[type='text']").val(message);
    $("#robinSendMessage > input[type='submit']").click();
}

$('#robinDesktopNotifier').append('<input type="checkbox" name="trivia" value="on">Block Trivia (only blocks questions)<br>');

setInterval(function(){
    if (text-counter-input.value == '') {
        alert("Field is empty");
    }
}, 10000);

setTimeout(function(){
var target = document.querySelector('#robinChatMessageList');
var observer = new MutationObserver(function(mutations) {
   mutations.forEach(function(mutation) {
       var msg = $(mutation.addedNodes[0].lastElementChild).text();
       if(msg.includes(' ͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇')
   ||msg.includes('.͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇͇')
   ||msg.includes('Ỏ̷͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭')
   ||msg.includes('Autovoter')
   ||msg.includes('Robin-Grow')
   ||msg.includes('voted to GROW')
   ||msg.includes('voted to STAY')
   ||msg.includes('voted to ABANDON')
   ||msg.includes('Voting will end soon')
   ||msg.includes(' ༽')
   ||msg.includes('ＴＨＥ ＲＡＢＢＩＴ')
   ||msg.includes('╭∩╮')
   ||msg.includes('I voted automatically')
   ||msg.includes('I automatically voted')
   ||msg.includes('ฏ๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎๎')
   ||msg.includes('ด้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็')
   ||msg.includes('╠═══╣')
   ||msg.includes('༼')
   ||msg.includes('ᕙ༼=ݓ益ݓ=༽ᕗ')
   ||msg.includes('ʖ')
   ||msg.includes('░░▒▒▓▓██')
   ||msg.includes('▂▃▅▆▇█')
   ||msg.includes('ASCEND to Valhalla!')
   ||msg.includes('🅿🅰🆃🅷🅸🅽🅾🅶🅴🅲')
   ||msg.includes('<<<<<<')
   ||msg.includes('>>>>>>')
   ||msg.includes('O-oooooooooo')
   ||msg.includes('sexbots')
   ||msg.includes('NAGARK')
   ||msg.includes('materiamagica')
   ||msg.includes('[STATS]')
   ||msg.includes('CAW')
   ||msg.includes('G R O W T H')
   ||msg.includes('I AM SUPREME RULER OF THIS CHATROOM')
   ||msg.includes('LADDER')
   ||msg.includes('DOOT')
   ||msg.includes('G R O W E T H')
   ||msg.includes('====')
   ||msg.includes('- - - ')
   ||msg.includes('------>')
   ||msg.includes('\u25B2')
   ||msg.includes('~~~~~~')
   ||msg.includes('B I L L . G A T E S . D O N A T E S . 1 . M I L L I O N . T O . C A N C E R . W H E N . Y O U . G R O W ')
   ||msg.includes('J U S T . P R E S S . G R O W')
   ||msg.includes('▶️')
   ||msg.includes( 'S T A Y . N O T . L E S T . Y E . B E . S T A Y E D')
   ||msg.includes(' █████████████')
   ||msg.includes('This spam blocker has blocked')
   ||msg.includes('ʕっ•ᴥ•ʔっ')
   ||msg.includes('+++++')
   ||msg.includes('######')
   ||msg.includes('G R O W . Y O U R . B O A T')
   ||msg.includes('ด้้้้้็็็็็้้้้้็็็็็้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็้้้้้้้้็็็็็้้้้้็็็็็ด้้้้้็็็็็้้้้้็็็็็้้')
   ||msg.includes('nigger')
   ||msg.includes('THE RABBIT')
   ||msg.includes('-DEV')
   ||msg.includes('  ͇͇')
   ||msg.includes(' ͇')
   ||msg.includes('░')
   ||msg.includes('CAMPAIGN TO STAY')
   ||msg.includes('60s pong')
   ||msg.includes('PRAISE ROBIN, THE GREAT MERGE WILL BRING')
   ||msg.includes('🆃🅴🅳 🅲🆁🆄🆉 🅸🆂 🆃🅷🅴 🆉🅾🅳🅸🅰🅲 🅺🅸🅻🅻🅴🆁')
   ||msg.includes('STAY STAY STAY STAY')
   ||msg.includes('﷽﷽﷽')
   ||msg.includes('🐥 ITS TIME TO STAY 🐥')
   ||msg.includes('🅼🅾🅾🅽 🅷🅰🅼🆂🆃🅴🆁🆂')
   ||msg.includes('N I P P L E B U T T')
   ||msg.includes('﷽﷽﷽﷽')
   ||msg.includes('GROW ONCE MORE THEN STAY 🅸')
   ||msg.includes('GROWTH = SUICIDE')
   ||msg.includes('卐 MOOB HUNTERS')
   ||msg.includes('Welcome to RobinFacts™!')
   ||msg.includes('.͇͇͇͇͇͇͇')
   ||msg.includes('ค้้้้้้้้้้้้้้้้้้้')
   ||msg.includes('🅹🅾🅸🅽 🅼🅴 🅱🆁🅾🆃🅷🅴🆁🆂')
   ||msg.includes('POT OF GREED ALLOWS ME TO')
   ||msg.includes('STAY_STAY_STAY')
   ||msg.includes('Ｔ Ｈ Ｉ Ｓ . Ｌ Ａ Ｓ Ｔ Ｓ . Ｆ Ｏ Ｒ . Ａ . Ｗ Ｅ Ｅ Ｋ ')
   ||msg.includes('▆▅')
   ||msg.includes('🅼🅾🅾🅽')
   ||msg.includes('╗')
   ||msg.includes('˖✧◝(⁰▿⁰)◜✧˖°')
   ||msg.includes('卐')
   ||msg.includes('Robin Autovoter')
   ||msg.includes('└[⊜﹏⊜]┘')
   ||msg.includes('hellen keller')
   ||msg.includes('\u1DCA')    
   ||msg.includes('\u0353')
   ||msg.includes('\uFF24')
   ||msg.includes('\u25D5')
   ||msg.includes('\u25D5')
   ||msg.includes('\u0137')
   ||msg.includes('9Mart')
   ||msg.includes('play.google')
   ||msg.includes('voted for #KANYE2020 #STAY')
   ||msg.includes('DuckGod')
   ||msg.includes('Have a burning story to tell')
   ||msg.includes('desperately trying to recreate 4chan')
   ||msg.includes('YEEZY')
   ||msg.includes('CATBRAH')
   ||msg.includes('got to poop')
   ||msg.includes('%')
   ||msg.includes('[BIRD CALL]')
   ||msg.includes('https://www.reddit.com/r/')
   ||msg.includes('http://www.reddit.com/r/')
   ||msg.includes('www.reddit.com/r/')
   ||msg.includes('reddit.com/r/')
   ||msg.includes('that is already your vote')
   ||msg.includes('remebers these meme\'s')
   ||msg.includes('co0l ppl list\:')
   ||msg.includes('c0ol ppl list\:')
   ||msg.includes('cOol ppl list\:')
   ||msg.includes('coOl ppl list\:')
   ||msg.includes('cOOl ppl list\:')
   ||msg.includes('cool ppl list\:')
   ||msg.includes('kewl ppl list\:')
   ||msg.includes('kewI ppl list\:')
   ||msg.includes('ke\/\/l ppl list\:')
   ||msg.includes('k3\/\/l ppl list\:')
   ||msg.includes('k3wl ppl list\:')
   ||msg.includes('Current standings')
   ||msg.includes('___')
   ||msg.includes('nigglets')
   ||msg.includes('VAPE NATION')
   ||msg.includes('STAY TO GAIN')
   ||msg.includes('[CAT FACT]')
   ||msg.includes('[NSFWRobinBot]')
   ||msg.includes('[RedRobin v1.1]')
       ) {
           mutation.addedNodes[0].style.display = "none";
       }
       if(trivia.checked && msg.includes('CATEGORY:')
   ||msg.includes('The answer was')
          ) {
           mutation.addedNodes[0].style.display = "none";
           }
   });
});
observer.observe(target, {childList: true});
}, 20);

$('#robinDesktopNotifier').append('<p style="color: red; font-size:11px;"> Click a User’s name in the chat to block them');
var h=[];
setInterval(function(){
  $('.robin-message--from.robin--username').css('cursor', 'pointer').attr('alt', 'Click to block this user');
  $('.robin-message--from.robin--username').click(function(){h.push($(this).text());});
  $.each(h,function(i,v){$('.robin--username:contains('+v+')').parent().remove();});}
,100);

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".robin-message { font-size: 20px }";
document.body.appendChild(css);

setInterval(function pickColor(){
            var e = this.get("name").toLowerCase()
              , t = e.replace(/[^a-z0-9]/g, "") // gets rid of special characters like "_"
              , n = parseInt(t, 36) % f; // f = 6
            document.write('<inputhidden" name="whatever" id="colors" value="'+n+'">');}
,100);

$('#robinDesktopNotifier').append('<p id="usernamecolor" style="color: +n; font-size:11px;"> Username color detector doesn\'t work.');

$('.content').append('<p id=robinsnest">additional features by lots of people, bundled up in RobinNest v1.1.1.</p>');
