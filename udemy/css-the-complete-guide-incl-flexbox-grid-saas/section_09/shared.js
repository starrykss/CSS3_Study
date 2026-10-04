var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

console.log(backdrop); // 요소 그대로 보기
console.dir(backdrop); // JavaScript 객체 형태로 보기

var selectedButtons = document.querySelectorAll(".plan button"); // combinator 전달

console.log(selectedButtons);
console.dir(selectedButtons);

//
// 모달 열기 처리
//

for (var i = 0; i < selectedButtons.length; i++) {
  selectedButtons[i].addEventListener("click", () => {
    // modal.style.display = "block";
    // backdrop.style.display = "block";

    // modal.className = "open";  // This will actually overwrite the complete class

    // .open 클래스 추가
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

//
// 모달 닫기 처리
//

function closeModal() {
  // modal.style.display = "none";
  // backdrop.style.display = "none";

  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

backdrop.addEventListener("click", () => {
  // mobileNav.style.display = "none";

  mobileNav.classList.remove("open");

  // 모달창 닫기
  closeModal();
}); // 배경 클릭 시 닫기

if (modalButton) {
  modalButton.addEventListener("click", closeModal); // 모달 No 버튼 클릭 시 닫기
}

//
// 햄버거 버튼 클릭 처리
//

toggleButton.addEventListener("click", () => {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";

  // .open 클래스 추가
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
