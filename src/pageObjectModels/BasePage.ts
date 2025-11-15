import { type Page, type Locator } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Common wrapped actions — consistent, loggable, retryable
  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async fill(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async waitForLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}