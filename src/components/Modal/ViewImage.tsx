import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='4xl' isCentered>
      <ModalOverlay />
      <ModalContent
        mx="auto"
        w='auto'
        h='auto'
        maxW={['max-content', '900px']}
        maxH={['max-content', '600px']}
      >
        <ModalBody p='0'>          
          <Image 
            src={imgUrl}
            mx="auto"
            w='auto'
            h='auto'
            maxW={[null, '900px']}
            maxH={[null, '600px']}
          />          
        </ModalBody>

        <ModalFooter bg='pGray.800' h='32px' py='20px' borderRadius='0px 0px 6px 6px'>
          <Link
            href={imgUrl}
            isExternal
            mr='auto'
            fontSize='14px'
            fontWeight='400'
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
