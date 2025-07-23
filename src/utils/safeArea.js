// utils/safeArea.js
import { Capacitor } from '@capacitor/core'

/**
 * Detect safe area bottom height
 * @returns {number} bottom safe area in pixels
 */
export const getSafeAreaBottom = () => {
  // Nếu không phải native platform thì return 0
  if (!Capacitor.isNativePlatform()) {
    console.log('Not native platform, safe area bottom = 0')
    return 0
  }
  
  const platform = Capacitor.getPlatform()
  const screenWidth = window.screen.width
  const screenHeight = window.screen.height
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  
  console.log('Platform:', platform)
  console.log('Screen dimensions:', screenWidth, 'x', screenHeight)
  console.log('Viewport dimensions:', viewportWidth, 'x', viewportHeight)
  
  if (platform === 'android') {
    return getAndroidSafeAreaBottom(screenHeight, viewportHeight)
  }
  
  if (platform === 'ios') {
    return getIOSSafeAreaBottom(screenWidth, screenHeight)
  }
  
  return 0
}

/**
 * Android safe area detection
 * @param {number} screenHeight 
 * @param {number} viewportHeight 
 * @returns {number}
 */
const getAndroidSafeAreaBottom = (screenHeight, viewportHeight) => {
  // Tính navigation bar height
  const navigationBarHeight = screenHeight - viewportHeight
  
  console.log('Android navigation bar height:', navigationBarHeight)
  
  // Nếu có navigation bar
  if (navigationBarHeight > 0) {
    // Navigation bar thường từ 48-84px tùy device
    return Math.min(navigationBarHeight, 100) // Cap tối đa 100px
  }
  
  // Fallback cho các trường hợp edge case
  // Gesture navigation thường không có navigation bar
  // Nhưng vẫn cần một chút space để tránh gesture area
  return 20
}

/**
 * iOS safe area detection
 * @param {number} screenWidth 
 * @param {number} screenHeight 
 * @returns {number}
 */
const getIOSSafeAreaBottom = (screenWidth, screenHeight) => {
  // iPhone models with home indicator
  const iPhoneModels = [
    // iPhone X series và newer có home indicator
    { width: 375, height: 812, safeBottom: 34 }, // iPhone X, XS, 11 Pro
    { width: 414, height: 896, safeBottom: 34 }, // iPhone XR, 11, XS Max, 11 Pro Max
    { width: 390, height: 844, safeBottom: 34 }, // iPhone 12, 12 Pro
    { width: 428, height: 926, safeBottom: 34 }, // iPhone 12 Pro Max
    { width: 375, height: 667, safeBottom: 0 },  // iPhone 6, 7, 8 (no home indicator)
    { width: 414, height: 736, safeBottom: 0 },  // iPhone 6+, 7+, 8+ (no home indicator)
  ]
  
  // Tìm model phù hợp
  const matchedModel = iPhoneModels.find(model => 
    (model.width === screenWidth && model.height === screenHeight) ||
    (model.width === screenHeight && model.height === screenWidth) // Handle rotation
  )
  
  if (matchedModel) {
    console.log('Matched iPhone model:', matchedModel)
    return matchedModel.safeBottom
  }
  
  // Fallback: nếu không match model nào
  // Devices với height >= 812 thường có home indicator
  const minHeight = Math.min(screenWidth, screenHeight)
  const maxHeight = Math.max(screenWidth, screenHeight)
  
  if (maxHeight >= 812) {
    console.log('Unknown iPhone with home indicator detected')
    return 34
  }
  
  console.log('iPhone without home indicator detected')
  return 0
}

/**
 * Get all safe area insets
 * @returns {Object} {top, bottom, left, right}
 */
export const getSafeAreaInsets = () => {
  if (!Capacitor.isNativePlatform()) {
    return { top: 0, bottom: 0, left: 0, right: 0 }
  }
  
  const platform = Capacitor.getPlatform()
  const bottom = getSafeAreaBottom()
  
  // Top safe area (status bar, notch)
  let top = 0
  if (platform === 'ios') {
    // iOS status bar + notch
    const screenHeight = Math.max(window.screen.width, window.screen.height)
    top = screenHeight >= 812 ? 44 : 20 // Notch devices vs normal
  } else if (platform === 'android') {
    // Android status bar thường ~24-30px
    top = 24
  }
  
  return {
    top,
    bottom,
    left: 0, // Thường không cần cho mobile
    right: 0
  }
}

/**
 * Apply safe area to DOM element
 * @param {HTMLElement} element 
 * @param {Object} options - {top, bottom, left, right}
 */
export const applySafeArea = (element, options = {}) => {
  const insets = getSafeAreaInsets()
  
  if (options.top) {
    element.style.paddingTop = `${insets.top}px`
  }
  
  if (options.bottom) {
    element.style.paddingBottom = `${insets.bottom}px`
  }
  
  if (options.left) {
    element.style.paddingLeft = `${insets.left}px`
  }
  
  if (options.right) {
    element.style.paddingRight = `${insets.right}px`
  }
}

/**
 * Set CSS custom properties for safe area
 */
export const setCSSCustomProperties = () => {
  const insets = getSafeAreaInsets()
  
  const root = document.documentElement
  root.style.setProperty('--safe-area-top', `${insets.top}px`)
  root.style.setProperty('--safe-area-bottom', `${insets.bottom}px`)
  root.style.setProperty('--safe-area-left', `${insets.left}px`)
  root.style.setProperty('--safe-area-right', `${insets.right}px`)
  
  console.log('CSS custom properties set:', insets)
}

/**
 * Composable for Vue (JavaScript version)
 * @returns {Object}
 */
export const useSafeArea = () => {
  const insets = getSafeAreaInsets()
  
  return {
    safeAreaTop: insets.top,
    safeAreaBottom: insets.bottom,
    safeAreaLeft: insets.left,
    safeAreaRight: insets.right,
    applySafeArea,
    setCSSCustomProperties
  }
}

/**
 * Quick setup function
 */
export const setupSafeArea = () => {
  // Set CSS custom properties
  setCSSCustomProperties()
  
  // Apply cho app container
  const appContainer = document.getElementById('app')
  if (appContainer) {
    applySafeArea(appContainer, { bottom: true })
  }
  
  // Apply cho bottom navigation
  const bottomNav = document.querySelector('.bottom-nav')
  if (bottomNav) {
    const safeBottom = getSafeAreaBottom()
    bottomNav.style.bottom = safeBottom + 'px'
  }
  
  // Apply cho các elements có class fixed-bottom
  const fixedBottomElements = document.querySelectorAll('.fixed-bottom')
  fixedBottomElements.forEach(element => {
    applySafeArea(element, { bottom: true })
  })
}

// Default export
export default {
  getSafeAreaBottom,
  getSafeAreaInsets,
  applySafeArea,
  setCSSCustomProperties,
  useSafeArea,
  setupSafeArea
}