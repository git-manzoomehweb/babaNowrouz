document.addEventListener("DOMContentLoaded", function () {
  function fetchEngine() {
    if (document.getElementById("search-box")) {
      try {
        var xhrobj = new XMLHttpRequest();
        xhrobj.open("GET", "searchengine.bc");
        xhrobj.send();

        xhrobj.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            var container = document.getElementById("search-box");
            container.innerHTML = xhrobj.responseText;


            if(document.querySelector("body.flight-landing")){
              const depName=document.querySelector(".dep-name").innerText
              const desName=document.querySelector(".des-name").innerText

              const depId=document.querySelector(".dep-id").innerText
              const desId=document.querySelector(".des-id").innerText

              console.log("depname:",depName,"desname:",desName,"depid:",depId,"desid:",desId);
              

              document.querySelector("#r-flight .departure").value=depName
              document.querySelector("#r-flight .destination").value=desName

              document.querySelector('#r-flight .departure-route .locationId.from').value=depId
              document.querySelector('#r-flight .destination-route .locationId.to').value=desId

              console.log(document.querySelector("#r-flight .departure").value);
              console.log( document.querySelector('#r-flight .departure-route .locationId.from').value);
              
              
            }

            // Re-run inline scripts in response
            var scripts = container.getElementsByTagName("script");
            for (var i = 0; i < scripts.length; i++) {
              var scriptTag = document.createElement("script");
              if (scripts[i].src) {
                scriptTag.src = scripts[i].src;
                scriptTag.async = false;
              } else {
                scriptTag.text = scripts[i].textContent;
              }
              document.head
                .appendChild(scriptTag)
                .parentNode.removeChild(scriptTag);
            }
          }
        };
      } catch (error) {
        console.error("an error ocurred.", error);
      }
    }
  }

  // Wait for specific CSS file (optional, or remove this part if not needed)
  const cssHref = "[##cms.cms.cdn##]/css/customized.ui.min.css";
  const link = document.querySelector(`link[href="${cssHref}"]`);
  if (link) {
    if (link.sheet) {
      fetchEngine();
    } else {
      link.addEventListener("load", fetchEngine); // Wait until loaded
    }
  } else {
    fetchEngine();
  }
});
// ____________________________________
// ____________________________________
// ____________________________________
// function watchForFlightTypeField(callback) {
//   const observer = new MutationObserver((mutationsList) => {
//     for (const mutation of mutationsList) {
//       for (const node of mutation.addedNodes) {
//         if (node.nodeType === Node.ELEMENT_NODE) {
//           if (node.matches(".flighttype-field")) {
//             callback(node);
//           }

//           const matches = node.querySelectorAll(".flighttype-field");
//           matches.forEach((match) => callback(match));
//         }
//       }
//     }
//   });

//   observer.observe(document.body, {
//     childList: true,
//     subtree: true,
//   });

//   document.querySelectorAll(".flighttype-field").forEach(callback);
// }
// watchForFlightTypeField((el) => {
//   const liObserver = new MutationObserver((mutationsList) => {
//     for (const mutation of mutationsList) {
//       if (
//         mutation.type === "attributes" &&
//         mutation.attributeName === "class"
//       ) {
//         const target = mutation.target;
//         if (target.classList.contains("active-module")) {
//           const navValue = target.getAttribute("data-nav");
//           if (navValue) {
//             document.querySelectorAll(".reservation-item li").forEach((li) => {
//               const val = li.getAttribute("data-nav");
//               if (val) {
//                 document.body.classList.remove(val);
//               }
//             });
//             document.body.classList.add(navValue);
//           }
//         }
//       }
//     }
//   });

