import Web3 from "web3";
import Intro from "../components/Intro";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect, useState } from "react";
import Nfts from "../components/Nfts";
import Footer from "../components/Footer";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const Main = ({ account }) => {
  const [totalNft, setTotalNft] = useState(0);
  const [mintedNft, setMintedNft] = useState(0);
  const [myNft, setMyNft] = useState(0);
  const [page, setPage] = useState(1);

  const getTotalNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalNft().call();

      console.log(response);

      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.mintedNft().call();

      console.log(response);

      setMintedNft(response);
      setPage(parseInt((parseInt(response) - 1) / 10) + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const getMyNft = async () => {
    try {
      if (!contract || !account) return;

      const response = await contract.methods.balanceOf(account).call();

      console.log(response);

      setMyNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalNft();
    getMintedNft();
  }, []);

  useEffect(() => {
    getMyNft();
  }, [account]);

  return (
    <div>
      <Intro totalNft={totalNft} mintedNft={mintedNft} myNft={myNft} />
      <Nfts page={page} mintedNft={mintedNft} />
      <Footer />
    </div>
  );
};

export default Main;
