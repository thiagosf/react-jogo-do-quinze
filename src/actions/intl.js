import cookie from 'react-cookie'

let load_by_query = false

const loadLanguage = (locale) => {
  return {
    type: 'CHANGE_LANGUAGE',
    locale: locale
  }
}

export const changeLanguage = (locale) => {
  return dispatch => {
    cookie.save('locale', locale, { path: '/' });
    dispatch(loadLanguage(locale))
  }
}

export const checkLocaleInQuery = (query) => {
  return dispatch => {
    const locale = cookie.load('locale')
    if (query.locale && !load_by_query) {
      load_by_query = true
      dispatch(loadLanguage(query.locale))
    } else if (locale) {
      dispatch(loadLanguage(locale))
    }
  }
}
