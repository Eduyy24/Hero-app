interface Field {
  component: 'inputText' | 'inputSelect' | 'inputFile';
  key: string;
  label: string;
  rules?: {};
  options?: string[]
}

interface PageData {
  order: number;
  key: string;
  fields: Field[]
}

type EmptyFunction = () => void;
