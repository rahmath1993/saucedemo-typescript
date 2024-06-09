import getListIndex from '../action/getListIndex';
import data from '../data';

export async function verifyListMaps() {
    /**
     * The index list get list total index list maps
     * @type {Number}
     */
    const indexList = Number(data._listIndex) + 1;

    expect(indexList).toEqual(await getListIndex('listMaps'));
}

/**
 * Perform an click action on the given element
 * @param  {String}   type    Type of the action for delete maps (confirm or cancle)
 */
export async function verifyListMapsDelete(type: 'confirm' | 'cancel') {
    /**
     * The index list get list total index list maps
     * @type {Number}
     */
    const indexList =
        type === 'confirm' ? data._listIndex - 1 : data._listIndex;

    expect(indexList).toEqual(await getListIndex('listMaps'));
}
