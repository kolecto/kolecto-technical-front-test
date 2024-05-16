const statusMap: Record<string, string> = {
  CANCELED: 'Annulée',
  IMPORTED: 'Importée',
  PAID: 'Payée',
  TO_PAY: 'A payer',
};

export const Status = ({ status }: { status: string }) => {
  return status === 'TO_PAY' ? (
    <p className="text-red-500">{statusMap[status]}</p>
  ) : status === 'PAID' ? (
    <p className="text-green-700">{statusMap[status]}</p>
  ) : (
    <p>{statusMap[status]}</p>
  );
};
