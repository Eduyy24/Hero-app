
class Api  {
  constructor() {
    console.log('load config')
  }

  async getInitialJson(): Promise<PageData[]> {
      return [
        {
          order: 1,
          key: 'step-1',
          fields: [
            {
              component: 'inputText',
              key: 'name'
            }
          ]
        },
        {
          order: 2,
          key: 'step-2',
          fields: [
            {
              component: 'inputEmail',
              key: 'email'
            }
          ]
        },
        {
          order: 3,
          key: 'step-3',
          fields: [
            {
              component: 'inputText',
              key: 'name'
            }
          ]
        }
      ]
  }
}

export default new Api();
