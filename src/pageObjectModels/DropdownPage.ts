import { type Page, type Locator } from "@playwright/test";
import { BasePage } from "./BasePage.ts";

export class DropdownPage extends BasePage {
    readonly dropdownLink: Locator;
    readonly dropdown: Locator;

    constructor(page: Page) {
        super(page);

        this.dropdownLink = this.page.locator('a:has-text("Dropdown")');
        this.dropdown = this.page.locator('#dropdown');
    }

    async goToDropdownPage(): Promise<void> {
        await this.click(this.dropdownLink);
    }

    async selectOption(option: string): Promise<void> {
        await this.dropdown.selectOption(option);
    }

    async getSelectedValue(): Promise<string> {
        return await this.dropdown.inputValue();
    }
}