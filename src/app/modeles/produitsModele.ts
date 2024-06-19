export class modele {

    stock?: number;

    constructor(public name: string,
                public imageUrl: string,
                public description: string,
                public prix: number,
                public like: number) {}

    likePlus(): void {
        this.like++;
    }

    likeMoins(): void {
        this.like--;
    }

    setStock(stock: number): void {
        this.stock = stock;
    }
}


    