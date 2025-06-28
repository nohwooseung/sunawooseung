// ==================== 확대방지 ====================

document.addEventListener('dblclick', function(e) {
  e.preventDefault();
});


// ==================== 갤러리 팝업 이미지 배열 ====================
const galleryImages = [
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FCFxAm%2FbtsOVcqD2iz%2FAAAAAAAAAAAAAAAAAAAAANLD45iUAS0Vf_WZPzcxeXrH3F0jzY2bfg5XlJmFu3SL%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3D8y316FC0KrgbJTD2OWH2P2iJYiI%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FxfUhz%2FbtsOVCJYNZT%2FAAAAAAAAAAAAAAAAAAAAAKx2Ea75col366xiOCZ7BGbAkbG1bLBeqgLqNQfKvD56%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DYiWAmJo3IV4%252BuSbMfOCCKd%252BVgaw%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FHQs8w%2FbtsOUXmVVW8%2FAAAAAAAAAAAAAAAAAAAAAFLc8x_kUCh2LqYBTWRiJ1ISWcDT9eFtTUsLbp9WCSaG%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DgUTe2oN0Lv8QqgU7NFAVpmgHMjk%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FdIJiGq%2FbtsOVJhbbCy%2FAAAAAAAAAAAAAAAAAAAAADq2vVlm7ToJNOqxFLAfzzJLSotI7O7OACWEGQpcx-R3%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DmwnmUYr66AUGYCaIuaYdSz36NLk%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FDUfZo%2FbtsOUA6ElSL%2FAAAAAAAAAAAAAAAAAAAAACoN7xvoA-CYV84MbVVtt4AdYyxGqxR86lvm7_D7lqPt%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3Dg0qeyHIwkqD2snSzaWWrw%252F1ytVM%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcLyJWB%2FbtsOVhlJjLy%2FAAAAAAAAAAAAAAAAAAAAAA5SPm6bfErUrtWNtDIg-PSK04AvxOiFq6M-VW_EdKPS%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DLVJNsKX6uTm8GiDX8Xmkp4z1rmw%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Fb99bwk%2FbtsOWn5ZVqE%2FAAAAAAAAAAAAAAAAAAAAAN-CQ64VsphL9xonLmvh7O28ZAnpss-qy94G7irpeILL%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DYknNgyNQdEuQsDeVgqI0BOy9%252BCk%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FnQjL8%2FbtsOUdjvfvW%2FAAAAAAAAAAAAAAAAAAAAAM__yN9zO7gLI6IJzmdu8Voc7OoNgCQPPiMi4ip56q9n%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DyfoWprphhU7UuFu7hRuYZvUNVa8%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2Ft8i9y%2FbtsOUVvWzeF%2FAAAAAAAAAAAAAAAAAAAAAEJ2h47TEjVBkAtBpTOf8xyqfHn7rbIQM7auDj81vUZa%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DlY%252BIz7xVEmmJger7LOdHJj%252B8bc8%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FddvIa4%2FbtsOVhF6z68%2FAAAAAAAAAAAAAAAAAAAAABOrBst7BBr85PE5y_IRUd1L0U5QiKLWZB_DHizBLvw7%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3Ddi3gI6MlD3ZKVA56RUNjlVjlX1U%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2F2vtu1%2FbtsOWgsjBXw%2FAAAAAAAAAAAAAAAAAAAAAJXZWxl_eu_8ECAwPzFC24JWm8yYGiRW7tCqfl9dL8Un%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3DJBJjZ6wLB29NhBqqHTW%252FQTY7LRU%253D",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FbC1xTi%2FbtsOUuFmKn4%2FAAAAAAAAAAAAAAAAAAAAAD4wohgzhEMwhTp4CWrvXgSJG8bocHam8Cy3bMcKMyfg%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1751295599%26allow_ip%3D%26allow_referer%3D%26signature%3D470cXoljRo6JFlVBHayzZz%252BMQY4%253D",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

let slider = null;
let indicator = null;
let currentIndex = 0;
let startX = 0;

// 새로운 슬라이드용 닫기 버튼 추가
document.addEventListener("DOMContentLoaded", () => {
  slider = document.getElementById("gallery-slider");
  indicator = document.getElementById("gallery-indicator");

  const tiles = document.querySelectorAll(".gallery .tile img");

  tiles.forEach((img, index) => {
    const src = galleryImages[index];
    if (src && src.trim() !== "") {
      img.setAttribute("src", src);
    } else {
      img.parentElement.style.display = "none";
    }
  });

  const gallery = document.querySelector(".gallery");
  const seeMoreTile = document.createElement("div");
  seeMoreTile.className = "tile see-more-tile";
  seeMoreTile.innerHTML = '<div class="see-more-overlay">+ 사진 더 보기</div>';
  gallery.appendChild(seeMoreTile);

  seeMoreTile.addEventListener("click", () => {
    document.getElementById("gallery-grid-popup").classList.add("show");
    document.body.classList.add("no-scroll");
  });

  const gridContainer = document.getElementById("gallery-grid-inner");
  galleryImages.forEach((src, idx) => {
    const gridItem = document.createElement("div");
    gridItem.className = "tile";
    const img = document.createElement("img");
    img.src = src;
    img.addEventListener("click", () => {
      openGallery(idx);
    });
    gridItem.appendChild(img);
    gridContainer.appendChild(gridItem);
  });

  document.getElementById("grid-close-btn").addEventListener("click", () => {
    document.getElementById("gallery-grid-popup").classList.remove("show");
    document.body.classList.remove("no-scroll");
  });

  

  // 슬라이드용 닫기 버튼 생성
  const slideBackBtn = document.createElement("button");
  slideBackBtn.className = "gallery-back-button";
  slideBackBtn.innerHTML = '<i class="fas fa-solid fa-grip-vertical"></i>';
  slideBackBtn.addEventListener("click", closeGallery);
  document.querySelector(".gallery-popup-content").appendChild(slideBackBtn);

// 이미지 6~8번째 (하단 3개)에 그라데이션 오버레이 추가
tiles.forEach((img, index) => {
  const src = galleryImages[index];
  if (src && src.trim() !== "") {
    img.setAttribute("src", src);

    // 마지막 3개 타일 (index 6~8)에만 그라데이션 삽입
    if (index >= 6) {
      const gradient = document.createElement("div");
      gradient.className = "tile-gradient";
      img.parentElement.style.position = "relative";
      img.parentElement.appendChild(gradient);
    }

  } else {
    img.parentElement.style.display = "none";
  }
});


});



function openGallery(index) {
  currentIndex = index;
  initGallerySlider();
  updateGallery();
  document.getElementById("gallery-popup").classList.add("show");
  document.getElementById("gallery-grid-popup").classList.remove("show");
  document.body.classList.add("no-scroll");
}

function closeGallery() {
  document.getElementById("gallery-popup").classList.remove("show");
  document.getElementById("gallery-grid-popup").classList.add("show");
}

function initGallerySlider() {
  slider.innerHTML = "";
  galleryImages.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    slider.appendChild(img);
  });
}

