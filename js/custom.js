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

//hggghg
const ctx = document.getElementById("stepsChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "",
        data: [90, 120, 70, 130, 80, 140, 50],
        borderColor: "#0d47a1",
        borderWidth: 3,
        fill: false,
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        min: 40,
        max: 160,
        ticks: { stepSize: 20 },
        grid: { display: false },
      },
      x: {
        grid: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
    },
  },
});
