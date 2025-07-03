function togglemenu(x) {
  x.classList.toggle("change");

  let myMenu = document.getElementById("myMenu");
  if (myMenu.className === "menu-text") {
    myMenu.className += " menu-active";
    console.log("เปิดเมนู");
  } else {
    myMenu.className = "menu-text";
  }
}

const texts = [
  "Software Developer",
  "Web Designer",
  "UI/UX Enthusiast",
  "Full Stack Developer",
];
let index = 0;
const textSpan = document.getElementById("dynamic-text");

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const texts = document.querySelectorAll(".toggleText");

  if (window.innerWidth <= 430) {
    let expanded = false;

    // ซ่อนข้อความที่ 2 และ 3
    for (let i = 1; i < texts.length; i++) {
      texts[i].classList.add("hidden");
    }

    toggleBtn.addEventListener("click", () => {
      expanded = !expanded;

      for (let i = 1; i < texts.length; i++) {
        texts[i].classList.toggle("hidden", !expanded);
      }

      toggleBtn.textContent = expanded ? "▲ Read less" : "▼ Read more";
    });
  } else {
    // ถ้าจอใหญ่กว่า 430px ซ่อนปุ่ม
    toggleBtn.style.display = "none";
  }
});

console.log("Hello World");
