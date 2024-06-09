import data from '../data';
import { pages } from '../../page-object/pages';
import waitForDisplayed from './waitForDisplayed';

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export default async (
    action: 'click' | 'doubleClick',
    type: 'link' | 'selector',
    selector: any,
) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    const selector2 = type === 'link' ? `=${selector}` : selector;

    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];

    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = action === 'click' ? 'click' : 'doubleClick';

    if (selector in page) {
        await waitForDisplayed(page[selector], 3);
        await $(page[selector2])[method]();
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
