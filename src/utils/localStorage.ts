/**
 * Utility functions for working with localStorage with TypeScript support
 * Handles cases where localStorage is not available (SSR) and provides type safety
 */

// Check if we're running in a browser environment
const isBrowser = typeof window !== 'undefined'

/**
 * Set an item in localStorage with proper serialization
 * @param key The key to store the item under
 * @param value The value to store (will be JSON serialized)
 */
export function setItem<T>(key: string, value: T): void {
  if (!isBrowser) {
    return
  }

  try {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  } catch (error) {
    console.error(`Error storing item in localStorage: ${error}`)
  }
}

/**
 * Get an item from localStorage with type safety
 * @param key The key to retrieve
 * @param defaultValue Optional default value if item doesn't exist
 * @returns The deserialized value or defaultValue if not found
 */
export function getItem<T>(key: string, defaultValue?: T): T | undefined {
  if (!isBrowser) {
    return defaultValue
  }

  try {
    const item = localStorage.getItem(key)
    if (item === null) {
      return defaultValue
    }
    return JSON.parse(item) as T
  } catch (error) {
    console.error(`Error retrieving item from localStorage: ${error}`)
    return defaultValue
  }
}

/**
 * Remove an item from localStorage
 * @param key The key to remove
 */
export function removeItem(key: string): void {
  if (!isBrowser) {
    return
  }

  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing item from localStorage: ${error}`)
  }
}

/**
 * Clear all items from localStorage
 */
export function clear(): void {
  if (!isBrowser) {
    return
  }

  try {
    localStorage.clear()
  } catch (error) {
    console.error(`Error clearing localStorage: ${error}`)
  }
}

/**
 * Check if localStorage is available
 * @returns boolean indicating if localStorage can be used
 */
export function isLocalStorageAvailable(): boolean {
  if (!isBrowser) {
    return false
  }
  
  try {
    const testKey = '__test__'
    localStorage.setItem(testKey, testKey)
    localStorage.removeItem(testKey)
    return true
  } catch (e) {
    return false
  }
}

// Export a default object with all methods
const localStorageUtil = {
  setItem,
  getItem,
  removeItem,
  clear,
  isLocalStorageAvailable,
}

export default localStorageUtil

