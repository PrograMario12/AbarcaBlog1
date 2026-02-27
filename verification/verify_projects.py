
import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Test Home Page Projects
        print("Navigating to Home Page...")
        await page.goto("http://localhost:3000")
        await page.wait_for_selector("#projects")

        # Check for specific projects that should be on home page
        print("Checking Home Page Projects...")
        content = await page.content()
        assert "Autonomous Agent Swarm" in content
        assert "Vision Analysis Pipeline" in content
        assert "Águila Desarrolladora" in content
        assert "Vision-Language Processor" not in content # Should NOT be on home page

        await page.screenshot(path="verification/home_projects.png", full_page=True)
        print("Home page screenshot taken.")

        # Test Projects Page
        print("Navigating to Projects Page...")
        await page.goto("http://localhost:3000/projects")

        # Check for specific projects that should be on projects page
        print("Checking Projects Page Projects...")
        content = await page.content()
        assert "Autonomous Agent Swarm" in content
        assert "Vision-Language Processor" in content
        assert "Vision Analysis Pipeline" not in content # Should NOT be on projects page

        await page.screenshot(path="verification/projects_page.png", full_page=True)
        print("Projects page screenshot taken.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
