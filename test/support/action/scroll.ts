import { pages } from '../../page-object/pages';
import data from '../data';

/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
export default async (selector: any) => {
    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];

    if (selector in page) {
        await $(page[selector]).scrollIntoView();
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
