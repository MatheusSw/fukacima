import Transactions, {
  TransactionInfo,
  TransactionType,
} from "../../components/transactions/transactions";
import { ReactComponent as WalletIcon } from "../../icons/wallet.svg";
import Card from "../../components/card/card";

const Home: React.FC<{}> = () => {
  const transactions: TransactionInfo[] = [
    {
      name: "Credit card",
      timestamp: "14:23",
      type: TransactionType.Income,
      value: 420.32,
    },
    {
      name: "Groceries",
      timestamp: "12:13",
      type: TransactionType.Outcome,
      value: 87.43,
    },
    {
      name: "Arcade",
      timestamp: "08:52",
      type: TransactionType.Outcome,
      value: 420.32,
    },
    {
      name: "Steam",
      timestamp: "06:12",
      type: TransactionType.Income,
      value: 420.32,
    },
  ];

  return (
    <div className="m-10">
      <header className="flex flex-col items-center gap-2">
        <WalletIcon className="w-8" />
        <h1 className="font-semibold text-2xl mb-12">Fukacima</h1>
      </header>
      <div className="flex flex-col gap-10">
        <div className="flex gap-1 flex-col items-center">
          <div className="flex justify-start gap-1">
            <span className="currency text-base font-semibold">$</span>
            <span className="font-bold text-4xl">3,465</span>
            <span className="cents font-semibold text-base">.55</span>
          </div>
          <span className="text-xs font-medium text-gray-400">
            Your balance
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-sm font-semibold">Expenses</span>
            <span className="font-semibold text-sm">$5,300</span>
          </div>
          <div className="bg-gray-200 w-full relative rounded-2xl h-2">
            <div className="bg-green-400 absolute w-1/4 inset-0 rounded-2xl"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 p-2 gap-6">
          <Card title="Income" text="$2,371" />
          <Card title="Expenses" text="$1,243" />
        </div>
        <div>
          <Transactions transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Home;
