interface Field {
  component: 'inputText';
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
