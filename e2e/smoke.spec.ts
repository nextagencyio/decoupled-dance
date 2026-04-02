import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and displays hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Rhythm/)
    // Check hero section has content from Drupal
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('displays navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav a[href="/classes"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/instructors"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/performances"]').first()).toBeVisible()
  })
})

test.describe('Classes', () => {
  test('listing page loads with class cards', async ({ page }) => {
    await page.goto('/classes')
    await expect(page.locator('h1')).toContainText('Classes')
    // Should have at least one class card
    const cards = page.locator('[class*="grid"] > *')
    await expect(cards.first()).toBeVisible()
  })

  test('detail page loads for a class', async ({ page }) => {
    await page.goto('/classes/classical-ballet')
    await expect(page.locator('h1')).toContainText('Classical Ballet')
    // Should show details sidebar
    await expect(page.locator('text=Dance Style')).toBeVisible()
  })
})

test.describe('Instructors', () => {
  test('listing page loads with instructor cards', async ({ page }) => {
    await page.goto('/instructors')
    await expect(page.locator('h1')).toContainText('Instructors')
    const cards = page.locator('[class*="grid"] > *')
    await expect(cards.first()).toBeVisible()
  })

  test('detail page loads for an instructor', async ({ page }) => {
    await page.goto('/instructors/nina-alvarez')
    await expect(page.locator('h1')).toContainText('Nina Alvarez')
    // Should show specialty in the sidebar
    await expect(page.locator('text=Specialty')).toBeVisible()
  })
})

test.describe('Performances', () => {
  test('listing page loads with performance cards', async ({ page }) => {
    await page.goto('/performances')
    await expect(page.locator('h1')).toContainText('Performances')
    const cards = page.locator('[class*="grid"] > *')
    await expect(cards.first()).toBeVisible()
  })

  test('detail page loads for a performance', async ({ page }) => {
    await page.goto('/performances/spring-showcase')
    await expect(page.locator('h1')).toContainText('Spring Showcase')
    // Should show venue details
    await expect(page.locator('text=Venue')).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About')
  })
})

test.describe('Navigation', () => {
  test('clicking Classes nav link navigates to classes page', async ({ page }) => {
    await page.goto('/')
    await page.locator('nav a[href="/classes"], header a[href="/classes"]').first().click()
    await expect(page).toHaveURL('/classes')
    await expect(page.locator('h1')).toContainText('Classes')
  })
})
