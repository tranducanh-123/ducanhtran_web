// Chờ DOM tải hoàn tất
document.addEventListener("DOMContentLoaded", function () {
    
    // 4.1. Hiển thị thông báo chào mừng kèm ngày hệ thống
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    alert(`Hôm nay là ngày ${formattedDate}, Chào mừng bạn đến với trang của Trần Đức Anh!`);

    // 4.4. Tự động cập nhật năm bản quyền ở Footer
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = year;
    }

    // 4.2. Đồng hồ số cập nhật mỗi giây
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const clockElement = document.getElementById("clock");
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
    updateClock(); // Chạy ngay lập tức lần đầu
    setInterval(updateClock, 1000); // Cập nhật mỗi 1000ms (1 giây)

    // 4.3. Popup phóng to ảnh đại diện
    const avatarImg = document.getElementById("avatarImg");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModalBtn = document.getElementById("closeModalBtn");

    avatarImg.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });

    // Đóng modal khi bấm nút (×)
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Đóng modal khi click ra vùng nền đen bên ngoài ảnh
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // 3.3 (Yêu cầu JS): Hiển thị / Ẩn phần giới thiệu sở thích khi bấm nút
    const toggleHobbyBtn = document.getElementById("toggleHobbyBtn");
    const hobbyList = document.getElementById("hobbyList");

    toggleHobbyBtn.addEventListener("click", function () {
        hobbyList.classList.toggle("hidden");
        
        if (hobbyList.classList.contains("hidden")) {
            toggleHobbyBtn.textContent = "Xem thêm";
        } else {
            toggleHobbyBtn.textContent = "Thu gọn";
        }
    });
});