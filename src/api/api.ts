
class Api  {
  constructor() {
    console.log('load config')
  }

  async getInitialJson(): Promise<PageData[]> {
      return [
        {
          order: 1,
          key: 'step1',
        },
        {
          order: 2,
          key: 'step2',
        },
        {
          order: 3,
          key: 'step3',
        }
      ]
  }
}

export default new Api();
