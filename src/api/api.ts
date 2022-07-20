
class Api  {
  constructor() {
    console.log('load config')
  }

  async getInitialJson(): Promise<PageData[]> {
      return [
        {
          order: 1,
          key: 'step-1',
        },
        {
          order: 2,
          key: 'step-2',
        },
        {
          order: 3,
          key: 'step-3',
        }
      ]
  }
}

export default new Api();
