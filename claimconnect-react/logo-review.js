import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function reviewLogoPositioning() {
  // Create screenshots directory if it doesn't exist
  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  try {
    // Desktop view test
    console.log('Testing desktop view...');
    const desktopPage = await context.newPage();
    await desktopPage.setViewportSize({ width: 1920, height: 1080 });
    
    // Navigate to localhost
    await desktopPage.goto('http://localhost:5173');
    
    // Wait for the page to load completely
    await desktopPage.waitForLoadState('networkidle');
    
    // Take full page screenshot for desktop
    await desktopPage.screenshot({ 
      path: path.join(screenshotsDir, 'desktop-full-page.png'),
      fullPage: true 
    });
    
    // Take header-focused screenshot for desktop
    const header = await desktopPage.locator('header, .header, nav, .nav').first();
    if (await header.count() > 0) {
      await header.screenshot({ 
        path: path.join(screenshotsDir, 'desktop-header-only.png') 
      });
    } else {
      // If no header element found, take a viewport screenshot of the top
      await desktopPage.screenshot({ 
        path: path.join(screenshotsDir, 'desktop-top-section.png'),
        clip: { x: 0, y: 0, width: 1920, height: 200 }
      });
    }
    
    // Mobile view test
    console.log('Testing mobile view...');
    const mobilePage = await context.newPage();
    await mobilePage.setViewportSize({ width: 375, height: 812 }); // iPhone X dimensions
    
    // Navigate to localhost
    await mobilePage.goto('http://localhost:5173');
    
    // Wait for the page to load completely
    await mobilePage.waitForLoadState('networkidle');
    
    // Take full page screenshot for mobile
    await mobilePage.screenshot({ 
      path: path.join(screenshotsDir, 'mobile-full-page.png'),
      fullPage: true 
    });
    
    // Take header-focused screenshot for mobile
    const mobileHeader = await mobilePage.locator('header, .header, nav, .nav').first();
    if (await mobileHeader.count() > 0) {
      await mobileHeader.screenshot({ 
        path: path.join(screenshotsDir, 'mobile-header-only.png') 
      });
    } else {
      // If no header element found, take a viewport screenshot of the top
      await mobilePage.screenshot({ 
        path: path.join(screenshotsDir, 'mobile-top-section.png'),
        clip: { x: 0, y: 0, width: 375, height: 200 }
      });
    }
    
    // Tablet view test (optional - common breakpoint)
    console.log('Testing tablet view...');
    const tabletPage = await context.newPage();
    await tabletPage.setViewportSize({ width: 768, height: 1024 }); // iPad dimensions
    
    // Navigate to localhost
    await tabletPage.goto('http://localhost:5173');
    
    // Wait for the page to load completely
    await tabletPage.waitForLoadState('networkidle');
    
    // Take header-focused screenshot for tablet
    const tabletHeader = await tabletPage.locator('header, .header, nav, .nav').first();
    if (await tabletHeader.count() > 0) {
      await tabletHeader.screenshot({ 
        path: path.join(screenshotsDir, 'tablet-header-only.png') 
      });
    } else {
      // If no header element found, take a viewport screenshot of the top
      await tabletPage.screenshot({ 
        path: path.join(screenshotsDir, 'tablet-top-section.png'),
        clip: { x: 0, y: 0, width: 768, height: 200 }
      });
    }
    
    // Try to get logo information
    console.log('Analyzing logo elements...');
    
    // Check for logo elements across all pages
    const logoSelectors = [
      'img[alt*="logo" i]',
      'img[src*="logo" i]',
      '.logo',
      '.logo img',
      'header img',
      '.header img',
      'nav img',
      '.nav img',
      '[class*="logo" i]'
    ];
    
    for (const selector of logoSelectors) {
      try {
        const logoElement = await desktopPage.locator(selector).first();
        if (await logoElement.count() > 0) {
          console.log(`Found logo element with selector: ${selector}`);
          
          // Get logo dimensions and position
          const boundingBox = await logoElement.boundingBox();
          if (boundingBox) {
            console.log(`Logo position and size:`, boundingBox);
          }
          
          // Get computed styles
          const styles = await logoElement.evaluate((el) => {
            const computed = window.getComputedStyle(el);
            return {
              width: computed.width,
              height: computed.height,
              marginLeft: computed.marginLeft,
              marginTop: computed.marginTop,
              marginRight: computed.marginRight,
              marginBottom: computed.marginBottom,
              paddingLeft: computed.paddingLeft,
              paddingTop: computed.paddingTop,
              paddingRight: computed.paddingRight,
              paddingBottom: computed.paddingBottom,
              position: computed.position,
              top: computed.top,
              left: computed.left
            };
          });
          console.log('Logo computed styles:', styles);
          break;
        }
      } catch (error) {
        // Continue to next selector
        continue;
      }
    }
    
    console.log('\nScreenshots saved to:', screenshotsDir);
    console.log('Files created:');
    console.log('- desktop-full-page.png (Full desktop view)');
    console.log('- desktop-header-only.png (Desktop header focus)');
    console.log('- mobile-full-page.png (Full mobile view)');
    console.log('- mobile-header-only.png (Mobile header focus)');
    console.log('- tablet-header-only.png (Tablet header focus)');
    
  } catch (error) {
    console.error('Error during logo review:', error);
  } finally {
    await browser.close();
  }
}

// Run the logo review
reviewLogoPositioning().catch(console.error);