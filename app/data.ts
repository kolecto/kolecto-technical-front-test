export type Invoice = {
    currency: string;
    date: Date;
    dueDate: Date;
    id: number;
    netAmount: number;
    number: string;
    status: string;
    supplierName: string;
    totalAmount: number;
};

const today = new Date();

export const invoices: Invoice[] = [
    {
        currency: "EUR",
        date: today,
        dueDate: today,
        id: 1,
        netAmount: 100,
        number: "FACT-2023-1",
        status: "IMPORTED",
        supplierName: "John Doe",
        totalAmount: 120,
    },
    {
        currency: "USD",
        date: today,
        dueDate: today,
        id: 2,
        netAmount: 100,
        number: "FACT-2023-2",
        status: "IMPORTED",
        supplierName: "Michael Scott",
        totalAmount: 120,
    },
    {
        currency: "EUR",
        date: today,
        dueDate: today,
        id: 3,
        netAmount: 100,
        number: "FACT-2023-3",
        status: "IMPORTED",
        supplierName: "Kolecto",
        totalAmount: 120,
    },
    {
        currency: "EUR",
        date: today,
        dueDate: today,
        id: 4,
        netAmount: 100,
        number: "FACT-2023-4",
        status: "TO_PAY",
        supplierName: "Kolecto",
        totalAmount: 120,
    },
    {
        currency: "EUR",
        date: today,
        dueDate: today,
        id: 5,
        netAmount: 100,
        number: "FACT-2023-5",
        status: "CANCELED",
        supplierName: "John Doe",
        totalAmount: 120,
    },
    {
        currency: "EUR",
        date: today,
        dueDate: today,
        id: 6,
        netAmount: 100,
        number: "FACT-2023-6",
        status: "TO_PAY",
        supplierName: "AWS",
        totalAmount: 120,
    },
    {
        currency: "EUR",
        date: today,
        dueDate: today,
        id: 7,
        netAmount: 100,
        number: "FACT-2023-7",
        status: "TO_PAY",
        supplierName: "Vercel",
        totalAmount: 120,
    },
    {
        currency: "EUR",
        date: today,
        dueDate: today,
        id: 8,
        netAmount: 100,
        number: "FACT-2023-8",
        status: "PAID",
        supplierName: "GitHub",
        totalAmount: 120,
    },
    {
        currency: "EUR",
        date: today,
        dueDate: today,
        id: 9,
        netAmount: 100,
        number: "FACT-2023-9",
        status: "PAID",
        supplierName: "AWS",
        totalAmount: 120,
    },
    {
        currency: "EUR",
        date: today,
        dueDate: today,
        id: 10,
        netAmount: 100,
        number: "FACT-2023-10",
        status: "PAID",
        supplierName: "Kolecto",
        totalAmount: 120,
    },
];
