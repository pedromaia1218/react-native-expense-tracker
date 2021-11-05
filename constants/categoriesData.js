import { COLORS, icons } from './'

// dummy data
const confirmStatus = "C"
const pendingStatus = "P"

let categoriesData = [
    {
        id: 1,
        name: "Educação",
        icon: icons.education,
        color: COLORS.yellow,
        expenses: [
            {
                id: 1,
                title: "Mensalidade",
                description: "Mensalidade da faculdade",
                location: "Estácio' Mensalidade",
                total: 100.00,
                status: pendingStatus
            },
            {
                id: 2,
                title: "Arduino",
                description: "Arduino para estudos",
                location: "Estácio' Loja de eletrônicos",
                total: 30.00,
                status: pendingStatus
            },
            {
                id: 3,
                title: "Livro de Js",
                description: "Livro de Js",
                location: "Amazon' Online",
                total: 20.00,
                status: confirmStatus
            },
            {
                id: 4,
                title: "Livro de PHP",
                description: "Livro de PHP",
                location: "Amazon' Online",
                total: 20.00,
                status: confirmStatus
            }
        ],
    },
    {
        id: 2,
        name: "Alimentação",
        icon: icons.food,
        color: COLORS.lightBlue,
        expenses: [
            {
                id: 5,
                title: "Vitaminas",
                description: "Vitamina",
                location: "EXTRAfarma' Farmácia",
                total: 25.00,
                status: pendingStatus,
            },

            {
                id: 6,
                title: "Whey protein",
                description: "Proteina",
                location: "Moranguinho' Supermercado",
                total: 50.00,
                status: confirmStatus,
            },

        ],
    },
    {
        id: 3,
        name: "Filhos",
        icon: icons.baby_car,
        color: COLORS.darkgreen,
        expenses: [
            {
                id: 7,
                title: "Brinquedos",
                description: "Brinquedos",
                location: "Amazon' Online",
                total: 25.00,
                status: confirmStatus,
            },
            {
                id: 8,
                title: "Assento de carro",
                description: "De criança",
                location: "Amazon' Online",
                total: 100.00,
                status: pendingStatus,
            },
            {
                id: 9,
                title: "Pampers",
                description: "Pampers",
                location: "EXTRAfarma' Farmácia",
                total: 100.00,
                status: pendingStatus,
            },
            {
                id: 10,
                title: "Blusa",
                description: "Blusa",
                location: "C&A' Loja de roupa",
                total: 20.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 4,
        name: "Beleza e Aparência",
        icon: icons.healthcare,
        color: COLORS.peach,
        expenses: [
            {
                id: 11,
                title: "Produto pra skin care",
                description: "skin care",
                location: "EXTRAfarma' Farmácia",
                total: 10.00,
                status: pendingStatus,
            },
            {
                id: 12,
                title: "Loção",
                description: "Loção",
                location: "EXTRAfarma' Farmácia",
                total: 50.00,
                status: confirmStatus,
            },
            {
                id: 13,
                title: "Mascara facial",
                description: "Mascara facial",
                location: "EXTRAfarma' Farmácia",
                total: 50.00,
                status: pendingStatus,
            },
            {
                id: 14,
                title: "Protetor solar",
                description: "Protetor solar",
                location: "EXTRAfarma' Farmácia",
                total: 50.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 5,
        name: "Esporte",
        icon: icons.sports_icon,
        color: COLORS.purple,
        expenses: [
            {
                id: 15,
                title: "Academia",
                description: "Mensalidade da academia",
                location: "Tauros Fitness' Academia",
                total: 45.00,
                status: pendingStatus,
            },
            {
                id: 16,
                title: "Luvas",
                description: "Luvas para academia",
                location: "Amazon' Online",
                total: 15.00,
                status: confirmStatus,
            },
        ],
    },
    {
        id: 6,
        name: "Roupas",
        icon: icons.cloth_icon,
        color: COLORS.red,
        expenses: [
            {
                id: 17,
                title: "Terno",
                description: "Terno",
                location: "ZARA' Shopping",
                total: 20.00,
                status: pendingStatus,
            },
            {
                id: 18,
                title: "Calça Jeans",
                description: "Azul",
                location: "C&A' Loja de roupa",
                total: 50.00,
                status: confirmStatus,
            },
        ],
    }
]

export default categoriesData