/**
 * Wait for the given element to become visible
 * @param  {String}   selector      Element selector
 *
 * @todo  merge with waitfor
 */
export default async (selector: any, timeout: number) => {
  /**
   * Maximum number of milliseconds to wait for
   * @type {Int}
   */
  const ms = timeout * 1000;

  await $(selector).waitForDisplayed({
    timeout: ms,
  });
};
