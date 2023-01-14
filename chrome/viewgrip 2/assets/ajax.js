/*!
 * ViewGrip JavaScript Library v2.9
 * https://www.viewgrip.net/
 * Date: 2021-09-24T17:08Z
 */

null == localStorage.getItem("userID")
  ? ($.ajax({ url: "https://www.viewgrip.net/system/addon-api.php", headers: { "X-Requested-With": "XMLHttpRequest" }, type: "POST", data: { autolog: 1 }, cache: !1, timeout: 5e3 })
      .done(function (b) {
        let a = jQuery.parseJSON(b);
        a.autologin
          ? ($("#message").html('<div class="alert alert-primary" role="alert"><i class="simple-icon-hourglass"> Synchronizing <img src="img/loader.gif" alt="Requesting data"></div>'),
            localStorage.setItem("userID", a.autologin),
            setTimeout(function () {
              location.reload();
            }, 3e3),
            $("#theform").hide(),
            $("#join").hide(),
            $("#logout").show(),
            $("#datainfo").show())
          : (localStorage.removeItem("userID"), localStorage.removeItem("userpass"), localStorage.clear());
      })
      .fail(function (a) {
        $("#noconection").html('<div class="alert alert-danger" role="alert"><i class="simple-icon-info"></i> Conection Error !</div>');
      }),
    $("#theform").show(),
    $("#datainfo").hide(),
    $("#join").show(),
    $("#logout").hide(),
    $("#main_nav").text("Login"),
    $("#nologin").html('<div class="alert alert-danger" role="alert"><i class="simple-icon-exclamation"> Please login !</div>'),
    $("#nologin2").html('<div class="alert alert-danger" role="alert"><i class="simple-icon-exclamation"> Please login !</div>'))
  : ($.ajax({
      url: "https://www.viewgrip.net/system/addon-api.php",
      headers: { "X-Requested-With": "XMLHttpRequest" },
      type: "POST",
      data: { userid: localStorage.getItem("userID"), userpass: localStorage.getItem("userpass") },
      cache: !1,
      timeout: 5e3,
    })
      .done(function (b) {
        switch (b) {
          case "NO_ID":
            $("#message").html('<div class="alert alert-danger" role="alert"><i class="simple-icon-close"></i> Wrong ID or Password!</div>'),
              localStorage.removeItem("userID"),
              localStorage.removeItem("userpass"),
              localStorage.clear(),
              setTimeout(function () {
                location.reload();
              }, 2e3);
            break;
          case "MUCH_message":
            $("#message").html('<div class="alert alert-danger" role="alert"><i class="simple-icon-lock"></i> Locked for 30 minutes !</div>'),
              localStorage.removeItem("userID"),
              localStorage.removeItem("userpass"),
              localStorage.clear(),
              setTimeout(function () {
                location.reload();
              }, 2e3);
            break;
          case "IP_BLAKCLIST":
            $("#message").html('<div class="alert alert-danger" role="alert"><i class="simple-icon-shield"></i> IP has been blocked</div>'),
              localStorage.removeItem("userID"),
              localStorage.removeItem("userpass"),
              localStorage.clear(),
              setTimeout(function () {
                location.reload();
              }, 2e3);
            break;
          case "BANNED":
            $("#message").html('<div class="alert alert-danger" role="alert"><i class="simple-icon-ban"></i> Acc is banned!</div>'),
              localStorage.removeItem("userID"),
              localStorage.removeItem("userpass"),
              localStorage.clear(),
              setTimeout(function () {
                location.reload();
              }, 2e3);
            break;
          case "NOT_ACTIVE":
            $("#message").html('<div class="alert alert-primary" role="alert"><i class="simple-icon-exclamation"></i> Please confirm your email!</div>'),
              localStorage.removeItem("userID"),
              localStorage.removeItem("userpass"),
              localStorage.clear(),
              setTimeout(function () {
                location.reload();
              }, 2e3);
            break;
          case "ATTEMPT_LOGIN":
            $("#message").html('<div class="alert alert-primary" role="alert"><i class="simple-icon-exclamation"></i> You must login via the site!</div>'),
              localStorage.removeItem("userID"),
              localStorage.removeItem("userpass"),
              localStorage.clear(),
              setTimeout(function () {
                location.reload();
              }, 2e3);
            break;
          case "SESSION_ACTIVE":
            $("#message").html('<div class="alert alert-primary" role="alert"><i class="simple-icon-exclamation"></i> You are logged in !</div>'),
              localStorage.removeItem("userID"),
              localStorage.removeItem("userpass"),
              localStorage.clear(),
              setTimeout(function () {
                location.reload();
              }, 2e3);
            break;
          default:
            let a = jQuery.parseJSON(b);
            $("#credit").text(a.credit),
              $("#user").text(a.user),
              $("#type").text(a.type),
              $("#balance").text(a.balance),
              null == a.credit &&
                setTimeout(function () {
                  location.reload();
                }, 2e3);
        }
      })
      .fail(function (a) {
        $("#noconection").html('<div class="alert alert-danger" role="alert"><i class="simple-icon-info"></i> Conection Error !</div>');
      }),
    $.ajax({ url: "https://www.viewgrip.net/system/addon-api.php", headers: { "X-Requested-With": "XMLHttpRequest" }, type: "POST", data: { getcoupon: 1 }, cache: !1, timeout: 5e3 })
      .done(function (b) {
        let a = jQuery.parseJSON(b);
        $("#code").text(a.code), $("#reward").text(a.reward), $("#req").text(a.req), $("#status").text(a.status);
      })
      .fail(function (a) {
        $("#noconection").html('<div class="alert alert-danger" role="alert"><i class="simple-icon-info"></i> Conection Error !</div>');
      }),
    $("#theform").hide(),
    $("#join").hide(),
    $("#logout").show(),
    $("#datainfo").show(),
    $("#nologin").show(),
    $("#main_nav").text("Main")),
  $("#theform").submit(function () {
    let a = $("#uniqueID").val(),
      b = $("#password").val();
    return localStorage.setItem("userID", a), localStorage.setItem("userpass", b), location.reload(), !1;
  }),
  $("#logoutbutton").on("click", function () {
    $(this).attr("value", "Wait ..."),
      $(this).attr("disabled", "true"),
      $.ajax({ url: "https://www.viewgrip.net/system/addon-api.php", headers: { "X-Requested-With": "XMLHttpRequest" }, type: "POST", data: { logout: 1 }, cache: !1, timeout: 5e3 })
        .done(function (a) {
          localStorage.removeItem("userID"), localStorage.removeItem("userpass"), localStorage.clear(), location.reload();
        })
        .fail(function (a) {
          alert("Server is Bussy"), location.reload();
        });
  }),
  $("#openclient").on("click", function () {
    window.open("https://www.viewgrip.net/api/worker.php", "myclient", "toolbar=no,location=yes,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=420,height=740,left=100,top=50");
  });


