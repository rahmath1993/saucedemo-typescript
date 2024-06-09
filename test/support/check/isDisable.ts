import { pages } from '../../page-object/pages';
import data from '../data';

/**
 * Set the value of the given input field to a new value or add a value to the
 * current selector value
 * @param  {any} selector Element selector
 */
export default async (selector: any) => {
    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];

    if (selector in page) {
        const isDisable = await $(page[selector]);
        expect(isDisable).toBeDisabled();
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
