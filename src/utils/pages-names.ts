import {PagesUrls} from "../enums/pages-urls";

const pagesNamesByUrls: Map<PagesUrls, string> = new Map()
    .set(PagesUrls.main, 'Маркетолог')
    .set(PagesUrls.research, 'Иследования')
    .set(PagesUrls.mall, 'MALLDATA')
    .set(PagesUrls.sms, 'SMS-рассылки для бизнеса')
    .set(PagesUrls.scale, 'SMS-рассылки для бизнеса')

const getPageNameByUrl = (pageUrl: PagesUrls): string => {
    return pagesNamesByUrls.get(pageUrl) || '';
}

export {
    getPageNameByUrl,
};
