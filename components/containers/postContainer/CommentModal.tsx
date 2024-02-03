"use client";
import React, { useEffect, useState } from "react";
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
import { updateUserData } from "@/actions/user";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";
import { addCommentOnPost } from "@/actions/post";

interface PropType {
  postId: number;
  parentId?: number | null;
}

const CommentModal = ({ postId, parentId=null }: PropType) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [value, setValue] = useState("");
  const { execute } = useAction(addCommentOnPost, {
    onSuccess: (_: any, input: any) => {
      onCloseHandler();
    },
    onError: (err) => {
      console.log(err);

      toast.error(err?.serverError ?? "Something went wrong!");
    },
  });

  const onSaveHandler = async () => {
    if (!value?.length) return;
    console.log(postId);
    console.log(parentId);
    
    await execute({
      body: value,
      postId,
      parentId,
    });
  };

  const onCloseHandler = () => {
    setValue("");
    onClose();
  };

  return (
    <>
      {/* <Button onPress={onOpen} variant="flat" className="w-full">
        Edit Profile
      </Button> */}
      <MessageCircle onClick={onOpen} size={20} className="cursor-pointer" />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark">
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
                <Button color="danger" variant="light" onPress={onCloseHandler}>
                  Close
                </Button>
                <Button color="primary" onPress={onSaveHandler}>
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
