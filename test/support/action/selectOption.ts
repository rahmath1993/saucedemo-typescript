import { pages } from '../../page-object/pages';
import data from '../data';

/**
 * Select an option of a select element
 * @param  {String}   selectionType  Type of method to select by (name, value or
 *                                   text)
 * @param  {String}   selectionValue Value to select by
 * @param  {String}   selector     Element selector
 */
export default async (
    selectionType: 'name' | 'value' | 'text',
    selectionValue: string,
    selector: any,
) => {
    /**
     * The method to use for selecting the option
     * @type {String}
     */
    let command:
        | 'selectByAttribute'
        | 'selectByAttribute'
        | 'selectByVisibleText';

    const commandArguments: string[] = [selectionValue];
    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];

    switch (selectionType) {
        case 'name': {
            command = 'selectByAttribute';

            // The selectByAttribute command expects the attribute name as it
            // second argument so let's add it
            commandArguments.unshift('name');

            break;
        }

        case 'value': {
            // The selectByAttribute command expects the attribute name as it
            // second argument so let's add it
            commandArguments.unshift('value');
            command = 'selectByAttribute';
            break;
        }

        case 'text': {
            command = 'selectByVisibleText';
            break;
        }

        default: {
            throw new Error(`Unknown selection type "${selectionType}"`);
        }
    }

    if (selector in page) {
        await $(page[selector])[command](
            ...(commandArguments as [string, string]),
        );
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
