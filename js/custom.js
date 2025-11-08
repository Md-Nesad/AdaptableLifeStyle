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
  if ($.fn.niceSelect) {
    $("select").niceSelect();
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

function togglePrivacyPolicy() {
  if (privacyPolicy.style.display === "none") {
    privacyPolicy.style.display = "block";
  } else {
    privacyPolicy.style.display = "none";
  }
}

//date for footer
const dateElement = document.getElementById("new_date");
const currentYear = new Date().getFullYear();
dateElement.textContent = `© ${currentYear} All rights reserved.`;

const filterButtons = document.querySelectorAll(".filter-btn-group button");
const workoutCards = document.querySelectorAll(".workout-card");

// // message element create করে নিচে append করা
// const noDataMsg = document.createElement("p");
// noDataMsg.textContent = "⚠️ No workouts available for this category";
// noDataMsg.classList.add("no-data-message");
// noDataMsg.style.display = "none"; // default hidden
// document.querySelector(".workout_list").appendChild(noDataMsg);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // active class পরিবর্তন
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");
    let visibleCount = 0;

    // প্রতিটি workout card check করা
    workoutCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || category === filterValue) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // যদি কোনো data না পাওয়া যায় তাহলে message show করো
    if (visibleCount === 0) {
      noDataMsg.style.display = "block";
    } else {
      noDataMsg.style.display = "none";
    }
  });
});

// progress
const progressCtx = document
  .getElementById("progressChartCanvas")
  .getContext("2d");

const progress = 81;
const left = 100 - progress;

new Chart(progressCtx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [progress, left],
        backgroundColor: ["#C3E66E", "#F3F6F8"],
        borderWidth: 0,
        cutout: "83%",
      },
    ],
  },
  options: {
    rotation: -10,
    circumference: 360,
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
    animation: {
      animateRotate: true,
      duration: 1200,
    },
  },
});
// weekly chart
let ctx = document.getElementById("weeklyChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Sun",
      "",
      "Mon",
      "",
      "Tue",
      "",
      "Wed",
      "",
      "Thu",
      "",
      "Fri",
      "",
      "Sat",
    ],
    datasets: [
      {
        label: "Weekly Challenge",
        data: [100, 115, 95, 130, 70, 85, 70, 90, 100, 118, 80, 100, 80],
        borderColor: "rgba(174, 238, 85, 0.9)",
        backgroundColor: "rgba(174, 238, 85, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 40,
        max: 160,
        ticks: {
          stepSize: 20,
          color: "#888",
        },
        grid: {
          color: "#0121351A",
          borderDash: [4, 4],
        },
      },
      x: {
        ticks: {
          color: "#888",
          font: {
            size: 10, // 🔹 x-axis label o choto hobe
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Monthly Progress Doughnut Chart
const monthlyProgressCtx = document
  .getElementById("monthlyProgressChartCanvas")
  .getContext("2d");
const monthlyProgress = 81;
new Chart(monthlyProgressCtx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [monthlyProgress, 100 - monthlyProgress],
        backgroundColor: ["#FF8700", "#eef0f3"],
        borderWidth: 0,
        cutout: "84%",
      },
    ],
  },
  options: {
    rotation: -10,
    circumference: 360,
    plugins: { tooltip: { enabled: false }, legend: { display: false } },
    animation: { animateRotate: true, duration: 1200 },
  },
});

// Monthly Line Chart
let monthlyctx = document.getElementById("monthlyChart").getContext("2d");

new Chart(monthlyctx, {
  type: "line",
  data: {
    labels: [
      "Sun",
      "",
      "Mon",
      "",
      "Tue",
      "",
      "Wed",
      "",
      "Thu",
      "",
      "Fri",
      "",
      "Sat",
    ],
    datasets: [
      {
        label: "Weekly Challenge",
        data: [100, 115, 95, 130, 70, 85, 70, 90, 100, 118, 80, 100, 80],
        borderColor: "#FF8700",
        backgroundColor: "#FF87001A",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 40,
        max: 160,
        ticks: {
          stepSize: 20,
          color: "#888",
        },
        grid: {
          color: "#0121351A",
          borderDash: [4, 4],
        },
      },
      x: {
        ticks: {
          color: "#888",
          font: {
            size: "10px",
          },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// total ctx
const totalctx = document.getElementById("stepsChart").getContext("2d");
new Chart(totalctx, {
  type: "line",
  data: {
    labels: ["Sun", "", "Mon", "Tue", "Wed", "", "Thu", "Fri", "", "Sat"],
    datasets: [
      {
        data: [100, 75, 120, 100, 140, 102, 125, 125, 100, 155],
        borderColor: "#ff8c00",
        backgroundColor: "rgba(255,140,0,0.1)",
        borderWidth: 4,
        tension: 0,
        fill: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 40,
        max: 160,
        ticks: {
          stepSize: 20,
          color: "#6b7280",
        },
        grid: {
          color: "#0121351A",
        },
      },
      x: {
        ticks: {
          color: "#6b7280",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  },
});

// sleep chart
const sleepctx = document.getElementById("sleepChart").getContext("2d");
new Chart(sleepctx, {
  type: "line",
  data: {
    labels: ["Sun", "", "Mon", "", "Tue", "Wed", "Thu", "", "Fri", "Sat"],
    datasets: [
      {
        data: [140, 87, 116, 119, 95, 125, 85, 105, 80, 90],
        borderColor: "#A02CFA",
        backgroundColor: "#A02CFA1A",
        borderWidth: 4,
        tension: 0,
        fill: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 40,
        max: 160,
        ticks: {
          stepSize: 20,
          color: "#6b7280",
        },
        grid: {
          color: "#0121351A",
        },
      },
      x: {
        ticks: {
          color: "#6b7280",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  },
});

const hydrationctx = document.getElementById("hydrationChart").getContext("2d");
new Chart(hydrationctx, {
  type: "line",
  data: {
    labels: ["Sun", "", "Mon", "Tue", "Wed", "", "Thu", "", "Fri", "Sat"],
    datasets: [
      {
        data: [120, 130, 98, 120, 65, 110, 82, 84, 120, 50],
        borderColor: "#F94687",
        backgroundColor: "#F946871A",
        borderWidth: 4,
        tension: 0,
        fill: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 40,
        max: 160,
        ticks: {
          stepSize: 20,
          color: "#6b7280",
        },
        grid: {
          color: "#0121351A",
        },
      },
      x: {
        ticks: {
          color: "#6b7280",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  },
});
// filter data based on search
document.getElementById("searchInput").addEventListener("keyup", function () {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll("tbody tr");
  setTimeout(() => {
    rows.forEach((row) => {
      row.style.display = row.innerText.toLowerCase().includes(filter)
        ? ""
        : "none";
    });
  }, 1000);
});
