import closeLastOpenedWindow from '../../support/action/closeLastOpenedWindow';
import deleteCookies from '../../support/action/deleteCookies';
import dragElement from '../../support/action/dragElement';
import focusLastOpenedWindow from '../../support/action/focusLastOpenedWindow';
import handleModal from '../../support/action/handleModal';
import pause from '../../support/action/pause';
import pressButton from '../../support/action/pressButton';
import selectOption from '../../support/action/selectOption';
import selectOptionByIndex from '../../support/action/selectOptionByIndex';
import setCookie from '../../support/action/setCookie';
import setInputField from '../../support/action/setInputField';
import setPromptText from '../../support/action/setPromptText';
import switchIFrame from '../../support/action/switchIFrame';
import { pages } from '../../page-object/pages';
import { When } from '@wdio/cucumber-framework';
import data from '../../support/data';
import clearInputField from '../../support/action/clearInputField';
import clickElement from '../../support/action/clickElement';
import scroll from '../../support/action/scroll';
import moveTo from '../../support/action/moveTo';
import fileUpload from '../../support/action/fileUpload';
import clickByText from '../../support/action/clickByText';
import getListIndex from '../../support/action/getListIndex';

When(/^user is on "(.+)" page$/, async (pageName) => {
    // check if param already define in 'pages' or not
    if (pageName in pages) {
        data.currentPage = pageName;
        console.log('Current page: ' + data.currentPage);
    } else {
        throw new Error(`page '${pageName}' is not define in 'pages.ts' file!`);
    }
});

When(
    /^I (click|doubleclick) on the (link|button|element) "(.+)"$/,
    clickElement,
);

When(/^I (click|doubleclick) on the text "(.+)"$/, clickByText);

When(/^I upload file "(.+)" on the field "(.+)"$/, fileUpload);

When(/^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/, setInputField);

When(/^I clear the inputfield "([^"]*)?"$/, clearInputField);

When(/^I drag element "([^"]*)?" to element "([^"]*)?"$/, dragElement);

When(/^I waiting for loading (\d+) seconds$/, pause);

When(/^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/, setCookie);

When(/^I delete the cookie "([^"]*)?"$/, deleteCookies);

When(/^I press "([^"]*)?"$/, pressButton);

When(/^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/, handleModal);

When(/^I enter "([^"]*)?" into the prompt$/, setPromptText);

When(/^I scroll to element "([^"]*)?"$/, scroll);

When(/^I close the last opened (window|tab)$/, closeLastOpenedWindow as never);

When(/^I focus the last opened (window|tab)$/, focusLastOpenedWindow as never);

When(
    /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
    selectOptionByIndex as never,
);

When(
    /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
    selectOption,
);

When(
    /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
    moveTo,
);

When(/^I switch to the iframe "([^"]*)?"$/, switchIFrame);
