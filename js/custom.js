document.addEventListener("DOMContentLoaded", function () {
  if ($.fn.slick) {
    $(".diet_wrapper").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      speed: 400,
      dots: false,
      infinite: true,
      prevArrow: `<span class="left-arrow"><i class="fa-solid fa-angle-left"></i></span>`,
      nextArrow: `<span class="right-arrow"><i class="fa-solid fa-angle-right"></i></span>`,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }
  if ($.fn.slick) {
    $(".scroll-wrapper").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: false,
      infinite: true,
      centerMode: false, // important
    });
  }

  if ($.fn.niceSelect) {
    $("select.nice").niceSelect();
  }

  const menuBars = document.querySelectorAll(".menubar");
  const cross = document.querySelector(".cross_btn");
  const menuToToggle = document.querySelector(".side_menu");

  if (menuBars.length > 0 && menuToToggle) {
    menuBars.forEach((menuBar) => {
      menuBar.addEventListener("click", () => {
        menuToToggle.classList.add("active");
      });
    });
  }
  if (cross && menuToToggle) {
    cross.addEventListener("click", () => {
      menuToToggle.classList.remove("active");
    });
  }

  const angleBtn = document.querySelector(".angle_toggle_btn");
  const fullWidth = document.querySelector(".tk_width");

  if (angleBtn && menuToToggle && fullWidth) {
    angleBtn.addEventListener("click", () => {
      menuToToggle.classList.toggle("collapsed");
      fullWidth.classList.toggle("width_full");
    });
  }

  const dropdownButton = document.querySelector(".icon_dropdown");
  const iconTk = document.querySelector(".icon_area");

  if (dropdownButton && iconTk) {
    dropdownButton.addEventListener("click", function () {
      iconTk.classList.toggle("active");
    });
  }

  const dropdownMenu = document.querySelector(".dropdown_menu");

  if (dropdownMenu) {
    dropdownMenu.addEventListener("click", () => {
      dropdownMenu.classList.toggle("active_dropdown");
    });
  }

  const dropdownElement = document.querySelector(".dropdown_wrapper");
  if (dropdownElement) {
    dropdownElement.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  const filterBtn = document.querySelector(".filter_overly_btn");
  const closeFilter = document.querySelector(".close-filter");
  const filterArea = document.querySelector(".filter_option_area");

  if (filterBtn && closeFilter && filterArea) {
    filterBtn.addEventListener("click", () => {
      filterArea.classList.add("active");
    });

    closeFilter.addEventListener("click", () => {
      filterArea.classList.remove("active");
    });
  }
});

const sideMenu = document.querySelector(".side_menu");
const sidebar = document.querySelector(".sidebar");

function syncSidebarWidth() {
  if (!sideMenu || !sidebar) return;

  if (window.innerWidth >= 1300) {
    const sideMenuWidth = sideMenu.offsetWidth;
    // const newSidebarWidth = sideMenuWidth - 0;
    sidebar.style.width = sideMenuWidth + "px";
    sidebar.style.display = "block";
  } else {
    sidebar.style.width = "";
    sidebar.style.display = "";
  }
}
document.addEventListener("DOMContentLoaded", syncSidebarWidth);
window.addEventListener("load", syncSidebarWidth);
window.addEventListener("resize", syncSidebarWidth);