function updateGallery() {
  const total = slider.children.length;
  const offset = -currentIndex * 90;
  slider.style.transform = `translateX(${offset}vw)`;
  indicator.textContent = `${currentIndex + 1} / ${total}`;
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
}

function nextImage() {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    updateGallery();
  }
}

document.getElementById("gallery-popup").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.getElementById("gallery-popup").addEventListener("touchend", (e) => {
  const deltaX = e.changedTouches[0].clientX - startX;
  if (deltaX > 50) prevImage();
  else if (deltaX < -50) nextImage();
});



// ==================== 로딩 화면 처리 ====================
window.addEventListener("load", () => {
  const bgm = document.getElementById("bgm");
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");
  const text3 = document.getElementById("text3");
  const loadingScreen = document.getElementById("loading-screen");
  const loadingText = document.getElementById("loading-text");

  // "Loading..." 1초간 보여주고 제거
  setTimeout(() => {
    loadingText.remove();

    // 이후 텍스트 순차 등장
    setTimeout(() => text1.style.opacity = 1, 0);
    setTimeout(() => text2.style.opacity = 1, 1500);
    setTimeout(() => text3.style.opacity = 1, 3000);

    // 전체 로딩 화면 제거
    setTimeout(() => {
      loadingScreen.classList.add("fade-out");
      setTimeout(() => {
        loadingScreen.style.display = "none";
        document.body.classList.remove("loading");
      }, 500);
    }, 4500);

  }, 1000);
});

// ==================== 갤러리 이미지 클릭 이벤트 ====================
document.addEventListener("DOMContentLoaded", () => {
  const tileImages = document.querySelectorAll(".gallery .tile img");
  tileImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      openGallery(index);
    });
  });
});

