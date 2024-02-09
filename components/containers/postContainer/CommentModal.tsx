"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
} from "@nextui-org/react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";
import { addCommentOnPost } from "@/actions/post";

interface PropType {
  parentId?: number | null;
}

const CommentModal = ({ parentId=null }: PropType) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [value, setValue] = useState("");
  const { execute } = useAction(addCommentOnPost, {
    onSuccess: (_: any, input: any) => {
      onCloseHandler();
    },
    onError: (err) => {
      toast.error(err?.serverError ?? "Something went wrong!");
    },
  });

  const onSaveHandler = async () => {
    if (!value?.length) return;

    await execute({
      body: value,
      parentId: parentId,
    });
  };

  const onCloseHandler = () => {
    setValue("");
    onClose();
  };

  return (
    <>
      <MessageCircle onClick={onOpen} size={20} className="cursor-pointer" />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark" radius="sm">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add a comment
              </ModalHeader>
              <ModalBody>
                <Textarea
                  rows={4}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  radius="sm"
                  placeholder="Add a comment..."
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onCloseHandler} radius="sm" size="sm">
                  Close
                </Button>
                <Button color="primary" onPress={onSaveHandler} radius="sm" size="sm">
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CommentModal;
