import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  seletecdGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, seletecdGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => 
        // genre.name == 'Indie'?
        //    <>
        //    test
        //   </>
        //   :
         <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="sm"
              variant="link"
              fontWeight={genre.id === seletecdGenre?.id ? "bold" : 'normal'}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      )}
    </List>
  );
};

export default GenreList;
