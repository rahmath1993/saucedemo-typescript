import clickElement from '../action/clickElement';
import setInputField from '../action/setInputField';

export async function loginSuccess(table: any) {
    /**
     * The row to define data table
     * @type {any}
     */
    const row = table.hashes();

    /**
     * The setInputFile for the input username and password
     * @type {Function}
     */
    setInputField('set', row[0].username, 'username');
    browser.pause(3000);
    setInputField('set', row[0].password, 'password');
    browser.pause(3000);

    /**
     * The clickElement for the click button login
     * @type {Function}
     */
  // clickElement('click', 'selector', 'btnLogin');
}
