import clsx from "clsx";

export enum TransactionType {
  Income,
  Outcome,
}

export type TransactionInfo = {
  name: string;
  timestamp: string;
  type: TransactionType;
  value: number;
};

interface TransactionsProps {
  transactions: TransactionInfo[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  return (
    <div className="bg-[#F9F9F9] rounded-lg p-4 flex gap-4 flex-col">
      <span className="text-xs text-gray-500">Transactions</span>
      <div className="flex flex-col gap-4">
        {transactions.map((transaction) => {
          return (
            <>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{transaction.name}</span>
                  <span className="text-xs text-gray-400">
                    {transaction.timestamp}
                  </span>
                </div>
                <span
                  className={`text-medium font-medium ${
                    transaction.type === TransactionType.Income
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >{`${transaction.type === TransactionType.Income ? "+" : "-"}$${
                  transaction.value
                }`}</span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
