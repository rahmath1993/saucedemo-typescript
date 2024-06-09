import type { Selector } from 'webdriverio';
import { pages } from '../../page-object/pages';
import data from '../data';

/**
 * Check if the given selector is enabled
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the given selector
 *                              is enabled or not
 */
export default async (selector: any, falseCase: boolean) => {
    /**
     * The enabled state of the given selector
     * @type {Boolean}
     */
    const page = pages[data.currentPage];

    if (selector in page) {
        const isEnabled = await $(page[selector]).isEnabled();

        if (falseCase) {
            expect(isEnabled).not.toEqual(
                true,
                // @ts-expect-error
                `Expected element "${selector}" not to be enabled`,
            );
        } else {
            expect(isEnabled).toEqual(
                true,
                // @ts-expect-error
                `Expected element "${selector}" to be enabled`,
            );
        }
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
