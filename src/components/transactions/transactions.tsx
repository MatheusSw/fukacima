import { ReactComponent as RightArrowIcon } from "../../icons/right-arrow.svg";

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
    <div className="rounded-lg p-6 flex gap-4 flex-col bg-white">
      <div className="flex justify-between items-center">
        <span className="font-bold">Recent transactions</span>
        <span className="text-sm font-medium text-gray-400 cursor-pointer">
          View all
        </span>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        {transactions.map((transaction) => {
          return (
            <>
              <div className="flex justify-between items-center transition-colors duration-300 hover:bg-gray-50 hover:rounded-lg py-4 px-2">
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{transaction.name}</span>
                  <span className="text-xs text-gray-400">
                    {transaction.timestamp}
                  </span>
                </div>
                <div className="flex gap-6">
                  <span
                    className={`text-medium font-medium ${
                      transaction.type === TransactionType.Income
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >{`${
                    transaction.type === TransactionType.Income ? "+" : "-"
                  }$${transaction.value}`}</span>
                  <RightArrowIcon className="w-3 fill-gray-300" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
