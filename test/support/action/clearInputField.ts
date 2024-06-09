import { pages } from '../../page-object/pages';
import data from '../data';
import { Key } from 'webdriverio';

/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector
 */
export default async (selector: any) => {
    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];

    /**
     * The param selector to call on key on pages
     * @type {any}
     */
    if (selector in page) {
        // await $(page[selector]).clearValue();
        await $(page[selector]).setValue('');
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys(Key.Backspace);
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
