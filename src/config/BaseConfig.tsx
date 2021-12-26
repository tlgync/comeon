export const BaseConfig = {
  api: {
    release: {
      user: 'http://localhost:3001',
    },
    debug: {
      user: 'http://localhost:3001',
    },
    user: (url: string) => (BaseConfig.api.debug ? BaseConfig.api.debug.user.concat(url) : BaseConfig.api.release.user.concat(url)),
  },
  service: {
    user: {},
  },
  utilities: {
    user: () => (JSON.parse(localStorage.getItem('user') || '')),
    userId: () => (JSON.parse(localStorage.getItem('user') || '').id),
  },
};
