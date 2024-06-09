import { pages } from '../../page-object/pages';
import data from '../data';

/**
 * Select a option from a select element by it's index
 * @param  {String}   index      The index of the option
 * @param  {String}   obsolete   The ordinal indicator of the index (unused)
 * @param  {String}   selector Element selector
 *
 * @todo  merge with selectOption
 */
export default async (index: string, obsolete: never, selector: any) => {
    /**
     * The index of the option to select
     * @type {Int}
     */
    const optionIndex = parseInt(index, 10);

    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];

    if (selector in page) {
        await $(page[selector]).selectByIndex(optionIndex);
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
