export default async (text: string) => {
    const selector = await $(
        "//*[contains(text(),'" + text + "')]",
    ).waitForDisplayed({
        timeout: 5000,
    });
    try {
        expect(selector).toEqual(
            true,
            // @ts-expect-error
            `Expected element "${selector}" not to be displayed`,
        );
    } catch {
        throw new Error(`Expected element "${selector}" not to be displayed`);
    }
};
