
// 수동으로 이미지 주소 배열 작성
// 갤러리 팝업
const galleryImages = [
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FoMhPN%2FbtsOMRABnkX%2FAAAAAAAAAAAAAAAAAAAAAMHFwg2ca1Br6qUccc_I0iLNUoQXK26fy4zvzD76FXug%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3D%252BeVdmM9qp54eyAYalkhBZieXREQ%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbSVu7C%2FbtsOPygyjza%2FAAAAAAAAAAAAAAAAAAAAAM1ECgyA-tR8ORW1I1twP5ik_rXBKZJtuoEopPOqB0d2%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DnQD1nYFq%252BW3fkA0M4S4MWPtMZL8%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbW1TQt%2FbtsOQJ9i1MP%2FAAAAAAAAAAAAAAAAAAAAAHH5ViI0se8gS0jmW97Lq84yMnD2OxzhYgKb8pR63sCN%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DTQXerN9%252FTQNPocanfrYDRIoqcVw%253D",
  "https://via.placeholder.com/800x800?text=Image+4",
  "https://via.placeholder.com/800x800?text=Image+5",
  "https://via.placeholder.com/800x800?text=Image+6",
  "https://via.placeholder.com/800x800?text=Image+7",
  "https://via.placeholder.com/800x800?text=Image+8",
  "https://via.placeholder.com/800x800?text=Image+9",
  "https://via.placeholder.com/800x800?text=Image+10",
  "https://via.placeholder.com/800x800?text=Image+11",
  "https://via.placeholder.com/800x800?text=Image+12",
  "https://via.placeholder.com/800x800?text=Image+13",
  "https://via.placeholder.com/800x800?text=Image+14",
  "https://via.placeholder.com/800x800?text=Image+15",
  "https://via.placeholder.com/800x800?text=Image+16",
  "https://via.placeholder.com/800x800?text=Image+17",
  "https://via.placeholder.com/800x800?text=Image+18",
  "https://via.placeholder.com/800x800?text=Image+19",
  "https://via.placeholder.com/800x800?text=Image+20",
  "https://via.placeholder.com/800x800?text=Image+21",
  "https://via.placeholder.com/800x800?text=Image+22",
  "https://via.placeholder.com/800x800?text=Image+23",
  "https://via.placeholder.com/800x800?text=Image+24",
  "https://via.placeholder.com/800x800?text=Image+25",
  "https://via.placeholder.com/800x800?text=Image+26",
  "https://via.placeholder.com/800x800?text=Image+27",
  "https://via.placeholder.com/800x800?text=Image+28",
  "https://via.placeholder.com/800x800?text=Image+29",
  "https://via.placeholder.com/800x800?text=Image+30"
];

let currentIndex = 0;
const totalImages = galleryImages.length;

function openGallery(index) {
  currentIndex = index;
  document.getElementById("gallery-popup").classList.add("show");
  updateGallery();
}

function closeGallery() {
  document.getElementById("gallery-popup").classList.remove("show");
}

function updateGallery() {
  const img = document.getElementById("gallery-popup-img");
  const indicator = document.getElementById("gallery-indicator");
  const prevBtn = document.getElementById("gallery-prev");
  const nextBtn = document.getElementById("gallery-next");

  img.src = galleryImages[currentIndex];
  indicator.textContent = `${currentIndex + 1} / ${totalImages}`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalImages - 1;
}

function prevImage() {
  console.log(currentIndex)
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
}

function nextImage() {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
    updateGallery();
  }
}

setTimeout(() => {
  loadingScreen.style.display = "none";
  document.documentElement.classList.remove('loading');
}, 1200);


// ✅ DOM이 모두 로드된 후 갤러리 타일에 이벤트 바인딩
document.addEventListener("DOMContentLoaded", () => {
  const tileImages = document.querySelectorAll(".gallery .tile img");
  tileImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      openGallery(index);
    });
  });
}); 


