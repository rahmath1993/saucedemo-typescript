import type { Selector } from 'webdriverio';
import { pages } from '../../page-object/pages';
import data from '../data';

/**
 * Check if the given element is (not) visible
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
export default async (selector: any, falseCase: boolean) => {
    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];
    /**
     * Visible state of the give element
     * @type {String}
     */

    if (selector in page) {
        const isDisplayed = await $(selector).isDisplayed();

        if (falseCase) {
            expect(isDisplayed).not.toEqual(
                true,
                // @ts-expect-error
                `Expected element "${selector}" not to be displayed`,
            );
        } else {
            expect(isDisplayed).toEqual(
                true,
                // @ts-expect-error
                `Expected element "${selector}" to be displayed`,
            );
        }
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
