import { chromium, firefox, webkit, type LaunchOptions } from "@playwright/test";

const options: LaunchOptions = {
    headless: false
};

export const invokeBrowser = async () => {

    const browserType = process.env.BROWSER || "chromium";

    if (browserType.toLowerCase() === "firefox") {
        return firefox.launch(options);
    } else if (browserType.toLowerCase() === "webkit") {
        return webkit.launch(options);
    }

    return chromium.launch(options);
};