function switchTab(event, tabId) {
    // 1. Hide all elements with the class="tab-content"
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // 2. Remove the class "active" from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).style.display = 'block';
    // Small timeout to allow display:block to register before adding active class for CSS animations if you add them later
    setTimeout(() => {
        document.getElementById(tabId).classList.add('active');
    }, 10);
    
    event.currentTarget.classList.add('active');
    
    // 4. Scroll smoothly back to the top when switching tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