//   const reservationItems = document.querySelectorAll(".reservation-item li");
//   reservationItems.forEach((li) => {
//     liObserver.observe(li, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });
//   });
// });
// _______________________________
// _______________________________
const target = document.querySelector("main");
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".footer-landing-items")) {
    const homePaths = [
      "/",
      "/flight",
      "/hotel",
      "/flighthotel",
      "/tour",
      "/train",
      "/insurance",
    ];

    const currentPath = window.location.pathname;
    const isHomePage = homePaths.includes(currentPath);
    const isNotHome = !isHomePage;

    const flightItem = document.querySelectorAll('a[data-id="flight"]');
    const hotelItem = document.querySelectorAll('a[data-id="hotel"]');
    const flightHotelItem = document.querySelectorAll(
      'a[data-id="flighthotel"]'
    );
    const tourItem = document.querySelectorAll('a[data-id="tour"]');
    const trainItem = document.querySelectorAll('a[data-id="train"]');
    const insuranceItem = document.querySelectorAll('a[data-id="insurance"]');
    if (isNotHome) {
      if (flightItem) {
        flightItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "/flight";
          });
        });
      }
      if (tourItem) {
        tourItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "/tour";
          });
        });
      }
      if (trainItem) {
        trainItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "/train";
          });
        });
      }
      if (insuranceItem) {
        insuranceItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "/insurance";
          });
        });
      }
      if (flightHotelItem) {
        flightHotelItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "/flighthotel";
          });
        });
      }

      if (hotelItem) {
        hotelItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "/hotel";
          });
        });
      }
    } else {
      if (flightItem) {
        flightItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: "smooth" });
            }
            check_searchHistory("flight");
            check_landing("flight");
            e.preventDefault();
          });
        });
      }
      if (tourItem) {
        tourItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
            check_searchHistory("tour");
            check_landing("tour");
          });
        });
      }
      if (trainItem) {
        trainItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
            check_searchHistory("train");
            check_landing("train");
          });
        });
      }
      if (insuranceItem) {
        insuranceItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
            check_searchHistory("insurance");
            check_landing("insurance");
          });
        });
      }
      if (flightHotelItem) {
        flightHotelItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
            check_searchHistory("flighthotel");
            check_landing("flighthotel");
          });
        });
      }
      if (hotelItem) {
        hotelItem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
            check_searchHistory("hotel");
            check_landing("hotel");
          });
        });
      }
    }
  }
});
// _______________________________
// _______________________________
if (document.querySelectorAll(".swiper-4").length > 0)
  swiper = new Swiper(".swiper-4", {
    slidesPerView: 4,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 8,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 4, spaceBetween: 8 },
      768: { slidesPerView: 4, spaceBetween: 8 },
      1024: { slidesPerView: 4, spaceBetween: 8 },
    },
  });
if (document.querySelectorAll(".swiper-3").length > 0)
  swiper = new Swiper(".swiper-3", {
    slidesPerView: 3,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 16,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 3, spaceBetween: 16 },
      768: { slidesPerView: 3, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 16 },
    },
  });
if (document.querySelectorAll(".swiper-mobile").length > 0)
  swiper = new Swiper(".swiper-mobile", {
    slidesPerView: 1.5,
    speed: 700,
    centeredSlides: !1,
    spaceBetween: 10,
    grabCursor: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    loop: 0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next-f",
      prevEl: ".swiper-button-prev-f",
    },
    breakpoints: {
      640: { slidesPerView: 1.5, spaceBetween: 10 },
      768: { slidesPerView: 1.5, spaceBetween: 10 },
      1024: { slidesPerView: 1.5, spaceBetween: 10 },
    },
  });
const headerMenu = document.querySelector(".header-menu");
const headerMenuClose = document.querySelector(".header-menu-close");
const bars3 = document.querySelector(".bars3");

