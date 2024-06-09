import { Then, When } from '@wdio/cucumber-framework';
import data from '../support/data';
import getListIndex from '../support/action/getListIndex';
import {
    verifyListMaps,
    verifyListMapsDelete,
} from '../support/behavior/overview-action';

When(/^I get list element "(.+)"$/, async (selector) => {
    data.indexList = await getListIndex(selector);
});

Then('I expect list of maps has been successfully increased', async () => {
    await verifyListMaps();
});

Then(
    /^I expect list of maps has been successfully (confirm|cancel) delete$/,
    async (type) => {
        await verifyListMapsDelete(type);
    },
);
