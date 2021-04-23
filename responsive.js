var responsiveMode = {
  updateWidth: function(e, t) {
      document.querySelector(t).style.width = e
  },
  showFrameWidth: function(e, t) {
      var n = document.getElementById(e).contentWindow,
          i = document.getElementById(t);
      n.addEventListener("resize", function() {
          width = n.document.body.scrollWidth, i.innerHTML = width + "px"
      })
  },
  runCodeSniffer: function() {
      var e, t, n, i = "//squizlabs.github.io/HTML_CodeSniffer/build/",
          o = {
              path: i
          };
      e = i + "HTMLCS.js", t = function() {
          HTMLCSAuditor.run("WCAG2AA", null, o)
      }, (n = document.createElement("script")).onload = function() {
          n.onload = null, n.onreadystatechange = null, t.call(this)
      }, n.onreadystatechange = function() {
          !0 === /^(complete|loaded)$/.test(this.readyState) && (n.onreadystatechange = null, n.onload())
      }, n.src = e, document.head ? document.head.appendChild(n) : document.getElementsByTagName("head")[0].appendChild(n)
  },
  createSimpleButton: function(e, t, n) {
      var i = document.createElement("button");
      i.setAttribute("onclick", n), i.innerHTML = t, e.appendChild(i)
  },
  createiFrameButton: function(e, t, n) {
      var i = this,
          o = document.createElement("button");
      o.setAttribute("class", n), o.innerHTML = t, e.appendChild(o), o.addEventListener("click", function() {
          i.updateWidth(t, "#responsive-iframe")
      })
  },
  killResponsiveMode: function(e) {
      window.location.href;
      document.querySelectorAll("iframe")[0].remove()
  },
  appendCss: function() {
      var e = document.head || document.getElementsByTagName("head")[0],
          t = document.createElement("style");
      t.type = "text/css", t.appendChild(document.createTextNode("body>iframe{margin:0 auto;display:block;resize:both;overflow:auto}.responsive-buttons{padding:12px;text-align:center;position:-webkit-sticky;position:fixed;bottom:-1px;z-index:100;width:100%}.responsive-buttons button{min-width:6.25rem;font-size:.75rem}.responsive-buttons button:nth-child(even){opacity:.8}.responsive-buttons span{padding:.85rem;font-size:.75rem;margin:5px;background;black}.toggled-off{padding:0}.toggled-off button{display:none}.toggled-off button:last-child{display:block;position:absolute;right:80px;top:-8px;margin:0 5px;min-width:0;font-size:.75rem;padding:4px 8px;width:auto}")), e.appendChild(t)
  },
  init: function() {
      var e = window.location.href,
          t = document.createElement("div");
      t.setAttribute("class", "responsive-buttons"), document.body.innerHTML = "", localStorage.setItem("shortcuts", "on");
      var n = document.createElement("iframe"),
          i = (e = window.location.href, window.innerHeight + 20 + "px");
      n.setAttribute("src", e + "?responsive"), n.setAttribute("frameBorder", "0"), n.setAttribute("title", "Responsive iframe for custom viewports within the browser"), n.setAttribute("id", "responsive-iframe"), n.style.width = "100%", n.style.height = i;
      var o = document.createElement("span");
      for (var d in o.setAttribute("id", "responsive-width"), t.appendChild(o), obj) obj.hasOwnProperty(d) && this.createiFrameButton(t, obj[d], d);
      this.createiFrameButton(t, "100%"), this.createSimpleButton(t, "Check Accessibility", "responsiveMode.runCodeSniffer();"), document.body.appendChild(t), document.body.appendChild(n), this.showFrameWidth("responsive-iframe", "responsive-width")
  }
},
sassVariables = '{"small": "573px","medium": "992px","large": "1200px","xlarge": "1400px"}';
obj = JSON.parse(sassVariables), responsiveMode.appendCss(), responsiveMode.init();

// javascript:var responsiveMode={updateWidth:function(e,t){document.querySelector(t).style.width=e},showFrameWidth:function(e,t){var n=document.getElementById(e).contentWindow,i=document.getElementById(t);n.addEventListener("resize",function(){width=n.document.body.scrollWidth,i.innerHTML=width+"px"})},runCodeSniffer:function(){var e,t,n,i="//squizlabs.github.io/HTML_CodeSniffer/build/",o={path:i};e=i+"HTMLCS.js",t=function(){HTMLCSAuditor.run("WCAG2AA",null,o)},(n=document.createElement("script")).onload=function(){n.onload=null,n.onreadystatechange=null,t.call(this)},n.onreadystatechange=function(){!0===/^(complete|loaded)$/.test(this.readyState)&&(n.onreadystatechange=null,n.onload())},n.src=e,document.head?document.head.appendChild(n):document.getElementsByTagName("head")[0].appendChild(n)},createSimpleButton:function(e,t,n){var i=document.createElement("button");i.setAttribute("onclick",n),i.innerHTML=t,e.appendChild(i)},createiFrameButton:function(e,t,n){var i=this,o=document.createElement("button");o.setAttribute("class",n),o.innerHTML=t,e.appendChild(o),o.addEventListener("click",function(){i.updateWidth(t,"#responsive-iframe")})},killResponsiveMode:function(e){window.location.href;document.querySelectorAll("iframe")[0].remove()},appendCss:function(){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.appendChild(document.createTextNode("body>iframe{margin:0 auto;display:block;resize:both;overflow:auto}.responsive-buttons{padding:12px;text-align:center;position:-webkit-sticky;position:fixed;bottom:-1px;z-index:100;width:100%}.responsive-buttons button{min-width:6.25rem;font-size:.75rem}.responsive-buttons button:nth-child(even){opacity:.8}.responsive-buttons span{padding:.85rem;font-size:.75rem;margin:5px;background;black}.toggled-off{padding:0}.toggled-off button{display:none}.toggled-off button:last-child{display:block;position:absolute;right:80px;top:-8px;margin:0 5px;min-width:0;font-size:.75rem;padding:4px 8px;width:auto}")),e.appendChild(t)},init:function(){var e=window.location.href,t=document.createElement("div");t.setAttribute("class","responsive-buttons"),document.body.innerHTML="",localStorage.setItem("shortcuts","on");var n=document.createElement("iframe"),i=(e=window.location.href,window.innerHeight+20+"px");n.setAttribute("src",e+"?responsive"),n.setAttribute("frameBorder","0"),n.setAttribute("title","Responsive iframe for custom viewports within the browser"),n.setAttribute("id","responsive-iframe"),n.style.width="100%",n.style.height=i;var o=document.createElement("span");for(var d in o.setAttribute("id","responsive-width"),t.appendChild(o),obj)obj.hasOwnProperty(d)&&this.createiFrameButton(t,obj[d],d);this.createiFrameButton(t,"100%"),this.createSimpleButton(t,"Check Accessibility","responsiveMode.runCodeSniffer();"),document.body.appendChild(t),document.body.appendChild(n),this.showFrameWidth("responsive-iframe","responsive-width")}},sassVariables='{"small": "573px","medium": "992px","large": "1200px","xlarge": "1400px"}';obj=JSON.parse(sassVariables),responsiveMode.appendCss(),responsiveMode.init();