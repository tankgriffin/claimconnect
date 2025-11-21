// Simple test to verify modal dimensions
// This can be run in browser console on http://localhost:5173

function testModal() {
  // Click on a category card to open modal
  const categoryCard = document.querySelector('.category-card');
  if (categoryCard) {
    categoryCard.click();
    
    // Wait a moment for modal to open
    setTimeout(() => {
      const modal = document.querySelector('.form-modal.active');
      const modalContent = document.querySelector('.form-modal-content');
      
      if (modal && modalContent) {
        const rect = modalContent.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        console.log('Modal Test Results:');
        console.log('Modal height:', rect.height + 'px');
        console.log('Viewport height:', viewportHeight + 'px');
        console.log('Modal fits in viewport:', rect.height < viewportHeight);
        console.log('Modal has scrollbar:', modalContent.scrollHeight > modalContent.clientHeight);
        
        // Check for overflow
        const computedStyle = window.getComputedStyle(modalContent);
        console.log('Overflow-y style:', computedStyle.overflowY);
        
        return {
          modalHeight: rect.height,
          viewportHeight,
          fitsInViewport: rect.height < viewportHeight,
          hasScrollbar: modalContent.scrollHeight > modalContent.clientHeight
        };
      }
    }, 500);
  }
}

// Run the test
console.log('To test modal, run: testModal()');