const currencies: Record<string, string> = {
  EUR: '€',
  USD: '$',
};

export const Amount = ({ amount, devise }: { amount: number; devise: string }) => {
  return (
    <span>
      {amount}
      {currencies[devise]}
    </span>
  );
};
