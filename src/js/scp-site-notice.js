const SESSION_KEY = 'scp-site-notice-dismissed';

function dismissScpSiteNotice() {
  document.documentElement.classList.add('scp-site-notice-dismissed');
  try {
    sessionStorage.setItem(SESSION_KEY, '1');
  } catch (error) {
    // Ignore storage failures (private browsing, etc.)
  }
}

document.querySelectorAll('[data-scp-notice-dismiss]').forEach((button) => {
  button.addEventListener('click', dismissScpSiteNotice);
});