// ==================== 참석 여부 팝업 닫기 + 배경음악 시작 ====================
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("popup-close");
  const bgm = document.getElementById("bgm");
  const toggleBtn = document.getElementById("audio-toggle");

  // 팝업 열릴 때 (이미 열려 있음)
  document.body.classList.add("no-scroll");

  // 일단 재생 안됨 상태 유지
  bgm.pause();
  toggleBtn.innerHTML = `<i class="fas fa-solid fa-play" aria-hidden="true"></i>`; // ▶️ 아이콘

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.classList.remove("no-scroll");

    // 🔊 팝업 닫힐 때 배경음악 재생 시작
    if (bgm.paused) {
      bgm.play().then(() => {
        toggleBtn.innerHTML = `<i class="fas fa-solid fa-pause" aria-hidden="true"></i>`; // ⏸️ 아이콘
      }).catch(() => {
        console.log("Autoplay blocked.");
      });
    }
  });

  // 🎵 수동 음악 재생/정지
  toggleBtn.addEventListener("click", () => {
    if (bgm.paused) {
      bgm.play().then(() => {
        toggleBtn.innerHTML = `<i class="fas fa-solid fa-pause" aria-hidden="true"></i>`; // ⏸️
      });
    } else {
      bgm.pause();
      toggleBtn.innerHTML = `<i class="fas fa-solid fa-play" aria-hidden="true"></i>`; // ▶️
    }
  });
});

// ==================== 섹션 페이드인 ====================
document.addEventListener("DOMContentLoaded", () => {
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
});

// ==================== 초대 문단 개별 페이드인 ====================
document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll("#invite-paragraphs .fade-block");
  const section = document.querySelector(".section-invite");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        paragraphs.forEach((p, i) => {
          setTimeout(() => {
            p.classList.add("visible");
          }, i * 400);
        });
        observer.disconnect();
      }
    });
  }, {
    root: null,
    rootMargin: "-30% 0px -70% 0px",
    threshold: 0
  });

  observer.observe(section);
});

// ==================== 카운트다운 및 달력 ====================
document.addEventListener("DOMContentLoaded", () => {
  const countdownEl = document.getElementById("countdown");
  const weddingDate = new Date("2025-10-25");
  const today = new Date();
  const diffTime = weddingDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  countdownEl.innerHTML = `노우승 <i class="fas fa-solid fa-heart" style="color:#b1ddb1;"></i> 음선아 의 결혼식 ${diffDays}일 전`;

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

      // 오늘 날짜의 요일 인덱스 계산
    const dayIndex = (startDay + i - 1) % 7;
    if (dayIndex === 0) day.classList.add("sunday"); // 일요일에 클래스 추가

    if (i === 25) day.classList.add("highlight");
    calendarEl.appendChild(day);
  }
});

// ==================== 계좌번호 아코디언 초기화 ====================
document.querySelectorAll(".account-slide").forEach((slide) => {
  slide.style.height = "0px";
  slide.style.paddingTop = "0";
  slide.style.paddingBottom = "0";
});

// ==================== 계좌번호 아코디언 토글 ====================
document.querySelectorAll(".account-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const content = document.getElementById(targetId);
    const isOpen = content.classList.contains("open");

    if (isOpen) {
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


// 📋 복사 버튼 기능
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const account = button.previousElementSibling.dataset.account;

    navigator.clipboard.writeText(account).then(() => {
      button.innerHTML = `<i class="fas fa-solid fa-check"></i>`;
      setTimeout(() => {
        button.innerHTML = `<i class="fas fa-solid fa-copy"></i>`;
      }, 1500);
    }).catch(() => {
      alert("복사에 실패했습니다.");
    });
  });
});


// ==================== 새로고침 시 스크롤 맨 위로 ====================
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});


document.addEventListener("DOMContentLoaded", () => {
  const parentPopup = document.getElementById("parent-popup");
  const openBtn = document.getElementById("parent-contact-btn");
  const closeBtn = document.getElementById("parent-popup-close");

  openBtn.addEventListener("click", () => {
    parentPopup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    parentPopup.style.display = "none";
  });
});

// ==================== 푸터 ====================

document.addEventListener("DOMContentLoaded", () => {
  // ✅ URL 복사 버튼
  const copyBtn = document.getElementById("copy-url-btn");
  const originalText = copyBtn.textContent;

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        copyBtn.textContent = "주소 복사 완료!";
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.innerHTML = `청첩장 URL 복사하기 <i class="fas fa-solid fa-link" style="margin-left: 20px;"></i>`;
        }, 2000);
      })
      .catch(() => {
        alert("주소 복사에 실패했습니다.");
      });
  });
})
