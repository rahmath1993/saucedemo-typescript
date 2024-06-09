import checkIfElementExists from '../lib/checkIfElementExists';
import { pages } from '../../page-object/pages';
import data from '../data';
import waitForDisplayed from './waitForDisplayed';

/**
 * Set the value of the given input field to a new value or add a value to the
 * current selector value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the selector to
 * @param  {String}   selector Element selector
 */
export default async (method: string, value: string, selector: any) => {
    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
    const command = method === 'add' ? 'addValue' : 'setValue';

    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];

    let checkValue = value;

    if (selector in page) {
        await waitForDisplayed(page[selector], 3);

        if (!value) {
            checkValue = '';
        }
        await $(page[selector])[command](checkValue);
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
