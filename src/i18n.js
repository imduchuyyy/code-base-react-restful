import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  vi: {
    translation: {
      common: {
        language: {
          vietnamese: 'Tiếng Việt',
          english: 'Tiếng Anh'
        },
        menu: {
          analytics: 'Tổng hợp',
          home: 'Trang chủ',
          role: 'Phân quyền',
          logout: 'Đăng xuất'
        }
      },
      option: {
        changeLang: 'Thay đổi ngôn ngữ'
      },
      loginPage: {
        login: 'Đăng nhập'
      },
      registerPage: {
        register: 'Tạo mới account'
      }
    }
  },
  en: {
    translation: {
      common: {
        language: {
          vietnamese: 'Vietnamese',
          english: 'English'
        },
        menu: {
          analytics: 'Analytics',
          home: 'Home',
          role: 'Role',
          logout: 'Logout'
        }
      },
      option: {
        changeLang: 'Change Language'
      },
      loginPage: {
        login: 'Login'
      },
      registerPage: {
        register: 'Register'
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
