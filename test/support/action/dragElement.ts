import { pages } from '../../page-object/pages';
import data from '../data';

/**
 * Drag a element to a given destination
 * @param  {String}   selector      The selector for the source element
 * @param  {String}   destination The selector for the destination element
 */
export default async (selector: any, destination: any) => {
    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];

    if (selector in page && destination in page) {
        const target = await $(page[destination]);
        await $(page[selector]).dragAndDrop(target);
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