$(document).ready(function () {
  function setActiveSidebarLink() {
    const currentUrl = window.location.href.split("#")[0].split("?")[0];

    $(".sidebar_menu ul li a").removeClass("active");
    $(".sidebar_menu ul li.dropdown_menu").removeClass("open");

    $(".sidebar_menu ul li a").each(function () {
      const linkHref = this.href.split("#")[0].split("?")[0];

      if (linkHref === currentUrl) {
        $(this).addClass("active");

        if ($(this).closest(".dropdown").length) {
          const $parentLi = $(this).closest(".dropdown_menu");
          $parentLi.addClass("open");
          $parentLi.children("a").addClass("active");
        }
      }
    });
  }
  setActiveSidebarLink();
  $(".dropdown_menu > a").on("click", function (e) {
    e.preventDefault();
    const $parentLi = $(this).closest(".dropdown_menu");

    if ($parentLi.hasClass("open")) {
      $parentLi.removeClass("open");
    } else {
      $(".dropdown_menu").removeClass("open");
      $parentLi.addClass("open");
    }
  });

  const $allLinks = $(".sidebar_menu ul li a");
  $allLinks.on("mouseenter", function () {
    $allLinks.removeClass("active");
    $(this).addClass("active");
  });
  $allLinks.on("mouseleave", function () {
    setActiveSidebarLink();
  });

  const $filterButtons = $(".item_filter_btn button");
  const $foodCards = $(".foods_item_card_area .foods_card");

  $foodCards.show();

  $filterButtons.on("click", function () {
    const $clickedButton = $(this);

    $filterButtons.removeClass("active");
    $clickedButton.addClass("active");

    const filterTag = $clickedButton.text().trim();
    $foodCards.hide();

    if (filterTag === "All") {
      $foodCards.show();
    } else if (filterTag === "Recommended for you") {
      $('.foods_card .foods_tag span:contains("Recommended")')
        .closest(".foods_card")
        .show();
    } else {
      const selector = `.foods_card .foods_tag span:contains("${filterTag}")`;
      $(selector).each(function () {
        $(this).closest(".foods_card").show();
      });
    }
  });
  $(".mb_single_filter button").on("click", function () {
    $(this).toggleClass("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("dropdown-header");
  const content = document.getElementById("dropdown-content");

  if (header && content) {
    const arrowIcon = header.querySelector(".arrow-icon");

    header.addEventListener("click", function () {
      content.classList.toggle("show");

      if (arrowIcon) {
        if (content.classList.contains("show")) {
          arrowIcon.style.transform = "rotate(0deg)";
        } else {
          arrowIcon.style.transform = "rotate(180deg)";
        }
      }
    });

    if (arrowIcon) {
      if (content.classList.contains("show")) {
        arrowIcon.style.transform = "rotate(0deg)";
      } else {
        arrowIcon.style.transform = "rotate(180deg)";
      }
    }
  }
});

const dropdownToggle = document.querySelector(".angle_drop");
const angleDropMenu = document.querySelector(".angle_drop_menu");
dropdownToggle.addEventListener("click", function () {
  angleDropMenu.classList.toggle("active");
});
//for large device
const html = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

// load saved theme (default: light)
const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-bs-theme", savedTheme);
updateButton(savedTheme);

// theme toggle
toggleBtn.addEventListener("click", () => {
  const current = html.getAttribute("data-bs-theme");
  const next = current === "light" ? "dark" : "light";
  html.setAttribute("data-bs-theme", next);
  localStorage.setItem("theme", next);
  updateButton(next);
});

function updateButton(theme) {
  if (theme === "dark") {
    toggleBtn.textContent = "☀️";
    toggleBtn.classList.remove("btn-outline-dark");
    toggleBtn.classList.add("btn-outline-light");
  } else {
    toggleBtn.textContent = "🌙";
    toggleBtn.classList.remove("btn-outline-light");
    toggleBtn.classList.add("btn-outline-dark");
  }
}

//for mobile
const html2 = document.documentElement;
const toggleBtn2 = document.getElementById("theme-toggle_mobile");

// theme toggle
toggleBtn2.addEventListener("click", () => {
  const current = html2.getAttribute("data-bs-theme");
  const next = current === "light" ? "dark" : "light";
  html2.setAttribute("data-bs-theme", next);
  localStorage.setItem("theme", next);
  updateButton(next);
});

//privacy policy hide and show
const privacyPolicy = document.getElementById("privacy_policy");
const body = document.body;

function togglePrivacyPolicy() {
  if (privacyPolicy.style.display === "none") {
    privacyPolicy.style.display = "block";
  } else {
    privacyPolicy.style.display = "none";
  }
  body.classList.toggle("sidebar-collapsed");
  body.classList.toggle("total_cabs_collapse");
}

//date for footer
const dateElement = document.getElementById("new_date");
const currentYear = new Date().getFullYear();
dateElement.textContent = `© ${currentYear} All rights reserved.`;

const filterButtons = document.querySelectorAll(".filter-btn-group button");
const workoutCards = document.querySelectorAll(".workout-card");

//if not data avaliable on workout list
// const noDataMsg = document.createElement("p");
// noDataMsg.textContent = "⚠️ No workouts available for this category";
// noDataMsg.classList.add("no-data-message");
// noDataMsg.style.display = "none";
// document.querySelector(".workout_list").appendChild(noDataMsg);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");
    let visibleCount = 0;

    workoutCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || category === filterValue) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // show message if no data
    if (visibleCount === 0) {
      noDataMsg.style.display = "block";
    } else {
      noDataMsg.style.display = "none";
    }
  });
});

