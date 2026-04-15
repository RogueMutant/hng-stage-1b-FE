document.addEventListener('DOMContentLoaded', () => {
    // 1. Time Update Logic
    const timeEl = document.querySelector('[data-testid="test-user-time"]');
    
    function updateTime() {
        if (timeEl) {
            timeEl.textContent = Date.now().toString();
        }
    }
    
    // Initial call to avoid layout shift delay
    updateTime();
    
    // Update every 1000ms per requirement
    setInterval(updateTime, 1000);

    // 2. Avatar Upload Logic (Optional Enhancement)
    const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
    const avatarInput = document.getElementById('avatar-upload');
    const avatarLabel = document.querySelector('.upload-label');

    // Accessibility for label keyboard trigger
    if (avatarLabel && avatarInput) {
        avatarLabel.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                avatarInput.click();
            }
        });
    }

    if (avatarInput && avatarImg) {
        avatarInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                // Free memory if object URL already exists
                if (avatarImg.src.startsWith('blob:')) {
                    URL.revokeObjectURL(avatarImg.src);
                }
                
                const objectUrl = URL.createObjectURL(file);
                avatarImg.src = objectUrl;
            }
        });
    }
});
