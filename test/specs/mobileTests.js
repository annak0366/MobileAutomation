const assert = require('assert');
const inputText = 'Test123';
const password = 'Test123&#'

 describe('My First demo appp testing', () => {
    it('Checking Switch functionality', async() => {
        const switcher = `//android.widget.Switch[@content-desc="switch"]`;
        await $(`~Forms`).click();
        await $(switcher).click();
        const textElement = await $(`//android.widget.TextView[@content-desc="switch-text"]`).getText();
        assert.strictEqual(textElement, 'Click to turn the switch OFF');
    });

    it('Checking the "Input Field" functionality', async() => {
        const inputField = `//android.widget.EditText[@content-desc="text-input"]`;
        const typedText = `//android.widget.TextView[@content-desc="input-text-result"]`;
        await $(`~Forms`).click();
        await $(inputField).setValue(inputText);
        const text = await $(typedText).getText();
        assert.strictEqual(text, inputText);
    });

    it('Checking the dropdown functionality', async() => {
        await $(`~Forms`).click();
        await $(`~Dropdown`).click();
        const item = `//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]`;
        const itemText = 'webdriver.io is awesome';
        await $(item).click();
        const dropdownElement = $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText');
        const actualText = await dropdownElement.getText();
        assert.strictEqual(actualText, itemText);
    });
 
    it('Checking the Horizontal swipe functionality', async () => {
        const SWIPE_ICON_HOME_SCREEN = `//android.widget.Button[@content-desc="Swipe"]/android.widget.TextView`;
        const SWIPE_HEADER_TEXT = `//android.widget.ScrollView[@content-desc="Swipe-screen"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView`;

        const expectedText = 'GREAT COMMUNITY';

        await $(SWIPE_ICON_HOME_SCREEN).click();
        await $(SWIPE_HEADER_TEXT).click();
    
        const anchorPercentage = 50;
        const startPointPercentage = 90;
        const endPointPercentage = 10;
    
        const { height, width } = await driver.getWindowSize();
        const anchor = height * anchorPercentage / 100;
        const startPoint = width * startPointPercentage / 100;
        const endPoint = width * endPointPercentage / 100;
    
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: startPoint,
                    y: anchor
                }
            },
            {
                action: 'wait',
                options: { ms: 1000 }
            },
            {
                action: 'moveTo',
                options: {
                    x: endPoint,
                    y: anchor
                }
            },
            {
                action: 'release',
                options: {}
            }
        ]);
        const elementLocator = `(//android.view.ViewGroup[@content-desc="slideTextContainer"])[2]/android.widget.TextView[1]`;
        const actualText = await $(elementLocator).getText();
        console.log('Teeeexttt', actualText);
        assert.strictEqual(actualText, expectedText);
    });

    it('Checking the Sign Up functionality', async() => {
        await $(`~Login`).click();
        await $(`~button-sign-up-container`).click();
        await $(`~input-email`).setValue('gbdwhd@gmail.com');
        await $(`~input-password`).setValue(password);
        await $(`~input-repeat-password`).setValue(password);
        await $(`//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup/android.widget.TextView`).click();
        const successfulMessage = await $(`/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView`).getText();
        assert.strictEqual(successfulMessage, 'You successfully signed up!');
    });
});