import generated from '../../../src/helper/generated';
/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default async (type: 'url' | 'site') => {
    /**
     * The URL to navigate to
     * @type {String}
     */
    const baseUrl: string = generated.getEnv('URL');
    const url = type === 'url' ? baseUrl : browser.options.baseUrl + baseUrl;
    await browser.url(url);
    await browser.maximizeWindow();
};
