import { pages } from '../../page-object/pages';
import data from '../data';

/**
 * Perform an click action on the given element
 * @param  {String}   selector Element selector
 */
export default async (selector: any) => {
    /**
     * Page field define key selector in pages
     * @type {Object}
     */

    const page = pages[data.currentPage];

    if (selector in page) {
        const listGet = await $$(page[selector]).length;
        return listGet;
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
