import { Link } from "react-router-dom";

const Header = ({ account, setAccount }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="max-w-screen-xl mx-auto p-4 font-bold">
      <Link to="/">
        <div className="ml-10 absolute bg-slate-500 p-2 rounded-md text-5xl flex justify-center">
          A Guy With Hat
        </div>
      </Link>
      <div className="flex justify-end">
        {account ? (
          <div>
            {account.substring(0, 4)}...{account.substring(account.length - 4)}
          </div>
        ) : (
          <button
            className="p-2 bg-gray-800 rounded-full ml-1 text-white items-end justify-end"
            onClick={onClickAccount}
          >
            Connect
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
