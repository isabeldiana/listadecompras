import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Container } from "./styles";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function ModalEdit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <h1>Editar produto</h1>
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
