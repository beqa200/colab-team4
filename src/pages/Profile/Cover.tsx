import { useRef, useState } from "react";
import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const Cover: React.FC = () => {
  // Define the type for the state that holds the cover image, which is either a string (base64 or URL) or null.
  const [coverImage, setCoverImage] = useState<string | null>(null);

  // Define the ref for the file input as HTMLInputElement or null initially.
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Chakra UI's modal open/close control.
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Function to trigger file input click.
  const openChooseFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // Handle file input change.
  const handleChangeCover = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    const selectedFile = event.target.files?.[0];

    if (selectedFile && ALLOWED_TYPES.includes(selectedFile.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string); // Reader's result is either string or ArrayBuffer
      };
      reader.readAsDataURL(selectedFile);
    } else {
      onOpen(); // Open modal if the file type is unsupported
    }
  };

  return (
    <Box h={60} overflow="hidden" position="relative">
      {/* Display the cover image or a default image */}
      <Image w="full" h="full" objectFit="cover" src={coverImage ? coverImage : "/img/cover.jpg"} alt="Cover" />

      {/* Button to trigger file upload */}
      <Button onClick={openChooseFile} position="absolute" top={4} right={4} variant="ghost">
        <svg width="1.2em" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
          />
        </svg>
        <Text ml={2}>Change Cover</Text>
        {/* Hidden file input for selecting the cover image */}
        <input ref={inputRef} type="file" onChange={handleChangeCover} hidden />
      </Button>

      {/* Modal for unsupported file type */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Something went wrong</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>File not supported!</Text>
            <HStack mt={1}>
              <Text color="brand.cadet" fontSize="sm">
                Supported types:
              </Text>
              <Badge colorScheme="green">PNG</Badge>
              <Badge colorScheme="green">JPG</Badge>
              <Badge colorScheme="green">JPEG</Badge>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Cover;
