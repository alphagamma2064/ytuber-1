/*!
 * ViewGrip JavaScript Library
 * https://www.viewgrip.net/
 * Date: 2022-20-07T17:08Z
 */

var mousehouver;

function getCookie(e) {
   for (var t = e + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
      for (var n = o[i];
         " " == n.charAt(0);) n = n.substring(1, n.length);
      if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
   }
   return null
}

function getRandomInt(e, t) {
   return e = Math.ceil(e), Math.floor(Math.random() * ((t = Math.floor(t)) - e + 1)) + e
}

function startExtension() {
   if ("viewgrip" == self.window.name) {
      var e = setInterval(function() {
         try {
            document.querySelector(".yt-img-shadow") && (clearInterval(e), starting()), (window.location.href.indexOf("watch?v=") > -1 || window.location.href.indexOf("shorts") > -1) && (document.querySelector("#messages") ? document.querySelector("#messages").innerHTML = '<style>.watchmode{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: white; font-family: Consolas;}.vgloadingDots:after{content:" .";animation:ldots 0.5s steps(5,end) infinite;font-size:1em;color:#fff;font-family:Consolas}@keyframes ldots{0%,20%{color:transparent;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}40%{color:#fff;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}60%{text-shadow:.25em 0 0 #fff,.5em 0 0 transparent}100%,80%{text-shadow:.25em 0 0 #fff,.5em 0 0 #fff}}</style><div class="watchmode">ViewGrip:~$ Is preparing  <span class="vgloadingDots"></span></div>' : window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.watchmode{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: white; font-family: Consolas;}.vgloadingDots:after{content:" .";animation:ldots 0.5s steps(5,end) infinite;font-size:1em;color:#fff;font-family:Consolas}@keyframes ldots{0%,20%{color:transparent;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}40%{color:#fff;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}60%{text-shadow:.25em 0 0 #fff,.5em 0 0 transparent}100%,80%{text-shadow:.25em 0 0 #fff,.5em 0 0 #fff}}</style><div class="watchmode">ViewGrip:~$ Is preparing  <span class="vgloadingDots"></span></div>'))
         } catch (t) {}
      }, 1e3);
      document.getElementsByTagName("html")[0].style.pointerEvents = "none"
   }
}

function starting() {
   if (null == getCookie("SID") || "" == getCookie("SID")) document.querySelector("#masthead-container").innerHTML = '<style>.ytloginpc{padding: 20px; font-size: 25px; background-color: #f44336; color: white;}.closebtn{margin-left: 15px; color: white; font-weight: bold; float: right; font-size: 22px; line-height: 20px; cursor: pointer; transition: 0.3s;}.closebtn:hover{color: black;}</style><div class="ytloginpc"> Please login to your YouTube account!</div>', setTimeout(function() {
      window.close()
   }, 5e3);
   else var e = setInterval(function() {
      chrome.storage.sync.get("WorkerResponse", t => {
         1 == t.WorkerResponse ? (clearInterval(e), SimulateClick(document.querySelector("#logo-icon"))) : chrome.storage.sync.get("AjaxData", t => {
            0 != t.AjaxData.sid && (0 != t.AjaxData.eurl || null != t.AjaxData.eurl || void 0 !== t.AjaxData.eurl) && (clearInterval(e), AutoWorker(t.AjaxData.sid, t.AjaxData.eurl, t.AjaxData.title, t.AjaxData.type, t.AjaxData.ekey, t.AjaxData.ads, t.AjaxData.likes, t.AjaxData.subscribe, t.AjaxData.comment, t.AjaxData.likeoncomment, t.AjaxData.progtime, t.AjaxData.adid, t.AjaxData.titlead, t.AjaxData.textad, t.AjaxData.urlad), chrome.storage.sync.set({
               OnInteraction: 1
            }))
         })
      })
   }, 1e3);
   return window.addEventListener("keydown", function e(t) {
      "INPUT" != t.target.tagName && "SELECT" != t.target.tagName && "TEXTAREA" != t.target.tagName && !t.target.isContentEditable && t.stopImmediatePropagation()
   }, !0), !1
}

function AutoWorker(e, t, o, i, n, a, r, s, l, c, d, f, u, y, m) {
   if (e > 0) {
      var p, g, h, b, v = t.replace(/^[-_0-9]+/, ""),
         _ = 0,
         x = 0,
         S = 0,
         k = location.href;

      function w() {
         var e = setInterval(function() {
            window.location.href.indexOf("search_query") > -1 && (clearInterval(e), document.querySelector("#ticker") && (document.querySelector("#ticker").innerHTML = '<style>.serachclick{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: white; font-family: Consolas;}.vgloadingDots:after{content:" .";animation:ldots 0.5s steps(5,end) infinite;font-size:1em;color:#fff;font-family:Consolas}@keyframes ldots{0%,20%{color:transparent;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}40%{color:#fff;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}60%{text-shadow:.25em 0 0 #fff,.5em 0 0 transparent}100%,80%{text-shadow:.25em 0 0 #fff,.5em 0 0 #fff}}</style><div class="serachclick">ViewGrip:~$ Wait looking for videos  <span class="vgloadingDots"></span></div>'), setTimeout(function() {
               (function e() {
                  3 >= x ? document.querySelector("#dismissible a[href*=" + v + "]") ? q() : $("html").animate({
                     scrollTop: $(document).height()
                  }, 2e3, function() {
                     document.querySelector("#dismissible a[href*=" + v + "]") ? ($("html").stop(), q()) : setTimeout(function() {
                        e()
                     }, 500)
                  }) : ($("html").stop(), q()), x++
               })()
            }, 1e3))
         }, 500)
      }

      function q() {
         try {
            if (document.querySelector("#dismissible a[href*=" + v + "]")) {
               var e = document.querySelector("#dismissible a[href*=" + v + "]");
               $("html").animate({
                  scrollTop: parseInt($(e).offset().top) - 200
               }, 2e3, function() {
                  setTimeout(function() {
                     e.style.border = "solid 6px green", e.text.blink(), setTimeout(function() {
                        SimulateClick(e), document.querySelector("#ticker").innerHTML = "", e.style.border = ""
                     }, 500), document.querySelector("#ticker").innerHTML = '<style>.serachclick{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: green; font-family: Consolas;}.vgloadingDots:after{content:" .";animation:ldots 0.5s steps(5,end) infinite;font-size:1em;color:#fff;font-family:Consolas}@keyframes ldots{0%,20%{color:transparent;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}40%{color:#fff;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}60%{text-shadow:.25em 0 0 #fff,.5em 0 0 transparent}100%,80%{text-shadow:.25em 0 0 #fff,.5em 0 0 #fff}}</style><div class="serachclick">ViewGrip:~$ Video found, is starting <span class="vgloadingDots"></span></div>'
                  }, 2e3)
               })
            } else document.querySelector("#ticker").innerHTML = '<style>.serachclick{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #ff9800; font-family: Consolas;}</style><div class="serachclick">ViewGrip:~$ No video found for this keyword!</span></div>', T()
         } catch (t) {
            document.querySelector("#ticker").innerHTML = '<style>.serachclick{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #ff9800; font-family: Consolas;}.vgloadingDots:after{content:" .";animation:ldots 0.5s steps(5,end) infinite;font-size:1em;color:#fff;font-family:Consolas}@keyframes ldots{0%,20%{color:transparent;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}40%{color:#fff;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}60%{text-shadow:.25em 0 0 #fff,.5em 0 0 transparent}100%,80%{text-shadow:.25em 0 0 #fff,.5em 0 0 #fff}}</style><div class="serachclick">ViewGrip:~$ Trying to re-add <span class="vgloadingDots"></span></span></div>', T()
         }
         window.location.href.indexOf("watch?v=") > -1 && window.scrollTo({
            top: 0,
            behavior: "smooth"
         })
      }

      function T() {
         if (5 >= S) try {
            setTimeout(function() {
               document.querySelector("#ticker").innerHTML = '<style>.watchmode{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: white; font-family: Consolas;}.vgloadingDots:after{content:" .";animation:ldots 0.5s steps(5,end) infinite;font-size:1em;color:#fff;font-family:Consolas}@keyframes ldots{0%,20%{color:transparent;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}40%{color:#fff;text-shadow:.25em 0 0 transparent,.5em 0 0 transparent}60%{text-shadow:.25em 0 0 #fff,.5em 0 0 transparent}100%,80%{text-shadow:.25em 0 0 #fff,.5em 0 0 #fff}}</style><div class="watchmode">ViewGrip:~$ Trying to insert a video <span class="vgloadingDots"></span></div>';
               var e = document.querySelectorAll("ytd-video-renderer"),
                  o = e[e.length - 2];
               o ? o.innerHTML = '<style>.vg-ytd-video-renderer{--yt-button-compact-background-color: var(--yt-spec-10-percent-layer); --yt-button-compact-text-color: var(--yt-spec-text-secondary); display: block; position: relative;}.vg-dismissible{position: relative; display: -ms-flexbox; display: -webkit-flex; display: flex; -ms-flex-direction: row; -webkit-flex-direction: row; flex-direction: row; -ms-flex-align: start; -webkit-align-items: flex-start; align-items: flex-start;}.vg-ytd-thumbnail{margin-right: 16px; max-width: 360px; min-width: 240px; -ms-flex: 1 1 0.000000001px; -webkit-flex: 1; flex: 1; flex-basis: 0%; -webkit-flex-basis: 0.000000001px; flex-basis: 0.000000001px;}.vg-ytd-thumbnail1{height: 100%; position: relative; margin-left: auto; margin-right: auto; overflow: hidden; display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0;}.vg-text-wrapper{max-width: 600px; min-width: 0; display: inline-block; cursor: pointer; text-decoration: none; color: var(--yt-endpoint-color,var(--yt-spec-text-primary)); -ms-flex: 1 1 0.000000001px; -webkit-flex: 1; flex: 1; flex-basis: 0%; -webkit-flex-basis: 0.000000001px; flex-basis: 0.000000001px; display: -ms-flexbox; display: -webkit-flex; display: flex; -ms-flex-direction: column; -webkit-flex-direction: column; flex-direction: column; margin-left: 20px;}.vg-title-wrapper{display: -ms-flexbox; display: -webkit-flex; display: flex; -ms-flex-pack: justify; -webkit-justify-content: space-between; justify-content: space-between;}.vg-title-and-badge{min-width: 0; color: var(--yt-spec-text-primary); margin-right: 8px; overflow: hidden;}.vg-video-title{color: var(--yt-spec-text-primary); -webkit-line-clamp: 2; font-family: "Roboto","Arial",sans-serif; font-size: 1.8rem; line-height: 2.6rem; font-weight: 400; max-height: 5.2rem; overflow: hidden; display: block; -webkit-line-clamp: 2; display: box; display: -webkit-box; -webkit-box-orient: vertical; text-overflow: ellipsis; white-space: normal; -webkit-box-orient: vertical; text-overflow: ellipsis; white-space: normal; display: -webkit-box;}a, a:hover, a:visited, a:active{color: inherit; text-decoration: none;}</style><section id="dismissible" class="vg-ytd-video-renderer"><a href="/watch?v=' + t + '" class="vg-dismissible" tabindex="-1" rel="null"><vg-ytd-thumbnail><div id="thumbnail"><img id="img" class="style-scope yt-img-shadow" alt="" src="https://img.youtube.com/vi/' + t + '/mqdefault.jpg" width="360"></div></vg-ytd-thumbnail><div class="vg-text-wrapper"><div class="vg-title-wrapper"><div class="vg-title-and-badge"><div class="vg-video-title">' + n + "</div></div></div></div></a></section>" : T();
               try {
                  document.querySelector("a[href*=" + v + "]") ? q() : T()
               } catch (i) {
                  T()
               }
            }, 1e3)
         } catch (e) {
            T()
         } else SimulateClick(document.querySelector("#logo-icon")), SetViolaTion(6);
         S++
      }

      function C() {
         if ("https://www.youtube.com/" == window.location.href) {
            if (3 >= _) try {
               setTimeout(function() {
                  var e, i = document.querySelectorAll("#dismissible")[Math.floor(4 * Math.random()) + 1];
                  i ? i.innerHTML = '<div id="dismissible" class="style-scope ytd-rich-grid-media"><a id="thumbnail" class="yt-simple-endpoint inline-block style-scope ytd-thumbnail" aria-hidden="true" tabindex="-1" rel="null" href="/watch?v=' + t + '"><img id="img" draggable="false" style="border-radius:7%" class="style-scope yt-img-shadow" alt="" src="https://i.ytimg.com/vi/' + t + '/hq720.jpg" width="9999"><div id="overlays" class="style-scope ytd-thumbnail"></div><div id="mouseover-overlay" class="style-scope ytd-thumbnail"></div><div id="hover-overlays" class="style-scope ytd-thumbnail"></div></a><div id="details" class="style-scope ytd-rich-grid-media"><div id="meta" class="style-scope ytd-rich-grid-media"><h3 class="style-scope ytd-rich-grid-media"><a id="video-title-link" class="yt-simple-endpoint focus-on-expand style-scope ytd-rich-grid-media" aria-label="" title="[PS5] FIFA 23 | ROUND OF 16 #7 BELGIUM VS SPAIN - WORLD CUP QATAR 2022 (GAMEPLAY)" href="/watch?v=' + t + '">' + o + '</a></h3><div id="metadata" class="style-scope ytd-video-meta-block"><div id="byline-container" class="style-scope ytd-video-meta-block"><div id="separator" class="style-scope ytd-video-meta-block">•</div><yt-formatted-string id="video-info" class="style-scope ytd-video-meta-block" is-empty="" hidden=""><yt-attributed-string class="style-scope yt-formatted-string"></yt-attributed-string></yt-formatted-string></div><div id="metadata-line" class="style-scope ytd-video-meta-block"><div id="separator" class="style-scope ytd-video-meta-block" hidden="">•</div><span class="inline-metadata-item style-scope ytd-video-meta-block">Not yet watched</span><dom-repeat strip-whitespace="" class="style-scope ytd-video-meta-block"><template is="dom-repeat"></template></dom-repeat></div></div><div id="additional-metadata-line" class="style-scope ytd-video-meta-block"><dom-repeat class="style-scope ytd-video-meta-block"><template is="dom-repeat"></template></dom-repeat></div></div></div></div>' : SimulateClick(document.querySelector("#logo-icon"));
                  try {
                     document.querySelector("a[href*=" + v + "]") ? q() : C()
                  } catch (n) {
                     C()
                  }
               }, 1e3)
            } catch (e) {
               C()
            }
            _++
         } else if (window.location.href.indexOf("watch?v=") > -1 && !window.location.href.includes(t)) {
            if (3 >= _) try {
               setTimeout(function() {
                  var e = document.querySelectorAll("#dismissible"),
                     i = e[e.length - 2];
                  i ? i.innerHTML = '<div id="dismissible" class="style-scope ytd-compact-video-renderer"><a id="thumbnail" class="yt-simple-endpoint inline-block style-scope ytd-thumbnail" aria-hidden="true" tabindex="-1" rel="nofollow" href="/watch?v=' + t + '" style="margin-right:8px"><img style="height:94px;width:300px;border-radius:7%" id="img" draggable="false" class="style-scope yt-img-shadow" alt="" src="https://i.ytimg.com/vi/' + t + '/hqdefault.jpg"></a><div class="details style-scope ytd-compact-video-renderer"><div class="metadata style-scope ytd-compact-video-renderer"><a class="yt-simple-endpoint style-scope ytd-compact-video-renderer" rel="nofollow" href="/watch?v=' + t + '"><h3 class="style-scope ytd-compact-video-renderer"><span id="video-title" class="style-scope ytd-compact-video-renderer" aria-label="' + o + '">' + o + "</span></h3></a></div></div></div>" : C();
                  try {
                     document.querySelector("a[href*=" + v + "]") ? q() : C()
                  } catch (n) {
                     C()
                  }
               }, 1e3)
            } catch (i) {
               C()
            }
            _++
         } else window.location.href.indexOf("/shorts/") > -1 && SimulateClick(document.querySelector("#logo-icon"))
      }

      function L() {
         try {
            chrome.storage.sync.get("Onsubscribe", e => {
               1 == s && (void 0 === e.Onsubscribe || 0 == e.Onsubscribe) ? setTimeout(function() {
                  var e = document.querySelector("#subscribe-button .yt-spec-button-shape-next--filled, #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer:not([subscribed])");
                  e ? $("html").animate({
                     scrollTop: parseInt($("#above-the-fold").offset().top) - 50
                  }, 3e3, function() {
                     e && SimulateClick(e);
                     var t = setInterval(function() {
                        document.querySelector("#subscribe-button:not(.yt-spec-button-shape-next--filled), #subscribe-button tp-yt-paper-button.ytd-subscribe-button-renderer[subscribed]") && (clearInterval(t), V(), chrome.storage.sync.set({
                           SubscribeStatus: 1
                        }))
                     }, 1e3)
                  }) : V()
               }, 3e3) : V()
            })
         } catch (e) {
            V()
         }
      }

      function V() {
         try {
            chrome.storage.sync.get("Oncomment", e => {
               if (l.length > 0 && (void 0 === e.Oncomment || 0 == e.Oncomment)) {
                  var t = 0;

                  function o() {
                     scrollTop = window.pageYOffset || document.documentElement.scrollTop, scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, window.onscroll = function() {
                        window.scrollTo(scrollLeft, scrollTop)
                     };
                     var e = document.querySelector("#comments #placeholder-area .ytd-comment-simplebox-renderer");
                     if (e) var o = setInterval(function() {
                        clearInterval(o), SimulateClick(e);
                        var i = setInterval(function() {
                           if (document.querySelector("#contenteditable-root.yt-formatted-string")) {
                              clearInterval(i);
                              var e = Array.prototype.slice.call(document.querySelectorAll("#content-text.ytd-comment-renderer")).filter(function(e) {
                                 return e.textContent.replace(/[^a-zA-Z]/gm, "") === l.replace(/[^a-zA-Z]/gm, "")
                              })[0];
                              void 0 === e ? function e() {
                                 if (t < l.length) {
                                    $("#contenteditable-root").text($("#contenteditable-root").text() + l.charAt(t)), document.querySelector("#submit-button.ytd-commentbox").removeAttribute("disabled"), t++;
                                    var o = setTimeout(e, 50)
                                 }
                                 if (t >= l.length) {
                                    clearTimeout(o);
                                    var i = document.querySelector("#submit-button.ytd-commentbox");
                                    setTimeout(function() {
                                       SimulateClick(i), window.onscroll = function() {};
                                       var e = setInterval(function() {
                                          void 0 !== Array.prototype.slice.call(document.querySelectorAll("#content-text.ytd-comment-renderer")).filter(function(e) {
                                             return e.textContent.replace(/[^a-zA-Z]/gm, "") === l.replace(/[^a-zA-Z]/gm, "")
                                          })[0] && (clearInterval(e), chrome.storage.sync.set({
                                             CommentStatus: 1
                                          }))
                                       }, 2e3);
                                       setTimeout(function() {
                                          O()
                                       }, 2e3)
                                    }, 2e3)
                                 }
                              }() : $("html").animate({
                                 scrollTop: parseInt($(e).offset().top) - 100
                              }, 3e3, function() {
                                 window.onscroll = function() {}, setTimeout(function() {
                                    e.style.color = "red", O()
                                 }, 500)
                              })
                           } else O()
                        }, 1500)
                     }, 1e3);
                     else O()
                  }
                  document.querySelector("#comments #placeholder-area .ytd-comment-simplebox-renderer") ? $("html").animate({
                     scrollTop: parseInt($("#comments").offset().top) - 100
                  }, 3e3, function() {
                     setTimeout(function() {
                        o()
                     }, 3e3)
                  }) : $("html").animate({
                     scrollTop: 500
                  }, 3e3, function() {
                     $("html").animate({
                        scrollTop: parseInt($(".ytd-comment-simplebox-renderer").offset().top) - 100
                     }, 3e3, function() {
                        o()
                     })
                  })
               } else O()
            })
         } catch (e) {
            O()
         }
      }

      function O() {
         try {
            chrome.storage.sync.get("Onlikecomment", e => {
               if (1 == c && (void 0 === e.Onlikecomment || 0 == e.Onlikecomment)) {
                  setTimeout(function() {
                     document.querySelector("#comments #contents #content-text") ? $("html").animate({
                        scrollTop: 500
                     }, 3e3, function() {
                        setTimeout(function() {
                           $("html").animate({
                              scrollTop: parseInt($("#comments, #placeholder-area, .ytd-comment-simplebox-renderer").offset().top) - 100
                           }, 500, function() {
                              t()
                           })
                        }, 1e3)
                     }) : t()
                  }, 3e3);
                  var t = function() {
                     if (document.querySelector('.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text[aria-pressed="true"]')) window.scrollY > 0 && setTimeout(function() {
                        $("html").animate({
                           scrollTop: 0
                        }, 2e3)
                     }, 3e3), A();
                     else {
                        var e = document.querySelectorAll('#comment #toolbar #like-button button:not([aria-pressed="true"]) path:not([d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7l0,7ZM4,14H1V7H4Z"])');
                        e[0] && !document.querySelector('.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--text[aria-pressed="true"]') ? setTimeout(function() {
                           $("html").animate({
                              scrollTop: parseInt($(e[0]).offset().top) - 200
                           }, 2e3, function() {
                              setTimeout(function() {
                                 SimulateClick(e[0]), chrome.storage.sync.set({
                                    LikeOnCommentStatus: 1
                                 }), setTimeout(function() {
                                    window.scrollY > 0 && $("html").animate({
                                       scrollTop: 0
                                    }, 2e3), A()
                                 }, 2e3)
                              }, 2e3)
                           })
                        }, 2e3) : (window.scrollY > 0 && setTimeout(function() {
                           $("html").animate({
                              scrollTop: 0
                           }, 2e3)
                        }, 3e3), A())
                     }
                  }
               } else window.scrollY > 0 && setTimeout(function() {
                  $("html").animate({
                     scrollTop: 0
                  }, 2e3)
               }, 3e3), A()
            })
         } catch (e) {
            window.scrollY > 0 && setTimeout(function() {
               $("html").animate({
                  scrollTop: 0
               }, 2e3)
            }, 3e3), A()
         }
      }

      function A() {
         setTimeout(function() {
            e()
         }, Math.round(4e4 * Math.random() + 1e4));
         var e = function() {
            setTimeout(function() {
               var e = Math.round(2e3 * Math.random() + 1e3);
               $("html").animate({
                  scrollTop: e
               }, 4e3, function() {
                  setTimeout(function() {
                     $("html").animate({
                        scrollTop: 0
                     }, e, function() {
                        setInterval(function() {
                           window.scrollY > 0 && $("html").animate({
                              scrollTop: 0
                           }, 2e3)
                        }, 5e3)
                     }), mouseHouverProgress()
                  }, 4e3)
               })
            }, 2e3)
         }
      }
      g = setInterval(function() {
         try {
            var o, i;
            window.location.href.includes(t) && ((window.location.href.indexOf("watch?v=") > -1 || window.location.href.indexOf("shorts") > -1) && ("playing" === navigator.mediaSession.playbackState ? (clearInterval(g), AdSkips(a), function e() {
               try {
                  let t = document.querySelector('.ytp-autonav-toggle-button-container > .ytp-autonav-toggle-button[aria-checked="true"], #improved-toggle[aria-pressed="true"], ytd-compact-autoplay-renderer #toggle[aria-pressed="true"]');
                  if (t) {
                     setTimeout(function() {
                        SimulateClick(t)
                     }, 1e4);
                     return
                  }
               } catch (o) {}
            }(), p = setInterval(function() {
               chrome.storage.sync.get("TimerStatus", e => {
                  if (0 == e.TimerStatus) {
                     if (document.querySelector("video").playbackRate > 1 && (SetViolaTion(2), clearInterval(p)), window.location.href.indexOf("search_query") > -1 || -1 === window.location.href.indexOf("www.you") || "https://www.youtube.com/" == window.location.href);
                     else {
                        let t = location.href;
                        new MutationObserver(() => {
                           var e = location.href;
                           e !== t && (t = e, document.getElementById("movie_player").classList.contains("ended-mode") || SetViolaTion(1), clearInterval(p))
                        }).observe(document, {
                           subtree: !0,
                           childList: !0
                        })
                     }
                     1 == performance.navigation.type && (SetViolaTion(1), clearInterval(p));
                     try {
                        window.location.href.indexOf("watch?v=") > -1 && (document.getElementById("movie_player").classList.contains("buffering-mode") || document.getElementById("movie_player").classList.contains("paused-mode") || document.getElementById("movie_player").classList.contains("unstarted-mode") && !document.getElementById("movie_player").classList.contains("ad-showing")) && chrome.storage.sync.get("TimerStatus", e => {
                           0 == e.TimerStatus && (clearInterval(g), setTimeout(function() {
                              try {
                                 document.getElementById("movie_player").classList.contains("buffering-mode") && !document.getElementById("movie_player").classList.contains("ad-showing") && window.location.href.indexOf("watch?v=") > -1 && (window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                 }), window.location.href.indexOf("watch?v=") > -1 ? document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Video is buffering! <strong></strong></div>') : window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Video is buffering! <strong></strong></div>'), setTimeout(function() {
                                    SetViolaTion(1)
                                 }, 2e3), clearInterval(p))
                              } catch (e) {}
                           }, 1e4), setTimeout(function() {
                              try {
                                 (document.getElementById("movie_player").classList.contains("paused-mode") || document.getElementById("movie_player").classList.contains("unstarted-mode") && !document.getElementById("movie_player").classList.contains("ad-showing") && window.location.href.indexOf("watch?v=") > -1) && (window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                 }), window.location.href.indexOf("watch?v=") > -1 ? document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Video doesn\'t play properly! <strong></strong></div>') : window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Video doesn\'t play properly! <strong></strong></div>'), setTimeout(function() {
                                    SetViolaTion(3)
                                 }, 2e3), clearInterval(p))
                              } catch (e) {}
                           }, 1e4))
                        }), window.location.href.indexOf("shorts") > -1 && (document.getElementById("shorts-player").classList.contains("buffering-mode") || document.getElementById("shorts-player").classList.contains("paused-mode") || document.getElementById("shorts-player").classList.contains("unstarted-mode")) && setTimeout(function() {
                           try {
                              (document.getElementById("shorts-player").classList.contains("paused-mode") || document.getElementById("shorts-player").classList.contains("unstarted-mode") && !document.getElementById("shorts-player").classList.contains("ad-showing") && window.location.href.indexOf("shorts") > -1) && (window.scrollTo({
                                 top: 0,
                                 behavior: "smooth"
                              }), window.location.href.indexOf("watch?v=") > -1 ? document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Video doesn\'t play properly! <strong></strong></div>') : window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Video doesn\'t play properly! <strong></strong></div>'), setTimeout(function() {
                                 SetViolaTion(3)
                              }, 2e3), clearInterval(p))
                           } catch (e) {}
                        }, 1e4)
                     } catch (o) {}
                  }
               })
            }, 3e3), CheckDuration(e), o = setInterval(function() {
               chrome.storage.sync.get("TimerStatus", e => {
                  1 == e.TimerStatus && (clearInterval(p), clearInterval(o), ResetWorkerData(), window.location.href.indexOf("watch?v=") > -1 ? (document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.watchmode{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: green; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="watchmode">ViewGrip:~$ Completed!! waiting for next video <strong></strong></div>'), document.getElementById("movie_player").classList.contains("ended-mode") || SimulateClick(document.querySelector("#movie_player")), window.scrollY > 0 && $("html").animate({
                     scrollTop: 0
                  }, 2e3)) : window.location.href.indexOf("shorts") > -1 && (document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.watchmode{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: green; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="watchmode">ViewGrip:~$ Completed!! waiting for next video <strong></strong></div>'), SimulateClick(document.querySelector("#shorts-player"))))
               })
            }, 2e3), i = setInterval(function() {
               try {
                  document.querySelector("video").currentTime > 10 && !document.getElementById("movie_player").classList.contains("ads-showing") ? (clearInterval(i), document.querySelector("video").currentTime = 0) : clearInterval(i)
               } catch (e) {}
            }, 500), setTimeout(function() {
               (function e() {
                  try {
                     if (0 !== f) {
                        if (!document.querySelector("#vgads")) {
                           var t = document.createElement("vgtagads");
                           t.innerHTML = '<style>.vgads{background: rgba(32, 30, 30, 0.8); overflow: hidden;width: 98%; height: 75px; margin-right: 5px; margin-left: 5px; border-color: #fff !important;border-style: double; bottom: 10px; margin-top: 40%; pointer-events:auto;position:absolute !important;z-index: 999999 !important;}.tilte{max-width: 60%;margin-top: 10px;margin-left: 5%;font-size: 20px;color: #ffc000; pointer-events:auto;font-family: Verdana;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}.text{max-width: 70%;margin-top: 5px;margin-left: 5%;font-size: 12px;color: #d0cdc2;pointer-events:auto;font-family: Verdana;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}.vgbutton{float: right; margin-left: -50%; margin-top: 1em; margin-right: 30px;background-color: #0C04FF !important;border-radius: 5px;font-size: 17px; font-family: Verdana;padding: 6px 18px;color: #dae1da;pointer-events:auto;}.vgbutton:hover{border: 3px solid #dae1da;pointer-events:auto;}.adsby{margin-top:1px;font-size:10px;color:#dae1da;float:right;margin-right:30px;font-family: Verdana;}.vgads:hover{border: 1px solid #fff;}.tilte:hover {color: #ff8300;} .text:hover {color: #fff;}</style><p><a href="' + m + '" target="_blank" style="text-decoration: none;"><div class="vgads"> <div class="vgbutton">Open</div><div class="tilte"><b>' + u + '</b></div><div class="text">' + y + '</div><div class="adsby">Ad by ViewGrip</div></div></a></p>', document.querySelector(".ytp-iv-video-content").appendChild(t), t.setAttribute("id", "vgads")
                        }
                        var o = setTimeout(function() {
                           try {
                              $.ajax({
                                 url: "https://www.viewgrip.net/system/api_json/extension_api.php",
                                 headers: {
                                    "X-Requested-With": "XMLHttpRequest"
                                 },
                                 type: "POST",
                                 data: {
                                    impresion: f
                                 },
                                 cache: !1,
                                 timeout: 5e3
                              }).done(function() {}).fail(function() {})
                           } catch (e) {}
                        }, 3e4);
                        try {
                           document.getElementById("vgads").addEventListener("click", function(e) {
                              e.isTrusted && $.ajax({
                                 url: "https://www.viewgrip.net/system/api_json/extension_api.php",
                                 headers: {
                                    "X-Requested-With": "XMLHttpRequest"
                                 },
                                 type: "POST",
                                 data: {
                                    clickad: f
                                 },
                                 cache: !1,
                                 timeout: 5e3
                              }).done(function() {
                                 document.getElementById("vgads").style.display = "none", clearTimeout(o)
                              }).fail(function() {})
                           })
                        } catch (i) {}
                     }
                  } catch (n) {}
               })(), CheckAudio()
            }, 5e3), chrome.storage.sync.set({
               PlayingStatus: 1
            }), chrome.storage.sync.get("OnInteraction", e => {
               1 == e.OnInteraction && function e() {
                  if (d < 2) var t = 2e4;
                  else var t = getRandomInt(1e4, 6e4 * d / 3);
                  setTimeout(function() {
                     setTimeout(function() {
                        try {
                           let e = document.querySelector('.ytp-subtitles-button[aria-pressed="false"]');
                           if (e) {
                              SimulateClick(e);
                              return
                           }
                        } catch (t) {}
                     }, Math.floor(2e4 * Math.random()) + 1e4)
                  }, 1e4), window.location.href.indexOf("watch?v=") > -1 && setTimeout(function() {
                     (function e() {
                        try {
                           chrome.storage.sync.get("Onlike", e => {
                              if (1 == r && (void 0 === e.Onlike || 0 == e.Onlike)) {
                                 var t = document.querySelector('#top-level-buttons-computed #segmented-like-button [aria-pressed="false"], #top-level-buttons-computed [aria-pressed="false"] [animated-icon-type="LIKE"], #top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1) > a > #button:not(.style-default-active)');
                                 t ? $("html").animate({
                                    scrollTop: parseInt($("#above-the-fold").offset().top) - 100
                                 }, 3e3, function() {
                                    return setTimeout(function() {
                                       t && SimulateClick(t);
                                       var e = setInterval(function() {
                                          (document.querySelector('#top-level-buttons-computed [aria-pressed="true"] [animated-icon-type="LIKE"], #top-level-buttons-computed #segmented-like-button [aria-pressed="true"]') || document.querySelector("#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1) > a > #button").classList.contains("style-default-active")) && (clearInterval(e), L(), chrome.storage.sync.set({
                                             LikeStatus: 1
                                          }))
                                       }, 1e3)
                                    }, 1500), !1
                                 }) : L()
                              } else L()
                           })
                        } catch (t) {
                           L()
                        }
                     })()
                  }, t), chrome.storage.sync.set({
                     OnInteraction: 0
                  }), mouseHouverVideo()
               }()
            }), window.location.href.indexOf("watch?v=") > -1 ? document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.watchmode{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: green; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="watchmode">ViewGrip:~$ Auto watching is running <strong></strong></div>') : window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.watchmode{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: green; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="watchmode">ViewGrip:~$ Auto watching is running <strong></strong></div>')) : "paused" === navigator.mediaSession.playbackState && (clearInterval(g), SetViolaTion(3), window.location.href.indexOf("watch?v=") > -1 && document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Autoplay is blocked!, read  <b><a href="https://blog.viewgrip.net/allow-or-block-media-autoplay-in-firefox/" target="_blank">troubleshooting</a></b></div>'), window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Autoplay is blocked!, read  <b><a href="https://blog.viewgrip.net/allow-or-block-media-autoplay-in-firefox/" target="_blank">troubleshooting</a></b></div>'), document.getElementsByTagName("html")[0].style.pointerEvents = "auto"), setTimeout(function() {
               (function t() {
                  try {
                     (document.querySelector("#contents img.yt-img-shadow").src.includes("unavailable_video") || document.querySelector('[player-unavailable=""]') || document.getElementById("reason").lastChild || void 0 === document.querySelector("video").duration) && ($.ajax({
                        url: "https://www.viewgrip.net/system/api_json/extension_api.php",
                        headers: {
                           "X-Requested-With": "XMLHttpRequest"
                        },
                        type: "POST",
                        data: {
                           RemovedVideo: e
                        },
                        cache: !1,
                        timeout: 5e3
                     }).done(function() {
                        clearInterval(p)
                     }).fail(function() {
                        clearInterval(p)
                     }), SetViolaTion(7), clearInterval(p), clearInterval(g))
                  } catch (o) {}
               })()
            }, 2e3)), document.querySelector(".sbdd_b") && document.querySelector(".sbdd_b").remove())
         } catch (n) {}
      }, 1500), DismissButton(), h = setInterval(function() {
         try {
            document.getElementById("movie_player").classList.contains("ended-mode") && (clearInterval(h), document.querySelector("video").play())
         } catch (e) {}
      }, 4e3), b = setInterval(function() {
         chrome.storage.sync.get("TimerStatus", e => {
            2 == e.TimerStatus && (clearInterval(p), clearInterval(b), ResetWorkerData(), SimulateClick(document.querySelector("#logo-icon")))
         })
      }, 2e3), 0 == i ? C() : function e(o) {
         if (!window.location.href.includes(t)) var i = setInterval(function() {
            try {
               document.querySelector("#search-button-narrow") && SimulateClick(document.querySelector("#search-button-narrow")), document.querySelector('#search [name="search_query"]') ? (clearInterval(i), n.length > 1 ? setTimeout(function() {
                  var e;
                  e = o, 0 < n.length ? $(function() {
                     document.querySelector("#search-clear-button.ytd-searchbox ytd-button-renderer.ytd-searchbox") && SimulateClick(document.querySelector("#search-clear-button.ytd-searchbox ytd-button-renderer.ytd-searchbox")), setTimeout(function() {
                        $("#search-input.ytd-searchbox-spt input").focus().typetype(n, {
                           e: 0,
                           callback: function() {
                              var t = document.querySelector("#search-input.ytd-searchbox-spt input"),
                                 o = new MouseEvent("mouseover", {
                                    view: window,
                                    bubbles: !0,
                                    cancelable: !0
                                 }),
                                 i = setInterval(function() {
                                    t.dispatchEvent(o)
                                 }, 1e3);
                              t.addEventListener("mouseover", function() {
                                 if (clearInterval(i), document.querySelector("#search-icon-legacy.ytd-searchbox")) {
                                    var t = document.querySelector("#search-icon-legacy.ytd-searchbox");
                                    t.style.border = "solid 4px green", setTimeout(function() {
                                       SimulateClick(t), document.body.addEventListener("yt-page-data-updated", async () => {
                                          w()
                                       }), t.style.border = "", setTimeout(function() {
                                          e == location.href && (SetViolaTion(5), SimulateClick(document.querySelector("#logo-icon")))
                                       }, 5e3)
                                    }, 1e3)
                                 }
                                 if (document.querySelector("#searchbox-button")) {
                                    var o = document.querySelector("#searchbox-button");
                                    o.style.border = "solid 4px green", setTimeout(function() {
                                       SimulateClick(o), document.body.addEventListener("yt-page-data-updated", async () => {
                                          w()
                                       }), o.style.border = "", setTimeout(function() {
                                          e == location.href && (SetViolaTion(5), SimulateClick(document.querySelector("#logo-icon")))
                                       }, 5e3)
                                    }, 1e3)
                                 }
                              })
                           }
                        }).delay(1e3)
                     })
                  }, 1e3) : C()
               }, 1500) : C()) : window.location.href.indexOf("watch?v=") > -1 && clearInterval(i)
            } catch (t) {
               clearInterval(i), e()
            }
         }, 1e3)
      }(k)
   }
}

