import { pages } from '../../page-object/pages';
import data from '../data';
const path = require('path');

export default async (nameFile: string, selector: string) => {
    /**
     * Page field define key selector in pages
     * @type {Object}
     */
    const page = pages[data.currentPage];

    /**
     * Define path file
     * @type {String}
     */
    const name = 'src/file/' + nameFile;
    const filepath = path.join(process.cwd(), name);
    const remoteFile = await browser.uploadFile(filepath);

    if (selector in page) {
        const element = await $(page[selector]);
        // browser.execute("arguments[0].value='" + filepath + "';", element);
        try {
            await browser.execute(
                "arguments[0].style.display = 'block';",
                element,
            );
            await $(page[selector]).setValue(remoteFile);
        } catch {
            throw new Error(
                `locator '${selector}' is not upload file in page '${data.currentPage}'!`,
            );
        }
    } else {
        throw new Error(
            `locator '${selector}' is not defined in page '${data.currentPage}'!`,
        );
    }
};
