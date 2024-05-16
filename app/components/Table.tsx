import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Invoice, invoices } from '../data';
import { Amount } from './Amount';
import { Status } from './Status';

type Column = {
  id: keyof Invoice;
  label: string;
  render?: (invoice: Invoice) => React.ReactNode;
};

const COLUMNS: Column[] = [
  { id: 'number', label: 'Numéro' },
  { id: 'supplierName', label: 'Fournisseur' },
  {
    id: 'date',
    label: 'Date de facturation',
    render: (invoice: Invoice) => invoice.date.toLocaleDateString('fr-FR'),
  },
  {
    id: 'dueDate',
    label: "Date d'échéance",
    render: (invoice: Invoice) => invoice.dueDate.toLocaleDateString('fr-FR'),
  },
  {
    id: 'netAmount',
    label: 'Montant HT',
    render: (invoice: Invoice) => <Amount amount={invoice.netAmount} devise={invoice.currency} />,
  },
  {
    id: 'totalAmount',
    label: 'Montant TTC',
    render: (invoice: Invoice) => <Amount amount={invoice.totalAmount} devise={invoice.currency} />,
  },
  {
    id: 'status',
    label: 'Statut',
    render: (invoice: Invoice) => <Status status={invoice.status} />,
  },
];

export const Table = () => {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');

  const renderCell = (invoice: Invoice, column: Column) => {
    if (column.render) {
      return column.render(invoice);
    }

    return invoice[column.id].toString();
  };

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  }, []);

  const handleSearch = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSearch(inputValue);
    },
    [inputValue],
  );

  const filteredInvoices = invoices.filter(invoice => {
    return (
      invoice.number.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      invoice.supplierName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  });

  return (
    <>
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSearch}>
          <input placeholder="Rechercher" onChange={handleChange} type="text" value={inputValue} />
        </form>
        {filteredInvoices.length && (
          <table>
            <thead>
              <tr>
                {COLUMNS.map((column, index) => (
                  <th className="border border-solid border-black" key={index}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice, index) => (
                <tr key={index}>
                  {COLUMNS.map((column, index) => (
                    <td className="border border-solid border-black" key={index}>
                      {renderCell(invoice, column)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {filteredInvoices.length === 0 && <p>There is no data to display</p>}
      </div>
    </>
  );
};
