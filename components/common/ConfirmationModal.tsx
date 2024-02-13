import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

type PropType = {
  onOpenChange?: () => void;
  isOpen: boolean;
  modalBody: React.ReactElement;
  onCloseHandler?: () => void;
  onClickHandler?: () => void;
  triggerElement: React.ReactElement;
  header: string;
  ctaText: string;
  cancelText: string;
};

const ConfirmationModal = (props: PropType) => {
  const {
    onOpenChange,
    isOpen,
    modalBody,
    onCloseHandler,
    onClickHandler,
    triggerElement,
    header,
    ctaText,
    cancelText,
  } = props;
  return (
    <div>
      {triggerElement}

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="dark"
        radius="sm"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {header}
              </ModalHeader>
              <ModalBody>{modalBody}</ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onCloseHandler}
                  radius="sm"
                  size="sm"
                >
                  {cancelText}
                </Button>
                <Button
                  color="primary"
                  onPress={onClickHandler}
                  radius="sm"
                  size="sm"
                >
                  {ctaText}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

ConfirmationModal.defaultProps = {
  header: "Add a comment",
  ctaText: "Save",
  cancelText: "Close",
};

export default ConfirmationModal;
