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

interface PropType {
  userBio?: string;
  setBio: (a: string) => void;
}

const EditProfileModal = ({ userBio, setBio }: PropType) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [value, setValue] = useState(userBio ?? "");
  const { execute } = useAction(updateUserData, {
    onSuccess: (_: any, input: any) => {
      setBio(input.bio);
      onCloseHandler();
    },
    onError: (err) => {
      toast.error(err?.serverError ?? "Something went wrong!");
    },
  });

  useEffect(() => {
    setValue(userBio ?? "");
  }, [userBio]);

  const onSaveHandler = async () => {
    await execute({ bio: value ?? "" });
  };

  const onCloseHandler = () => {
    setValue("");
    onClose();
  };

  return (
    <>
      <Button onPress={onOpen} variant="flat" className="w-full" radius="sm">
        Edit Profile
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark" radius="sm">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update Bio
              </ModalHeader>
              <ModalBody>
                <Textarea
                  rows={4}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  radius="sm"
                  placeholder="Write something about yourself"
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

export default EditProfileModal;
