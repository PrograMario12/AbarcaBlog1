import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        try:
            # Wait for server to be ready
            await page.goto("http://localhost:3000")
            # Wait for content to load
            await page.wait_for_selector("text=Mario Adair")

            # Take screenshot of the whole page
            await page.screenshot(path="verification.png", full_page=True)
            print("Screenshot saved to verification.png")

            # Check for tech stack icons
            await page.wait_for_selector("text=Arsenal Tecnológico")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
