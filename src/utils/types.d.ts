interface Field {
  component: 'inputText' | 'inputSelect';
  key: string;
  label: string;
  rules?: {};
}

interface PageData {
  order: number;
  key: string;
  fields: Field[]
}

type EmptyFunction = () => void;