// Main tabs
document.querySelectorAll(".nav-tabs").forEach((tabGroup) => {
  const tabs = tabGroup.querySelectorAll(".nav-link");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.getAttribute("data-tab");
      const content = tabGroup.nextElementSibling;

      if (content) {
        const panes = content.querySelectorAll(".tab-pane");
        panes.forEach((pane) => {
          pane.classList.remove("active");
          if (pane.id === target) pane.classList.add("active");
        });
      }

      // sub tabes
      if (tab.getAttribute("data-tab") === "videos") {
        const latestBtn = document.querySelector(
          "#videoTabs .nav-link[data-tab='latest']"
        );
        const videoPanes = document.querySelectorAll("#videos .tab-pane");
        // reset
        document
          .querySelectorAll("#videoTabs .nav-link")
          .forEach((b) => b.classList.remove("active"));
        videoPanes.forEach((p) => p.classList.remove("active"));
        // activate
        latestBtn.classList.add("active");
        document.getElementById("latest").classList.add("active");
      }
    });
  });
});
// edit and delete modal toggle
document.querySelectorAll(".optionBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // Close other modals
    document.querySelectorAll(".video_modal").forEach((modal) => {
      if (modal !== btn.nextElementSibling) modal.classList.remove("show");
    });

    // Toggle this modal
    const modal = btn.nextElementSibling;
    modal.classList.toggle("show");
  });
});

document.addEventListener("click", () => {
  document
    .querySelectorAll(".video_modal")
    .forEach((modal) => modal.classList.remove("show"));
});
// multi step form
const nextBtns = document.querySelectorAll(".btn-next");
const prevBtns = document.querySelectorAll(".btn-prev");
const formSteps = document.querySelectorAll(".form-step");
const formProgress = document.getElementById("progress");
const steps = document.querySelectorAll(".step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep, index) => {
    formStep.classList.toggle("active", index === formStepsNum);
  });
}

function updateProgressbar() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index <= formStepsNum);
  });

  formProgress.style.width = (formStepsNum / (steps.length - 1)) * 100 + "%";
}

// admin navbar active links
const allLinks = document.querySelectorAll(".admin_nav a, #pages a");
const currentPage = window.location.pathname.split("/").pop();

allLinks.forEach((link) => {
  const linkPath = link.getAttribute("href");
  if (linkPath && linkPath.includes(currentPage) && linkPath !== "#") {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }

  link.addEventListener("click", (e) => {
    allLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    e.stopPropagation();
  });
});

//mobile toggle

function toggleAdminMobileNav() {
  const pages = document.getElementById("pages");
  pages.style.display = pages.style.display === "block" ? "none" : "block";
  return;
}

// modal open and close
function openModal() {
  document.getElementById("creatorModal").style.display = "flex";
}

function openModalTwo() {
  document.getElementById("creatorModalTwo").style.display = "flex";
}

function openModalThree() {
  document.getElementById("creatorModalThree").style.display = "flex";
}

