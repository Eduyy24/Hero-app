
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
              key: 'name',
              label: 'Nombre y apellidos'
            }
          ]
        },
        {
          order: 2,
          key: 'step-2',
          fields: [
            {
              component: 'inputEmail',
              key: 'email',
              label: 'Correo electrónico'
            }
          ]
        },
        {
          order: 3,
          key: 'step-3',
          fields: [
            {
              component: 'inputText',
              key: 'name',
              label: 'text'
            }
          ]
        }
      ]
  }
}

export default new Api();
