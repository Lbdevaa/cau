import { useState, useEffect } from "react";
import './App.css';
import { Modal, ModalContent, ModalFooter } from '@deque/cauldron-react';
import { Button } from "@deque/cauldron-react";
export default function App() {
  return (
    <ModalClear />
  );
}

export const ModalClear = () => {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <>
      <Button variant="secondary" onClick={toggleModal}>Read more</Button>
      {show && <Content onClose={toggleModal} />}
    </>
  );
};

const Content = ({ onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isMounted) return;

    setIsMounted(true);
  }, [isMounted]);

  const closeHandler = () => isMounted && onClose(false);
  return (
    <>
      <Modal heading="Check your email for a unique link" show onClose={closeHandler}>
        <ModalContent>
          The best practices and instructions are exclusively accessible to registered users. You can find your unique link in the registration email.
        </ModalContent>
        <ModalFooter>
          <Button onClick={closeHandler}>Ok</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};


