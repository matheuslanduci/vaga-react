type User = {
  id: string;
  username: string;
  password: string;
  cart: string[];
};

type Users = User[];

type Comment = {
  photo: string;
  name: string;
  rating: number;
  comment: string;
};

type Product = {
  id: string;
  name: string;
  description: string;
  photos: string[];
  price: number;
  label: "Roupas" | "Ferramentas" | "Eletrodomésticos" | "Cozinha";
  comments: Comment[];
};

export type Products = Product[];

export const users: Users = [];

export const products: Products = [
  {
    id: "ec582463-fd85-4957-b224-93ed9302138d",
    name: "Touca De Lã Gorro",
    description:
      "Touca De Lã Gorro Toca Beanie Unissex - Disponível apenas na cor Preta",
    price: 20.0,
    photos: [
      "images-na.ssl-images-amazon.com/images/I/516RQF7UAFL._AC_SX679_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41GYXWCARBL._AC_.jpg"
    ],
    label: "Roupas",
    comments: [
      {
        name: "Gabriela Helena",
        photo:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        rating: 3,
        comment: "Perfeito"
      },
      {
        name: "Ivan K.",
        photo:
          "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=702&q=80",
        rating: 5,
        comment: "Ótimo custo benefício, recomendo."
      }
    ]
  },
  {
    id: "bf0e392f-1e8f-4007-a784-c1eb437aaeaf",
    name: "Camiseta Flame Calvin Klein Masculino",
    description:
      "100% Algodão - Instruções de cuidados: Lavar à mão - Marca: Calvin Klein",
    price: 150.0,
    photos: [
      "https://images-na.ssl-images-amazon.com/images/I/51XniaII45L._AC_SY741_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51nCCLKE3mL._AC_SY741_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/513seXVuWqL._AC_SY741_.jpg"
    ],
    label: "Roupas",
    comments: [
      {
        name: "Gabriel Henud",
        photo:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
        rating: 5,
        comment: "Gostei!!!"
      },
      {
        name: "Ivan K.",
        photo:
          "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=702&q=80",
        rating: 5,
        comment: "Ótimo custo benefício, recomendo."
      }
    ]
  },
  {
    id: "16eb64d1-8e79-439c-80c2-2df988221167",
    name: "Jogo de Ferramentas com 110 Peças Vonder, Caixa Fechada",
    description:
      "Quantidade de peças do jogo de ferramentas: 110 peças - Vonder o maior mix de máquinas, ferramentas e ferragens do Brasil, é bom trabalhar com Vonder - Fabricado pelo Vonder - Ideal para o seu dia a dia",
    price: 460.0,
    photos: [
      "https://images-na.ssl-images-amazon.com/images/I/61-wCuS4fCL._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/618HWj9qKWL._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61Q-eCODnaL._AC_SL1000_.jpg"
    ],
    label: "Ferramentas",
    comments: [
      {
        name: "Juliana",
        photo:
          "https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
        rating: 5,
        comment: "Dei de presente pro meu pai e ele adorou!"
      }
    ]
  },
  {
    id: "2066f56e-d3c3-496f-afb1-c61756be3229",
    name:
      "Tramontina 43409104, Kit Ferramentas 11 Peças Trena Estilete Martelo Alicate Chaves de Fenda e Fixas",
    description:
      "Composição variada que oferece versatilidade na utilização do dia a dia - As ferramentas são produzidas e testadas conforme normas específicas - Marca: Tramontina",
    price: 60.0,
    photos: [
      "https://images-na.ssl-images-amazon.com/images/I/71V4LbulRaL._AC_SL1000_.jpg"
    ],
    label: "Ferramentas",
    comments: [
      {
        name: "Danilo",
        photo:
          "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=664&q=80",
        rating: 2,
        comment:
          "Veio com vários problemas... Inclusive a entrega atrasou! Espero não acontecer mais."
      }
    ]
  },
  {
    id: "a37b040f-c555-4206-b275-342f507976eb",
    name: "Fogão Atlas 4 Bocas",
    description:
      "Fogão Atlas 4 Bocas preto Mônaco Top Glass com Acendimento automático - Bivolt",
    price: 600.0,
    photos: [
      "https://images-na.ssl-images-amazon.com/images/I/51clOvHWWLL._AC_SX466_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51PBTTFVvQL._AC_SX466_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51VKAcWFiVL._AC_SX466_.jpg"
    ],
    label: "Eletrodomésticos",
    comments: []
  },
  {
    id: "4221d638-6dc4-4214-a2a6-84a651a73241",
    name: "Lavadora Turbo Electrolux",
    description:
      "Turbo Lavagem: Garante roupas menos úmidas ao aumentar a velocidade da agitação e centrifugação. É Indicado para a remoção de manchas mais difíceis e para a secagem de peças que não podem ficar muito tempo no varal. Ultra Silenciosa: Ciclo silencioso que não incomoda os vizinhos e mantém a performance na hora da lavagem. *** Comparada com a máquina LT12F em centrifugação.",
    price: 1600.0,
    photos: [
      "https://images-na.ssl-images-amazon.com/images/I/51h0zOSo1JL._AC_SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61Z4Uzm4fRL._AC_SL1000_.jpg"
    ],
    label: "Eletrodomésticos",
    comments: [
      {
        name: "Joelma",
        photo:
          "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=642&q=80",
        rating: 1,
        comment:
          "Veio com vários problemas... Inclusive a entrega atrasou! Espero não acontecer mais."
      },
      {
        name: "Gabriel Henud",
        photo:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
        rating: 5,
        comment: "Gostei!!!"
      },
      {
        name: "Ivan K.",
        photo:
          "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=702&q=80",
        rating: 5,
        comment: "Ótimo custo benefício, recomendo."
      }
    ]
  },
  {
    id: "a37b040f-c555-4206-b275-342f507976eb",
    name: "Espátula de Silicone Reta Pequena",
    description:
      "Essa é a espátula de silicone reta pequena da oikos. Utensílios de silicone para o preparo de alimentos: passam por qualquer superfície sem deixar nenhum arranhão. Silicone duplo: duas camadas de silicone que o deixam muito mais resistente sem perder a suavidade. Superfície lisa: não retém cheiro nem prolifera bactérias. Livre de BPA: não libera substâncias tóxicas na comida.",
    price: 8.0,
    photos: [
      "https://images-na.ssl-images-amazon.com/images/I/41tQ9UFPlxL._AC_SL1120_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61mxqEqaTyL._AC_SL1120_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71TQJnxvCTL._AC_SL1120_.jpg"
    ],
    label: "Cozinha",
    comments: [
      {
        name: "Ivan K.",
        photo:
          "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=702&q=80",
        rating: 5,
        comment: "Ótimo custo benefício, recomendo."
      },
      {
        name: "Rique Star.",
        photo:
          "https://images.unsplash.com/photo-1472066719480-ecc7314ed065?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
        rating: 5,
        comment:
          "Pequena como descrito, mas de boa qualidade! Boa para latas e espaço pequenos."
      }
    ]
  },
  {
    id: "a37b040f-c555-4206-b275-342f507976eb",
    name: "Espátula de Inox Prática para Massas e Legumes,",
    description:
      "Ideal para cortar, separar, raspar e organizar durante o preparo de massas, legumes e confeitaria. Com régua gravada com medidas em centímetros e milímetros para auxiliar as medidas dos cortes. Feita em aço inoxidável, fácil de limpar e resistente. Dimensões: 11,5 cm x 15 cm x 2,5 cm. Deixa a cozinha mais prática",
    price: 18.0,
    photos: [
      "https://images-na.ssl-images-amazon.com/images/I/61LgtnfNMPL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71ofNBTubuL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41elabA9zhL._AC_.jpg"
    ],
    label: "Cozinha",
    comments: []
  }
];