window.addEventListener("load", () => {
  const bgm = document.getElementById("bgm");
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");
  const text3 = document.getElementById("text3");
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(() => {
    text1.style.opacity = 1;
  }, 500);
  setTimeout(() => {
    text2.style.opacity = 1;
  }, 2000);
  setTimeout(() => {
    text3.style.opacity = 1;
  }, 3500);
  setTimeout(() => {
  loadingScreen.classList.add("fade-out");
  // 페이드아웃 후 DOM에서 제거
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 1200); // transition 시간과 동일하게 설정
  bgm.play().catch(() => {
    console.log("Autoplay blocked. Will play on user interaction.");
  });
}, 5500);
});


function toggleSlide(type) {
  const el = document.getElementById(`slide-${type}`);
  el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}

// 팝업 닫기
document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("popup-close");
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // 페이드인 효과
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

  // 카운트다운
  const countdownEl = document.getElementById("countdown");
  const weddingDate = new Date("2025-10-25");
  const today = new Date();
  const diffTime = weddingDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  countdownEl.innerText = `노우승 💚 음선아 의 결혼식 ${diffDays}일 전`;

  // 달력
  const calendarEl = document.getElementById("calendar");
  const daysInMonth = 31;
  const startDay = new Date("2025-10-01").getDay();

  ["일", "월", "화", "수", "목", "금", "토"].forEach(day => {
    const el = document.createElement("div");
    el.innerText = day;
    el.style.fontWeight = "bold";
    calendarEl.appendChild(el);
  });

  for (let i = 0; i < startDay; i++) {
    calendarEl.appendChild(document.createElement("div"));
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.innerText = i;
    if (i === 25) day.classList.add("highlight");
    calendarEl.appendChild(day);
  }
});

document.querySelectorAll(".account-slide").forEach((slide) => {
  slide.style.height = "0px";
  slide.style.paddingTop = "0";
  slide.style.paddingBottom = "0";
});


document.querySelectorAll(".account-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const content = document.getElementById(targetId);
    const isOpen = content.classList.contains("open");

    if (isOpen) {
      // 닫기: 높이 → 0, 패딩 → 0
      content.style.height = content.scrollHeight + "px";
      content.style.paddingTop = "12px";
      content.style.paddingBottom = "12px";
      requestAnimationFrame(() => {
        content.style.height = "0px";
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
      });
      content.classList.remove("open");
    } else {
      // 열기: 높이 설정 + 패딩 설정
      content.style.height = content.scrollHeight + "px";
      content.style.paddingTop = "12px";
      content.style.paddingBottom = "12px";
      content.classList.add("open");

      content.addEventListener("transitionend", function handler() {
        if (content.classList.contains("open")) {
          content.style.height = "auto";
        }
        content.removeEventListener("transitionend", handler);
      });
    }
  });
});

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll("#invite-paragraphs .fade-block");
  const section = document.querySelector(".section-invite");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        paragraphs.forEach((p, i) => {
          setTimeout(() => {
            p.classList.add("visible");
          }, i * 400); // 문단별 딜레이 조절
        });
        observer.disconnect(); // 한 번만 실행
      }
    });
  }, {
    root: null,
    rootMargin: "-30% 0px -70% 0px", // 상단 30% 지점에서 발동
    threshold: 0
  });

  observer.observe(section);
});


document.addEventListener("DOMContentLoaded", () => {
  // 기존 코드 ...

  // 자동 재생
  const bgm = document.getElementById("bgm");
  const toggleBtn = document.getElementById("audio-toggle");

  // 사용자 상호작용 필요 시, 클릭 후 재생되도록 허용
  bgm.play().catch(() => {
    // 일부 브라우저 정책에 의해 자동 재생 차단됨
    console.log("Autoplay blocked. Will play on user interaction.");
  });

  toggleBtn.addEventListener("click", () => {
    if (bgm.paused) {
      bgm.play();
      toggleBtn.textContent = "⏸️";
    } else {
      bgm.pause();
      toggleBtn.textContent = "▶️";
    }
  });
});

function handleFirstScrollPlay() {
  const bgm = document.getElementById("bgm");
  if (bgm.paused) {
    bgm.play().catch(() => {});
  }
  window.removeEventListener("scroll", handleFirstScrollPlay);
}

window.addEventListener("scroll", handleFirstScrollPlay, { once: true });
