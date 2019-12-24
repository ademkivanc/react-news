export const getNews = obj => ({
  type: 'GET_NEWS',
  obj
})

export function newsDrawerState(isShow) {
    return {
      type: 'NEWS_DRAWER_STATE',
      isShow: isShow
    }
}