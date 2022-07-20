interface Field {
  component: 'inputText' | 'inputEmail';
  key: string;
  label: string;
}

interface PageData {
  order: number;
  key: string;
  fields: Field[]
}

type EmptyFunction = () => void;
