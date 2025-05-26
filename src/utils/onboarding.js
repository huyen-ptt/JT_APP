export function hasSeenOnboarding() {
  return localStorage.getItem('hasSeenOnboarding') === 'true';
}

export function markOnboardingSeen() {
  localStorage.setItem('hasSeenOnboarding', 'true');
}