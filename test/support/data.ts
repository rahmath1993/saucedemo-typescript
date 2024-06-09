class Data {
    public _page: string
    public _url: string
    public _listIndex: number
    
    public set indexList(listIndex: number) {
        this._listIndex = listIndex
    }

    public get indexList() {
        return this._listIndex
    }

    public set currentPage(page: string) {
        this._page = page
    }

    public get currentPage() {
        return this._page
    }

    public set currentBaseUrl(url: string) {
        this._url = url
    }

    public get currentBaseUrl() {
        return this._url
    }   

    public clearData() {
        this._page = ''
        this._url = ''
    }
}

export default new Data()
