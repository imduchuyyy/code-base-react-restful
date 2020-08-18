import React, { useContext, createContext, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const I18nContext = createContext()

function I18nValue() {
  const { i18n } = useTranslation()
  const changeLanguage = useCallback(language => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  })

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('language'))
  }, [i18n])

  return {
    language: localStorage.getItem('language') || i18n.language,
    changeLanguage
  }
}

export const useI18n = () => useContext(I18nContext)

export function I18nProvider({ children }) {
  return (
    <I18nContext.Provider value={I18nValue()}>{children}</I18nContext.Provider>
  )
}
