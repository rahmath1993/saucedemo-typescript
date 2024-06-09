import type { Selector } from 'webdriverio';
import { pages } from '../../page-object/pages';
import data from '../data';

/**
 * Check the selected state of the given element
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the element is elected or
 *                              not
 */
export default async (selector: any, falseCase: boolean) => {
    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];

    /**
     * The selected state
     * @type {Boolean}
     */
    if (selector in page) {
        const isSelected = await $(selector).isSelected();

        if (falseCase) {
            expect(isSelected)
                // @ts-expect-error
                .not.toEqual(true, `"${selector}" should not be selected`);
        } else {
            expect(isSelected)
                // @ts-expect-error
                .toEqual(true, `"${selector}" should be selected`);
        }
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
