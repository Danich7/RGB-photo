// СКРИПТ ДЛЯ ПРОВЕРКИ ПОДДЕРЖКИ WebP (не удалять, встроенный в сборку)
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

// ПЕРЕМЕННЫЕ
let tabsButtons = document.querySelectorAll('.tabs__title'),
    tabsContent = document.querySelectorAll('.tabs__content');

// СКРИПТЫ

tabsButtons.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsButtons.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsContent.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    };
  });
};