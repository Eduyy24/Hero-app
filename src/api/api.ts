
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
              component: 'inputText',
              key: 'email',
              label: 'Correo electrónico',
              rules: {
                required: { value: true, message: 'El campo es obligatorio' },
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Correo inválido' },
              }
            }
          ]
        },
        {
          order: 3,
          key: 'step-3',
          fields: [
            {
              component: 'inputText',
              key: 'adress',
              label: 'Dirección del apartamento'
            }
          ]
        },
        {
          order: 4,
          key: 'step-4',
          fields: [
            {
              component: 'inputText',
              key: 'flat',
              label: 'Numero del piso'
            }
          ]
        },
        {
          order: 5,
          key: 'step-5',
          fields: [
            {
              component: 'inputText',
              key: 'bbq-area',
              label: 'Zona BBQ'
            },
            {
              component: 'inputText',
              key: 'communal-living',
              label: 'Salón comunal'
            },
            {
              component: 'inputText',
              key: 'playground',
              label: 'Parque de juegos'
            }
          ]
        },
        {
          order: 6,
          key: 'step-6',
          fields: [
            {
              component: 'inputText',
              key: 'parking',
              label: 'Tiene parqueadero'
            },
            {
              component: 'inputText',
              key: 'covered',
              label: 'Es cubierto'
            }
          ]
        },
        {
          order: 7,
          key: 'step-7',
          fields: [
            {
              component: 'inputText',
              key: 'amount',
              label: 'Valor del apartamento ($)'
            }
          ]
        },
        {
          order: 8,
          key: 'step-8',
          fields: [
            {
              component: 'inputText',
              key: 'photo',
              label: 'Foto del apartamento'
            }
          ]
        },
        {
          order: 9,
          key: 'step-9',
          fields: [
            {
              component: 'inputText',
              key: 'elevator',
              label: '¿Tiene elevador?'
            }
          ]
        }
      ]
  }
}

export default new Api();
