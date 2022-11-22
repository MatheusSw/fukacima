import Transactions, {
  TransactionInfo,
  TransactionType,
} from "../../components/transactions/transactions";

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
      <h1 className="font-semibold text-2xl mb-12 text-gray-800">Fukacima</h1>
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
        <div>
          <Transactions transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Home;
