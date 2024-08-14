import { likesType } from "./like-type.type";

export class modele {

    stock?: number;
    id: string;

    constructor(public name: any,
                public imageUrl: string,
                public description: string,
                public prix: number,
                public like: number) {
    this.id = crypto.randomUUID().substring(0, 9);
     }

    likePlus(): void {
        this.like++;
    }

    likeMoins(): void {
        this.like--;
    }

    setStock(stock: number): void {
        this.stock = stock;
    }

    withStock(stock: number): modele {
        this.setStock(stock);
        return this;
    }

    likes(likesType: likesType) {
        if (likesType === "like") {
            this.likePlus();
        }else if (likesType === "dislike") {
            this.likeMoins();
        }
    }
}


    