function AdSkips(e) {
   setInterval(function() {
      if (e > 1) var t = 1e3 * e;
      else var t = 100;
      AdsButton(t)
   }, 500)
}

function AdsButton(e) {
   setTimeout(function() {
      document.querySelector(".ytp-ad-skip-button") ? SimulateClick(document.querySelector(".ytp-ad-skip-button")) : document.querySelector(".ytp-ad-button-icon") ? (document.querySelector(".close-padding,.contains-svg,.ytp-ad-overlay-close-button") && SimulateClick(document.querySelector(".close-padding,.contains-svg,.ytp-ad-overlay-close-button")), document.querySelector(".ytp-ad-button.ytp-ad-info-dialog-mute-button.ytp-ad-button-link") && SimulateClick(document.querySelector(".ytp-ad-button.ytp-ad-info-dialog-mute-button.ytp-ad-button-link")), document.querySelectorAll(".ytp-ad-feedback-dialog-reason-input")[2] && SimulateClick(document.querySelectorAll(".ytp-ad-feedback-dialog-reason-input")[2]), document.querySelector(".ytp-ad-feedback-dialog-confirm-button") && SimulateClick(document.querySelector(".ytp-ad-feedback-dialog-confirm-button"))) : document.querySelector(".style-scope.ytd-popup-container yt-confirm-dialog-renderer a.yt-simple-endpoint.style-scope.yt-button-renderer") ? SimulateClick(document.querySelector(".style-scope.ytd-popup-container yt-confirm-dialog-renderer a.yt-simple-endpoint.style-scope.yt-button-renderer")) : document.querySelector(".ytd-mealbar-promo-renderer #dismiss-button a.yt-simple-endpoint.style-scope.ytd-button-renderer") && (SimulateClick(document.querySelector(".ytd-mealbar-promo-renderer #dismiss-button a.yt-simple-endpoint.style-scope.ytd-button-renderer")), document.querySelector(".ytd-mealbar-promo-renderer").parentElement.remove())
   }, e)
}

