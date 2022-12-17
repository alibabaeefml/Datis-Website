// Define Reactivity
function ref(value) {
  const refObject = {
    get value() {
      return value;
    },
    set value(newValue) {
      value = newValue;
    },
  };
  return refObject;
}

// Close onclick outside
document.addEventListener("click", (e) => {
  const toggle = document.querySelector(".search__toggle");
  const input = document.querySelector(".search__input");
  const clickedElement = e.target;

  if (clickedElement == toggle) {
    input.value = "";
    return;
  }

  const isSearchField = clickedElement.closest(".search__field");

  if (!isSearchField) {
    toggle.checked = false;
    input.value = "";
  }
});

// =========== Sidebar Menu =========== //
let SidebarShow = {
  transform: "translateX(0%)",
  opacity: "1",
  visibility: "visible",
};
let SidebarHide = {
  transform: "translateX(100%)",
  opacity: "0",
  visibility: "hidden",
};

// close/open sidebar functions
function openSidebar() {
  var obj = document.querySelector(".menu-sidebar");
  Object.assign(obj.style, SidebarShow);
  document.querySelector(".overlay-sidebar").style.width = "100vw";
}

function closeSidebar() {
  var obj = document.querySelector(".menu-sidebar");
  Object.assign(obj.style, SidebarHide);
  document.querySelector(".overlay-sidebar").style.width = "0%";
}

// hide/show sidebar on windows resize
$(window).resize(function () {
  if ($(window).width() > 991.98) {
    var obj = document.getElementById("mySidebar");
    if (obj) {
      Object.assign(obj.style, SidebarHide);
    }
    document.getElementById("overlayClass").style.width = "0%";
  }
});
