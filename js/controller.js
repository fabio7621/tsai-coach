let sidebar = null;

// 等待 DOM 加載完成後執行
document.addEventListener("DOMContentLoaded", function () {
  sidebar = document.getElementById("sidebar"); // 獲取 sidebar 元素
});

// toggleMenu 函數用來切換選單的顯示和隱藏
function toggleMenu() {
  if (sidebar) {
    sidebar.classList.toggle("open"); // 切換 open class
  } else {
    console.error("Sidebar element is not found.");
  }
}

//產品頁面手機版本選單
const phoneMenuTitle = document.querySelector(".phone-menu-title");
const content = document.querySelector(".phone-munu-content");

phoneMenuTitle.addEventListener("click", function () {
  if (content.style.height === "0px" || content.style.height === "") {
    content.style.height = content.scrollHeight + "px";
  } else {
    content.style.height = "0";
  }
  phoneMenuTitle.classList.toggle("active");
});