function DismissButton() {
   setInterval(function() {
      try {
         document.querySelector("#dismiss-button") && SimulateClick(document.querySelector("#dismiss-button"))
      } catch (e) {}
   }, 1e4)
}

function CheckDuration(e) {
   document.querySelector("video").duration < 15 && !document.getElementById("movie_player").classList.contains("ad-showing") && $.ajax({
      url: "https://www.viewgrip.net/system/api_json/extension_api.php",
      headers: {
         "X-Requested-With": "XMLHttpRequest"
      },
      type: "POST",
      data: {
         Duration: e
      },
      cache: !1,
      timeout: 5e3
   }).done(function() {
      clearInterval(autostarted)
   }).fail(function() {
      clearInterval(autostarted)
   })
}

function CheckAudio() {
   $(document).ready(function() {
      $("video").on("play pause ended timeupdate volumechange", e)
   });

   function e() {
      $("video").prop("muted") && SetViolaTion(4)
   }
}

function SetViolaTion(e) {
   1 == e ? (chrome.storage.sync.set({
      Violation: e
   }), document.getElementsByTagName("video")[0].pause(), window.location.href.indexOf("watch?v=") > -1 ? document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ The video page has been refreshed! <strong></strong></div>') : window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ The video page has been refreshed! <strong></strong></div>'), ResetWorkerData()) : 2 == e ? (chrome.storage.sync.set({
      Violation: e
   }), document.getElementsByTagName("video")[0].pause(), window.location.href.indexOf("watch?v=") > -1 ? document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Invalid playback speed! <strong></strong></div>') : window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Invalid playback speed! <strong></strong></div>'), ResetWorkerData()) : 3 == e ? (chrome.storage.sync.set({
      Violation: e
   }), window.location.href.indexOf("watch?v=") > -1 ? document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Videos are not playing! <strong></strong></div>') : window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Videos are not playing! <strong></strong></div>'), ResetWorkerData()) : 4 == e ? (chrome.storage.sync.set({
      Violation: e
   }), document.getElementsByTagName("video")[0].pause(), window.location.href.indexOf("watch?v=") > -1 ? document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Video muted! <strong></strong></div>') : window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Video muted! <strong></strong></div>'), ResetWorkerData()) : 5 == e ? (chrome.storage.sync.set({
      Violation: e
   }), window.location.href.indexOf("watch?v=") > -1 ? document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Something seems wrong! <strong></strong></div>') : window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Something seems wrong! <strong></strong></div>'), ResetWorkerData()) : 6 == e ? (chrome.storage.sync.set({
      Violation: e
   }), window.location.href.indexOf("watch?v=") > -1 ? document.querySelector("#messages") && (document.querySelector("#messages").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.5em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Something seems wrong! <strong></strong></div>') : window.location.href.indexOf("shorts") > -1 && document.querySelector("#multimix-attribution-label") && (document.querySelector("#multimix-attribution-label").innerHTML = '<style>.nothumans{padding: 20px; font-size: 1.2em; background-color: #1e1f20; color: #f00; font-family: Consolas;}strong:after{content:"_";opacity:0;animation:cursor 1s infinite;color:#fff}@keyframes cursor{0%{opacity:0}40%{opacity:0}50%{opacity:1}90%{opacity:1}100%{opacity:0}}</style><div class="nothumans">ViewGrip:~$ Something seems wrong! <strong></strong></div>'), ResetWorkerData()) : 7 == e && (chrome.storage.sync.set({
      Violation: e
   }), ResetWorkerData())
}

