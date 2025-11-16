// src/pages/LoginPage.ts
import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "./BasePage.ts";

export class LoginPage extends BasePage {
  private readonly loginLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly successBanner: Locator;
  readonly errorBanner: Locator;

  constructor(page: Page) {
    super(page);

    this.loginLink = this.page.locator('a:has-text("Form Authentication")');
    this.usernameInput = this.page.locator("#username");
    this.passwordInput = this.page.getByLabel("Password");
    this.loginButton = this.page.locator('i:has-text("Login")');
    this.successBanner = this.page.locator(".flash.success");
    this.errorBanner = this.page.locator(".flash.error");
  }

  async goToLoginPage(): Promise<void> {
    await this.click(this.loginLink);
  }

  async login(username: string, password: string): Promise<void> {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }
}
