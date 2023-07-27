import styles from "./style.module.scss";
import { Select } from "./Select";
import { Input } from "./Input";
import { useState } from "react";
import { SubmitBtn } from "../../Button";
import { ToastContainer, toast } from "react-toastify";

export const Imputs = ({ addCard }) => {
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [type, setValue] = useState("Entrada");

  const submit = (e) => {
    e.preventDefault();

    {
      !desc
        ? toast.warn("Por favor insira uma descrição para o valor", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : !price
        ? toast.warn("Adicione um valor maior que zero!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : (addCard({ desc, price, type }),
         
          toast.success(" Valor adicionado com sucesso", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })),
        console.log("oi");
    }
  };

  return (
    <>
      <form onSubmit={submit} className={styles.flexbox}>
        <div>
          <Input
            desc="Descrição"
            type="text"
            id="desc"
            placeholder="Digite aqui sua descrição"
            value={desc}
            setValue={setDesc}
          />
          <p className="body">Ex: Compra de roupas</p>
        </div>
        <Input
          desc="Valor (R$)"
          type="number"
          id="valor"
          placeholder="R$"
          value={price}
          setValue={setPrice}
        />
        <Select value={type} setValue={setValue} />
        <SubmitBtn />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </>
  );
};