function SimulateClick(e) {
   simulateMouseEvent = function(e, t, o, i) {
      e.dispatchEvent(new MouseEvent(t, {
         view: window,
         bubbles: !0,
         cancelable: !0,
         clientX: o,
         clientY: i,
         button: 0
      }))
   };
   var t = e.getBoundingClientRect(),
      o = t.left + (t.right - t.left) / 2,
      i = t.top + (t.bottom - t.top) / 2;
   simulateMouseEvent(e, "mousedown", o, i), simulateMouseEvent(e, "mouseup", o, i), simulateMouseEvent(e, "mouseover", o, i), simulateMouseEvent(e, "mousemove", o, i), simulateMouseEvent(e, "focusin", o, i), simulateMouseEvent(e, "click", o, i)
}

function mouseHouverVideo() {
   SimulateClick(document.querySelector(".ytp-gradient-bottom")), mousehouver = setInterval(function() {
      var e = document.querySelector("video"),
         t = function(e, t, o, i) {
            e.dispatchEvent(new MouseEvent(t, {
               view: window,
               bubbles: !0,
               cancelable: !1,
               clientX: o,
               clientY: i
            }))
         },
         o = e.getBoundingClientRect(),
         i = o.left + (o.right - o.left) / 2,
         n = o.top + (o.bottom - o.top) / 2;
      t(e, "mouseover", i, n), t(e, "mousemove", i, n), t(e, "focus", i, n)
   }, 100)
}