if (window.innerWidth >= 1024) {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.visibility = "hidden";
    headerMenu.style.opacity = "0";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.visibility = "visible";
    headerMenu.style.opacity = "1";
  });
} else {
  headerMenuClose.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(1024px)";
  });
  bars3.addEventListener("click", function () {
    headerMenu.style.transform = "translateX(0)";
  });
}
const mobileMenuClosers = document.querySelectorAll(".close-mobile-nav");
mobileMenuClosers.forEach((li) => {
  li.addEventListener("click", () => {
    headerMenu.style.transform = "translateX(1024px)";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleDropdowns = document.querySelectorAll(".toggle-dropdown");
  const dropdownIcons = document.querySelectorAll(".dropdown-icon");

  toggleDropdowns.forEach((toggle, index) => {
    const submenu = toggle.nextElementSibling;
    const dropdownIcon = dropdownIcons[index];

    toggle.addEventListener("click", function () {
      dropdownIcon.classList.toggle("rotate-180");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
        submenu.style.opacity = "0";
      } else {
        submenu.style.maxHeight = submenu.scrollHeight * 30 + "px";
        submenu.style.opacity = "1";
      }
    });
  });
});
const commonQS = document.querySelector(".common-question");
if (commonQS) {
  const qusetions = commonQS.querySelectorAll(".box");
  qusetions.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
  const qstion = commonQS.querySelectorAll(".box");
  qstion.forEach((item) => {
    document.addEventListener("click", (e) => {
      if (!item.contains(e.target)) {
        item.classList.remove("active");
      }
    });
  });
}

if (document.querySelectorAll(".swiper-one").length > 0) {
  const swiper = new Swiper(".swiper-one", {
    direction: "vertical",
    slidesPerView: 3,
    speed: 400,
    centeredSlides: !1,
    spaceBetween: 7,
    grabCursor: !0,
    touchReleaseOnEdges: true,
    pagination: { el: ".swiper-pagination-first-mob", clickable: !0 },
    breakpoints: {
      640: { slidesPerView: 3, spaceBetween: 7 },
      768: { slidesPerView: 3, spaceBetween: 7 },
      1024: { slidesPerView: 3, spaceBetween: 7 },
    },
  });
}
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________
// ______________________prev_js_____________________________

if (document.getElementById("special-tours")) {
  var swiper = new Swiper("#special-tours", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-special-tours",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

if (document.getElementById("destination-tours")) {
  var swiper = new Swiper("#destination-tours", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-destination-tours",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

if (document.getElementById("mag-article")) {
  var swiper = new Swiper("#mag-article", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-mag-article",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

// END SLIDER DEFAULT-MOBILE

// ARTICLE-LIST SLIDER
if (document.getElementById("top-article")) {
  var swiper = new Swiper("#top-article", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-top-article",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

// ARTICLE - VIEW

function loadContentArticlePage() {
  if (document.getElementById("news-article")) {
    var swiper = new Swiper("#news-article", {
      slidesPerView: 1,
      speed: 400,
      centeredSlides: true,
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination-news-article",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        650: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
  document
    .getElementById("closePopuparticle")
    .addEventListener("click", function () {
      document.getElementById("popuparticle").classList.add("hidden");
      window.location.reload();
    });
}

function activeTebComment(element, container) {
  document.querySelectorAll(".comment-tab-title").forEach((el) => {
    el.classList.remove("border-primary-400");
    el.classList.remove("bg-primary-100");
    el.classList.remove("text-neutralcolor-700");
  });
  document.querySelectorAll(".comment-boxes").forEach((el) => {
    el.classList.add("hidden");
  });
  element.classList.add("border-primary-400");
  element.classList.add("bg-primary-100");
  element.classList.add("text-neutralcolor-700");
  document.getElementById(container).classList.remove("hidden");
}
/*------------------REFRESH CAPTCHA-----------------------*/
async function reactionSubmit(id, type) {
  const response = await fetch("Client_CheckAuthentication.inc");
  if (!response.ok) {
    throw new Error(
      "متاسفانه مشکلی به وجود آمده است لطفا بعدا مجددا تلاش فرمایید."
    );
  } else {
    let CheckAuthentication = await response.text();
    if (CheckAuthentication === "true") {
      var xhr = new XMLHttpRequest();
      var url =
        "/Like-Dislike.bc?id=" +
        encodeURIComponent(id) +
        "&type=" +
        encodeURIComponent(type);
      xhr.open("GET", url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
          } else {
          }
        }
      };
      xhr.send();
    } else {
      showLoginContainer(this);
    }
  }
}

function refresh_captcha(element, event) {
  var form = element.closest("form");
  var captchaElement = form.querySelector(".load-captcha");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/Client_Captcha.bc", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      captchaElement.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

async function Reply_Comment(element) {
  const responsereply = await fetch("Client_CheckAuthentication.inc");
  if (!responsereply.ok) {
    throw new Error(
      "متاسفانه مشکلی به وجود آمده است لطفا بعدا مجددا تلاش فرمایید."
    );
  } else {
    let CheckAuthentication = await responsereply.text();
    if (CheckAuthentication === "true") {
      var firstname = document.querySelector(
        ".user-profile-header .default-name"
      ).innerText;
      var lastname = document.querySelector(
        ".user-profile-header .default-family"
      ).innerText;
      element.closest(".opinionRow").querySelector(".reply-title").value =
        firstname + " " + lastname;
      element
        .closest(".opinionRow")
        .querySelector(".replyCommentForm")
        .classList.toggle("hidden");
    } else {
      showLoginContainer(this);
    }
  }
}

async function SubmitOpinionForm(element, event) {
  event.preventDefault();
  const response = await fetch("Client_CheckAuthentication.inc");
  if (!response.ok) {
    throw new Error(
      "متاسفانه مشکلی به وجود آمده است لطفا بعدا مجددا تلاش فرمایید."
    );
  } else {
    let CheckAuthentication = await response.text();
    if (CheckAuthentication === "true") {
      var form = new FormData(element.closest("form"));
      var xhr = new XMLHttpRequest();
      xhr.open("POST", element.closest("form").action, true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          document.getElementById("popupMessage").innerHTML = xhr.responseText;
          document.getElementById("popuparticle").classList.remove("hidden");
        } else {
          document.getElementById("popupMessage").innerHTML = xhr.responseText;
          document.getElementById("popuparticle").classList.remove("hidden");
        }
      };
      xhr.send(form);
      // window.location.reload();
    } else {
      showLoginContainer(this);
    }
  }
}

async function send_Reply(element, event) {
  event.preventDefault();
  var form = new FormData(element.closest("form"));
  var xhr = new XMLHttpRequest();
  xhr.open("POST", element.closest("form").action, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("popupMessage").innerHTML = xhr.responseText;
      document.getElementById("popuparticle").classList.remove("hidden");
    } else {
      document.getElementById("popupMessage").innerHTML = xhr.responseText;
      document.getElementById("popuparticle").classList.remove("hidden");
    }
  };
  xhr.send(form);
}

// TOURLIST - SLIDER AND SEARCH FUNCTIONS

if (document.getElementById("news-article")) {
  var swiper = new Swiper("#news-article", {
    slidesPerView: 1,
    speed: 400,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-news-article",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

var input = document.getElementById("searchcontent");
var isItemSelected = false; // برای بررسی اینکه آیا چیزی انتخاب شده است یا خیر

if (input) {
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // event.preventDefault();
      this.form.submit();
    }
  });
  // input.onkeyup = function () {
  //   if (this.value.length !== 0) {
  //     if (document.querySelector('.search-content ul')) {
  //       document.querySelector('.search-content ul').classList.remove('hidden');
  //       var filter = input.value.toUpperCase();
  //       var lis = document.querySelector('.search-content').getElementsByTagName('li');
  //       isItemSelected = false; // ریست کردن وقتی که کاربر چیزی در ورودی می‌نویسد

  //       for (var i = 0; i < lis.length; i++) {
  //         var name = lis[i].innerHTML;
  //         if (name.toUpperCase().indexOf(filter) == 0) {
  //           lis[i].style.display = 'list-item';
  //         } else {
  //           lis[i].style.display = 'none';
  //         }
  //       }
  //     }
  //   } else {
  //     var lis = document.querySelector('.search-content').getElementsByTagName('li');
  //     for (var i = 0; i < lis.length; i++) {
  //       lis[i].style.display = 'list-item';
  //     }
  //     if (document.querySelector('.search-content ul')) {
  //       document.querySelector('.search-content ul').classList.remove('hidden');
  //     }
  //   }
  // };

  // // اضافه کردن رویداد keydown برای شناسایی کلید Enter
  // input.addEventListener('keydown', function (event) {
  //   if (event.key === 'Enter') {
  //     event.preventDefault(); // جلوگیری از رفتار پیش‌فرض

  //     // اگر آیتمی انتخاب شده بود فرم سابمیت شود
  //     if (isItemSelected && input.value.length !== 0) {
  //       document.getElementById('search-content-tour').submit();
  //     }
  //   }
  // });

  // if (document.getElementById('search-content-tour')) {
  //   document.getElementById('search-content-tour').addEventListener('submit', function (e) {
  //     if (!isItemSelected) {
  //       e.preventDefault();
  //       document.getElementById('catidsearched').value = 0; // اگر هیچ چیزی انتخاب نشده باشد catid را 0 قرار دهید
  //       var lis = document.querySelector('.search-content').getElementsByTagName('li');
  //       for (var i = 0; i < lis.length; i++) {
  //         lis[i].style.display = 'list-item';
  //       }
  //       if (document.querySelector('.search-content ul')) {
  //         document.querySelector('.search-content ul').classList.remove('hidden');
  //       }
  //     }
  //   });
  // }

  // function contentSearched(datatitle, datacatid) {
  //   input.value = datatitle;
  //   document.getElementById('catidsearched').value = datacatid;
  //   document.querySelector('.search-content ul').classList.add('hidden');
  //   isItemSelected = true; // وقتی آیتمی انتخاب می‌شود، این متغیر true شود
  //   document.getElementById('search-content-tour').submit();
  // }
}

function loadContentTourListPage(catid, typeid, elementload) {
  let thiselement = document.querySelector(".tour-category");
  LoadCatTour("load-items.bc", catid, typeid, elementload, thiselement);

  const contentSection = document.getElementById("content-section");
  const content = document.getElementById("content");
  const showMore = document.getElementById("show-more");

  if (content) {
    if (content.scrollHeight > 533) {
      showMore.style.display = "flex"; // نمایش دکمه "مشاهده بیشتر"
    }
  }

  // if (document.querySelector('.search-content ul')) {
  //   document.getElementById("search-content-container").classList.remove("hidden");
  // } else {
  //   document.getElementById("search-content-container").classList.add("hidden");
  // }

  // کلیک روی دکمه "مشاهده بیشتر"
  if (showMore) {
    showMore.addEventListener("click", function () {
      contentSection.style.height = "auto"; // تغییر ارتفاع به "auto" برای نمایش کامل محتوا
      contentSection.style.overflow = "visible"; // حذف overflow برای نمایش کامل
      showMore.style.display = "none"; // مخفی‌کردن دکمه "مشاهده بیشتر"
    });
  }
}

async function LoadCatTour(url, param1, param2, elementId, thiselement) {
  document.getElementById(elementId).innerHTML =
    '<div class="w-full text-center relative z-10 flex justify-center loading mt-24 mb-24"><svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg></div>';
  document.querySelectorAll(".tour-category").forEach((e) => {
    e.classList.remove("bg-primary-100");
    e.classList.remove("text-neutralcolor-700");
    e.classList.remove("border-primary-400");

    e.classList.add("text-neutralcolor-500");
    e.classList.add("border-neutralcolor-500");
  });
  thiselement.classList.add("bg-primary-100");
  thiselement.classList.add("text-neutralcolor-700");
  thiselement.classList.add("border-primary-400");

  thiselement.classList.remove("text-neutralcolor-500");
  thiselement.classList.remove("border-neutralcolor-500");

  try {
    const params = { catid: param1, typeid: param2 };
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${url}?${queryString}`;
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(
        "متاسفانه مشکلی به وجود آمده است لطفا بعدا مجددا تلاش فرمایید."
      );
    }
    const content = await response.text();

    // قرار دادن محتوا در المان مورد نظر
    document.getElementById(elementId).innerHTML = content;

    // پیدا کردن و اجرای اسکریپت‌های اینلاین
    const scripts = document
      .getElementById(elementId)
      .querySelectorAll("script");
    scripts.forEach((script) => {
      const newScript = document.createElement("script");
      if (script.src) {
        // اگر اسکریپت منبع خارجی دارد، آن را دوباره لود کنید
        newScript.src = script.src;
      } else {
        // اگر اسکریپت اینلاین است، متن آن را اجرا کنید
        newScript.innerHTML = script.innerHTML;
      }
      document.body.appendChild(newScript);
      document.body.removeChild(newScript); // برای جلوگیری از افزوده شدن غیرضروری به DOM
    });
  } catch (error) {
    console.error(error);
  }
}
// ______________________________
function handleSetClocks() {
  const clockElements = document.querySelectorAll(".set-clock");

  clockElements.forEach((element) => {
    const previousElement = element.previousElementSibling;

    if (!previousElement) return;

    if (element.innerHTML.trim() === "") {
      previousElement.style.setProperty("display", "none", "important");
    } else {
      previousElement.style.removeProperty("display");
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  handleSetClocks();
  const elements = document.querySelectorAll(".set-paddings");

  if (elements.length === 0) return;

  elements.forEach((element) => {
    if (element.innerHTML.trim() === "") {
      element.style.setProperty("display", "none", "important");
    } else {
      element.style.removeProperty("display");
    }
  });
});
