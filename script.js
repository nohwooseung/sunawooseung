// ==================== 확대방지 ====================

document.addEventListener('dblclick', function(e) {
  e.preventDefault();
});

// ==================== 영상, 배경음악 플레이 ====================

const video = document.getElementById("moving_video11");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play();  // 다시 화면에 보이면 play 시도
    }
  });
}, {
  threshold: 0.5  // 비디오가 50% 이상 보일 때 실행
});

observer.observe(video);

const bgm = document.getElementById("bgm");
bgm.volume = 0.8; // 0.0 ~ 1.0 사이 값 (예: 30% 볼륨)


// ==================== 갤러리 팝업 이미지 배열 ====================
const galleryImages = [
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215756/wed10_p24p1k.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215759/wed17_fgezvi.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215754/wed19_zeqsrv.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215757/wed20_yiblau.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215752/wed16_klmctg.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215755/wed15_grcnkt.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215753/wed18_gz9mfa.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215753/wed14_qkphrh.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215753/wed13_ijqpu1.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215752/wed21_ucel9t.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215752/wed12_gmxskb.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215752/wed11_uczhse.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215756/wed9_o9egkl.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215756/wed24_vbtygr.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215756/wed1_xsirmi.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215756/wed22_psnk91.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215755/wed2_flcwmo.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215755/wed7_xmloth.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215755/wed8_bfhiei.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215754/wed6_qvb1p0.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215754/wed23_sbkksx.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215753/wed5_rivlte.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215754/wed4_mgwpav.jpg",
  "https://res.cloudinary.com/dua5kee9y/image/upload/v1752215753/wed3_tdyryc.jpg"
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
  const slideBackBtn = document.getElementById("gallery-back-button");
  slideBackBtn.addEventListener("click", closeGallery);

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


document.addEventListener("DOMContentLoaded", () => {
  const closeToMainBtn = document.getElementById("gallery-close-main");
  if (closeToMainBtn) {
    closeToMainBtn.addEventListener("click", () => {
      const galleryPopup = document.getElementById("gallery-popup");
      galleryPopup.classList.remove("show");
      document.body.classList.remove("no-scroll");
    });
  }
});


document.getElementById("gallery-grid-popup").addEventListener("click", (e) => {
  // 내부 콘텐츠가 아닌 배경을 클릭한 경우에만 닫기
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
});


// ==================== 로딩 화면 처리 ====================
window.addEventListener("load", () => {
  const text1 = document.getElementById("text1");
  const text3 = document.getElementById("text3");
  const loadingScreen = document.getElementById("loading-screen");
  const loadingText = document.getElementById("loading-text");

  // "Loading..." 1초간 보여주고 제거
  setTimeout(() => {
    loadingText.remove();

    // 이후 텍스트 순차 등장
    setTimeout(() => text1.style.opacity = 1, 0);
    setTimeout(() => text3.style.opacity = 1, 1500);

    // 전체 로딩 화면 제거
    setTimeout(() => {
      loadingScreen.classList.add("fade-out");
      setTimeout(() => {
        loadingScreen.style.display = "none";
        document.body.classList.remove("loading");
      }, 500);
    }, 3500);

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

  // 배경을 클릭하면 팝업 닫힘
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      document.body.classList.remove("no-scroll");

      // 배경음악 자동 재생
      if (bgm.paused) {
        bgm.play().then(() => {
          toggleBtn.innerHTML = `<i class="fas fa-solid fa-pause" aria-hidden="true"></i>`;
        }).catch(() => {
          console.log("Autoplay blocked.");
        });
      }
    }
  });



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
const targetDate = new Date("2025-10-25T00:00:00");

  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    document.getElementById("days-left").textContent = days;
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);

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


// ==================== 혼주 연락처 팝업 ====================

document.addEventListener("DOMContentLoaded", () => {
  const parentPopup = document.getElementById("parent-popup");
  const popupBox = parentPopup.querySelector(".popup-box");
  const openBtn = document.getElementById("parent-contact-btn");
  const closeBtn = document.getElementById("parent-popup-close");

  // 열기
  openBtn.addEventListener("click", () => {
    parentPopup.style.display = "flex";
    document.body.classList.add("no-scroll");
  });

   // 닫기 버튼 클릭
  closeBtn.addEventListener("click", () => {
    parentPopup.style.display = "none";
    document.body.classList.remove("no-scroll");
  });

  // 팝업 배경 클릭 시 닫기
  parentPopup.addEventListener("click", (e) => {
    if (!popupBox.contains(e.target)) {
      parentPopup.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
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
// ==================== 방명록 ====================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guestbook-form");
  const nameInput = document.getElementById("guest-name");
  const messageInput = document.getElementById("guest-message");
  const list = document.getElementById("guestbook-list");

  const NAME_MAX_LENGTH = 5;
  const MESSAGE_MAX_LENGTH = 100;
  const ITEMS_PER_PAGE = 5;
  let currentPage = 1;
  let allEntries = [];

  // 이름 입력 제한
  nameInput.addEventListener("input", () => {
    if (nameInput.value.length > NAME_MAX_LENGTH) {
      alert(`이름은 ${NAME_MAX_LENGTH}자 이내로 작성해주세요.`);
      nameInput.value = nameInput.value.slice(0, NAME_MAX_LENGTH);
    }
  });

  // 메시지 입력 제한
  messageInput.addEventListener("input", () => {
    if (messageInput.value.length > MESSAGE_MAX_LENGTH) {
      alert(`메시지는 ${MESSAGE_MAX_LENGTH}자 이내로 작성해주세요.`);
      messageInput.value = messageInput.value.slice(0, MESSAGE_MAX_LENGTH);
    }
  });

  // 날짜 포맷 처리 (서버 timestamp 또는 문자열 대응)
  function formatDate(timestamp) {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    return `${yyyy}.${mm}.${dd} ${hh}:${min}`;
  }

  // 페이지 렌더링
  function renderPage(page) {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const entries = allEntries.slice(start, start + ITEMS_PER_PAGE);

    list.classList.add("fade-out");

    setTimeout(() => {
      list.innerHTML = "";
      entries.forEach(data => {
        const entry = document.createElement("div");
        entry.className = "guestbook-entry";
        entry.innerHTML = `
          <div class="entry-name">${data.name}</div>
          <div class="entry-message">${data.message}</div>
          <div class="entry-date">${formatDate(data.timestamp)}</div>
        `;
        list.appendChild(entry);
      });
      list.classList.remove("fade-out");
      list.classList.add("fade-in");
      setTimeout(() => list.classList.remove("fade-in"), 300);
    }, 200);

    updateIndicators();
  }

  // 인디케이터 표시
  function updateIndicators() {
    let wrapper = document.querySelector(".pagination-wrapper");
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.className = "pagination-wrapper";
      list.after(wrapper);
    }
    wrapper.innerHTML = "";

    const totalPages = Math.ceil(allEntries.length / ITEMS_PER_PAGE);
    for (let i = 1; i <= totalPages; i++) {
      const dot = document.createElement("span");
      dot.className = "indicator" + (i === currentPage ? " active-indicator" : "");
      dot.textContent = "●";
      dot.addEventListener("click", () => {
        currentPage = i;
        renderPage(currentPage);
      });
      wrapper.appendChild(dot);
    }
  }

  // 모바일 슬라이드 이벤트
  let startX = 0;
  list.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  list.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    const totalPages = Math.ceil(allEntries.length / ITEMS_PER_PAGE);

    if (diff > 50 && currentPage < totalPages) {
      currentPage++;
      renderPage(currentPage);
    } else if (diff < -50 && currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  // Firestore 실시간 로딩
  db.collection("guestbook")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => {
      allEntries = [];
      snapshot.forEach(doc => allEntries.push(doc.data()));
      renderPage(currentPage);
    });

  // 글 작성 및 저장
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
      alert("이름과 메시지를 모두 입력해주세요.");
      return;
    }

    if (name.length > NAME_MAX_LENGTH || message.length > MESSAGE_MAX_LENGTH) {
      alert("입력값이 글자 수 제한을 초과했습니다.");
      return;
    }

    await db.collection("guestbook").add({
      name,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    form.reset();
  });
});
