export function scrollToFirstVisibleError() {
    // Lấy tất cả các phần tử có class 'error-message' và đang hiển thị
    const errors = Array.from(document.querySelectorAll('.error-message')); // offsetParent null nghĩa là bị ẩn (accordion đang đóng, v.v.)

    console.log(errors.length);

    if (errors.length === 0) return true;
  
    const firstError = errors[0];
  
    // Mở các accordion/tab nếu phần tử bị ẩn trong đó
    let parent = firstError.parentElement;
    while (parent) {
      // Mở PrimeVue Accordion nếu có
      if (parent.classList.contains('p-accordion-tab')) {
        const toggleHeader = parent.querySelector('.p-accordion-header');
        if (toggleHeader && !parent.classList.contains('p-accordion-tab-active')) {
          toggleHeader.click(); // Mở accordion nếu đang đóng
        }
      }
  
      // Nếu có các wrapper hoặc collapse khác, có thể thêm check ở đây
  
      parent = parent.parentElement;
    }
  
    // Scroll đến phần tử đầu tiên có lỗi
    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
    return false;
  }
  