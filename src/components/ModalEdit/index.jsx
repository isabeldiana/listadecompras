import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Container } from "./styles";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import api from "../../../services/api";

export default function ModalEdit() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    api.get(`products/78}`).then(({ data }) => {
      setProducts(data);
    });
  }, [handleOpen]);

  return (
    <Container>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <form>
            <AiOutlineCloseCircle onClick={handleClose} />
            <h1>Editar produto {products?.products}</h1>

            <input type="text" placeholder="Produto" />

            <input type="number" placeholder="Quantidade" />
            <button type="submit">Salvar</button>
          </form>
        </Box>
      </Modal>
      <button onClick={handleOpen}>
        <FiEdit size={20} color="blue" />
      </button>
    </Container>
  );
}
