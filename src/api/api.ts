
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
              type: 'string',
              component: 'inputText',
              key: 'name',
              label: 'Nombre y apellidos',
              rules: {
                required: { value: true, message: 'El campo es obligatorio' },
              }
            }
          ]
        },
        {
          order: 2,
          key: 'step-2',
          fields: [
            {
              type: 'string',
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
              type: 'string',
              component: 'inputText',
              key: 'adress',
              label: 'Dirección del apartamento',
              rules: {
                required: { value: true, message: 'El campo es obligatorio' },
              }
            }
          ]
        },
        {
          order: 4,
          key: 'step-4',
          fields: [
            {
              type: 'string',
              component: 'inputText',
              key: 'flat',
              label: 'Numero del piso',
              rules: {
                required: { value: true, message: 'El campo es obligatorio' },
                pattern: { value: /^[0-9]+$/, message: 'Valor inválido' },
                max: { value: 50, message: 'El valor supera el máximo posible' },
              }
            }
          ]
        },
        {
          order: 5,
          key: 'step-5',
          fields: [
            {
              type: 'bool',
              component: 'inputCheckbox',
              key: 'bbq-area',
              label: 'Zona BBQ',
            },
            {
              type: 'bool',
              component: 'inputCheckbox',
              key: 'communal-living',
              label: 'Salón comunal',
            },
            {
              type: 'bool',
              component: 'inputCheckbox',
              key: 'playground',
              label: 'Parque de juegos',
            }
          ]
        },
        {
          order: 6,
          key: 'step-6',
          fields: [
            {
              type: 'string',
              component: 'inputSelect',
              key: 'parking',
              label: 'Tiene parqueadero',
              options: ['SI', 'NO'],
              rules: {
                required: { value: true, message: 'El campo es obligatorio' },
              }
            },
            {
              type: 'string',
              component: 'inputSelect',
              key: 'covered',
              label: 'Es cubierto',
              options: ['SI', 'NO'],
              rules: {
                required: { value: true, message: 'El campo es obligatorio' },
              }
            }
          ]
        },
        {
          order: 7,
          key: 'step-7',
          fields: [
            {
              type: 'money',
              component: 'inputText',
              key: 'amount',
              label: 'Valor del apartamento ($)',
              rules: {
                required: { value: true, message: 'El campo es obligatorio' },
                pattern: { value: /^[0-9]+$/, message: 'Valor inválido' },
              }
            }
          ]
        },
        {
          order: 8,
          key: 'step-8',
          fields: [
            {
              type: 'file',
              component: 'inputFile',
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
              type: 'string',
              component: 'inputSelect',
              key: 'elevator',
              label: '¿Tiene elevador?',
              rules: {
                required: { value: true, message: 'El campo es obligatorio' },
              },
              options: ['SI', 'NO']
            }
          ]
        }
      ]
  }
}

export default new Api();
