/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   text Element selector
 /** */
export default async (action: 'click' | 'doubleClick', text: string) => {
    /**
     * Element to perform the action on
     */
    const selector = await $("//*[contains(text(),'" + text + "')]");

    /**
     * The method to call on the browser object
     */
    const method = action === 'click' ? 'click' : 'doubleClick';
    browser.pause(2000);
    await selector[method]();
};
