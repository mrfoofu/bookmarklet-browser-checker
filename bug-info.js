var browser = navigator;
var view = window;
var messagePlain = `
  Browser Details:
  UserAgent: ${browser.userAgent}
  Cookie Enabled: ${browser.cookieEnabled}
  Browser Dimensions: ${view.innerWidth} x ${view.innerHeight}px
  URL: ${view.location.href}
`
var messageHtml = `
  <h3>Browser Details:</h3>
  <strong>- UserAgent:</strong> ${browser.userAgent}<br>
  <strong>- Cookie Enabled:</strong> ${browser.cookieEnabled}<br>
  <strong>- Browser Dimensions:</strong> ${view.innerWidth} x ${view.innerHeight}px<br>
  <strong>- URL:</strong> ${view.location.href}<br><br>
  <small>This has been copied to your clipboard</small>
`

var e = document.createElement('div');
e.innerHTML = messageHtml;
e.setAttribute("style", `
  position: fixed;
  top: 20px;
  right: 20px;
  width: 300px;
  padding: 10px;
  z-index: 9999;
  font-size: 0.80em;
  background: white; 
`);

document.body.prepend(e);

var input = document.createElement('textarea');
input.innerHTML = messagePlain;
document.body.appendChild(input);
input.select();
var result = document.execCommand('copy');
document.body.removeChild(input);

// javascript:var browser=navigator,view=window,messagePlain=`\n  Browser Details:\n  UserAgent: ${browser.userAgent}\n  Cookie Enabled: ${browser.cookieEnabled}\n  Browser Dimensions: ${view.innerWidth} x ${view.innerHeight}px\n  URL: ${view.location.href}\n`,messageHtml=`\n  <h3>Browser Details:</h3>\n  <strong>- UserAgent:</strong> ${browser.userAgent}<br>\n  <strong>- Cookie Enabled:</strong> ${browser.cookieEnabled}<br>\n  <strong>- Browser Dimensions:</strong> ${view.innerWidth} x ${view.innerHeight}px<br>\n  <strong>- URL:</strong> ${view.location.href}<br><br>\n  <small>This has been copied to your clipboard</small>\n`,e=document.createElement("div");e.innerHTML=messageHtml,e.setAttribute("style","\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  width: 300px;\n  padding: 10px;\n  z-index: 9999;\n  font-size: 0.80em;\n  background: white; border: 2px solid black;\n"),document.body.prepend(e);var input=document.createElement("textarea");input.innerHTML=messagePlain,document.body.appendChild(input),input.select();var result=document.execCommand("copy");document.body.removeChild(input);
