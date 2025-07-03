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
    "Full Stack Developer"
  ];
  let index = 0;
  const textSpan = document.getElementById("dynamic-text");

  setInterval(() => {
    index = (index + 1) % texts.length;
    textSpan.textContent = texts[index];
  }, 3000); // เปลี่ยนข้อความทุก 3 วินาที

if (window.innerWidth <= 430) {
  const toggleBtn = document.getElementById('toggleBtn');
  const texts = document.querySelectorAll('.toggleText');
  let expanded = false;

  // เริ่มต้นซ่อน p ที่ 2 และ 3
  for (let i = 1; i < texts.length; i++) {
    texts[i].style.display = 'none';
  }

  toggleBtn.addEventListener('click', () => {
    expanded = !expanded;

    for (let i = 1; i < texts.length; i++) {
      texts[i].style.display = expanded ? 'block' : 'none';
    }

    toggleBtn.textContent = expanded ? '▲ Read less' : '▼ Read more';
  });
}


console.log("Hello World")