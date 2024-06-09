import type { Selector } from 'webdriverio';
import { pages } from '../../page-object/pages';
import data from '../data';

/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 * @param  {String}   expectedText  The text to validate against
 */
export default async (
    elementType: 'element' | 'button',
    selector: any,
    falseCase: boolean,
    expectedText: string,
) => {
    /**
     * The command to execute on the browser object
     * @type {String}
     */
    let command: 'getText' | 'getValue' = 'getValue';

    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];

    if (elementType === 'button') {
        command = 'getText';
    }

    /**
     * The expected text to validate against
     * @type {String}
     */
    let parsedExpectedText = expectedText;

    /**
     * Whether to check if the content equals the given text or not
     * @type {Boolean}
     */
    let boolFalseCase = !!falseCase;

    // Check for empty element
    if (typeof parsedExpectedText === 'function') {
        parsedExpectedText = '';

        boolFalseCase = !boolFalseCase;
    }

    if (parsedExpectedText === undefined && falseCase === undefined) {
        parsedExpectedText = '';
        boolFalseCase = true;
    }

    if (selector in page) {
        const text = await $(page[selector])[command]();

        if (boolFalseCase) {
            expect(parsedExpectedText).not.toBe(text);
        } else {
            expect(parsedExpectedText).toBe(text);
        }
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