function mouseHouverProgress() {
   var e = 1;
   if (clearInterval(mousehouver), window.location.href.indexOf("watch?v=") > -1) var t = setInterval(function() {
      var o = document.querySelector(".ytp-progress-bar"),
         i = function(e, t, o) {
            e.dispatchEvent(new MouseEvent(t, {
               view: window,
               bubbles: !0,
               cancelable: !1,
               clientX: o
            }))
         };
      coordX = e, i(o, "mouseover", coordX), i(o, "mousemove", coordX), i(o, "focus", coordX), e >= o.offsetWidth && clearInterval(t), e++
   }, 50)
}

function ReloadExtension() {
   try {
      browser.runtime.sendMessage({
         finish: "reload"
      })
   } catch (e) {
      ReloadExtension()
   }
}

function GetDataPlay(e) {
   chrome.storage.sync.get("PlayingStatus", t => {
      1 == t.PlayingStatus && e(t.PlayingStatus)
   })
}

function SetDataPlay() {
   chrome.storage.sync.set({
      PlayingStatus: 0
   }), chrome.storage.sync.set({
      Violation: 0
   }), chrome.storage.sync.set({
      LikeStatus: 0
   }), chrome.storage.sync.set({
      SubscribeStatus: 0
   }), chrome.storage.sync.set({
      CommentStatus: 0
   }), chrome.storage.sync.set({
      LikeOnCommentStatus: 0
   })
}

