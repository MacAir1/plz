import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Detail = () => {
  const [metadata, setMetadata] = useState();

  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `https://olbm.mypinata.cloud/ipfs/QmbWPXfq7vwVLPLxSKof4PGBNY1SsEsiVHN9xiRq6pZ3sV/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  useEffect(() => console.log(metadata), [metadata]);

  return (
    <div className="">
      {metadata && (
        <>
          <div className="bg-gradient-to-b from-transparent  to-pink-400 rounded-3xl pt-2 px-4 py-4 flex justify-center">
            <img className="" src={metadata.image} alt={metadata.name} />
          </div>
          <div className="flex justify-center">{metadata.name}</div>
          <div>{metadata.description}</div>
          <ul>
            {metadata.attributes.map((v, i) => {
              return (
                <li className="grid grid-cols-3 gap-20 py-30 flex justify-between mx-auto max-w-screen-xl p-4 font-bold">
                  <div className="col-span-1 bg-slate-500 rounded-3xl p-10 ">
                    {v.trait_type}
                  </div>
                  <div className="bg-blue-300 italic font-bold rounded-3xl p-10">
                    {v.value}
                  </div>
                  <div className="font-extralight">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quibusdam possimus itaque, voluptatibus sunt atque vitae
                    voluptate quasi illo doloribus voluptatem quos similique
                    excepturi tempore molestiae sapiente magnam magni dolorum
                    corrupti?
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Detail;
