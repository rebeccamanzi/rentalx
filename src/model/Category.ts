import { v4 as uuidv4 } from 'uuid';

class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  //chamado quando a classe é instanciada
  constructor() {
    if (!this.id) {
        this.id = uuidv4();
    }
  }
}

export { Category };