function GetWorkerData(e, t, o, i, n, a, r, s, l, c, d, f, u, y, m) {
   chrome.storage.sync.set({
      AjaxData: {
         sid: e,
         eurl: t,
         title: o,
         type: i,
         ekey: n,
         ads: a,
         likes: r,
         subscribe: s,
         comment: l,
         likeoncomment: c,
         progtime: d,
         adid: f,
         titlead: u,
         textad: y,
         urlad: m
      }
   })
}

function SetTimerStatus(e) {
   chrome.storage.sync.set({
      TimerStatus: e
   })
}

function ResetWorkerData() {
   chrome.storage.sync.set({
      AjaxData: {
         sid: 0,
         eurl: 0,
         title: 0,
         type: 0,
         ekey: 0,
         ads: 0,
         likes: 0,
         subscribe: 0,
         comment: 0,
         likeoncomment: 0,
         progtime: 0,
         adid: 0,
         titlead: 0,
         textad: 0,
         urlad: 0
      }
   })
}

function GetViolaTion(e) {
   chrome.storage.sync.get("Violation", t => {
      t.Violation > 0 && e(t.Violation)
   })
}

function GetInteractionStatus(e) {
   chrome.storage.sync.get(["LikeStatus", "SubscribeStatus", "CommentStatus", "LikeOnCommentStatus"], t => {
      e(t.LikeStatus, t.SubscribeStatus, t.CommentStatus, t.LikeOnCommentStatus)
   })
}

function WorkerResponse(e) {
   chrome.storage.sync.set({
      WorkerResponse: e
   })
}
startExtension(), exportFunction(GetDataPlay, window, {
   defineAs: "GetDataPlay"
}), exportFunction(SetDataPlay, window, {
   defineAs: "SetDataPlay"
}), exportFunction(GetWorkerData, window, {
   defineAs: "GetWorkerData"
}), exportFunction(SetTimerStatus, window, {
   defineAs: "SetTimerStatus"
}), exportFunction(ResetWorkerData, window, {
   defineAs: "ResetWorkerData"
}), exportFunction(ReloadExtension, window, {
   defineAs: "ReloadExtension"
}), exportFunction(GetViolaTion, window, {
   defineAs: "GetViolaTion"
}), exportFunction(GetInteractionStatus, window, {
   defineAs: "GetInteractionStatus"
}), exportFunction(WorkerResponse, window, {
   defineAs: "WorkerResponse"
}), exportFunction(InstallStatus, window, {
   defineAs: "InstallStatus"
});