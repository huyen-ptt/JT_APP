export function hasSeenOnboarding() {
  let _storage = localStorage.getItem('hasSeenOnboarding');
  console.log(_storage);
  return _storage === 'true';
}

export function markOnboardingSeen() {
  console.log('OUT')
  localStorage.setItem('hasSeenOnboarding', 'true');
}