function openShareModal() {
  document.getElementById("shareModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("creatorModal").style.display = "none";
}

function closeModalTwo() {
  document.getElementById("creatorModalTwo").style.display = "none";
}

function closeModalThree() {
  document.getElementById("creatorModalThree").style.display = "none";
}

function closeShareModal() {
  document.getElementById("shareModal").style.display = "none";
}

function toggleMenu() {
  const toggle = document.getElementById("toggle");
  toggle.classList.toggle("active");
}
// read more and less
const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const lessBtn = document.getElementById("lessBtn");
const sessionDesc = document.getElementById("sessionDesc");

function readMore() {
  moreText.style.display = "block";
  dots.style.display = "none";
  lessBtn.style.display = "block";
  sessionDesc.style.display = "inline";
}

function readLess() {
  moreText.style.display = "none";
  dots.style.display = "inline";
  sessionDesc.style.display = "none";
}
// comment logic
document.querySelectorAll(".comment-box").forEach((box) => {
  const deleteBtn = box.querySelector(".delete");
  const warningBox = box.querySelector(".delete-warning");
  const confirmBox = box.querySelector(".confirm-box");
  const confirmDelete = box.querySelector(".confirm");
  const cancelDelete = box.querySelector(".cancel");
  const actions = box.querySelector(".comment_actions");

  deleteBtn.onclick = () => {
    warningBox.classList.remove("hidden");
    confirmBox.classList.remove("hidden");
    actions.style.display = "none";
  };

  cancelDelete.onclick = () => {
    warningBox.classList.add("hidden");
    confirmBox.classList.add("hidden");
    actions.style.display = "flex";
  };

  confirmDelete.onclick = () => {
    box.remove(); // comment remove hoye jabe
  };
});

// video logic
function initVideoPlayer(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const video = container.querySelector("#video");
  const playBtn = container.querySelector("#playBtn");
  const forwardBtn = container.querySelector("#forwardBtn");
  const volumeBtn = container.querySelector("#volumeBtn");
  const fullscreenBtn = container.querySelector("#fullscreenBtn");
  const timeDisplay = container.querySelector("#timeDisplay");
  const playedBar = container.querySelector("#playedBar");
  const bufferedBar = container.querySelector("#bufferedBar");
  const loadedBar = container.querySelector("#loadedBar");
  const progressContainer = container.querySelector("#progressContainer");
  const forwardText = container.querySelector("#forwardText");
  const loadingSpinner = container.querySelector("#loadingSpinner");
  const contrls = container.querySelector(".controls");
  const progress = container.querySelector(".video_progress_container");

  if (!video) return;

  function formatTime(sec) {
    let m = Math.floor(sec / 60);
    let s = Math.floor(sec % 60);
    if (s < 10) s = "0" + s;
    return `${m}:${s}`;
  }

  playBtn?.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    } else {
      video.pause();
      playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    }
  });

  video.addEventListener("click", () => {
    if (contrls.style.display === "none" && progress.style.display === "none") {
      contrls.style.display = "flex";
      progress.style.display = "block";
    } else {
      contrls.style.display = "none";
      progress.style.display = "none";
    }
  });

  video.addEventListener("timeupdate", () => {
    playedBar.style.width = (video.currentTime / video.duration) * 100 + "%";
    timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(
      video.duration
    )}`;
  });

  video.addEventListener("progress", () => {
    if (video.buffered.length > 0) {
      let end = video.buffered.end(video.buffered.length - 1);
      bufferedBar.style.width = (end / video.duration) * 100 + "%";
    }
  });

  video.addEventListener("loadeddata", () => {
    let loadedPercent = (video.currentTime / video.duration) * 100;
    loadedBar.style.width = loadedPercent + "%";
  });

  progressContainer?.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const click = e.offsetX;
    video.currentTime = (click / width) * video.duration;
  });

  function showLoader() {
    loadingSpinner.style.display = "block";
  }
  function hideLoader() {
    loadingSpinner.style.display = "none";
  }

  forwardBtn?.addEventListener("click", () => {
    showLoader();
    video.currentTime += 10;

    forwardText.style.display = "block";
    forwardText.textContent = "+10s";

    setTimeout(() => {
      forwardText.style.display = "none";
    }, 700);
  });

  video.addEventListener("waiting", showLoader);
  video.addEventListener("playing", hideLoader);
  video.addEventListener("seeked", hideLoader);
  video.addEventListener("canplay", hideLoader);

  volumeBtn?.addEventListener("click", () => {
    video.muted = !video.muted;
    volumeBtn.innerHTML = video.muted
      ? `<i class="fa-solid fa-volume-xmark"></i>`
      : `<i class="fa-solid fa-volume-high"></i>`;
  });

  fullscreenBtn?.addEventListener("click", () => {
    if (video.requestFullscreen) video.requestFullscreen();
  });

  document.addEventListener("fullscreenchange", () => {
    if (video.paused) {
      playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    } else {
      playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    }
  });
}

initVideoPlayer("#video_container");
