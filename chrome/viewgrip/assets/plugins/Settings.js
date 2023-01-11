chrome.storage.sync.get("Onlike", e => {
   "undefined" === e.Onlike || null === e.Onlike || 0 == e.Onlike ? $("#onlike").prop("checked", !0) : $("#onlike").prop("checked", !1)
}), chrome.storage.sync.get("Onsubscribe", e => {
   "undefined" === e.Onsubscribe || null === e.Onsubscribe || 0 == e.Onsubscribe ? $("#onsubscribe").prop("checked", !0) : $("#onsubscribe").prop("checked", !1)
}), chrome.storage.sync.get("Oncomment", e => {
   "undefined" === e.Oncomment || null === e.Oncomment || 0 == e.Oncomment ? $("#oncomment").prop("checked", !0) : $("#oncomment").prop("checked", !1)
}), chrome.storage.sync.get("Onlikecomment", e => {
   "undefined" === e.Onlikecomment || null === e.Onlikecomment || 0 == e.Onlikecomment ? $("#onlikecomment").prop("checked", !0) : $("#onlikecomment").prop("checked", !1)
}), $("#onlike").on("change", function() {
   $(this).is(":checked") ? chrome.storage.sync.set({
      Onlike: 0
   }) : chrome.storage.sync.set({
      Onlike: 1
   })
}), $("#onsubscribe").on("change", function() {
   $(this).is(":checked") ? chrome.storage.sync.set({
      Onsubscribe: 0
   }) : chrome.storage.sync.set({
      Onsubscribe: 1
   })
}), $("#oncomment").on("change", function() {
   $(this).is(":checked") ? chrome.storage.sync.set({
      Oncomment: 0
   }) : chrome.storage.sync.set({
      Oncomment: 1
   })
}), $("#onlikecomment").on("change", function() {
   $(this).is(":checked") ? chrome.storage.sync.set({
      Onlikecomment: 0
   }) : chrome.storage.sync.set({
      Onlikecomment: 1
   })
});