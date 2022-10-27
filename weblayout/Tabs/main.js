let tabs_btn = document.querySelectorAll(".tabs-nav-btn");
let tabs_item = document.querySelectorAll(".tabs-item");

tabs_btn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let tab_id = item.getAttribute("data-tab");
    let currentTab = document.querySelector(tab_id);

    // Если класса active нету
    if (!currentTab.classList.contains("active")) {
      // Отключаем класс active у всех кнопок
      tabs_btn.forEach(function (item) {
        item.classList.remove("active");
      });
      // Отключаем класс active у всех content - item
      tabs_item.forEach(function (item) {
        item.classList.remove("active");
      });

      item.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

document.querySelector(".tabs-nav-btn").click();
